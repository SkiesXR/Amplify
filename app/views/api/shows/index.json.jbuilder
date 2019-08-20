@shows.each do |show|
    json.set! show.id do
        json.extract! show, :id, :title, :author, :description, :image_url
        show.show_photo.attached? ? (json.show_photo url_for(show.show_photo)) : (json.show_photo "")
        json.episodes do
            show.show_episodes.each do |episode|
                json.set! episode.id do
                    json.extract! episode, :title, :description, :release_date, :show_id, :length
                    show.show_photo.attached? ? (json.album_art url_for(show.show_photo)) : (json.album_art "")
                    json.audio_file episode.episode_audio
                    json.artist show.author
                end
            end
        end
    end
end