function MainController($scope){
  $scope.name = 'Amy';
  $scope.email = 'amy@somemail.com';
  $scope.phone = '01234567890';
}

angular
  .module('app')
  .controller('MainController', MainController);

