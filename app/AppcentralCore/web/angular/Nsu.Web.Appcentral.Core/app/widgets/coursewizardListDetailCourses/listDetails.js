(function () {
    'use strict';

    angular
        .module('AppCentral.core.widgets')
        .directive('listDetails', function listDetails() {
            var directive = {
                scope: {
                    ngModel: '=',
                    schedules: '=',
                    totalclasses: '=',
                    syllabiLink: '='
                },
                controller: listDetailsController,
                controllerAs: 'vm',
                templateUrl: 'app/widgets/coursewizardListDetailCourses/listCourses.tpl.html',
                restrict: 'E',

            };
            return directive;
        })

    /* @ngInject */
    function listDetailsController($scope) {
        var vm = this;
        vm.daysIndicator = '';

        vm.pagedCollection = $scope.ngModel;

        $scope.$watch(function () {
            return $scope.ngModel;
        }, function () {
            vm.pagedCollection = $scope.ngModel;
            if (vm.pagedCollection.length > 0) {
                vm.updateDaysFound();
                vm.updatePartOfDayFound();
                vm.calculateDaysIndicator();
            }
            vm.schedules = $scope.schedules;
            vm.totalclasses = $scope.totalclasses;
            TabCreation();
            getSchedules();
        }, true);


        vm.bookUrl = function (url) {
            window.open(url);
        }

        vm.syllabiUrl = function (term, crn) {
            var url = $scope.syllabiLink + '?term=' + term + '&crn=' + crn;
            window.open(url);
        }

        vm.courseDetailUrl = function (subject, course) {
            var url = location.origin + location.pathname + '/' + subject + '/' + course;
            window.open(url);
        }

        function TabCreation() {
            var tabs = [];
            var courses = [];
            var index = 0;
            angular.forEach(vm.pagedCollection, function (course, courseIndex) {

                courses.push(course);

                var newTab = {
                    name: "Online",
                    classes: [],
                }
                newTab.classes.push(course);
                tabs.push(newTab);

                angular.forEach(course.classes, function (clas, clasIndex) {
                   
                    

                    /*
                    if (clas.meetings.length == 0) {
                        var newTab = {
                            name: "Online",
                            classes: [],
                        }
                        newTab.classes.push(clas);
                        //clas.meetings = [];
                        //clas.meetings[0].days = "Online";
                        newTab.name = "Online";
                        if (tabs == null || tabs == undefined || tabs.length == 0) {
                            tabs.push(newTab);
                        } else {
                            var find = 0;
                            var index = -1;
                            angular.forEach(tabs, function (tab, tabIndex) {
                                if (tab.name == newTab.name) {
                                    find = 1;
                                    index = tabIndex;
                                }
                            })
                            if (find != 1) {
                                tabs.push(newTab);
                            } else if (index != -1) {
                                var find2 = 0;
                                angular.forEach(tabs[index].classes, function (cl, tabIndex) {
                                    if (cl.crn == clas.crn) {
                                        find2 = 1;
                                    }
                                })
                                if (find2 != 1) {
                                    tabs[index].classes.push(clas);
                                    index = -1;
                                }
                            }
                            find = 0;
                        }
                    }
                    angular.forEach(clas.meetings, function (meeting, meetingIndex) {
                        var newTab = {
                            name: meeting.days == "" ? "Online" : meeting.days,
                            classes: [],
                        }
                        newTab.classes.push(clas);
                        newTab.name = SplitAndOrderDays(clas.meetings);
                        if (tabs == null || tabs == undefined || tabs.length == 0) {
                            tabs.push(newTab);
                        } else {
                            var find = 0;
                            var index = -1;
                            angular.forEach(tabs, function (tab, tabIndex) {
                                if (tab.name == newTab.name) {
                                    find = 1;
                                    index = tabIndex;
                                }
                            })
                            if (find != 1 ) {
                                tabs.push(newTab);
                            } else if (index != -1) {
                                var find2 = 0;
                                angular.forEach(tabs[index].classes, function (cl, tabIndex) {
                                    if (cl.crn == clas.crn) {
                                        find2 = 1;
                                    }
                                })
                                if (find2 != 1) {
                                    tabs[index].classes.push(clas);
                                    index = -1;
                                }
                            }
                            find = 0;
                        }
                    })*/
                })
                course.tabs = tabs;
                tabs = [];

            })
            vm.courses = courses;
        }

        function getSchedules() {
            vm.schedules = [];
            angular.forEach(vm.courses, function (course, index) {
                angular.forEach(course.classes, function (clas, clasIndex) {
                    angular.forEach(clas.meetings, function (meeting, meetingIndex) {
                        if (meeting.startTime != null) {
                            var sch = '';
                            if (meeting.startTime >= '0001' && meeting.startTime <= '1200') {
                                sch = 'Morning';
                            } else if (meeting.startTime >= '1201' && meeting.startTime <= '1800') {
                                sch = 'Afternoon';
                            } else {
                                sch = 'Evening';
                            }
                            if (vm.schedules.indexOf(sch) == -1) {
                                vm.schedules.push(sch);
                            }
                        }

                    })
                })

                angular.forEach(course.tabs, function (tab, index) {
                    var uniqueDays = tab.name.split(',');
                    var find = false;
                    angular.forEach(uniqueDays, function (day, index) {
                        vm.day = day;
                        if (vm.schedules.indexOf(day) > -1) {
                            find = true;
                        }
                    })
                    if (!find) {
                        vm.schedules.push(vm.day);
                    }
                })
            })
        }

        vm.formatCoursesTime = function (time) {
            if (time) {
                var hour = time.substring(0, 2);
                var minute = time.substring(2, 4);
                time = hour + ":" + minute;
                time = moment(time, "hh:mm").format('h:mm A');
                return time;
            }
            return time;
        }

        function SplitAndOrderDays(meetings) {
            var name = "";
            var days = { 'M': '1', 'T': '2', 'W': '3', 'R': '4', 'F': '5', 'S': '6', 'U': '7', 'Online': '8', 'TBA': '9' };
            var order = [];
            var aux = [];
            var cont = 0;
            var find = 0;
            var hasClass = false;
            angular.forEach(meetings, function (meeting, index) {
                if (meeting.days) {
                    if (meeting.type != 'EXAM') {
                        hasClass = true;
                        for (var i = 0; i < meeting.days.length; i++) {
                            if (aux.indexOf(meeting.days[i]) == -1) {
                                if (meeting.buildingCode != "ONLINE") {
                                    aux[cont++] = meeting.days[i];
                                } else {
                                    aux[cont++] = 'Online';
                                }
                            }
                        }
                    }
                } else {
                    if (meeting.buildingCode != 'ONLINE') {
                        aux[cont++] = 'TBA';
                    } else {
                        aux[cont++] = 'Online';
                    }

                }
            })
            for (var key in days) {
                if (aux.indexOf(key) != -1) {
                    name += key + ',';
                }
            }
            return name.substring(0, name.length - 1);
        }

        vm.updateDaysFound = function () {
            if (vm.pagedCollection.totaldays != undefined && vm.pagedCollection.totaldays != null) {
                var item = '';
                vm.daysFound = [];
                if (vm.pagedCollection.totaldays.indexOf('M') > -1) {
                    item = 'M';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('T') > -1) {
                    item = 'T';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('W') > -1) {
                    item = 'W';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('R') > -1) {
                    item = 'R';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('F') > -1) {
                    item = 'F';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('S') > -1) {
                    item = 'S';
                    vm.daysFound.push(item);
                }
                if (vm.pagedCollection.totaldays.indexOf('U') > -1) {
                    item = 'U';
                    vm.daysFound.push(item);
                }
            }
        }

        vm.updatePartOfDayFound = function () {
            if (vm.pagedCollection.partOfDay != undefined && vm.pagedCollection.partOfDay != null) {
                var item = '';
                vm.partOfDaysFound = [];
                if (vm.pagedCollection.partOfDay.indexOf('M') > -1) {
                    item = 'M';
                    vm.partOfDaysFound.push(item);
                }
                if (vm.pagedCollection.partOfDay.indexOf('A') > -1) {
                    item = 'A';
                    vm.partOfDaysFound.push(item);
                }
                if (vm.pagedCollection.partOfDay.indexOf('E') > -1) {
                    item = 'E';
                    vm.partOfDaysFound.push(item);
                }
            }
        }

        vm.calculateDaysIndicator = function () {
            vm.daysIndicator = 'Course Section found ';
            if (vm.pagedCollection.length > 1) {
                vm.daysIndicator = 'Course Sections found ';
            }
            

            if (vm.pagedCollection.totaldays != undefined && vm.pagedCollection.totaldays != null) {
                if (vm.daysFound.length > 0) {
                    vm.daysIndicator += 'on';

                    if (vm.daysFound.indexOf('M') > -1) {
                        vm.daysIndicator += ' Monday,';
                    }
                    if (vm.daysFound.indexOf('T') > -1) {
                        vm.daysIndicator += ' Tuesday,';
                    }
                    if (vm.daysFound.indexOf('W') > -1) {
                        vm.daysIndicator += ' Wednesday,';
                    }
                    if (vm.daysFound.indexOf('R') > -1) {
                        vm.daysIndicator += ' Thursday,';
                    }
                    if (vm.daysFound.indexOf('F') > -1) {
                        vm.daysIndicator += ' Friday,';
                    }
                    if (vm.daysFound.indexOf('S') > -1) {
                        vm.daysIndicator += ' Saturday,';
                    }
                    if (vm.daysFound.indexOf('U') > -1) {
                        vm.daysIndicator += ' Sunday ';
                    }
                    if (vm.daysIndicator.substring(vm.daysIndicator.length - 1) == ',') {
                        vm.daysIndicator = vm.replaceCharacterAt(vm.daysIndicator, vm.daysIndicator.length - 1, ' ');
                    }

                    vm.daysIndicator = vm.orderDaysMessage(vm.daysIndicator);

                    if (vm.daysFound.length == 7) {
                        vm.daysIndicator = 'Course Sections found on all days ';
                    } else if (vm.daysFound.indexOf('M') > -1 && vm.daysFound.indexOf('T') > -1 && vm.daysFound.indexOf('W') > -1 && vm.daysFound.indexOf('R') > -1 && vm.daysFound.indexOf('F') > -1) {
                        vm.daysIndicator = 'Course Sections found on all week days ';
                    }
                }
            } 
            if (vm.pagedCollection.partOfDay != undefined && vm.pagedCollection.partOfDay != null) {
                if (vm.partOfDaysFound.length > 0) {
                    if (vm.partOfDaysFound.length == 3) {
                        vm.daysIndicator += 'in all sessions.';
                    } else if (vm.partOfDaysFound.length < 3) {
                        vm.daysIndicator += 'in the';
                        if (vm.partOfDaysFound.indexOf('M') > -1) {
                            vm.daysIndicator += ' Morning,';
                        }
                        if (vm.partOfDaysFound.indexOf('A') > -1) {
                            vm.daysIndicator += ' Afternoon,';
                        }
                        if (vm.partOfDaysFound.indexOf('E') > -1) {
                            vm.daysIndicator += ' Evening,';
                        }
                    }
                    if (vm.daysIndicator.substring(vm.daysIndicator.length - 1) == ',') {
                        vm.daysIndicator = vm.replaceCharacterAt(vm.daysIndicator, vm.daysIndicator.length - 1, '.');
                    }
                    vm.daysIndicator = vm.orderPartOfDaysMessage(vm.daysIndicator);
                }
            }
            
            vm.daysIndicator = vm.replaceCharacterAt(vm.daysIndicator, vm.daysIndicator.length - 1, '.');
        }

        vm.replaceCharacterAt = function (str, index, character) {
            return str.toString().substring(0, index) + character + str.toString().substring(index + character.length);
        }

        vm.orderDaysMessage = function (str) {
            var aux = str.split(' ');
            var possibleComma = aux[aux.length - 3];
            if (possibleComma.substring(possibleComma.length - 1, possibleComma.length) == ',') {
                aux[aux.length - 3] = vm.replaceCharacterAt(possibleComma, possibleComma.length-1,' and')
                str = '';
                angular.forEach(aux, function (item, index) {
                    str += ' ' +item;
                })
            }
            
            return str;
        }

        vm.orderPartOfDaysMessage = function (str) {
            var aux = str.split(' ');
            var possibleComma = aux[aux.length - 2];
            if (possibleComma.substring(possibleComma.length - 1, possibleComma.length) == ',') {
                aux[aux.length - 2] = vm.replaceCharacterAt(possibleComma, possibleComma.length-1,' and')
                str = '';
                angular.forEach(aux, function (item, index) {
                    str += ' ' +item;
                })
            }
            
            return str;
        }
        // M/Tu/Th/W/Sa/Su
        vm.formatDays = function (days) {
            days = days.replace(/M/g, "M/");
            days= days.replace(/T/g, "Tu/");
            days = days.replace(/W/g, "W/");
            days = days.replace(/R/g, "Th/");
            days = days.replace(/F/g, "F/");
            days = days.replace(/S/g, "Sa/");
            days = days.replace(/U/g, "Su/");
            return days.substring(0, days.length - 1);
        }

    }


})();