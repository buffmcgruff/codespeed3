class Addimage < ActiveRecord::Migration[5.0]
  def change
  	add_column :coding_languages, :image, :string
  end
end
