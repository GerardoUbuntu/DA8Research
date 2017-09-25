class ResearchesController < ApplicationController
  
  def research_params
    params.require(:research).permit(:title, :status, :date_started, :zone, :commodity, :discipline,
            :sector, :abstract, :fund_source, :technology)
  end

  def index 
     if params.has_key?(:status)
        @researches = Research.where('status = ? AND sector = ? AND commodity = ? AND discipline = ? ' ,
                            "#{params[:status]}", "#{params[:sector]}", "#{params[:commodity]}",
                            "#{params[:discipline]}").paginate(page: 1).as_json
        if(@researches.count>0)
           @page = 1
           @pages = Research.pages  
        end 
        @sectors = Research.sectors
        @commodities = Research.commodities
        @technologies = Research.technologies
        @disciplines = Research.disciplines
        @sources = Research.sources 
     else
        @researches = Research.paginate(page: 1).as_json
        @page = 1
        @pages = Research.pages   
        @sectors = Research.sectors
        @commodities = Research.commodities
        @technologies = Research.technologies
        @disciplines = Research.disciplines
        @sources = Research.sources
     end
  end

  def paging
    if(params[:sort_by])
      render json: {
        researches: Research.paginate(page: params[:page]).order(params[:sort_by] + ' ' + params[:order]).as_json,
        page: params[:page],
        pages: Research.pages
      }
    else
      render json: {
        researches: Research.paginate(page: params[:page]).as_json,
        page: params[:page],
        pages: Research.pages
      }
    end
  end

  def new
     @users = User.all
     @researcher = Researcher.new
     @sectors = Research.sectors
     @commodities = Research.commodities
     @technologies = Research.technologies
     @disciplines = Research.disciplines
     @sources = Research.sources
  end

  def create
    current_user
    @research = Research.new(research_params)
    

    @research.save!
    params[:research][:users].each do |email|
         @research.users << User.find_by(email: email)
    end
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
     @research.users.delete_all
     params[:research][:users].each do |email|
        @research.users << User.find_by(email: email)
     end
     flash[:notice] = "#{@research.title} was successfully updated."
     redirect_to research_path
  end

  def edit
     @research = Research.find(params[:id])
     @researchJson = @research.as_json
     @users = User.all
     @sectors = Research.sectors
    @commodities = Research.commodities
     @technologies = Research.technologies
     @disciplines = Research.disciplines
     @sources = Research.sources   
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
 