/**
 * Created by AwaisShah on 5/21/2016.
 */
(function () {

    angular.module("myApp", ['ui.router','ngMaterial','ngMessages','ngMdIcons'])

        .controller("AppController", [ '$state','$scope','$location',AppController])


    
   

    function AppController($state,$scope,$location) {

        this.goToView = function () {
            $state.go('dashboard')
        };
        this.goToLogin = function () {
            $state.go('login')
        };
        this.goToStudnent = function () {
            $state.go('student')
        };

        this.goToTeacher = function () {
            console.log("pressssssssssssssssssssssssseddddd")
            $state.go('teacher')
        };
        this.goToPanel = function () {
            console.log("panelllllllllllllll")
            $scope.id = 'taimoor';
            $location.path('/panel/'+$scope.id);

        };
    }


})();