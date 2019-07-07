@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :title, :description, :user_id
    end
end