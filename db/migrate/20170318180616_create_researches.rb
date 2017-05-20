class CreateResearches < ActiveRecord::Migration[5.0]
  def change
    create_table :researches do |t|
      t.string :title
      t.string :status
      t.datetime :date_started

      t.timestamps
    end
  end
end
