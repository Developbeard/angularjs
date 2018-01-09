angular.module("general", [])
    /*.filter("removeHtml",function(){
        return function (texto){
            return String(texto).replace("/<[˄>]+>/gn", " ")
        }
    })*/
    .controller("filtresController", function($scope){
        $scope.costo = 300;
    });