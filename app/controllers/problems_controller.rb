class ProblemsController < ApplicationController
  before_action :authenticate_user!

  def show
    @problem = Problem.find(params[:id])

    gon.problem = @problem.as_json
    gon.language = @problem.language.name.downcase
  end
end
