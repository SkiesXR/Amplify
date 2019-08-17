class Api::PlaylistItemsController < ApplicationController

def create
    @playlist_item = PlaylistItem.new(playlist_item_params)
    if PlaylistItem.exists?(playlist_id: @playlist_item.playlist_id, track_id: @playlist_item.track_id)
      render json: ["Song already exists in playlist"], status: 401
    else
      @playlist_item.position = @playlist_item.playlist.tracks.length + 1
      @playlist_item.save!
      render json: ["Track has been added to your playlist!"]
    end
end

def destroy
    @playlist_item = PlaylistItem.find(params[:id])
    @playlist_item.delete
    # render `/api/playlists/#{playlist_id}`
    # render json: ["Track removed from playlist!"]
end
    
def playlist_item_params
    params.require(:playlist_item).permit(:playlist_id, :track_id)
end 

end
