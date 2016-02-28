app.service('LocalStorageService',
  function ($window) {
    var operations = {
      savePickalo: function (pickalo) {
        var allPickalos = operations.fetchAllPickalos();
        allPickalos.push(pickalo);
        $window.localStorage["pickalos"] = JSON.stringify(allPickalos);
      },
      fetchAllPickalos: function() {
        var pickalos = $window.localStorage["pickalos"];
        if (pickalos == undefined || pickalos == "") {
          pickalos = "[]";
        }

        pickalos = JSON.parse(pickalos);
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
