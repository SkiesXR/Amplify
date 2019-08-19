@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :user_id
        playlist.playlist_items.count > 0 ? (json.trackCount playlist.playlist_items.count) : (json.trackCount 0)
        json.playlist_tracks do
            playlist.tracks.each do |track|
                json.set! track.id do
                    json.extract! track, :id
                    track.album.album_art.attached? ? (json.album_art url_for(track.album.album_art)) : (json.album_art "")
                    # if track.album.album_art.attached?
                    #     json.album_art url_for(track.album.album_art)
                    # else
                    #     json.album_art ""
                    # end
                end
            end 
        end
    end
end