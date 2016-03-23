app.config(function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:'/bookstore'
	}).
	when("/bookstore",{
		templateUrl:'static/js/components/store/templates/popular-books.html',
		controller:"storeCtrl"
	}).
	when("/store/books",{
		templateUrl:'static/js/components/books/templates/booklist.html',
		controller:"booksCtrl"
	}).
	when("/bookstore/books/category/:categoryid",{
		templateUrl:'static/js/components/books/templates/booklist.html',
		controller:"booksCtrl"
	}).
	when("/bookstore/cart",{
		templateUrl:'',
		controller:"cartCtrl"
	}).
	when("/bookstore/about",{
		templateUrl:'',
		controller:"aboutCtrl"
	}).
	when("/user/profile",{
		templateUrl:'',
		controller:"profileCtrl"
	}).
	when("/orders",{
		templateUrl:'',
		controller:"orderCtrl"
	}).
	when("/bookstore/contact",{
		templateUrl:'',
		controller:"contactCtrl"
	}).
    otherwise({
        redirectTo: '/'
    });
});