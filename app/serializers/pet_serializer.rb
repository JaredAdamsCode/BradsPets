class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :type_of_animal, :description, :image_url, :location, :user_id
end
