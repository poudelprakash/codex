User.create!(
  email: "daniel@rassiner.com",
  password: "fakefake",
  password_confirmation: "fakefake"
)

# Output
# For output, just add class that you seeded to the models Array
models = [User]

models.each do |model|
  puts "#{model.count} #{model.to_s.pluralize} were created."
end
