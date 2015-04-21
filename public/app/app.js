(function(){
	angular.module('HighFive', ['ngRoute'])
	.config(RouteConfiguration);

	function RouteConfiguration($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'templates/landingpage.html',
		})
		.when('/categories', {
			templateUrl: 'templates/categoriespage.html',
		})
		.when('/categories/:category', {
			templateUrl: 'templates/categorydetail.html',
		})
		.when('/categories/:category/:id', {
			templateUrl: 'templates/restaurantdetail.html',
		})
		.otherwise({
			redirectTo: '/'
		});
	}
})();