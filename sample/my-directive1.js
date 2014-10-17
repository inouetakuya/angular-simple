// ディレクティブ

angular.module('myDirectives', [])
.controller('MyCtrl', ['$scope', function($scope) {
    $scope.name = 'myDirective1';
}])
.directive('myDirective1', function() {
    return {
        // 宣言するHTMLからの相対パスを指定
        templateUrl: 'my-directive1.html'
    };
});

