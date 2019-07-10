@genres.each do |genre|
    json.set! genre.id do
        json.extract! genre, :category
        if genre.genre_image.attached?
            json.genre_image url_for(genre.genre_image)
        else
            json.genre_image ""
        end
    end
end