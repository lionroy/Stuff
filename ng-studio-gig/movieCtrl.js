app.controller("movieCtrl", function ($scope, $http, Movie) {

    
    $scope.films = [];

    
    $http.get("films.json").then(function mySuccess(response){
        //alert("success" + JSON.stringify(response.data));
        for (var i = 0; i < response.data.length; i++){
        $scope.films.push(new Movie(response.data[i].title, response.data[i].duration, response.data[i].picURL, response.data[i].imdbURL));
        }
      }, function myError(response){
        alert("error" + JSON.stringify(response.data));
      }
    )

});
