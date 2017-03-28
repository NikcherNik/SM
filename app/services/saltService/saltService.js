/**
 * Created by Nikcher on 28.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('saltService',function ($http,$rootScope) {

        return{
            toSalt: function (login,password) {
                
                $http({
                    method: "post",
                    url: "/login",
                    data: {
                        login: login
                    },

                }).success(function (answer) {
                    console.log(answer)
                })
            }
        }
    })
}