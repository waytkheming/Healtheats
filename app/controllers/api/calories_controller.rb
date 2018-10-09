class Api::CaloriesController < ApplicationController
  protect_from_forgery :except => ["create"] # TODO: あとで消したい

  def index
    @data = Calorie.all
  end

  def create
    @menu = Calorie.create(menu_params)
    render :index, status: :created
  end

  private

  def menu_params
    params.permit(:amount)
  end
end
