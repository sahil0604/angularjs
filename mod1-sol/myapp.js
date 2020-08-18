(function () {
'use strict';
    
angular.module('MyApp', [])
.controller('Controller', function ($scope) {
    $scope.output="";
    $scope.check= function(){
    var N = count($scope.launch) + 1;
    if(N==1) {
        $scope.output = "Please enter data first"
    }
    else if (N > 1 && N <= 3) {
        $scope.output= "Enjoy!";
    }
    else {
        $scope.output = "Too much!";
    }
    };
    var count = function(string){
        var c=0;
        if(string == undefined || string =="") {
            return c;
        }
        else {
        for (var i=0; i < string.length; i++) {
            if(string[i]==",") {
                c+=1;
            }
        }
        return c;
     }
    };
});
})();
    