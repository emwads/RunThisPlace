class Api::RunRoutesController < ApplicationController


    def create
      @run_route = RunRoute.new(run_route_params)
      if @run_route.save
        render :show
      else
        render json: @run_route.errors.full_messages, status: 422
      end
    end


    def show
      @run_route = RunRoute.find(params[:id])
      render :show
    end

    def index
      @run_routes = current_user.routes.order(:title)
    end

    def destroy
      @run_route = RunRoute.find(params[:id])

      if @run_route.destroy
        render :show
      else
        render json: @run_route.errors.full_messages, status: 422
      end
    end

    def run_route_params
      params.require(:run_route).permit(:author_id, :title, :description,
                                        :distance)
    end
end
