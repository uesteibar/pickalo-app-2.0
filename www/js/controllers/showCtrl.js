app.controller('ShowCtrl',
  function($scope, $stateParams, PickaloApiService) {
    var id = 1;

    var init = function() {
      fetchPickalo(showPickalo);
    };

    var fetchPickalo = function(onSuccess) {
      console.log($stateParams.id);
      var promise = PickaloApiService.getPickalo($stateParams.id);

      promise.then(onSuccess);
    };

    var showPickalo = function(res) {
      console.log(res);
      $scope.pickalo = res;
    };

    init();
  }
);
