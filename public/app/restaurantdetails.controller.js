angular.module('HighFive').controller('RestaurantDetailsController', RestaurantDetailsController);
function RestaurantDetailsController(CategoriesFactory){
	var vm = this;
	vm.test = "I'm the restuarant you want!";
	console.log('I\'m the restuarant you want!')
}