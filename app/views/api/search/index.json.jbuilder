unless @artists.empty?
    json.partial! 'api/artists/index', artists: @artists
else
    json.artists do
    end
end


unless @albums.empty?
    json.partial! 'api/albums/index', albums: @albums
else
    json.albums do
    end
end