class CreateLevels < ActiveRecord::Migration[5.0]
  def change
    create_table :levels do |t|
      t.string :level_name
      t.string :code
      t.integer :coding_language_id
      t.integer :level_number

      t.timestamps
    end
  end
end
