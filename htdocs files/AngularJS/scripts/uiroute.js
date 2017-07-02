var app = angular.module("Demo", ["ui.router"])
.config(function ($urlMatcherFactoryProvider) {
$urlMatcherFactoryProvider.caseInsensitive(true);
}) 
.config(function ($stateProvider) {
$stateProvider
.state("home", {
url: "/home",
templateUrl: "Templates/home.html",
controller: "homeController",
controllerAs: "homeCtrl"
})
.state("courses", {
url: "/courses",
templateUrl: "Templates/courses.html",
controller: "coursesController",
controllerAs: "coursesCtrl"
})
.state("students", {
url: "/students",
templateUrl: "Templates/students.html",
controller: "studentsController",
controllerAs: "studentsCtrl",
resolve: {
studentslist: function ($http, $location) {
return $http.get("service/student/list/")

.then(function (response) {
return response.data;
})
}
}
})
.state("studentDetails", {
url:"/students/:id",
templateUrl: "Templates/studentDetails.html",
controller: "studentDetailsController",
controllerAs: "studentDetailsCtrl"
})

})
.config(function ($urlRouterProvider) {
$urlRouterProvider.otherwise("/home");
})
.config(['$locationProvider', function($locationProvider) {
$locationProvider.hashPrefix('');
}])

.controller("homeController", function($state){
	this.message = "Home Page Cool";
})

.controller("coursesController", function($state){
	this.courses = ["PHP", "Android", "Angular JS", "SQL Server"];
})

.controller("studentsController", function (studentslist, $state, $location) {
var vm = this;
vm.studentSearch = function () {
if (vm.name)
$location.url("/studentsSearch/" + vm.name)
else
$location.url("/studentsSearch")
}
vm.reloadData = function () {
$state.reload();
}
vm.students = studentslist; 
})

.controller("studentDetailsController", function ($http, $stateParams) {
var vm = this;
$http({
url: "service/student/list/"+$stateParams.id+"/",
method: "get",
//params: { id: $stateParams.id }
}).then(function (response) {
vm.student = response.data;
})
})