User.create!(
  email: 'daniel@rassiner.com',
  password: 'fakefake',
  password_confirmation: 'fakefake'
)

Language.create!(
  name: 'Ruby'
)
Language.create!(
  name: 'Javascript'
)
language = Language.first

4.times do |i|
  Problem.create!(
    language: language,
    name: "Fizzbuzz part#{i}",
    description: 'This will be markdown code'
  )
end

# Output
# For output, just add class that you seeded to the models Array
models = [User]

models.each do |model|
  puts "#{model.count} #{model.to_s.pluralize} were created."
end
