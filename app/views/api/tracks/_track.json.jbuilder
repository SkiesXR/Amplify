json.track do
    json.extract! track, :title, :length, :artist_id, :album_id

    if track.audio_file.attached?
        json.audio_file url_for(track.audio_file)
    else
        json.audio_file ""
    end
end

