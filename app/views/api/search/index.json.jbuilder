unless @artists.empty?
    json.artists do
        @artists.each do |artist|
            json.extract! artist, :name
            if artist.artist_photo.attached?
                json.artist_photo url_for(artist.artist_photo)
            else
                json.artist_photo ""
            end
        end
    end
end

unless @albums.empty?
    json.albums do
        @albums.each do |album|
            json.extract! album, :title
            if album.album_art.attached?
                json.album_art url_for(album.album_art)
            else
                json.album_art ""
            end
        end
    end
end

unless @shows.empty?
    json.shows do
        @shows.each do |show|
            json.extract! show, :title
            if show.show_photo.attached?
                json.show_photo url_for(show.show_photo)
            else
                json.show_photo ""
            end
        end
    end
end