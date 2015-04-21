angular.module("HighFive").controller("CategoriesController", CategoriesController); 
function CategoriesController($http, CategoriesFactory){
		var vm = this;
		vm.quick = "&query=fast+food";
    	vm.formal = "&query=fine+dining";
    	vm.pizza = "&query=pizza";
    	vm.barFood = "&query=bar";
    	vm.healthy = "&query=healthy";
    	vm.listData = {};

    	vm.getList = function(category){
    		CategoriesFactory.getList(category).success(function(data){
    			vm.listData = data;
    		});
    	}
    	vm.getList(vm.quick);

    	vm.service = new google.maps.places.PlacesService(map);
		vm.service.textSearch(request, callback);
}

