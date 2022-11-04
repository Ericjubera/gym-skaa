class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :gym_id
      t.string :review
      t.integer :stars

      t.timestamps
    end
  end
end
