/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")

    .controller("TeacherController", ['$state','$scope', TeacherController]);

function TeacherController($state,$scope) {
    $scope.st = "Teacher"
    $scope.goToAdd = function () {
        console.log('teacherrrrrrrrrrrrrr')
        $state.go('teacher.add')
            .then(function (data) {
                console.log('data', data)
            }, function (error) {
                console.log('error', error)
            })
    };
    
}