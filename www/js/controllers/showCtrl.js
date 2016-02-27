app.controller('ShowCtrl',
  function($scope, $stateParams, $cordovaSocialSharing, PickaloApiService) {
    var id = 1;

    var init = function() {
      $scope.refreshPickalo();
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

    $scope.refreshPickalo = function() {
      fetchPickalo(showPickalo);
    };

    $scope.share = function (pickalo) {
      $cordovaSocialSharing.share(pickalo.form.question, 'Vote for this!', null, pickalo.form.link);
    };

    init();
  }
);
