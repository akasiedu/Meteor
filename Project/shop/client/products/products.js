
Template.products.helpers({
    'productlist':function(){
    return Products.find({catName:Session.get('category')});
    },
    'catnotselected':function(){
        return Session.equals('category',null);
    },
    'category':function(){
        return Session.get('category');
    }
});




