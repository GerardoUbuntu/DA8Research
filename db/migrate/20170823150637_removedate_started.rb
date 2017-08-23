class RemovedateStarted < ActiveRecord::Migration[5.0]
  def change
    remove_column :researches, :date_started
  end
end
