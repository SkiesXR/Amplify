json.album do
    json.extract! album, :id, :title, :album_type, :artist_id, :image_url
    json.artist_name @album.artist.name
    json.tracks do 
        @album.tracks.each do |track|
            json.set! track.id do
                json.partial! 'api/tracks/track', track: track
            end
        end
    end
end
