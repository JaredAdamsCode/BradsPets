class PetsController < ApplicationController
  
  def index
    @pets = Pet.all
    if @pets
      render json: PetSerializer.new(@pets).serialized_json
    else
      render json: {
        status: 500,
        errors: ['no pets found']
      }
    end
  end

  def show
    @pet = Pet.find(params[:id])
    if @pet
        render json: PetSerializer.new(@pet).serialized_json
    else
      render json: {
        status: 500,
        errors: ['pet not found']
      }
    end
  end

  def create
    
    if pet_params[:image_url]
      image = Cloudinary::Uploader.upload(pet_params[:image_url])
      pet = Pet.create(type_of_animal: pet_params[:type_of_animal], description: pet_params[:description], 
      image_url: image["url"], location: pet_params[:location], user_id: pet_params[:user_id])
    else
      pet = Pet.create(type_of_animal: pet_params[:type_of_animal], description: pet_params[:description], 
      image_url: "https://res.cloudinary.com/bradspets/image/upload/v1597417421/NoImage_iuk7vi.png", location: pet_params[:location], user_id: pet_params[:user_id])
    end
    
  
    if pet.save
      render json: PetSerializer.new(pet).serialized_json  
    else
      render json: {
        status: 422,
        errors: "failed to create new pet"
      }
    end
  end

  def update
    @pet = Pet.find(params[:id])

    if @pet.update(pet_params)
      render json: {
        message: "pet successfully updated"
      }
    else
      render json: {
        status: 500,
        errors: ['pet was not updated']
      }
    end
  end


  def destroy
    pet = Pet.find(params[:id])
    if pet.destroy
        render json: {
          message: "pet successfully removed"
        }
    else
      render json: {
        status: 500,
        errors: ['pet was not removed']
      }
    end
  end

  def mypets
    @pets = Pet.where(user_id: params[:user_id])
    if @pets
      render json: PetSerializer.new(@pets).serialized_json
    else
      render json: {
        status: 500,
        errors: ['No pets found for this user']
      }
    end

  end

  private

  def pet_params
    params.require(:pet).permit(:type_of_animal, :description, :image_url, :location, :user_id)
  end

end