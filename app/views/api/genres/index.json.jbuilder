@genres.each do |genre|
    json.set! genre.id do
        json.extract! genre, :category
    end
end