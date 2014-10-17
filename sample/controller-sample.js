// リスト7::コントローラの定義

angular.module('myControllers', [])
.controller('MyCtrl', function($scope) {
    // コントローラの処理
    $scope.name = "world";
});

