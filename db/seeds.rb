#  3.times do 
# 	user_name =	Faker::Name.name 
# 	user_email = Faker::Internet.email

# 	User.create(
# 		name: user_name, 
# 		email: user_email)
# end



# CodingLanguage.create(
# 	language_name: "Ruby"
# 	)

# CodingLanguage.create(
# 	language_name: "javascript"
# 	)


# Level.create(
# 	level_name:"Code Flow: Left to Right",
# 	level_number: 3,
# 	code: "puts 21 - 6 / 2 * 3
# 				Answer  12
# 				100 * 5 - 2 / 2
# 				answer 499" ,
# 	coding_language_id: 1
# 	)

# Level.create(
# 	level_name:"puts statement",
# 	level_number: 3,
# 	code: "puts whats your first name:
# gets.chomp
# puts whats your middle name:
# gets.chomp
# puts what your last name
# gets.chomp",
# 	coding_language_id: 1
# 	)

# Result.create(
# speed: 7,
# time: 45,
# level_id: 1,
# user_id: 1
# )
# User.create(name: "bobby j", email:"bobbyj@gmail.com")