app.service('LocalStorageService',
  function ($window) {
    var operations = {
      savePickalo: function (pickalo) {
        console.log('hola');
        var allPickalos = operations.fetchAllPickalos();
        console.log(allPickalos);
        allPickalos.push(JSON.stringify(pickalo));
        console.log(allPickalos);
        $window.localStorage["pickalos"] = JSON.stringify(allPickalos);
      },
      fetchAllPickalos: function() {
        var pickalos = JSON.parse($window.localStorage["pickalos"]);
        if (pickalos == undefined || pickalos == "") {
          pickalos = "[]";
        }
        for (var i = 0; i < pickalos.length; i++) {
          console.log(pickalos[i]);
          pickalos[i] = JSON.parse(pickalos[i]);
        }

        return pickalos;
      }
    }

    return operations;
  }
);
