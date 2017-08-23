class AddColumnToResearchesAbstract < ActiveRecord::Migration[5.0]
  def change
    add_column :researches, :abstract, :text
  end
end
