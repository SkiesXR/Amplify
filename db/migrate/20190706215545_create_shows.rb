class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null:false
      t.string :author, null:false
      t.text :description, null:false
      t.string :image_url, null:false
      t.timestamps
    end

    add_index :shows, :title
  end
end
