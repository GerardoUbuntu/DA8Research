class AddColumnToResearches < ActiveRecord::Migration[5.0]
  def change
    add_column :researches, :date_started, :date
  end
end
