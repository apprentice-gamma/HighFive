angular.module("HighFive").controller("CategoriesController", CategoriesController); 
function CategoriesController(CategoriesFactory){
		var vm = this;
        vm.categories = ["Pizza", "Healthy", "Bar Food", "Formal", "Quick"];
        CategoriesFactory.pizzaList = CategoriesFactory.initializeSearch('pizza restaurant');
        CategoriesFactory.formalList = CategoriesFactory.initializeSearch('fine dining');
        CategoriesFactory.healthyList = CategoriesFactory.initializeSearch('healthy restuarant');
        CategoriesFactory.barFoodList = CategoriesFactory.initializeSearch('bar food');
        CategoriesFactory.quickList = CategoriesFactory.initializeSearch('fast food');

        console.log(CategoriesFactory.quickList);
		
}

