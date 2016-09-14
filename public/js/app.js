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
  .state('writetime', {
    url: '/writetime',
    templateUrl: 'views/portfolio/writetime.html',
  })  
  .state('behind', {
    url: '/behind',
    templateUrl: 'views/portfolio/behind.html',
  })  
  .state('artr', {
    url: '/artr',
    templateUrl: 'views/portfolio/artr.html',
  })  
  .state('dirtymoonpress', {
    url: '/dirtymoonpress',
    templateUrl: 'views/portfolio/dirtymoonpress.html',
  })
  .state('sharkfile', {
    url: '/sharkfile',
    templateUrl: 'views/portfolio/sharkfile.html',
  })
  .state('port', {
    url: '/port',
    templateUrl: 'views/portfolio/port.html',
  })
  .state('ideas', {
    url: '/ideas',
    templateUrl: 'views/ideas.html',
  })
  .state('lucky', {
    url: '/lucky',
    templateUrl: 'views/lucky.html',
  })


  $locationProvider.html5Mode(true);
}]);