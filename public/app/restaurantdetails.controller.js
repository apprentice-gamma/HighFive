angular.module('HighFive').controller('RestaurantDetailsController', RestaurantDetailsController);
function RestaurantDetailsController(DistanceFactory, CategoriesFactory, $routeParams){
	var vm = this;
	vm.location = '';
	vm.details = {}
	vm.currentPlace = {};
	vm.currentReview = '';
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
 	vm.map = DistanceFactory.getStaticMap(vm.location);
 	
 	DistanceFactory.getPlaceDetails(vm.currentId).then(function(data){
			vm.details = data;
			for (var i = 0; i < vm.details.reviews.length; i++){
				if (Number(vm.details.reviews[i].rating) >= 4) {
					vm.currentReview = vm.details.reviews[i].text;
					console.log(vm.currentReview);
				}
			}
		});

 	vm.speakReview = function(){			
		return CategoriesFactory.speak( vm.currentPlace.name + "." + vm.currentPlace.rating + "stars-" + vm.currentReview);
 	};
 	
	console.log(vm.currentPlace);
	console.log(vm.details);
	console.log(vm.currentReview);
	
	

}