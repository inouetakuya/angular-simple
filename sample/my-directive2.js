// ディレクティブ

angular.module('myDirectives', [])
.controller('MyCtrl', ['$scope', function($scope) {
    $scope.first  = {name: 'First name'};
    $scope.second = {name: 'Second name'};
}])
.directive('myDirective2', function() {
    return {
        restrict: 'E',
        scope: {
            // 外部スコープのdata属性の値をディレクティブのスコープにマッピング
            myData: '=data'
        },
        templateUrl: 'my-directive2.html'
    };
});

