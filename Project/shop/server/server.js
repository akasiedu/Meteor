Meteor.startup(function () {
	if(Products.find().count() === 0){
      Products.insert({thumb:'applepie.jpeg',name:'Apple Pie',desc:'Decadent Apple Pie',price:2.50,catName:'Fruity'});
      Products.insert({thumb:'blackberrysmoothie.jpeg',name:'Blackberry Smoothie',desc:'Luscious Blackbery Smoothie',price:2.50,catName:'Fruity'});
      Products.insert({thumb:'mod1.jpg',name:'EGO Twist',desc:'Ego Twist Mod',price:23.50,catName:'Mods'});
	}
	if (Categories.find().count() === 0) {
		var hwid = Categories.insert({name: "HARDWARE"});
		var juid = Categories.insert({name: "JUICE"});
		SubCategories.insert({name:'Mods',cat:hwid});
		SubCategories.insert({name:'Module', cat:hwid});
        SubCategories.insert({name:'Fruity',cat:juid});			
        SubCategories.insert({name:'Sweet',cat:juid});
	}
});

Meteor.methods({
	removeAll: function(){
		Products.remove({});
		Categories.remove({});
		CartItems.remove({});
	}
})