angular.module('HighFive').controller('RestaurantDetailsController', RestaurantDetailsController);
function RestaurantDetailsController(CategoriesFactory, $routeParams){
	var vm = this;
	vm.test = "this is it!";
	vm.currentRoute = $routeParams.category;
	vm.pizzaList = CategoriesFactory.pizzaList;
 	vm.healthyList = CategoriesFactory.healthyList;
 	vm.barFoodList = CategoriesFactory.barFoodList;
 	vm.quickList = CategoriesFactory.quickList;
 	vm.formalList = CategoriesFactory.formalList;
	console.log('I\'m the restuarant you want!');
	for(currentRoute){}
}