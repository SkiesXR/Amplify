@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :description, :user_id
        json.creation_at playlist.created_at
        playlist.playlist_items.count > 0 ? (json.trackCount playlist.playlist_items.count) : (json.trackCount 0)
        json.playlist_tracks do
            playlist.tracks.each do |track|
                json.set! track.id do
                    json.extract! track, :id, :title, :length, :artist_id, :album_id
                    json.artist track.artist.name
                    track.album.album_art.attached? ? (json.album_art url_for(track.album.album_art)) : (json.album_art "")
                        if track.audio_file.attached?
                            json.audio_file url_for(track.audio_file)
                        else
                            json.audio_file ""
                        end
                    end
                end
            end 
        end
    end