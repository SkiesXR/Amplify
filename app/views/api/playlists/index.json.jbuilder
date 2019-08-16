@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :user_id
        if playlist.playlist_items.count > 0
            json.trackCount playlist.playlist_items.count
        else
            json.trackCount 0
        end
    end
end