@shows.each do |show|
    json.set! show.id do
        json.extract! show, :title, :author, :description, :image_url
        if show.show_photo.attached?
            json.show_photo url_for(show.show_photo)
        else
            json.show_photo ""
    end
    end
end