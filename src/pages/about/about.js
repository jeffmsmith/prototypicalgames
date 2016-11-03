require('./about.scss');
angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('prototypical.about', {
          url: 'about',
          template: require('./about.html'),
      });
  })