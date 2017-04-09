/**
 * Created by Nikcher on 02.04.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('userInformation',function ($http,$rootScope) {

        return{
            userName: function () {

                $http({
                    method: "get",
                    url: "/username",

                }).success(function (data) {
                    if(data.login){
                        $rootScope.login = data.login;
                    }
                }).error(function (error, status) {
                    console.error(error)
                });
            }
        }
    })
}