angular.module('HighFive').controller('RestaurantDetailsController', RestaurantDetailsController);
function RestaurantDetailsController(CategoriesFactory, $routeParams){
	var vm = this;

	vm.currentPlace = {};
	vm.categories = CategoriesFactory.categories;
 	vm.pizzaList = CategoriesFactory.pizzaList;
 	vm.currentRoute = $routeParams.category;
 	vm.currentId = $routeParams.id;
 	vm.healthyList = CategoriesFactory.healthyList;
 	vm.barFoodList = CategoriesFactory.barFoodList;
 	vm.quickList = CategoriesFactory.quickList;
 	vm.formalList = CategoriesFactory.formalList;
 	vm.categoriesObject = {
     		"pizza":vm.pizzaList,
     		"healthy":vm.healthyList,
     		"bar food":vm.barFoodList,
     		"quick":vm.quickList,
     		"formal":vm.formalList,
     	};

 	vm.categoriesObject[vm.currentRoute].forEach(function(object){
 		if (object.place_id === vm.currentId){
 			vm.currentPlace = object;
 		}
 	})
	vm.test = "I'm the restuarant you want!";
	console.log('I\'m the restuarant you want!');
	console.log(vm.currentPlace);	

}