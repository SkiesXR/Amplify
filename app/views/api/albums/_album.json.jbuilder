json.album do
    json.extract! album, :id, :title, :album_type, :artist_id, :image_url
    json.artist_name album.artist.name

    json.tracks do 
        album.tracks.each do |track|
            json.set! track.id do
                json.extract! track, :title, :length, :artist_id, :album_id
            end
        end
    end

    if album.album_art.attached?
        json.album_art url_for(album.album_art)
    else
        json.album_art ""
    end
end






