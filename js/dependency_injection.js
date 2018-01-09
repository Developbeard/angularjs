angular.module("generalModulo", [])
    .controller("comentControl", ["$scope",  function($scope){
        $scope.name = "Rodrigo";
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario:"comentario 1",
                username:"usuario 1"
            },
                
            {
                comentario:"comentario 2",
                username:"usuario 2"
            }

        ];
        
        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        }
    }]);