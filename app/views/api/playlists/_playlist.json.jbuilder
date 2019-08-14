json.set! playlist.id do
    json.extract! playlist, :id, :title, :description, :user_id
    json.playlist_tracks do 
        playlist.tracks.each do |track|
            json.set! track.id do
                json.extract! track, :title, :length, :artist_id, :album_id
                if track.audio_file.attached?
                    json.audio_file url_for(track.audio_file)
                else
                    json.audio_file ""
                end
            end
        end
    end
end



