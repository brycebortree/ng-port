var app = angular.module('portApp', ['portCTRLS', 'ui.router']);

app.config(['$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider',
  '$httpProvider',
 function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

//define routes
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl'
  })
  .state('writing', {
    url: '/writing',
    templateUrl: 'views/writing.html',
    controller: 'WriteCtrl'
  })

  $locationProvider.html5Mode(false);
}]);