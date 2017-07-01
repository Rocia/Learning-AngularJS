//Create the module 
var myApp = angular.module("myModule", []);  

 
//JSbasic3.html
// Creating the controller and registering with the module all done in one line. 
myApp.controller("myController", function ($scope) {     
$scope.message = "AngularJS Tutorial"; 

var employee = {         
  firstName: 'Ben',         
  lastName: 'Stokes',         
  gender: 'Male' 
  };  
  $scope.employee = employee; 
  
  var employees = [
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },  
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },  
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },
  { firstName: 'Ben', lastName: 'Stokes', gender: 'Male' },
  ]
  $scope.employees = employees; 
  
  var employ = [
	{   name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788, city:"Paris"},                 
	{   name: "David", dateOfBirth: new Date("May 05, 1970"), gender: "Male", salary: 68000, city:"London"},                 
	{   name: "Chris", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000, city:"Paris"},                 
	{   name: "Alex", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000, city:"London"},                 
	{   name: "Amy", dateOfBirth: new Date("December 30, 1983"), gender: "Female", salary: 60000, city:"Paris"},
	{   name: "Amy", dateOfBirth: new Date("November 30, 2003"), gender: "Female", salary: 60000, city:"London"}                         
];
  $scope.employ = employ;
  $scope.employList = "employList.html";   
  
  var countries = [                     
  { name: "UK",                         
  cities: [                             
  { name: "London" },                             
  { name: "Birmingham" },                             
  { name: "Manchester" }                         
  ] 
  },
  { name: "USA",                         
  cities: [                             
  { name: "Los Angeles" },                             
  { name: "Chicago" },                             
  { name: "Houston" }                         
  ]                     
  },                     
  { name: "India",                         
  cities: [                             
  { name: "Hyderabad" },                             
  { name: "Chennai" },                             
  { name: "Mumbai" }                         
  ]                     
  }                 
  ];  
    $scope.countries = countries; 
	
var technologies = [                     
{ name: "PHP", likes: 0, dislikes: 0 },                     
{ name: "Android", likes: 0, dislikes: 0 },                     
{ name: "SQL", likes: 0, dislikes: 0 },                     
{ name: "AngularJS", likes: 0, dislikes: 0 }                 
];  
$scope.technologies = technologies;  
$scope.incrementLikes = function (technology) {                     
technology.likes++;                 
};  
$scope.incrementDislikes = function (technology) {                     
technology.dislikes++;                 
};   


var emp = [                 
{   name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788, city:"Paris"},                 
{   name: "David", dateOfBirth: new Date("May 05, 1970"), gender: "Male", salary: 68000, city:"London"},                 
{   name: "Chris", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000, city:"Paris"},                 
{   name: "Alex", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000, city:"London"},                 
{   name: "Amy", dateOfBirth: new Date("December 30, 1983"), gender: "Female", salary: 60000, city:"Paris"},
{   name: "Amy", dateOfBirth: new Date("November 30, 2003"), gender: "Female", salary: 60000, city:"London"}                         
];  
    $scope.emp = emp;
	$scope.SortColumn = "name";
	$scope.rowCount = 3;  
	$scope.reverseSort = false;  
	$scope.sortData = function(column){
	$scope.reverseSort = ($scope.sortColumn == column) ? 
		!$scope.reverseSort:false;
	$scope.sortColumn = column;             
	}  
    $scope.getSortClass = function (column) {  
        if ($scope.sortColumn == column) {                     
		return $scope.reverseSort                       
		? 'arrow-down'                       
		: 'arrow-up';                 
		}  
        return '';             
		}    

	
});  

//JSbasic4.html
myApp.controller("myCont", function ($scope) {
  var employee = {         
  firstName: 'Ben',         
  lastName: 'Stokes',         
  gender: 'Male' 
  };  
  $scope.employee = employee; 
});  

//JSbasic5.html
myApp.controller("myCon", function ($scope) {
  var country = {         
  Country: 'France',         
  Capital: 'Paris',         
  Flag: 'France.png' 
  };  
  $scope.country = country; 
});  

