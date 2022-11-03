class ArtsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Art.all
    end

    def show
        render json: Art.find(params[:id])
    end

    def create
        render json: Art.create(params_new)
    end

    def destroy
        render json: Art.destroy(params[:id])
    end

    def artmaker
        render json: Art.find(params[:id]).user
    end

    private

    def params_new
        params.permit(:title, :medium, :description, :image, :tags, :price, :user_id)
    end

end





