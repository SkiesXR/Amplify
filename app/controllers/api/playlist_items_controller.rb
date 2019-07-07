class Api::PlaylistItemsController < ApplicationController

def create
    @playlist_item = PlaylistItem.new(playlist_item_params)
    if @playlist_item.save
      render json: ["Track has been added to your playlist!"]
    else
      render json: @playlist_item.errors.full_messages, status: 401
    end
end

def destroy
    @playlist_item = PlaylistItem.find(params[:id])
    @playlist_item.delete
    render `/api/playlists/#{playlist_id}`
end

def playlist_item_params
    params.require(:playlist_items).permit(:playlist_id, :track_id)
end 

end
