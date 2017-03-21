
import './css/common.less';

var SM = angular.module('SM',["ngRoute"])
    .config(function ($routeProvider ) {
        $routeProvider
            .when('/registration',{
                templateUrl:'view/registration.html',
                controller:'registrationCtrl',
            })
            .when('/login',{
                templateUrl:'view/login.html',
                controller:'singUpCtrl',
            })
    })

require('./controllers')(SM);
require('./services')(SM);

