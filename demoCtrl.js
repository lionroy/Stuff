app.controller("demoCtrl", function ($scope) {
    $scope.first = 0;
    $scope.second = 0;
    $scope.operators = "";
    $scope.result = function () {
        if ($scope.operators === '+') {
            $scope.resultz = $scope.first + $scope.second
        }
        else if ($scope.operators === '-') {
            $scope.resultz = $scope.first - $scope.second
        }
        else if ($scope.operators === '*') {
            $scope.resultz = $scope.first * $scope.second
        }
        else if ($scope.operators === '/') {
            if ($scope.second !== 0) {
                $scope.resultz = $scope.first / $scope.second
            }
            else { $scope.resultz = "Can't Divide by Zero" }
        }
        // (operators === '-' ? (first - second | number:2) :
        // operators === '*' ? (first * second | number:2) : 
        // operators === '/' ? (first / second | number:2) : "select operator")
        return $scope.resultz;
    };


});