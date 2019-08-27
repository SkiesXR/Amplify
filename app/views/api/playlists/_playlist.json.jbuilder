
date = playlist.created_at
json.set! playlist.id do
    json.extract! playlist, :id, :title, :description, :user_id
    json.creation_at date
    json.playlist_tracks do
        playlist.tracks.each do |track|
            json.set! track.id do
                debugger
                json.playlist_item_id playlist.playlist_items.find_by(track_id: track.id).id
                json.extract! track, :id, :title, :length, :artist_id, :album_id
                json.artist track.artist.name
                json.album track.album.title

                # include audio file
                if track.audio_file.attached?
                    json.audio_file url_for(track.audio_file)
                else
                    json.audio_file ""
                end

                # include album artwork
                if track.album.album_art.attached?
                    json.album_art url_for(track.album.album_art)
                else
                    json.album_art ""
                end
            end
        end
    end
end




