
json.artist do
    json.extract! artist, :id, :name, :bio, :genre_id, :image_url

    if artist.artist_photo.attached?
        json.artist_photo url_for(artist.artist_photo)
    else
        json.artist_photo ""
    end

    json.albums do
        @artist.albums.each_with_index do |album, idx|
            json.set! album.id do
                json.extract! album, :id, :title, :release_date, :album_type, :artist_id
                if album.album_art.attached?
                    json.album_art url_for(album.album_art)
                else
                    json.album_art ""
                end
                json.tracks do
                    album.tracks.each_with_index do |track, idx|
                        json.set! track.id do
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
                            json.artistId album.artist_id
                        end
                    end
                end
            end
        end
    end
end