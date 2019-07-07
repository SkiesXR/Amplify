class AddAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :title, :string, null: false
    add_column :albums, :type, :string, null: false
    add_column :albums, :artist_id, :integer, null: false
    add_column :albums, :release_date, :date, null: false
    add_column :albums, :image_url, :string, null: false
  end
end
