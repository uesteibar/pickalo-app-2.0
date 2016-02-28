app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('new', {
    url: '/new',
    templateUrl: 'templates/new.html',
    controller: 'NewCtrl'
  });

  $stateProvider.state('show', {
    url: '/show/:id',
    templateUrl: 'templates/show.html',
    controller: 'ShowCtrl'
  });

  $stateProvider.state('index', {
    url: '/index',
    templateUrl: 'templates/index.html',
    controller: 'IndexCtrl'
  });
});
