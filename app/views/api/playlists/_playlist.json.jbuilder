json.set! playlist.id do
    json.extract! playlist, :id, :title, :description, :user_id
    # json.playlist_tracks do 
    #     playlist.tracks.each do |track|
    #         json.set! track.id do
    #             json.extract! track, :title, :length, :artist_id, :album_id
    #         end
    #     end
    # end
end



