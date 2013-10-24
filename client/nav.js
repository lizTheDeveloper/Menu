if (Meteor.isClient){

    //////////// NAV ///////////////

    Template.container.events({
        'click #home' : function() {
            $('.body').html(Meteor.render(function () {
                return Template.main();
            }));
            $('li').removeClass('active');
            $('#home').addClass('active');
        },
        'click #meals' : function() {
            $('.body').html(Meteor.render(function () {
                return Template.mealManage();
            }));
            $('li').removeClass('active');
            $('#meals').addClass('active');
        },
        'click #recipes' : function() {
            $('.body').html(Meteor.render(function (){
                return Template.recipes();
            }));
            $('li').removeClass('active');
            $('#recipes').addClass('active');

            var tagApi = jQuery("#recipeRequires").tagsManager({prefilled: ["Oven"]});

            jQuery("#recipeRequires").typeahead({
                name: 'countries',
                limit: 15,
                local: ["Angola", "Laos", "Nepal"]
            }).on('typeahead:selected', function (e, d) {

                tagApi.tagsManager("pushTag", d.value);

            });
        },
        'click #ingredients' : function() {},
        'click #shopping' : function() {},
        'click #contact' : function() {}
    });

}