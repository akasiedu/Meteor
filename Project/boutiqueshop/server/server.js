Meteor.startup(function () {
	if (Products.find().count() === 0) {

	}

	if(Categories.find().count() === 0){
		 var hwid = Categories.insert({name:'HARDWARE'});
		 var juid = Categories.insert({name:'JUICE'});

		 SubCategories.insert({name: 'Mods',cat:hwid});
		 SubCategories.insert({name: 'Fruity',cat:juid});
		 SubCategories.insert({name: 'Sweet',cat:juid});


	}
});

Meteor.methods({
	removeAll:function(){
		Products.remove({});
		Categories.remove({});
		SubCategories.remove({});
		CartItems.remove({});
	}
})