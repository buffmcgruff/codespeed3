class Level < ApplicationRecord
	has_many :results
	belongs_to :coding_language
end
