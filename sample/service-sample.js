// リスト10::サービスの定義
    
angular.module('myServices', [])
.service('myService', function() {
    // returnされる値がDIの際に注入される
    return {
        description: 'This is myService'
    };
});

