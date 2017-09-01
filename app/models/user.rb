class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  enum role: [:user, :admin]
  after_initialize :set_default_role, :if => :new_record?

   devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :projects, dependent: :destroy
  has_many :researches, through: :projects
  def set_default_role
    self.role ||= :user
  end
  
     class << self
        def per_page
        10
        end
    
        def pages(per_page = self.per_page)
        pages = count / per_page.to_f
        pages += 1 if pages % 1 > 0
        pages.to_i
        end
    
        def paginate(page: 1, per_page: self.per_page)
        page = page.to_i
        per_page = per_page.to_i
    
        offset = (page - 1) * per_page
        limit(per_page).offset(offset)
        end
    end  
end
