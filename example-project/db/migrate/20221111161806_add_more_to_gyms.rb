class AddMoreToGyms < ActiveRecord::Migration[7.0]
  def change
    add_column :gyms, :open, :string
    add_column :gyms, :closed, :string
  end
end
