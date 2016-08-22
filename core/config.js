/**
 * Created by AwaisShah on 5/21/2016.
 */
(function () {
    angular.module("myApp")
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider


                .state("dashboard", {
                    url: '/dashboard',
                    templateUrl: 'components/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard'

                })
                .state('dashboard.student', {
                    url: '/student',
                    //loginCompulsory: true,
                    views: {
                        'show': {
                            templateUrl: "../../SILAB web project/components/dashboard/tabDialog.tmpl.html",
                            controllerAs: "dialog",
                            controller: "DialogController"
                        }
                    }
                })


                .state("login", {
                    url: "/login",
                    templateUrl: "components/login/login.html",
                    controller: "LoginController",
                    controllerAs: "login"
                })
                .state("panel", {
                    url: "/panel/:id",
                    templateUrl: "components/panel/panel.html",
                    controller: "PanelController",
                    controllerAs: "panel"
                })
               
                .state("principal", {
                    url: "/principal",
                    templateUrl: "components/principal/principal.html",
                    controller: "PrincipalController",
                    controllerAs: "principal"
                })
              /*  .state("student", {
                    url: "/student1",
                    templateUrl: "components/student1/student1.html",
                    controller: "StudentController",
                    controllerAs: "student"
                })*/


               /* .state("student1.add", {
                    url: "/add",
                    views: {
                        'menuContent': {
                            templateUrl: "components/student1/add/add.html",
                            controller: "AddController",
                            controllerAs: "add"
                        }
                    }
                })*/

                .state('student.add', {
                    url: '/add',
                    //loginCompulsory: true,
                    views: {
                        'menuContent': {
                            templateUrl: "components/student1/add/add.html",
                            controllerAs: "add",
                            controller: "AddController"
                        }
                    }
                })
                /*.state("panel", {
                    url: "/panel",
                    templateUrl: "../components/panel/panel.html",
                    controller: "PanelController",
                    controllerAs: "panel"
                })*/
                
                .state("teacher", {
                    url: "/teacher",
                    templateUrl: "components/teacher/teacher.html",
                    controller: "TeacherController",
                    controllerAs: "teacher"
            })
            .state('teacher.add', {
                url: '/add',
                //loginCompulsory: true,
                views: {
                    'abc': {
                        templateUrl: "components/teacher/add/add.html",
                        controllerAs: "add",
                        controller: "AddTeacherController"
                    }
                }
            });
            
              /*  .state("edit", {
                    url: "/edit/:id",
                    templateUrl: "components/edit/edit.html",
                    controller: "EditController",
                    controllerAs: "edit"


                });
*/

            $urlRouterProvider.otherwise('/login')

        })

})();