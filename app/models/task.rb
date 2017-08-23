class Task < ApplicationRecord
  belongs_to :research
  belongs_to :researcher
end
