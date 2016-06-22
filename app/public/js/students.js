var students = angular.module('students', []);

var model = {};
var model2 = {};

students.run(function($http) {
    $http.get("https://wsex1b.herokuapp.com/getAllstud").success(function(students){
        model.studlist = students;
        console.log(model);    
    });
});

students.controller('studentsCtrl', ['$scope', function($scope){
    $scope.allstud = model;
    $scope.id = "";
    $scope.year = "";
}]);