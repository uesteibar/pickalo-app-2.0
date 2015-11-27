app.controller('newCtrl', function($scope) {
  $scope.options = ['somewhere'];
  $scope.input = {
    question: '',
    newOption: ''
  };

  $scope.addOption = function(newOption) {
    console.log(newOption);
    $scope.options.push(newOption);
    $scope.input.newOption = '';
  };
});
