
module.exports = function (ngModule) {
    ngModule.controller('singOutCtrl',function ($rootScope,$scope, singOutService) {
        $scope.singOut = function () {
            if($rootScope.login){
                singOutService.singOut();
            }
        }
    });
}