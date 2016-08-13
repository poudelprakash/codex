class LanguagesController < ApplicationController
  def index
    @languages = Language.all
  end

  def show
    @language = Language.find(params[:id])
    @problems = Problem.where(language: @language.id)
  end
end
