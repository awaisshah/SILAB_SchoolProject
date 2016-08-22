/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")
    
    .controller("AddTeacherController", ['$scope','$state', AddTeacherController]);

function AddTeacherController($scope,$state) {
    $scope.teacher = {
        name: '',
        guardian: '',
        education: '',
        joiningDate: '',
        status:'',
        phone: '',
        salary: 5000,
        address: 'House # .., Street # .., .. Colony, Karachi.'
    };
    $scope.submit = function () {
        $scope.teacher = {
            name:               $scope.teacher.name,
            father:             $scope.teacher.father,
            education:          $scope.teacher.education,
            dob:                $scope.teacher.dob,
            joiningDate:        $scope.teacher.joiningDate,
            status:             $scope.teacher.status,
            phone:              $scope.teacher.phone,
            salary:             $scope.teacher.salary,
            address:            $scope.teacher.address,
            course:             {
                                    isl:    $scope.course.isl,
                                    ur :    $scope.course.ur,
                                    mt :    $scope.course.mt,
                                    en :    $scope.course.en,
                                    sc :    $scope.course.sc,
                                    ph :    $scope.course.ph,
                                    cmp:    $scope.course.cmp
                                }
        };
        console.log("object s >>>>>>>",$scope.teacher);
    };
    $scope.goToStudent = function () {
        $state.go('student')
    };


    // Lists of fruit names and Vegetable objects
    $scope.courses = ['Islamiat', 'Maths', 'English'];
    $scope.coursesNames = angular.copy($scope.courses);



}