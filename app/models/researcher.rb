class Researcher < ApplicationRecord
	has_many :tasks
    has_many :researches, through: :tasks
	validates :first_name,  presence: true
	validates :middle_name,  presence: true
	validates :last_name,  presence: true
	validates :employee_no, presence: true, uniqueness: true

end
