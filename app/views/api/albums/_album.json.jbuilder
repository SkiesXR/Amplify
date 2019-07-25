json.album do
    json.extract! album, :id, :title, :album_type, :artist_id, :image_url
    json.artist_name album.artist.name

    if album.album_art.attached?
        json.album_art url_for(album.album_art)
    else
        json.album_art ""
    end

    json.tracks do
        album.tracks.each_with_index do |track, idx|
            json.set! (idx+1) do
                json.extract! track, :title, :length, :artist_id, :album_id
                if track.audio_file.attached?
                    json.audio_file url_for(track.audio_file)
                else
                    json.audio_file ""
                end
            end
        end
    end
end

#     json.tracks do
#         album.tracks.each do |track|
#             json.set! track.id do
#                 json.extract! track, :title, :length, :artist_id, :album_id
#                 if track.audio_file.attached?
#                     json.audio_file url_for(track.audio_file)
#                 else
#                     json.audio_file ""
#                 end
#             end
#         end
#     end
# end



















