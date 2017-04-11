module.exports = function (ngModule) {
    ngModule.controller('appCtrl',function ($rootScope,$scope, $http) {
        var config = {
            apiKey: "AIzaSyA6Y82pVXiQ43ZbD1Fb5JODs8VRFbKXW4U",
            authDomain: "savemoney-79d3f.firebaseapp.com",
            databaseURL: "https://savemoney-79d3f.firebaseio.com",
            projectId: "savemoney-79d3f",
            storageBucket: "savemoney-79d3f.appspot.com",
            messagingSenderId: "284795746971"
        };
        firebase.initializeApp(config);

        const messaging = firebase.messaging();

        messaging.requestPermission()
            .then(function () {
                return messaging.getToken();
            })
            .then(function (token) {
            })
            .catch(function (err) {
                console.log('Error Occured');
            });
        $http.get('/username').success(function(data) {
            if(data.login){
                $rootScope.login = data.login;
            }
        });

        messaging.onMessage(function (payload) {
            console.log('onMessage: ', payload)
        });
    })
};
