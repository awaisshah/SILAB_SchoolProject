/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")

    .controller("LoginController", ['$state','$scope','$timeout', LoginController])
        .config(function($mdThemingProvider) {
            // Configure a dark theme with primary foreground yellow
             $mdThemingProvider.theme('docs-dark', 'default')
                 .primaryPalette('teal')
                 .dark();
        });

function LoginController($state,$scope,$timeout) {


    $scope.username = '';
    $scope.password = '';
    $scope.username1     = 'ab@gmail.com';
    $scope.password1     = "123456";
    $scope.user = {};

    /*$scope.user = {
        username:$scope.username,
        password:$scope.password
    }*/

    //push data on firebase
  /*  firebase.database().ref('users/').set({
        username: $scope.username,
        password: $scope.password
    });*/


    $scope.createUser = function () {
        firebase.auth().createUserWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
       /* var credential = firebase.auth.EmailPasswordAuthProvider.credential($scope.username, $scope.password);
        console.log("credentiallllllllllllll >>>>>> "+credential);*/
    };
    $scope.login = function () {
        var flag = 1;
        alert($scope.username1+">>>"+$scope.password1);
        firebase.auth().signInWithEmailAndPassword($scope.username1, $scope.password1).catch(function(error) {

            flag = 0;
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            console.log("notttttttttttttttttttttttt log in >>>>");
            console.log("flaggggggggggggggggggggg >>>>> : "+flag);
            alert("pa g masla khrb hai ");
        }).then(function () {
            if(flag){
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        console.log("Y USER : "+user);
                        // User is signed in.
                    } else {
                        // No user is signed in.
                    }
                });
                $timeout(function(){
                    $state.go('dashboard');
                },0);

            }
            console.log("THEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENNNNNNNNNnnnnnnnnnnn");
            console.log("flaggggggggggggggggggggg then : "+flag);

        });

    }
    
    console.log(">>>>>>>>>>>>>>",$scope.user);
   /* config.databaseURL.createUserWithEmailAndPassword(function (user) {

    });
*/
   
    
}
