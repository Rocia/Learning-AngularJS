var app = angular.module("Demo", ["ngRoute"])             
.config(function ($routeProvider) {                 
$routeProvider                     
.when("/home", {                         
templateUrl: "Templates/home.html",                         
controller: "homeController"  
caseInsensitiveMatch: true                   
})                     
.when("/courses", {                         
templateUrl: "Templates/courses.html", 
controller: "coursesController"   
caseInsensitiveMatch: true                                  
})                     
.when("/students", {                         
templateUrl: "Templates/students.html",                         
controller: "studentsController"
caseInsensitiveMatch: true                   
                     
})             
})  
.config(['$locationProvider', function($locationProvider) {     
$locationProvider.hashPrefix('');    
}])             
.controller("homeController", function ($scope) {                 
$scope.message = "Home Page";             
})             
.controller("coursesController", function ($scope) {                 
$scope.courses = ["PHP", "Android", "Angular JS", "SQL Server"];             
})              
.controller("studentsController", function ($scope, $http) {                  
$http.get("data.php")                                         
.then(function (response) {                                             
$scope.students = response.data;                                         
})              
}) 