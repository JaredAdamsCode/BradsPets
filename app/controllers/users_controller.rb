
class UsersController < ApplicationController
  
  # show all users or return status 500 if no users found
  def index
    @users = User.all
    if @users
      render json: UserSerializer.new(@users).serialized_json
    else
      render json: {
        status: 500,
        errors: ['no users found']
      }
    end
  end
  
  # show a single user selected by id. If no user with that id
  # return status 500
  def show
    @user = User.find(params[:id])
    if @user
        render json: UserSerializer.new(@user).serialized_json
    else
      render json: {
        status: 500,
        errors: ['user not found']
      }
    end
  end

  # create a new user. On failure, return status 500
  # creation requires all params specified in user_params
  def create
    @user = User.new(user_params)
    if @user.save
      login!
      PetMailer.welcome_email(@user).deliver_now
      render json: {
        success: true,
        user: {
          id: @user.id,
          username: @user.username,
          email: @user.email
        }
      }
    else 
      render json: {
        success: false,
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  private

  # strong typing for user. These are the params accepted when creating a new user
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end