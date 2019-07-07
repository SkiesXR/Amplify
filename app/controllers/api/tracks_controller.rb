class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        if @tracks
            render :index
        else
            render json: @tracks.errors.full_messages, status: 422
        end
    end

end
