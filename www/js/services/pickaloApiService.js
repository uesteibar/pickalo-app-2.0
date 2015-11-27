app.service('PickaloApiService',
  function ($http, $q) {
    var host = 'https://4c76e48d.ngrok.com';
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
      }
    };
  }
);
