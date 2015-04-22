(function() {
    angular.module('HighFive').factory('DistanceFactory', DistanceFactory);


    function DistanceFactory(CategoriesFactory) {

        
    	var factory = {};
        factory.getDistance = function(lat, lng, callback){
        	var origin = new google.maps.LatLng(CategoriesFactory.testLocationLat, CategoriesFactory.testLocationLng);
        	var destination = new google.maps.LatLng(lat, lng);

        	var service = new google.maps.DistanceMatrixService();
        	service.getDistanceMatrix(
			  {
			    origins: [origin],
			    destinations: [destination],
			    travelMode: google.maps.TravelMode.DRIVING,
			  }, callback);
        }
    
    	return factory;
    }
})();
