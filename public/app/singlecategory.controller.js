angular.module("HighFive").controller("SingleCategoryController", SingleCategoryController); 
function SingleCategoryController(CategoriesFactory, $routeParams){
		var vm = this;
     	vm.pizzaList = CategoriesFactory.pizzaList;
     	vm.currentRoute = $routeParams.category;
     	vm.healthyList = CategoriesFactory.healthyList;
     	vm.barFoodList = CategoriesFactory.barFoodList;
     	vm.quickList = CategoriesFactory.quickList;
     	vm.formalList = CategoriesFactory.formalList;
     	vm.number = 8;
     	vm.categoriesObject = {
     		"pizza":vm.pizzaList,
     		"healthy":vm.healthyList,
     		"bar":vm.barFoodList,
     		"quick":vm.quickList,
     		"formal":vm.formalList,
     	};
     	vm.currentList = [];
     	for(category in vm.categoriesObject){
     		if(category == vm.currentRoute){
     			vm.currentList = vm.categoriesObject[category];
     		}
     	}

     	console.log(vm.pizzaList);
        console.log(CategoriesFactory.quickList);
        console.log(vm.currentRoute);
        console.log(vm.currentList);
		
}

