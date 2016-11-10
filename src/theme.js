angular.module('app')
.config(function($mdThemingProvider) {
    var background = $mdThemingProvider.extendPalette('grey', {
      'A100': 'f2f2f2'
    });
    $mdThemingProvider.definePalette('background', background);
 
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('brown')
    .backgroundPalette('background')
});