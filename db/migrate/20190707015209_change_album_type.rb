class ChangeAlbumType < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :type, :album_type
  end
end
