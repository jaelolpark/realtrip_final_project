class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :profile]

  def index
    @users = User.all
    render json: @users
  end

  def profile
    if @user
      render json: @user.profile_info
    else
      render json: {}, status: :not_found
    end
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(new_user_params)
    if(@user.save)
      render json: { token: 'success', user_id: @user.id }, status: :ok
		else
			render json: { errors: @user.errors.full_messages }
		end
  end
  
  def update
    if @user.update( params[:to_be_guide] ? guide_params : visitor_params )
      render json: {}, status: :ok
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
		end
  end
  
  def delete
    unless @user.nil?
      @user.destroy
      render json: { user: @user }
    else
      render json: { error: "User not Found! "}, status: 404
    end
  end

  private
  def set_user
		@user = User.find(params[:id])
  end

  def new_user_params
    params.require(:user).permit(:to_be_guide, :first_name, :last_name, :email, :password, :phone_number)
  end

  def visitor_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :phone_number)
  end

  def guide_params
    params.require(:user).permit(:to_be_guide, :first_name, :last_name, :email, :password, :phone_number, :introduce, :avatar)
  end
end
