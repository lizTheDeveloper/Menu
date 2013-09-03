Meals = new Meteor.Collection('meals');
Ingredients = new Meteor.Collection('ingredients');
Recipes = new Meteor.Collection('recipes');
Equipment = new Meteor.Collection('equipment');

// Meal --  {Title: String,
//           Serves: Number,
//           Planned Day: String,
//           Count: Number,
//           }

Meteor.publish('meals', function() {
    return Meals.find();
});

// Ingredient --  {Title: String,
    //             On Hand: Number,
    //             Vendor: Vendor,
    //             }
Meteor.publish('ingredients', function() {
    return Ingredients.find();
});

// Recipes --     {Title: String, - This should be the same name as one of the meals
    //             Ingredients: [{qty, ingredient_id}, {...} ...],
    //             Description: String,
    //             Serves: 2 - This should be the smallest possible portion, so that I can do math.
    //             Requires: ["Oven", "knives", "cutting board", "Saucepan"],
    //             mealTypes: ["Lunch", "Dinner", "Snack", "Dinner Party", "Breakfast", "Hiking", "Road Trip"] 
    //             ... some other shit prolly.
    //             }
Meteor.publish('recipes', function() {
    return Recipes.find();
});


Meteor.publish('equipment', function() {
    return Equipment.find();
});