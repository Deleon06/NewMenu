# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
Category.destroy_all
Menu.destroy_all
User.destroy_all


@admin = User.create!(username: 'HellsKitchen', email: 'HellsKitchen@gmail.com', password: '123456')

puts "#{User.count} users created"

main_menu = Menu.create!(name: 'HellsKitchenMainMenu', user: @admin)

puts "#{Menu.count} menus created"

chilled_seafood = Category.create!(name: 'chilled seafood', menu: main_menu)
appetizers = Category.create!(name: 'appetizers', menu: main_menu)
salad_soup = Category.create!(name: 'salad/soup', menu: main_menu)
entrees = Category.create!(name: 'entrees', menu: main_menu)
sides = Category.create!(name: 'sides', menu: main_menu)

puts "#{Category.count} categories created"

Item.create!(name: 'oysters on the half shell', price: 24.95, category: chilled_seafood )
Item.create!(name: 'shrimp cocktail', price: 21.95, category: chilled_seafood)
Item.create!(name: 'seared foie gras', price: 25.95, category: appetizers)
Item.create!(name: 'pan seared scallops', price: 25.95, category: appetizers)
Item.create!(name: 'lobster risotto', price: 29.95, category: appetizers)
Item.create!(name: 'heirloom tomato burrata salad', price: 22.95, category: salad_soup)
Item.create!(name: 'summer salad', price: 23.95, category: salad_soup)
Item.create!(name: 'quinoa salad', price: 19.95, category: salad_soup)
Item.create!(name: 'caesar salad', price: 19.95, category: salad_soup)
Item.create!(name: 'sweet onion soup', price: 14.95, category: salad_soup)
Item.create!(name: 'beef wellington', price: 69.95, category: entrees)
Item.create!(name: 'braised short rib', price: 43.95, category: entrees)
Item.create!(name: 'jidori chicken scallopini', price: 32.95, category: entrees)
Item.create!(name: 'crispy skin salmon', price: 38.95, category: entrees)
Item.create!(name: 'filet mignon', price: 55.95, category: entrees)
Item.create!(name: 'prime dry aged new york strip', price: 59.95, category: entrees)
Item.create!(name: 'baked macaroni & cheese', price: 13.95, category: sides)
Item.create!(name: 'roasted corn', price: 13.95, category: sides)
Item.create!(name: 'haricot vert', price: 13.95, category: sides)
Item.create!(name: 'wild mushrooms', price: 13.95, category: sides)
Item.create!(name: 'potato puree', price: 13.95, category: sides)

puts "#{Item.count} items created"
