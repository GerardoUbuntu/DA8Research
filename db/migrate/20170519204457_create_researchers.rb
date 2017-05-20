class CreateResearchers < ActiveRecord::Migration[5.0]
  def change
    create_table :researchers do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_name
      t.string :employee_no
      t.timestamps
    end
  end
end
