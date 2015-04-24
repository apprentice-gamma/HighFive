angular.module('HighFive').controller('RestaurantDetailsController', RestaurantDetailsController);
function RestaurantDetailsController(DistanceFactory, CategoriesFactory, $routeParams){
	var vm = this;
	vm.location = '';
	vm.details = {}
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
 			vm.location = vm.currentPlace.geometry.location.k + ',' + vm.currentPlace.geometry.location.D;
 		}
 	});
 	DistanceFactory.getPlaceDetails(vm.currentId).then(function(data){
			vm.details = data;
			for (var i = 0; i < vm.details.reviews.length; i++){
				if (Number(vm.details.reviews[i].rating) >= 4) {
					console.log(vm.details.reviews[i])
					return CategoriesFactory.speak("Thoughts from a customer." + "-" + vm.details.reviews[i].text);
				}
			}
			
		});
 	vm.map = DistanceFactory.getStaticMap(vm.location);
	vm.test = "I'm the restuarant you want!";
	console.log('I\'m the restuarant you want!');
	console.log(vm.currentPlace);
	console.log(vm.details);
	
	

}