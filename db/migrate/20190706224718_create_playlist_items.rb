class CreatePlaylistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_items, id: false do |t|
      t.integer :playlist_id, null:false
      t.integer :track_id, null:false
      t.integer :position, null:false
      t.timestamps
    end
  end
end
