angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('prototypical.games', {
          url: 'games',
          template: require('./games.html'),
      });
  })