angular.module("HighFive").controller("SingleCategoryController", SingleCategoryController); 
function SingleCategoryController(CategoriesFactory, $routeParams, DistanceFactory){
		var vm = this;

        vm.categories = CategoriesFactory.categories;
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
     	for(var category in vm.categoriesObject){
     		if(category == vm.currentRoute){
     			vm.currentList = vm.categoriesObject[category];
     		}
     	}
   
        console.log(vm.currentRoute);
        console.log(vm.currentList);
		
}

