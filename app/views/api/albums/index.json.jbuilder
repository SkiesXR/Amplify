@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :album_type, :artist_id, :image_url
        json.artist album.artist.name
        if album.album_art.attached?
            json.album_art url_for(album.album_art)
        else
            json.album_art ""
        end
    end
end