unless @artists.empty?
    json.artists do
        json.array! @artists.each do |artist|
            json.extract! artist, :id, :name
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
        json.array! @albums.each do |album|
            json.extract! album, :id, :title
            if album.album_art.attached?
                json.album_art url_for(album.album_art)
            else
                json.album_art ""
            end

            json.tracks do
                album.tracks.each_with_index do |track, idx|
                    json.set! (idx+1) do
                        json.extract! track, :id, :title, :length, :artist_id, :album_id
                        json.artist track.artist.name

                        # attach audio file
                        if track.audio_file.attached?
                            json.audio_file url_for(track.audio_file)
                        else
                            json.audio_file ""
                        end

                        # attach album artwork
                        if album.album_art.attached?
                            json.album_art url_for(album.album_art)
                        else
                            json.album_art ""
                        end
                    end
                end
            end
        end
    end
end

unless @genres.empty?
    json.genres do
        json.array! @genres.each do |genre|
            json.extract! genre, :id, :category
            if genre.genre_image.attached?
                json.genre_image url_for(genre.genre_image)
            else
                json.genre_image ""
            end
        end
    end
end

unless @shows.empty?
    json.shows do
        json.array! @shows.each do |show|
            json.extract! show, :id, :title
            if show.show_photo.attached?
                json.show_photo url_for(show.show_photo)
            else
                json.show_photo ""
            end
            json.episodes do
                json.array! show.show_episodes.each do |episode|
                    json.extract! episode, :id, :title, :length
                    json.audio_file episode.episode_audio
                    show.show_photo.attached? ? (json.album_art url_for(show.show_photo)) : (json.album_art "")
                    json.artist show.author
                end
            end
        end
    end
end