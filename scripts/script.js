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
	
	                var technologies = [                     { name: "PHP", likes: 0, dislikes: 0 },                     { name: "Android", likes: 0, dislikes: 0 },                     { name: "SQL", likes: 0, dislikes: 0 },                     { name: "AngularJS", likes: 0, dislikes: 0 }                 ];  
                $scope.technologies = technologies;  
                $scope.incrementLikes = function (technology) {                     technology.likes++;                 };  
                $scope.incrementDislikes = function (technology) {                     technology.dislikes++;                 };   
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

