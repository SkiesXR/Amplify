class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all;
    end

    def show 
        @album = Album.find(params[:id])
        @artist = @album.artist_id
        if @album
            @tracks = @album.tracks
            render :show
        else 
            render json: ['Album does not exist.'], status: 422
        end
    end

end

