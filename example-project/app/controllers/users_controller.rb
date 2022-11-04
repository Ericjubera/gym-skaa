class UsersController < ApplicationController
    def index
        render json:User.all
    end 
    def show 
        users=User.find(params[:id])
        render json:users
    end 
    def create
    user=User.create!(user_params)
    render json:user
    end 

    
    private
def user_params
    params.permit(:name,:age,:password)
end
end

