class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :research, index: true
      t.belongs_to :researcher, index: true
      t.timestamps
    end
  end
end
