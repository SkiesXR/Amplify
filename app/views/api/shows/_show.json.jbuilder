# json.set! show.id do
    json.extract! show, :id, :title, :author, :description, :image_url
    if show.show_photo.attached?
        json.show_photo url_for(show.show_photo)
    else
        json.show_photo ""
    end

    json.episodes do
        show.show_episodes.each do |episode|
            json.set! episode.id
                json.extract! episode, :id, :title, :description, :release_date, :show_id, :length
                json.audio_file episode.episode_audio
            end
        end

