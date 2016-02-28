app.service('PickaloApiService',
  function ($http, $q) {
    var host = 'http://pickalo.herokuapp.com';
    var q = $q;

    return {
      postPickalo: function (form) {
        var deferred = q.defer();

        $http.post(host + '/forms', {form: form})
          .success(function (data) {
              deferred.resolve(data);
          }).error(function (err) {
              deferred.reject(err);
          });

        return deferred.promise;
      },
      getPickalo: function(id) {
        var deferred = q.defer();

        $http.get(host + '/forms/' + id)
          .success(function (data) {
              deferred.resolve(data);
          }).error(function (err) {
              deferred.reject(err);
          });

        return deferred.promise;
      }
    }
  }
);
