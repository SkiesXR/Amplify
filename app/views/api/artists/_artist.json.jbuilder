json.artist do
    json.extract! artist, :id, :name, :bio, :genre_id, :image_url

    json.albums do
        @artist.albums.each do |album|
            json.set! album.id do
                json.extract! album, :id, :title, :album_type, :artist_id, :image_url
                json.extract! track, :title, :length, :artist_id, :album_id
            end
        end
    end
end

    

