
app.controller("actorsCtrl", function($scope, $http, Actor) {
    
    $scope.actors = [];

    $http.get("bonds.json").then(function mySuccess(response){
      //alert("success" + JSON.stringify(response.data));
      for (var i = 0; i < response.data.length; i++){
      $scope.actors.push(new Actor(response.data[i].fName, response.data[i].lName, response.data[i].years, response.data[i].picURL, response.data[i].imdbURL));
      }
    }, function myError(response){
      alert("error" + JSON.stringify(response.data));
    }
  )


    // $scope.actors = [new Actor ("Barry", "Nelson", 1954, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjU1NzM2NV5BMl5BanBnXkFtZTcwMjM3NTMxOA@@._V1_UY317_CR19,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0625167/"),
    //                 // new Actor ("Bob", "Holness", 1956, "", ""),
    //                 // new Actor ("Bob", "Simmons", 1956, "", ""),
    //                 new Actor ("Sean", "Connery", 1967, "https://images-na.ssl-images-amazon.com/images/M/MV5BMzcwNTM4MzctYjQzMi00NTA2LTljYWItNTYzNmE1MTYxN2RlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UY317_CR16,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000125/"),
    //                 new Actor ("Roger", "Moore", 1964, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3Njg5MDkxNl5BMl5BanBnXkFtZTYwNjczMzU0._V1_UY317_CR1,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000549/"),                   
    //                 new Actor ("David", "Niven", 1967, "https://images-na.ssl-images-amazon.com/images/M/MV5BNTU3NzU3NjIyNF5BMl5BanBnXkFtZTcwNDUxMTMyNA@@._V1_UY317_CR20,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000057/"),
    //                 new Actor ("George", "Lazenby", 1969, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTI4OTMyNV5BMl5BanBnXkFtZTcwMTkyMzY0NA@@._V1_UY317_CR133,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0493872/"),
    //                 // new Actor ("Christopher", "Cazenove", 1973, "", ""),
    //                 new Actor ("Timothy", "Dalton", 1989, "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE5NDA1OTA4NV5BMl5BanBnXkFtZTcwMDE3NDk0NA@@._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0001096/"),
    //                 // new Actor ("Michael", "Jayston", 1990, "", ""),
    //                 new Actor ("Pierce", "Brosnan", 2002, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwMjMxNzM4OV5BMl5BanBnXkFtZTcwNDM5NzkxMw@@._V1_UY317_CR9,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000112/"),
    //                 new Actor ("Daniel", "Craig", 2012, "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0185819/")
    //                 // new Actor ("Toby", "Stephens", 2012, "", "" )               
    //               ];
              

    // $scope.addCar = function() {
    //   $scope.cars.push(new Car("Susita", "Carmel", "1972", 12022939));
    // }
  });