angular.module("hrStats", [])

.controller("MainController", function($scope, APIService) {
  $scope.getData = APIService.getData;
  $scope.authenticate = APIService.authenticate;
});