FactoryBot.define do
  factory :user do
    firstname, lastname = Faker::Name.name.split.last(2)
    password = Faker::Internet.password(10, 20, true)

    firstname { firstname }
    lastname { lastname }
    email { Faker::Internet.email }
    password { password }
    password_confirmation { password }
    confirmed_at { nil }
  end
end
