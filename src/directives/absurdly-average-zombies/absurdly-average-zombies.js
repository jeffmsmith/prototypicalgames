require('./absurdly-average-zombies.scss');

angular.module('app')
.directive('absurdlyAverageZombies', function(){
    return {
        scope: {},
        template: require('./absurdly-average-zombies.html'),
        restrict: 'E',
        link: function(scope, element, attr) {
          scope.screenshots = [
            'aaz-screenshot-1',
            'aaz-screenshot-2',
            'aaz-screenshot-3',
            'aaz-screenshot-4',
            'aaz-screenshot-5',
            'aaz-screenshot-6',
            'aaz-screenshot-7',
            'aaz-screenshot-8',
            'aaz-screenshot-9',
          ]
          scope.selected = scope.screenshots[0];
          scope.setSelected = function(item) {
            scope.selected = item;
          }
        }
    }
});