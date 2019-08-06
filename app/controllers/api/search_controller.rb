class Api::SearchController < ApplicationController

    def index
        input = search_params[:input]

        if input.empty?
            render json: {}
            return
        end

        @artists = Artist.includes(:albums, :tracks).where("lower(name) LIKE (?)", "%#{input}%".downcase).with_attached_artist_photo
        @albums = Album.includes(:artist, :tracks).where("lower(title) LIKE (?)", "%#{input}%".downcase).with_attached_album_art
        render :index
    end

    private
    def search_params
        params.require(:search).permit(:input)
    end

end
