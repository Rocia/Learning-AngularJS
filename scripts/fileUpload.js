angular.module('myApp', [])
.controller('myCtrl', ['$scope', function($scope) {
    $('#fileSelected').on('click', function (evt) {
    var files = $(evt.currentTarget).get(0).files;

    if(files.length > 0) {
        $('#fileName').text(files[0].name);
        $('#fileSize').text(files[0].size);
        $('#filePath').text($('#fileSelected').val());
        alert (fileName,fileSize,filePath);
    }
    });
}]);
