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
  main_body: "def fizzbuzz(number)\n # your code goes here\n # changing the method name will fail the tests!\nend",
  test_body: "# Sample RSpec tests\n# Submitted code will test larger numbers\ndescribe 'Fizzbuzz' do\n  before do\n    @answer = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']\n  end\n\n  it 'example one' do\n    number = 1\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example two' do\n    number = 5\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example three' do\n    number = 10\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\nend",
  test_final: "describe 'Fizzbuzz' do\n  before do\n    @answer = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']\n  end\n\n  it 'example one' do\n    number = 1\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example two' do\n    number = 5\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example three' do\n    number = 10\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example four' do\n    number = 20\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example five' do\n    number = 50\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\n\n  it 'example six' do\n    number = 100\n    expect(fizzbuzz(number)).to eq(@answer.first(number))\n  end\nend"
)


# Output
# For output, just add class that you seeded to the models Array
models = [User]

models.each do |model|
  puts "#{model.count} #{model.to_s.pluralize} were created."
end
