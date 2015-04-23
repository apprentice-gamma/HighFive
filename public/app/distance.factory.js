(function() {
    angular.module('HighFive').factory('DistanceFactory', DistanceFactory);


    function DistanceFactory(CategoriesFactory, $q) {

        
    	var factory = {};
        factory.getDistance = function(lat, lng){
        	var origin = new google.maps.LatLng(CategoriesFactory.testLocationLat, CategoriesFactory.testLocationLng);
        	var destination = new google.maps.LatLng(lat, lng);

        	var service = new google.maps.DistanceMatrixService();
        	service.getDistanceMatrix(
			  {
			    origins: [origin],
			    destinations: [destination],
			    travelMode: google.maps.TravelMode.DRIVING,
			  }, callback);
             var deferred = $q.defer();
             function callback(response, status) {
                   console.log(status);
                    if (status == google.maps.DistanceMatrixStatus.OK) {
                        var origins = response.originAddresses;
                        var destinations = response.destinationAddresses;

                        for (var i = 0; i < origins.length; i++) {
                          var results = response.rows[i].elements;
                          for (var j = 0; j < results.length; j++) {
                            var element = results[j];
                            var distance = element.distance.text;
                            var duration = element.duration.text;
                            var from = origins[i];
                            var to = destinations[j];
                          }
                        }
                      }
                        // console.log(object.distance);
                       deferred.resolve(results[0]);     
                    }
                    return deferred.promise;

        };
        factory.getPlaceDetails = function (id){
        var map = new google.maps.Map(document.getElementById('map'));

        var request = {
          placeId: id
        };

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        var deferred = $q.defer();
        service.getDetails(request, function(place, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            deferred.resolve(place);
          }      
      });
       return deferred.promise;
  }
    
    	return factory;
    }
})();
