class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :admin_only, :except => :show
    
    def index 
        @user = current_user
        @users = User.where.not(id: @user.id).paginate(page: 1)
        @page = 1
        @pages = User.pages
    end
    
    def search
       render json: {
          researches: User.paginate(page: params[:page]),
          page: params[:page],
          pages: User.pages
       }
    end

    def paging
        render json: {
          researches: User.paginate(page: params[:page]),
          page: params[:page],
          pages: User.pages
       }    
    end

    def create
      user = User.new(user_params)
      if user.save
        render json: user
      else
        render head: true, status: :bad_request
      end
    end 

    def user_params
        params.require(:user).permit(:role, :email, :password, :password_confirmation)
    end
    
    def show
      @user = User.find(params[:id])
      unless current_user.admin?
        unless @user == current_user
          redirect_to root_path, :alert => "Access denied."
        end
      end
    end

  def update
      @user = User.find params[:id]
      if @user.update_attributes(user_params)
        render json: @user
      else
        render nothing: true, status: :unprocessable_entity
      end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path, :notice => "User deleted."
  end

  private

  def admin_only
    unless current_user.admin?
      redirect_to root_path, :alert => "Access denied."
    end
  end

  def secure_params
    params.require(:user).permit(:role)
  end

end
