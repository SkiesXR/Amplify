class AddGenreIdToArtist < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :genre_id, :integer, null: false
  end
end
