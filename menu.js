if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Meals.find().fetch().length < 1){
      Meals.insert({title: 'Coconut Rice', serves: 4, plannedDay: 'Monday', count: 4});
      Meals.insert({title: 'Veggie Burgers', serves: 2, plannedDay: 'Tuesday', count: 2});
      Meals.insert({title: 'Sambar and Rice', serves: 3, plannedDay: 'Wednesday', count: 3});
    }
  });
}
