class ToursController < ApplicationController
  before_action :set_tour, only: [:show]
  skip_before_action :authorized, only: [:index, :show]

  def index
    render json: Tour.all
  end

  def show
    render json: @tour
  end

  def create
    @tour = Tour.new(tour_params)
    @tour.guide = @user

    if @tour.save
      render json: { user: UserSerializer.new(@user)}, status: :created
    else
      render json: {errors: @tour.errors.full_message}, status: :unprocessable_entity
    end
  end

  def destroy
    unless @tour.nil?
      @tour.destroy
      render json: @tour
    else
      render json: { error: "tour not Found!" }, status: 404
    end
  end

  def update
    if @tour.update(tour_params)
      render json: @tour, status: :updated
    else  
      render json: @tour.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def set_tour
		@tour = Tour.find(params[:id])
	end

  def tour_params
		params.require(:tour).permit(:title, :details, :second_language, :number_of_ppl, :price, :location, :include, :exclude, :guide_id, :start_date, :end_date, :image_url, :image)
	end
end