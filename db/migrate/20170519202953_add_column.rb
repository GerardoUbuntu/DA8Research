class AddColumn < ActiveRecord::Migration[5.0]
  def change
  	add_column :researches, :fund_source, :string
  	add_column :researches,:zone, :string
  	add_column :researches,:commodity, :string
  	add_column :researches,:discipline,  :string
  	add_column :researches,:sector, :string
  end
end
