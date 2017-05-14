class CodingLanguagesController < ApplicationController

	def show
		@language = CodingLanguage.find_by(id: params[:id])
	end

	def index
	end

	def create
	end

	def new
		
	end


end
