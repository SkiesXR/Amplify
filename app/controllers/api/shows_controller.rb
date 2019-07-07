class Api::ShowsController < ApplicationController

    def index
        @shows = Show.all
        if @shows
            render :index
        else
            render json: @shows.errors.full_messages, status: 422
        end
    end

    def show
        @show = Show.find(params[:id])
        if @show
            render :show
        else
            render json: ['Podcast does not exist.'], status: 422
        end
    end

end
