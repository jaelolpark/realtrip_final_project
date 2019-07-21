class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: [:show, :update, :profile]

  def index
    @users = User.all
    render json: @users
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def show
    render json: @user
  end

  def create
    @user = User.create(new_user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
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
    params.require(:user).permit(:to_be_guide, :first_name, :last_name, :username, :password, :password_confirmation, :phone_number)
  end

  def visitor_params
    params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :phone_number)
  end

  def guide_params
    params.require(:user).permit(:to_be_guide, :first_name, :last_name, :username, :password, :password_confirmation, :phone_number, :introduce, :avatar)
  end
end
