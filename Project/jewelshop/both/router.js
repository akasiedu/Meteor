Router.configure({
	layoutTemplate: "layout",
	// notFoundTemplate: "404"
})

Router.route('/', function(){
	this.render('landingpage')
},{
	name:'landingpage'
});

Router.route('/jewels', function(){
	this.render('home');
},{
	name:'home',

	data: function(){
		return {
			jewel: Jewels.find().fetch()
		}
	}
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'signIn',
    layoutTemplate: 'layout',
    redirect: '/'
});
