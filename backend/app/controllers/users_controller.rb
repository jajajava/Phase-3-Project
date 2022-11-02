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

    def destroy
        render json: User.destroy(params[:id])
    end

    def arts
        render json: User.find(params[:id]).arts
    end

    private

    def params_new
        params.permit(:name, :username, :password, :bio)
    end

end
