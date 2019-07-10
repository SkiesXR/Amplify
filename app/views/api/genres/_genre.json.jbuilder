json.extract! genre, :id, :category
json.artists do
    genre.artists.each_with_index do |artist, idx|
        json.set! (idx + 1) do
            json.extract! artist, :name
        end
    end
end


if genre.genre_image.attached?
    json.genre_image url_for(genre.genre_image)
else
    json.genre_image ""
end