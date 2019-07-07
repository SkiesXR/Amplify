class CreateShowEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :show_episodes do |t|
      t.string :title, null:false
      t.text :description, null:false
      t.date :release_date, null:false
      t.integer :show_id, null:false
      t.string :length, null:false
      t.timestamps
    end
    add_index :show_episodes, [:title, :show_id], unique: true
  end
end
