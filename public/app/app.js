(function(){
	angular.module('HighFive', ['ngRoute'])
	.config(RouteConfiguration);

	function RouteConfiguration($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'templates/dash.html',
		})
		.when('/landing', {
			templateUrl: 'templates/landingpage.html',
		})
		.when('/categories', {
			templateUrl: 'templates/categoriespage.html',
		})
		.when('/categories/:category', {
			templateUrl: 'templates/categorydetail.html',
		})
		.when('/categories/:category/:id', {
			templateUrl: 'templates/restaurantdetails.html',
		})
		.otherwise({
			redirectTo: '/'
		});
	}
})();

//http://localhost:8080/#/categories/pizza/74db0d6a700838200161407eb702035b8f1d912b