require('./top-menu.scss');

angular.module('app')
.directive('topMenu', function(){
    return {
        scope: {},
        template: require('./top-menu.html'),
        restrict: 'E',
        link: function(scope, element, attr) {
        }
    }
});