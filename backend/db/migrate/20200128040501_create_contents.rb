class CreateContents < ActiveRecord::Migration[6.0]
  def change
    create_table :contents do |t|
      t.string :url
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
