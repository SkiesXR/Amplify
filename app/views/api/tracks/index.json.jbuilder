@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :title, :length, :artist_id, :album_id
    end
end