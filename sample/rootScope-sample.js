// リスト5::ルートスコープに値をセットする

// コントローラ
angular.module('myApp', [])
.controller('MyCtrl1', function($scope, $rootScope) {
    $scope.name = 'First';
    $rootScope.age = 20; // ルートスコープに値をセット
})
.controller('MyCtrl2', function($scope) {
    $scope.name = 'Second';
});

