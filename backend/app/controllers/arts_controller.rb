class ArtsController < ApplicationController

    def index
        render json: Art.all
    end

    def show
        render json: Art.find(params[:id])
    end

    def create
        render json: Art.create(title: params[:title], medium: params[:medium], description: params[:description], image: params[:image], price: params[:price])
    end

    def artmaker
        render json: Art.find(params[:id]).user
    end

end
