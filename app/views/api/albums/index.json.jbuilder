@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :album_type, :artist_id, :image_url
    end
end