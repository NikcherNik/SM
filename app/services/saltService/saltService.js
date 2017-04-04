/**
 * Created by Nikcher on 28.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('saltService',function ($http,$rootScope,loginService) {

        return{
            toSalt: function (login,password) {
                
                $http({
                    method: "post",
                    url: "/salt",
                    data: {
                        login: login
                    },

                }).success(function (answer, status) {
                    if(status === 200){
                        loginService.toLogin(answer.answer,password);
                    }else if(status === 403){
                        //TODO error login
                    }
                })
            }
        }
    })
}