class Api::RunRoutesController < ApplicationController


    def create
      @runroute = RunRoute.new(run_route_params)
      @runroute.author_id = current_user.id

      if @runroute.save
        render :show
      else
        render json: @runroute.errors.full_messages, status: 422
      end
    end


    def show
      @runroute = RunRoute.find(params[:id])
      render :show
    end

    def index
      @runroutes = current_user.routes
    end

    def destroy
      @runroute = RunRoute.find(params[:id])

      if @runroute.destroy
        render :show
      else
        render json: @runroute.errors.full_messages, status: 422
      end
    end

    def run_route_params
      params.require(:run_route).permit(:title, :description,
                                        :distance)
    end
end
