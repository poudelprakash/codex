class Progress < ActiveRecord::Base
  # join table for user and problem
  belongs_to :user
  belongs_to :problem
end
