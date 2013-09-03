Meals = new Meteor.Collection('meals');
Ingredients = new Meteor.Collection('ingredients');
Recipes = new Meteor.Collection('recipes');
if (Meteor.isClient){
    var menusHandle = Meteor.subscribe('meals', function(){
        console.log('loaded menus');
    });
    var ingredientsHandle = Meteor.subscribe('ingredients', function(){
        console.log('loaded ingredients');
    });
    var recipesHandle = Meteor.subscribe('recipes', function(){
        console.log('loaded recipes');
    });


    //////// MENU /////////

    Template.foodMenu.helpers({
        meals: function () {
            return Meals.find({}, {sort: {count: -1, plannedDay: 1}}).fetch();
        }
    });

    ///////// MEALS ///////

    Template.meal.events({
        'click .delete-menu': function(){
            console.log('removing ' + this._id);
            Meals.remove(this._id);
        }
    });

    ///// INGREDIENTS //////

    Template.addIngredient.events({
        'click #add': function(){
            Ingredients.insert({name: $('#name').val(), onHand: $('#count').val(),vendor: $('#vendor').val()}, function(e, r){
                console.log(e);
                console.log(r);
            });
        }
    });

    Template.ingredientList.helpers({
        ingredients: function() {
            return Ingredients.find().fetch();
        }
    });

    Template.ingredientList.events({
        'click .delete-ingredient': function(){
            console.log('removing ' + this._id);
            Ingredients.remove(this._id);
        }
    });






}







//// UTILS

var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13 ||
                 evt.type === "focusout") {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};