// リスト3: スコープの定義

angular.module('myApp', [])
.controller('MyCtrl', function($scope) {
    $scope.name = '';
    $scope.reset = function() {
        $scope.name = '';
    };
});

