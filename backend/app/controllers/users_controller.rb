class UsersController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: User.all
    end

    def show
        render json: User.find(params[:id])
    end

    def create
        render json: User.create(params_new)
    end

    def update
        render json: User.find(params[:id]).update(params_edit)
    end

    def destroy
        render json: User.destroy(params[:id])
    end

    private

    def params_new
        params.permit(:name, :email, :username, :password)
    end

    def params_edit
        params.permit(:email, :username, :password)
    end

end
