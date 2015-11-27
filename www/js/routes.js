app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('new', {
    url: '/new',
    templateUrl: 'templates/new.html',
    controller: 'newCtrl'
  });
});
