class LevelsController < ApplicationController
	def show
		@level = Level.find_by(id: params[:id])
		@coding_language = CodingLanguage.find_by(id: @level.coding_language_id)
	end

	
end
