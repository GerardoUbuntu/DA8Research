class ResearchersController < ApplicationController
  
  def researcher_params
    params.require(:research).permit(:first_name, :middle_name, :last_name, :employee_no)
  end

  def index
  	 @researchers = Researcher.all
  end

  def new
     render "new"
  end

  def create
  	@researcher = Researcher.create!(research_params)
    redirect_to researches_path
  end 

  def destroy
     @researcher = Researcher.find(params[:id])
     @researcher.destroy
     flash[:notice] = "Researcher '#{@research.first_name}' deleted."
     redirect_to researches_path
  end 

  def update
     @researcher = Researcher.find params[:id]
     @researcher.update_attributes!(researcher_params)
     flash[:notice] = "#{@research.first_name} was successfully updated."
     redirect_to research_path
  end

  def edit
     @researcher = Researcher.find params[:id]
  end

  def show
     id = params[:id] # retrieve movie ID from URI route
     @researcher = Researcher.find(id) # look up movie by unique ID
  end

end
