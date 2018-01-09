angular.module("generalModulo", [])
    .controller("httpControl", ["$scope", "$http", function($scope,$http){
        $scope.posts = [];
        $scope.newPost = {};
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                function(response){
                    var data = response.data;
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    
                    console.log(data);
                    $scope.posts = data;
                }
            );
                
        $scope.addPost = function(){
            $http.post("https://jsonplaceholder.typicode.com/posts", {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userid: 1
            })
            .then(
                function(response){
                    var data = response.data;
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                }
            );
        }
        
    }]);