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


Problem.create!(
  language: language,
  name: "Fizz Buzz",
  description: "Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.\n
Replace certain values however if any of the following conditions are met:
* If the value is a multiple of 3: use the value 'Fizz' instead
* If the value is a multiple of 5: use the value 'Buzz' instead
* If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead",
  main_body: "def fizzbuzz(array)\n # your code goes here \nend",
  test_body: "I am some random tests\n Hi HI\n hihihi"
)


# Output
# For output, just add class that you seeded to the models Array
models = [User]

models.each do |model|
  puts "#{model.count} #{model.to_s.pluralize} were created."
end
