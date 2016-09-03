class ProgressesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # response = JSON.parse(request.body.string)
    @progress = Progress.new(progress_params)
    @progress.save
    
    redirect_to languages_path
  end

  private

  def progress_params
    params.require(:progress).permit(:user_id, :problem_id, :answer, :completed_at)
  end
end
