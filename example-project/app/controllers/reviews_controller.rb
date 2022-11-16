class ReviewsController < ApplicationController
    def index
        render json: Review.all
    end


     def show
    rev=Review.find(params[:id])
    render json:rev
     end


    def create
        rev=Review.create(rev_params)
        render json:rev
    end
    def update 
        rev=Review.find(params[:id])
        rev.update!(rev_params)
        render json: rev, staus: :accepted
    end 
    def destroy
        rev=Review.find(params[:id])
        rev.destroy()
    end
    private
    def rev_params
        params.permit(:review,:stars,:user_id,:gym_id)
        end
end
