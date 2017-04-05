
module.exports = function (ngModule) {
    ngModule.factory('singOutService',function ($http,$rootScope,loginService) {
        return{
            singOut: function (login,password) {

                $http({
                    method: "post",
                    url: "/singout",

                }).success(function (answer, status) {
                    if(status === 200){
                        console.log('test');
                        delete $rootScope.login;
                    }else if(status === 403){
                        //TODO error login
                    }
                })
            }
        }
    })
}
