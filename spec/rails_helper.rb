ENV['RAILS_ENV'] ||= 'test'
require_relative './support/coverage'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
# Rails is now loaded

# Require supporting ruby files in spec/support
# Do not end their names in _spec, or it'll bug out
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# Checks for pending migration and applies them before tests are run.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Run each example in a transaction
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # Run each example in a transaction
  config.use_transactional_fixtures = true

  # Figure out :type attributes from directory names
  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")
end
