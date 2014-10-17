// ディレクティブ

angular.module('myDirectives', [])
.controller('MyCtrl', ['$scope', function($scope) {
    $scope.first  = 'First name';
    $scope.second = 'Second name';
}])
.directive('myDirective3', function() {
    function link(scope, element, attrs) {
        element.on('click', function(e) {
            alert('clicked');
        });
    }
    return {
        link: link
    };
});

