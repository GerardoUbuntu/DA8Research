class AddColumnstToResearch < ActiveRecord::Migration[5.0]
  def change
    add_column :researches, :technology, :string
    add_column :researches, :thematic_area, :string
    add_column :researches, :province, :string
    add_column :researches, :municipality, :string
    add_column :researches, :barangay, :string
  end
end
