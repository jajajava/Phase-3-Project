class ArtsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Art.all
    end

    def show
        render json: Art.find(params[:id])
    end

    def create
        art = Art.create(params_new)
        if art.valid?
            render json: art, status: :created
        else
            render json: render_unprocessable_entity
        end
    end

    def destroy
        render json: Art.destroy(params[:id])
    end

    private

    def params_new
        params.permit(:title, :medium, :description, :image, :tags, :price, :user_id)
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end





