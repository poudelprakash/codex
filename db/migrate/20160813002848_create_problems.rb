class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.references :language, index: true, foreign_key: true

      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
