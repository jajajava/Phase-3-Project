class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    
    def index
        render json: User.all
    end

    def show
        render json: User.find(params[:id])
    end

    def create 
        user = User.create!(params_new)
        @token = encode_token(user_id: user.id)
        render json: { user: UserSerializer.new(user), token: @token}, status: :created
    end

    def me
        render json: current_user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update!(params_edit)
        render json: user, status: :ok
    end
    # Make these separate 

    def destroy
        render json: User.destroy(params[:id])
    end

    private

    def params_new
        params.permit(:name, :email, :username, :password, :bio)
    end

    def params_edit
        params.permit(:email, :username, :password, :bio)
    end

    def handle_invalid_record(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

end
