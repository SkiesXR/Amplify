class AddIdToPlaylistItem < ActiveRecord::Migration[5.2]
  def change
    add_column :playlist_items, :id, :primary_key
  end
end
