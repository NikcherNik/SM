import './css/common.less';
import './css/menu.css';

var SM = angular.module('SM',["ngRoute","xeditable"])
    .config(function ($routeProvider ) {
        $routeProvider
            .when('/main',{
                templateUrl:'view/main.html',
                controller:'mainCtrl',
                resolve:{
                    factory: checkRouting
                }
            })
            .when('/registration',{
                templateUrl:'view/registration.html',
                controller:'registrationCtrl',
            })
            .when('/login',{
                templateUrl:'view/login.html',
                controller:'singUpCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });

        //close menu button
        $(document).ready(function () {
            $(".navbar-toggle").on("click", function () {
                $(this).toggleClass("active");
            });
        });
    });

var checkRouting= function ($q, $rootScope, $location) {
    if ($rootScope.login) {
        return true;
    } else {
        return false;
    }
};
require('./controllers')(SM);
require('./services')(SM);

