class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.references :guide, index: true
      
      t.string :title
      t.string :details
      t.string :second_language
      t.integer :number_of_ppl
      t.float :price
      t.string :location
      t.string :include
      t.string :exclude
      
      t.string :image_url
      t.string :image

      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
