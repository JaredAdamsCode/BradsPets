# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {
    username: 'jared',
    email: 'jared@email.com',
    password_digest: 'jared123'
  },
  {
    username: 'brad',
    email: 'brad@email.com',
    password_digest: 'brad123'
  }
])

pets = Pet.create([
  {
    type_of_animal: 'dog',
    description: 'australian cattle dog with reddish hair',
    image_url: '',
    location: 'Fort Collins, CO',
    user_id: users.first
  },
  {
    type_of_animal: 'dog',
    description: 'black and brown gernam shepard',
    image_url: '',
    location: 'Loveland, CO',
    user_id: users.first
  },
  {
    type_of_animal: 'cat',
    description: 'back cat with green eyes',
    image_url: '',
    location: 'Arvada, CO',
    user_id: users.first
  },
  {
    type_of_animal: 'cat',
    description: 'gray cat with black stripes',
    image_url: '',
    location: 'Colorado Springs, CO',
    user_id: users.second
  }
])
