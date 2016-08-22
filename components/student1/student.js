/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")

    .controller("StudentController", ['$scope','$state', StudentController]);

function StudentController($scope, $state) {
   // $state.go('student1.add');

   

    $scope.st = "Student"
    $scope.goToAdd = function () {
        console.log('goToAdd')
        $state.go('student.add')
            .then(function (data) {
                console.log('data', data)
            }, function (error) {
                console.log('error', error)
            })
    };
}