@likes.each do |like|
    json.set! like.id do
        json.extract! like, :user_id
        track = Track.find(like.track_id)
        json.track_id track.id
        json.extract! track, :title, :length, :artist_id, :album_id
        track.audio_file.attached? ? (json.audio_file url_for(track.audio_file)) : (json.audio_file "")
        artist = Artist.find(track.artist_id)
        json.artist artist.name
        end
    end