angular.module("HighFive").controller("SingleCategoryController", SingleCategoryController); 
function SingleCategoryController(CategoriesFactory, $routeParams, DistanceFactory){
		var vm = this;
     	vm.pizzaList = CategoriesFactory.pizzaList;
     	vm.currentRoute = $routeParams.category;
     	vm.healthyList = CategoriesFactory.healthyList;
     	vm.barFoodList = CategoriesFactory.barFoodList;
     	vm.quickList = CategoriesFactory.quickList;
     	vm.formalList = CategoriesFactory.formalList;
        vm.distanceObject;
     	vm.categoriesObject = {
     		"pizza":vm.pizzaList,
     		"healthy":vm.healthyList,
     		"bar food":vm.barFoodList,
     		"quick":vm.quickList,
     		"formal":vm.formalList,
     	};
     	vm.currentList = [];
     	for(category in vm.categoriesObject){
     		if(category == vm.currentRoute){
     			vm.currentList = vm.categoriesObject[category];
     		}
     	}

        vm.getDistance = function(lat, lng){
            DistanceFactory.getDistance(lat, lng).success(function(data){
                vm.distanceObject = data;
                console.log(test);
            })
        }

     	console.log(vm.pizzaList);
        console.log(CategoriesFactory.quickList);
        console.log(vm.currentRoute);
        console.log(vm.currentList);
		
}

