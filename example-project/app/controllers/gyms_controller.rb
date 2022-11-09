class GymsController < ApplicationController
    def index 
        render json:Gym.all 
     end 
     def show
         gyms=Gym.find(params[:id])
         render json:gyms, serializer:GymReviewsSerializer
     end
     def create
         gyms=Gym.create!(gym_params)
         render json: gyms
     end 
     def destroy
         gyms=Gym.find(params[:id])
         gyms.destroy()
     end 
 
     private
     def gym_params
         params.permit(:name,:location,:image,:size)
     end
end
