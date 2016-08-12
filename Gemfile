source 'https://rubygems.org'
ruby '2.3.1'

# Core Stuff
gem 'rails', '4.2.6'
gem 'puma'

# Database Stuff
gem 'pg' # Postgres

# Auth{entication,orization}
gem 'devise', '~> 3.5'
gem 'pundit'

# Background tasks
gem 'sidekiq', '~> 4.1'

# MISC/will maybe organize better later
gem 'coffee-rails', '~> 4.1.0'
gem 'faker'
gem 'figaro'
gem 'font-awesome-rails'
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'
gem 'lodash-rails'
gem 'sass-rails', '~> 5.0'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'turbolinks'
gem 'uglifier', '>= 1.3.0'

# FrontEnd
gem 'autoprefixer-rails'

gem 'rubocop', '~> 0.41.2', require: false
gem 'sdoc', '~> 0.4.0', group: :doc

group :production do
  gem 'rails_12factor'
end

group :development do
  gem 'spring'
  gem 'web-console', '~> 2.0'
end

group :test do
  gem 'shoulda-matchers', '~> 3.1' # it { should(:have_shoulda) }
  gem 'simplecov' # Local coverage
end

group :development, :test do
  gem 'byebug'

  # Guard notices filesystem changes and *does things*
  gem 'guard'
  gem 'guard-rspec', require: false # Running specs

  # Foreman
  gem 'foreman' # Start processes

  gem 'database_cleaner' # Clean the database fully before doing anything
  gem 'factory_girl_rails' # Factories > Fixtures
  gem 'pry-rails' # Better Console
  gem 'rails_db' # Visuals for Database
  gem 'rspec-rails', '~>3.0' # Specs > Tests

end
