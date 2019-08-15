json.track do
    json.extract! track, :title, :length, :artist_id, :album_id

    # attach audio file
    if track.audio_file.attached?
        json.audio_file url_for(track.audio_file)
    else
        json.audio_file ""
    end

    # attach album artwork
    if track.album.album_art.attached?
        json.artwork url_for(track.album.album_art)
    else
        json.artwork ""
    end



end

