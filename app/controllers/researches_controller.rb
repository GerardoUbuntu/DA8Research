class ResearchesController < ApplicationController
  
  def research_params
    params.require(:research).permit(:title, :status, :date_started)
  end

  def index
  	 @researches = Research.all
  end

  def new
     render "new"
  end

  def create
  	@research = Research.create!(research_params)
    redirect_to researches_path
  end 

  def destroy
     @research = Research.find(params[:id])
     @research.destroy
     flash[:notice] = "Research '#{@research.title}' deleted."
     redirect_to researches_path
  end 

  def update
     @research = Research.find params[:id]
     @research.update_attributes!(movie_params)
     flash[:notice] = "#{@research.title} was successfully updated."
     redirect_to research_path
  end

  def edit
     @research = Research.find params[:id]
  end

  def show
     id = params[:id] # retrieve movie ID from URI route
     @research = Research.find(id) # look up movie by unique ID
  end
end
 