class CreateCodingLanguages < ActiveRecord::Migration[5.0]
  def change
    create_table :coding_languages do |t|
      t.string :language_name

      t.timestamps
    end
  end
end
