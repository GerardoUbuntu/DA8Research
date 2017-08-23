class DropresearchersResearches < ActiveRecord::Migration[5.0]
  def change
  	drop_table :researchers_researches
  	
  end
end