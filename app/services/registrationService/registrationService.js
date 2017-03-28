/**
 * Created by Nikcher on 28.03.2017.
 */

module.exports = function (ngModule) {
    var Binary = require('../../binary.js');
    var md5 = require('md5');
    ngModule.factory('registrationService',function ($http,$rootScope,$location,$route) {

        return{
            toRegister: function (user) {
                var cipherPassword = encryptString(user.password);
                $http({
                    method: "post",
                    url: "/cipher",
                    data: {
                        password: cipherPassword
                    },

                }).success(function (pswdServer) {


                });
            }
        };
        function encryptString(str) {

            var binary = new Binary();
            var hashCodeArr = binary.str2char(md5(str));
            var charArr_new = hashCodeArr.map(function(code) {
                return code ^ 123 ;
            });
            return binary.char2str(charArr_new);
        };

    })
}
