@shows.each do |show|
    json.set! show.id do
        json.extract! show, :title, :author, :description, :image_url
    end
end