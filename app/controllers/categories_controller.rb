class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy, :add_to_menu]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category, include: :items
  end

  # POST /categories
  def create
    @category = Category.new(category_params)
    # @category.menu = @menu

    if @category.save
      render json: @category, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  def add_to_menu
    @menu = Menu.find(params[:menu_id])
    @menu.categories << @category

    render json: @menu, include: :categories    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name, :menu_id)
    end
end
