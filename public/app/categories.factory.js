(function() {
    angular.module('HighFive').factory('CategoriesFactory', CategoriesFactory);

    function CategoriesFactory($http, APIFactory) {
    	var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?type=restaurant&radius=8046.72&location=";
    	var location = "42.3353685,-83.04925";

    	var factory = {
    		getList:function(category){
    			return $http.get(url+location+category+"&key="+key );
    		}
    	}
    	return factory;
    }
})();
