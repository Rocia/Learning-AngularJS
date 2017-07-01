var app= angular.module(myModule",[])
app.controller("",function($scope,$http){
$http.get("json.txt")
.then(function(response){
$scope.employees = response.data;
});
});