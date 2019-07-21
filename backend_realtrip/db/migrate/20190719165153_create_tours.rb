class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.belongs_to :user
      
      t.string :title
      t.string :detail
      t.string :language
      t.integer :number_of_ppl
      t.float :price
      t.string :location
      t.string :include
      t.string :exclude
      
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end