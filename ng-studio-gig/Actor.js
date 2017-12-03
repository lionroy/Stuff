app.factory("Actor", function(){

    // Actor Constructor
    function Actor(fName, lName, years, picURL, imdbURL) {
        this.fName = fName;
        this.lName = lName;
        this.years = years;
        this.picURL = picURL;
        this.imdbURL = imdbURL;
        
        // this.age = function() {
        //     var currentYear = new Date().getFullYear();
        //     return Math.round(this.km / (currentYear - this.year + 1));
        // };
    }  
    

    return Actor;
});