/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")

    .controller("AddController", ['$scope','$state', AddController]);

function AddController($scope,$state) {
    alert("adddddddddddddddddddddd student1");
    $scope.student = {
        name: '',
        guardian: '',
        guardian_type: '',
        admissionDate: '',
        parent_phone: '',
        addmission_fees: 1000,
        address: 'House # .., Street # .., .. Colony, Karachi.'
    };
    $scope.submit = function () {
        $scope.student = {
            name:               $scope.student.name,
            guardian:           $scope.student.guardian,
            guardian_type:      $scope.student.guardian_type,
            admissionDate:      $scope.student.admissionDate,
            parent_phone:       $scope.student.parent_phone,
            addmission_fees:    $scope.student.addmission_fees,
            address:            $scope.student.address
        };
        console.log("object s >>>>>>>",$scope.student);
    };
    $scope.goToStudent = function () {
        $state.go('student')
    };

}