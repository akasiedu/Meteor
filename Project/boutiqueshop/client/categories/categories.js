// Template.categories.Categories = function(){
// 	return Categories.find();
// }

// Template.categories.SubCategories = function(){
// 	return SubCategories.find();
// }

Template.categories.helpers({
	Categories: function () {
		return Categories.find();
	}, 
	SubCategories: function(){
		return SubCategories.find({cat:juid});
	}
});