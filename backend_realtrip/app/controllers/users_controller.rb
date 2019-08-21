class UsersController < ApplicationController
  skip_before_action :authorized, only: [ :index, :create ]
  before_action :set_user, only: [ :show ]

  def index
    @users = User.all
    render json: @users
  end

  def profile
    render json: { user: UserSerializer.new(@user) }, status: :ok
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(new_user_params)

    if @user.valid?
      @user.save
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: @user.errors.full_messages , status: :not_acceptable
    end
  end
  
  def update
    # if @user.update( params[:to_be_guide] ? guide_params : visitor_params )
    if @user.update(update_user_params)
      render json: { user: UserSerializer.new(@user) }, status: :ok
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
    params.require(:user).permit(:to_be_guide, :second_language, :first_name, :last_name, :username, :password)
  end

  def update_user_params
    params.require(:user).permit(:to_be_guide, :first_name, :last_name, :username, :password, :introduce, :avatar, :second_language)
  end
  # def visitor_params
  #   params.require(:user).permit(:first_name, :last_name, :username, :password)
  # end

  # def guide_params
  #   params.require(:user).permit(:to_be_guide, :first_name, :last_name, :username, :password, :introduce, :avatar)
  # end
end
