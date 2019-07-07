json.artist do
    json.extract! artist, :id, :name, :bio, :genre_id, :image_url


    json.albums do
        @artist.albums.each do |album|
            json.set! album.id do
                json.partial! 'api/albums/album', album: album
            end
        end
    end

    json.tracks do
        @artist.tracks.each do |track|
            json.set! track.id do
                json.partial! 'api/tracks/track', track: track           
             end
        end
    end
end

    

