class CreateGyms < ActiveRecord::Migration[7.0]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :size

      t.timestamps
    end
  end
end
