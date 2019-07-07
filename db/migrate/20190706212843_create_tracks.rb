class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :length, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null:false
      t.timestamps
    end
    add_index :tracks, :title
  end
end
