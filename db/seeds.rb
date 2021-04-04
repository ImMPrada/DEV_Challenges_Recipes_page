# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

thetotal={:users_list=>[["miguel prada","mprada1@correo.com"], ["tato bonito","mprada2@correo.com"], ["toto cabezon","mprada3@correo.com"]],
  :user_be_author=>["mprada2@correo.com","mprada3@correo.com"],
  :categories=>["Postres americanos","Postres franceses","Sopas mexicanas","Estofados","Pescados","Mediterranea","Pastas"],
  :ingredientes=>[["arroz blanco","lb"],["zanahoria","lb"],["arberja","lb"],["trucha","lb"],["pechuga de pollo","lb"]],
  :recetas_list=>[[1, "Arroz rarito 1", "", "Este es un arroz con pescado de prueba, mejor no se prepare", 12, 7.6, 3.2, "Estos son todos toditos los pasos",5],[1, "Arroz rarito 2", "", "Este es un arroz con pollo de prueba, mejor no se prepare", 12, 7.6, 3.2, "Estos son todos toditos los pasos",6],[2, "Arroz rarito 3", "", "Este es un arroz con pescado de prueba, mejor no se prepare", 12, 7.6, 3.2, "Estos son todos toditos los pasos",5]]}

# Seed de la tabla de ingredientes
$i = 0
$num = thetotal[:ingredientes].length()
  
while $i < $num  do
  Ingredient.create(name: thetotal[:ingredientes][$i][0],units: thetotal[:ingredientes][$i][1])
  puts thetotal[:ingredientes][$i]
  $i +=1
end

# Seed de la tabla de usuarios
$i = 0
$num = thetotal[:users_list].length()
  
while $i < $num  do
  User.create(name: thetotal[:users_list][$i][0], email: thetotal[:users_list][$i][1], pass: ' ')
  puts thetotal[:users_list][$i]
  $i +=1
end

# Seed de la tabla de autores
thetotal[:user_be_author].each do |author_email|
  Author.create(user_id: User.find_by(email: author_email).id)
end

# Seed de categorias
thetotal[:categories].each do |category_name|
  Category.create(name: category_name)
end

# Seed receta
Recipe.create(author_id: 1, 
  name: "Receta 1 de autor 1", 
  intro: "Es hora de preparar muchas cositas sabrosas con esto, yum yum yum", 
  lot: 15,
  prep_time: 7.1, 
  cook_time: 12, 
  instructions: "mezcla todo todito juntito pegadito y asi\n\p Aja aja aja", 
  category_id: 1)

Recipe.create(author_id: 1, 
  name: "Receta 2 de autor 1", 
  intro: "Es hora de preparar muchas cositas sabrosas con esto, yum yum yum", 
  lot: 15,
  prep_time: 7.1, 
  cook_time: 12, 
  instructions: "mezcla todo todito juntito pegadito y asi\n\p Aja aja aja", 
  category_id: 1)

Recipe.create(author_id: 2, 
  name: "Receta 1 de autor 2", 
  intro: "Es hora de preparar muchas cositas sabrosas con esto, yum yum yum", 
  lot: 15,
  prep_time: 7.1, 
  cook_time: 12, 
  instructions: "mezcla todo todito juntito pegadito y asi\n\p Aja aja aja", 
  category_id: 1)

Recipe.create(author_id: 2, 
  name: "Receta 2 de autor 2", 
  intro: "Es hora de preparar muchas cositas sabrosas con esto, yum yum yum", 
  lot: 15,
  prep_time: 7.1, 
  cook_time: 12, 
  instructions: "mezcla todo todito juntito pegadito y asi\n\p Aja aja aja", 
  category_id: 1)

Recipe.create(author_id: 2, 
  name: "Receta 3 de autor 2", 
  intro: "Es hora de preparar muchas cositas sabrosas con esto, yum yum yum", 
  lot: 15,
  prep_time: 7.1, 
  cook_time: 12, 
  instructions: "mezcla todo todito juntito pegadito y asi\n\p Aja aja aja", 
  category_id: 1)

# Seed pack de ingredientes
ingredientes_pack=[[1, "bien cocidito", 120], 
                  [3, "bien cortadita", 200], 
                  [5, "todita fritita", 1000],
                  [1, "crudito por favor", 320], 
                  [2, "bien cortadita", 200], 
                  [4, "todita fritita", 1000]]

ingredientes_pack.each do |paquete|
  IngredientsPack.create(recipe_id:1, ingredient_id:paquete[0], notes:paquete[1], amount:paquete[2])
  IngredientsPack.create(recipe_id:2, ingredient_id:paquete[0], notes:paquete[1], amount:paquete[2])
  IngredientsPack.create(recipe_id:3, ingredient_id:paquete[0], notes:paquete[1], amount:paquete[2])
  IngredientsPack.create(recipe_id:4, ingredient_id:paquete[0], notes:paquete[1], amount:paquete[2])
  IngredientsPack.create(recipe_id:5, ingredient_id:paquete[0], notes:paquete[1], amount:paquete[2])
end
