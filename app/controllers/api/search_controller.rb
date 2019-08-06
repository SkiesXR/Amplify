class Api::SearchController < ApplicationController

def index
        input = search_params[:input]

        if input.empty?
            render json: {}
            return
        end

        @artists = Artist.includes(:albums, :tracks).where("lower(name) LIKE (?)", "%#{input}%".downcase).with_attached_artist_photo
        @albums = Album.includes(:artist, :tracks).where("lower(title) LIKE (?)", "%#{input}%".downcase).with_attached_album_art
        @shows = Show.where("lower(title) LIKE (?)", "%#{input}%".downcase).with_attached_show_photo
        @genres = Genre.where("lower(category) LIKE (?)", "%#{input}%".downcase).with_attached_genre_image
        render :index
    end

    private
    def search_params
        params.permit(:input)
    end

end
