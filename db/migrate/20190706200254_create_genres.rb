class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :category, null: false
      t.timestamps
    end

    add_index :genres, :category, unique: true
  end
end
