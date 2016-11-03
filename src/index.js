require('angular');
require('angular-filter');
window._ = require('lodash');

var app = angular.module('app', [
  require('angular-sanitize'),
  require('angular-ui-router'),
  require('angular-material'),
  require('angular-animate'),
  require('angular-aria'),
  require('angular-messages'),
  'angular.filter'    
]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('prototypical', {
    url: '/',
    template: require('./app.html'),
    /**
     * Main app controller.
     * @name  indexController
     * @ngdoc controller
     * @memberOf index
     * @param  {service} $rootScope Angular root scope.
     * @param  {service} $scope     Angular current scope.
     * @param  {service} $state     Angular state service.
     */
    controller: function($rootScope, $scope, $state){
      if ($state.current.name === 'prototypical') {
        $state.transitionTo('prototypical.about', { reload:true });
      }
    }
  });
});

require('./theme');
require('./directives/top-menu/top-menu');
require('./pages/about/about');
require('./pages/absurdlyAverageZombies/absurdlyAverageZombies');
require('./app.scss');