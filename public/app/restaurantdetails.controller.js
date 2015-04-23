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

    for (var category in vm.categoriesObject){
    	if (vm.currentRoute == category){
    		vm.categoriesObject[category].forEach(function(placesObject){
    			if (vm.currentId == placesObject.places_id)
    				console.log(placesObject);
    				vm.currentPlace = placesObject;
    		});
    	};
    };
	vm.test = "I'm the restuarant you want!";
	console.log('I\'m the restuarant you want!');
	console.log(vm.currentPlace);	
}