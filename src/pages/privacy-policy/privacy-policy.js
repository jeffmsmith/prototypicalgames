require('./privacy-policy.scss');
angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('prototypical.privacy-policy', {
          url: 'privacy-policy',
          template: require('./privacy-policy.html'),
      });
  })