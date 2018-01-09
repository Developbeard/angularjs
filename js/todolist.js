angular.module("ToDoList", ["LocalStorageModule"])
    .controller("toDoControl", function($scope, localStorageService){
        if (localStorageService.get("arreBoludo")) {
            $scope.todo = localStorageService.get("arreBoludo");
        } else {
            $scope.todo = [];
        }

        $scope.$watchCollection("todo", function(newValue, oldValue){
            localStorageService.set("arreBoludo", $scope.todo);
        });

        $scope.addActv = function(){
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
        }
        
        $scope.clearActv = function (){
            $scope.todo = [];
            localStorageService.clearAll();
        }
    });