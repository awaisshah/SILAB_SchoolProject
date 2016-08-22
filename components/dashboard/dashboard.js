/**
 * Created by AwaisShah on 5/21/2016.
 */
angular.module("myApp")

    .controller("DashboardController", ['$state','$scope','$log','$timeout', '$mdSidenav','$mdDialog'])

//function DashboardController($state,$scope,$log,$timeout, $mdSidenav) {



.controller('DashboardController', function ($state,$scope, $timeout, $mdSidenav, $log,$mdDialog) {
       $scope.user = firebase.auth().currentUser;
    $scope.student = function () {
        $state.go('dashboard.student');
    }

    //-------------------------DIALOG BOX-----------------------------------------

    $scope.showTabDialog = function(ev) {
        $mdDialog.show({
            controller: DialogController,
           // templateUrl: '../dashboard/tabDialog.tmpl.html',
            templateUrl: '../../../SILAB web project/components/dashboard/tabDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };
    $scope.showPrerenderedDialog = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            contentElement: '#myDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    //-------------------------END DIALOG BOX-----------------------------------------


       // for user log in ?
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Y USER : "+user);
            // User is signed in.
        } else {
            // No user is signed in.
        }
        });

    // UPDATE USER ----------------------------------------------------------------------------------------

       /*
        $scope.user.updateProfile({
                 displayName: "SHAH G",
                 uid: "Awais"
             }).then(function() {
                 // Update successful.
             }, function(error) {
        // An error happened.
                });*/

    // END UPDATE USER ----------------------------------------------------------------------------------------


        console.log("USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR>>>> : "+$scope.user);
        //console.log("USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR>>>> : "+$scope.user.uid);
       // console.log("USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR displayName>>>> : "+$scope.user.displayName);
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }
        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    })
        .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });
            };
        })
        .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };
        })

        function DialogController($scope, $mdDialog,$state) {
            $state.go('dashboard.student');


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


            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $state.go('dashboard');
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        };




    /*var tabs = [
            { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
            { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
            { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
            { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
            { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
            { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
            { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
            { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
            { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
            { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
        previous = selected;
        selected = tabs[current];
        if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
        if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
        view = view || title + " Content View";
        tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
        var index = tabs.indexOf(tab);
        tabs.splice(index, 1);
    };*/
    
//}