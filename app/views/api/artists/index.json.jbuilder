@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :name
        if artist.artist_photo.attached?
            json.artist_photo url_for(artist.artist_photo)
        else
            json.artist_photo ""
        end
    end
end