class CreateResults < ActiveRecord::Migration[5.0]
  def change
    create_table :results do |t|
      t.integer :speed
      t.integer :time
      t.integer :level_id
      t.integer :user_id

      t.timestamps
    end
  end
end
