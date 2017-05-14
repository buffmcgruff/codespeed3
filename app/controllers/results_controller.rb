class ResultsController < ApplicationController

	def create
		# Create a new result in the database
		# Redirect to the results#show page with the id of the new result made
		input_level = params[:level_name]
		input_code = params[:code]
		input_number = params[:level_number]
		input_codinglanguage_id = params[:coding_language_id]
		@code = Level.create( level_name: input_level, code: input_code, level_number: input_number, 
		coding_language_id: input_codinglanguage_id)
		redirect_to "/results"
	end

	def show
	end

end
