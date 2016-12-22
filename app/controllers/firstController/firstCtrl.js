module.exports = function (ngModule) {
    ngModule.controller('firstCtrl',function ($rootScope,$scope) {
        $scope.text = "test text";

        $scope.sum = function (a,b) {
            return a+b;
        }
    })
};
