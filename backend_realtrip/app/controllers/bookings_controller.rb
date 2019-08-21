class BookingsController < ApplicationController
  before_action :set_booking, only: [:show]
  skip_before_action :authorized, only: [:index]

  def index
    @bookings = Booking.all
    render json: @bookings
  end

  def show
    render json: @booking
  end

  def create
    @booking = Booking.new(new_booking_params)
    user_id = params[:booking][:user_id]
    @user = User.find(user_id)
    if @booking.save
      render json: UserSerializer.new(@user), status: :ok
    else
      render json: {}, status: :unprocessable_entity
    end
  end
  
  private
  def set_booking
    @booking = booking.find(params[:id])
  end

  def new_booking_params
    params.require(:booking).permit(:user_id, :tour_id)
  end

end
