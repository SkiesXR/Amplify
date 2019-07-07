class Api::PlaylistsController < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id

        if @playlist.save
            @user = User.find(@playlist.creator_id)
            @playlist_track_ids = @playlist.tracks.map { |track| track.id }
            render :show
        else
            render json: ["Unable to create playlist"], status: 401
        end
    end

    def index
        @playlists = Playlist.all
        if @playlists
            render :index
        else
            render json: @playlists.errors.full_messages, status: 422
        end
    end

    def update
        @playlist = current_user.playlists.find(params[:id])
        
        if @playlist.update(playlist_params)
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist
            render :show
        else
            render json: ['Playlist does not exist.'], status: 422
        end
    end

    def destroy
        @playlist = current_user.playlists.find(params[:id])
        @playlist.destroy
        render :index
    end


    def playlist_params
        params.require(:playlist).permit(:title, :description, :user_id)
    end

end
