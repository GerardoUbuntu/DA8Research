class ResearchesController < ApplicationController
  
  def research_params
    params.require(:research).permit(:title, :status, :date_started, :zone, :commodity, :discipline,
            :sector)
  end

  def index 
     @researches = Research.paginate(page: 1)
     @page = 1
     @pages = Research.pages

     
  end

  def paging
    render json: {
      researches: Research.paginate(page: params[:page]),
      page: params[:page],
      pages: Research.pages
    }
  end

  def new
     
     @researcher = Researcher.new
  end

  def create
    current_user
    @research = Research.new(research_params)
    

    @research.save!
    redirect_to researches_path
  end 

  def destroy
     current_user
     @research = Research.find(params[:id])
     @research.destroy
     head :no_content
     flash[:notice] = "Research '#{@research.title}' deleted."
  end 

  def update
     current_user
     @research = Research.find params[:id]
     @research.update_attributes!(research_params)
     flash[:notice] = "#{@research.title} was successfully updated."
     redirect_to research_path
  end

  def edit
     @research = Research.find params[:id]
  end

  def search
      query = params[:query]
      researches = Research.where('title LIKE ? OR sector LIKE ? OR commodity LIKE ?',
                          "%#{query}%", "%#{query}%", "%#{query}%")
      render json: researches  
  end

  def show
     id = params[:id] # retrieve movie ID from URI route
     @research = Research.find(id) # look up movie by unique ID
  end
end
 