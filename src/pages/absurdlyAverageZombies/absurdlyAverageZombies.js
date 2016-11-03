require('./absurdlyAverageZombies.scss');

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('prototypical.absurdlyAverageZombies', {
          url: 'absurdlyAverageZombies',
          template: require('./absurdlyAverageZombies.html'),
      });
  })