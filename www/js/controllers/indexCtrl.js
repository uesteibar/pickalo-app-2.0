app.controller('IndexCtrl',
  function($scope, PickaloApiService, LocalStorageService) {
    var init = function() {
      $scope.refreshPickalos();
    };

    var fetchPickalos = function(ids, onSuccess) {
      var promise = PickaloApiService.getPickalos(ids);

      promise.then(onSuccess);
    };

    var showPickalos = function(res) {
      for (var i = 0; i < res.length; i++) {
        res[i] = JSON.parse(res[i]);
        console.log(res[i]);
      }

      $scope.loading = false;
      $scope.pickalos = res;
    };

    $scope.refreshPickalos = function() {
      $scope.loading = true;
      var allPickalos = LocalStorageService.fetchAllPickalos();
      var ids = [];
      for (var i = 0; i < allPickalos.length; i++) {
        ids.push(allPickalos[i].id);
      }

      fetchPickalos(ids, showPickalos);
    };

    init();
  }
);
