json.album do
    json.extract! album, :id, :title, :album_type, :artist_id, :image_url
end

# json.artist do
#     json.extract! album.artist_id, :id, :name, :genre_id
# end

# json.tracks do
#     @tracks.map do |track|
#         json.partial! 'api/tracks/track', track: track
#     end
# end

