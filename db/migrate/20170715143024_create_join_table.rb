class CreateJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :researchers, :researches do |t|
      t.index [:researcher_id, :research_id]
      t.index [:research_id, :researcher_id]
    end
  end
end
