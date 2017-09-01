class Research < ApplicationRecord
   has_many :projects,  dependent: :destroy 
   has_many :users, through: :projects
    

    def as_json(options={})
        super(:include =>[:users])
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

     def sectors
         ["Crops","Livestock","Fisheries","Fruits","Engineering","Farming System","Fruit Crops","Socio-Economics",
         "Women's in Agriculture","Poultry","Farm Resources","Post Production","Crop/Livestock","Development","Crop/Fish",
         "Soil and Water Resources","Grains","Rootcrops","Community-based Participatory Action Research (CPAR)",
         "Environmental & Natural Resources","Climate Change","Plantation Crops","Indigenous Plants"
         ]
     end 

     def sources
        ["DA-BAR","DA-PhilRice","Private Sector","Government grants","Donation","Others","DA",
          "DA-LDC","DA-CIRDUP","WESAMAR","DOST","AAPP","SPC","ESPDP","ASSP","DA-ATI","DA-F101","BPI","FSDP","BPI-ESPDP"
        ]
     end

     def technology
        ["Basic research","Applied research","Technology Verification","Technology Adaptation","Technology Generation",
        "Technology Dissemination","Information Dissemination","Information Generation","Technology Transfer",
        "Information Verification","Technology for Piloting","Potential Technology"
        ]
     end

     def disciplines
        ["Biotechnology/Micropropagation","Plant Physiology","Varietal Improvement","Socio-economics",
        "Production & Management","Stock Improvement","Irrigation","Crop Production","Participatory Research","Animal Health",
        "Cultural Management","Processing","Pest Management","Post Harvest","Animal Breeding","Animal Health & Disease Control",
        "Extension","Environmental & Natural Resources"
        ]
     end

     def thematic_areas
        ["Poverty Alleviation","Food Security","Global Competitiveness","Climate Change","Sustainable Resource Use & Development"]
     end 
     
    
end
