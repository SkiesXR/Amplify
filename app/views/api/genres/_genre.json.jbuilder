json.extract! genre, :id, :category
if genre.genre_image.attached?
        json.genre_image url_for(genre.genre_image)
    else
        json.genre_image ""
    end