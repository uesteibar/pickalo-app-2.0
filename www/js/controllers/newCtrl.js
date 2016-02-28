app.controller('NewCtrl',
  function($scope, $state, PickaloApiService, LocalStorageService) {
    $scope.options = [];
    $scope.input = {
      question: '',
      newOption: ''
    };

    $scope.addOption = function(newOption) {
      $scope.options.push(newOption);
      $scope.input.newOption = '';
    };

    $scope.deleteOption = function(index) {
      $scope.options = $scope.options.slice(index, 0);
    };

    $scope.submit = function() {
      var params = {
        question: $scope.input.question,
        options: $scope.options
      };

      var promise = PickaloApiService.postPickalo(params);

      promise.then(function(res) {
        console.log(res);
        var id = res['form']['id'];
        LocalStorageService.savePickalo({id: id});
        $state.go('show', {id: id});
      });
    };
  }
);
