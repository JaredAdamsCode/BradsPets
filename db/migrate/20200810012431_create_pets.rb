class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :type_of_animal
      t.string :description
      t.string :image_url, default: "https://res.cloudinary.com/bradspets/image/upload/v1597417421/NoImage_iuk7vi.png"
      t.string :location
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
