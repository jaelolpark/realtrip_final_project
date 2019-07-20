class ReviewsController < ApplicationController
  def index
    render json: Review.all
  end
  
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.destroy(params[:id])
  end

  private
  def review_params
    params.permit(:user_id, :tour_id, :content, :rating)
  end
end
