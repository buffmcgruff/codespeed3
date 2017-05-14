class UsersController < ApplicationController


	def index
	end 

	def new
		@code = Level.new
	end


	def create
		input_level = params[:level_name]
		input_code = params[:code]
		input_number = params[:level_number]
		input_codinglanguage_id = params[:coding_language_id]
		@code = Level.create( level_name: input_level, code: input_code, level_number: input_number, 
		coding_language_id: input_codinglanguage_id)
	end

	def contact
		
	end
end
