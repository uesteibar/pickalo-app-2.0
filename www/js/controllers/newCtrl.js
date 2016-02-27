app.controller('NewCtrl',
  function($scope, $state, PickaloApiService) {
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

    $scope.submit = function() {
      var params = {
        question: $scope.input.question,
        options: $scope.options
      };

      var promise = PickaloApiService.postPickalo(params);

      promise.then(function(res) {
        console.log(res);
        $state.go('show', { id: res['form']['id']})
      });
    };
  }
);
