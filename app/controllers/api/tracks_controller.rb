class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        if @tracks
            render :index
        else
            render json: @tracks.errors.full_messages, status: 422
        end
    end

    def show
        @track = Track.find(params[:id])
        if @track
            render :show
        else
            render json: ['Track does not exist.'], status: 422
        end
    end

end
