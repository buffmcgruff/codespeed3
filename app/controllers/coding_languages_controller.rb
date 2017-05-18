class CodingLanguagesController < ApplicationController

	def show
		@language = CodingLanguage.find_by(id: params[:id])
		@coding_language = CodingLanguage.find_by(id: params[:id])
		
	end

	def index
		@languages = CodingLanguage.all
	end

	def create
	end

	def new
		
	end


end
