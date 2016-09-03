class CreateProgresses < ActiveRecord::Migration
  def change
    create_table :progresses do |t|
      t.references :user, index: true, foreign_key: true
      t.references :problem, index: true, foreign_key: true

      t.text :answer
      t.boolean :completed_at

      t.timestamps null: false
    end
  end
end
