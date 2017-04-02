module.exports = function (ngModule) {
    ngModule.controller('appCtrl',function ($rootScope,$scope, $http) {
        $http.get('/username').success(function(data) {
            if(data.login){
                $rootScope.login = data.login;
            }
        });
    })
};
