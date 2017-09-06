angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope. listings.push({'code' : $scope.code, 'name': $scope.name, 'coordinates.latitude' : $scope.latitude,'coordinates.longitude' : $scope.longitude, 'address' : $scope.address});
      $scope.code = ''
      $scope.name = ''
      $scope.address = ''
      $scope.longitude = ''
      $scope.latitude = ''
    };
    $scope.deleteListing = function(index) {
      Listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
    details = ("Name: " + $scope.listings[index].name);
      if($scope.listings[index].address !== undefined)
      {
        moreDetails = ("\nAddress: " + $scope.listings[index].address + "\nCoordinates: "  + "Latitude: " + $scope.listings[index].coordinates.latitude + " Longitude: " + $scope.listings[index].coordinates.longitude);
        details = details + moreDetails;
      }
      $scope.details = details;

    };
  }
]);
