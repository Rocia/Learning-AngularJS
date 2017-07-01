//Create the module 
var myApp = angular.module("myModule", []);  

//JSbasic3.html
// Creating the controller and registering with the module all done in one line. 
myApp.controller("myController", function ($scope) {     
$scope.message = "AngularJS Tutorial"; 
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

