@show_episodes.each do |show_episode|
    json.set! show_episode.id do
        json.extract! show_episode, :title, :description, :release_date, :show_id, :length
    end
end