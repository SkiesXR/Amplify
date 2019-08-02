
json.artist do
    json.extract! artist, :id, :name, :bio, :genre_id, :image_url

    if artist.artist_photo.attached?
        json.artist_photo url_for(artist.artist_photo)
    else
        json.artist_photo ""
    end

    json.albums do
        @artist.albums.each_with_index do |album, idx|
            json.set! (idx + 1) do
                json.extract! album, :id, :title, :release_date, :album_type, :artist_id
                if album.album_art.attached?
                    json.album_art url_for(album.album_art)
                else
                    json.album_art ""
                end
            end
        end
    end

    # json.tracks do
    #     @artist.tracks.each_with_index do |track, idx|
    #         json.set! (idx + 1) do
    #             json.extract! track, :title, :length, :artist_id, :album_id
    #             if track.audio_file.attached?
    #                 json.audio_file url_for(track.audio_file)
    #             else
    #                 json.audio_file ""
    #             end
    #         end
    #     end
    # end
end