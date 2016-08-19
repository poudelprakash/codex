class ProblemsController < ApplicationController
  def show
    @problem = Problem.find(params[:id])
    gon.problem = @problem.as_json
  end
end
