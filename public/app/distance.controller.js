(function() {
    angular.module('HighFive').factory('DistanceFactory', DistanceFactory);


    function DistanceFactory($http, CategoriesFactory) {

        var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
    	var factory = {};
        factory.getDistance = function(lat, lng){
           return $http.get(url + CategoriesFactory.testLocationLat + ',' + CategoriesFactory.testLocationLng + '&destinations=' + lat + ',' + lng + '&mode=driving' );
        }
    
    	return factory;
    }
})();
