/**
 * Created by Nikcher on 11.04.2017.
 */
importScripts('https://www.gstatic.com/firebasejs/3.7.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.5/firebase-messaging.js');


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
