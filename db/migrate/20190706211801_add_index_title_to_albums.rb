class AddIndexTitleToAlbums < ActiveRecord::Migration[5.2]
  def change   
  end
  add_index :albums, :title
end
