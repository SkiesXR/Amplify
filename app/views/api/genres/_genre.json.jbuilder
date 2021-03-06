json.extract! genre, :id, :category
json.artists do
    genre.artists.each_with_index do |artist, idx|
        json.set! artist.id do
            json.extract! artist, :id, :name
            if artist.artist_photo.attached?
                json.artist_photo url_for(artist.artist_photo)
            else
                json.artist_photo ""
            end
        end
    end
end


if genre.genre_image.attached?
    json.genre_image url_for(genre.genre_image)
else
    json.genre_image ""
end