class LevelsController < ApplicationController
	def show
		# @level = Level.find_by(id: params[:id])
		# @coding_language = CodingLanguage.find_by(id: @level.coding_language_id)
		# @next_level_id = @level.id + 1
		# <a href="/levels/<%=@next_page_id%>">next Level</a>

		# 1. Find which coding language, and the id of the coding_language in the database
		# We compare by downcasing both, to account for capitlization differences
		@coding_language = CodingLanguage.find_by('lower(language_name) = ?', params[:language_name].downcase)
		input_level_number = params[:level_number]

		# 2. Find the level in the levels table that matches:
		# a) coding language id
		# b) level number
		@level = Level.where(coding_language_id: @coding_language.id, level_number: input_level_number).first
	end

	
	
end
