class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :phone_number

      t.boolean :to_be_guide
      t.string :introduce
      t.string :avatar

      t.timestamps
    end
  end
end
