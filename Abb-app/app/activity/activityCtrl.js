
abb.controller('activityCtrl', ['$scope', '$log', function ($scope, $log) {
    $log.log('starting the app ...')

    $scope.a = 10;
    $log.log($scope.a);
    }]);
