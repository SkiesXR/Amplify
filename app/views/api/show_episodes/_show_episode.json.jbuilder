json.podcast_episode do
    json.extract! show_episode, :title, :description, :release_date, :show_id, :length, :episode_audio
end

