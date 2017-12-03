app.factory("Movie", function(convert) {
    
    // Movie Constructor
    function Movie(title, duration, picURL, imdbURL) {
        this.title = title;
        this.duration = duration;
        this.displayTime = convert.displayTime(this.duration, "MIMUTE");
        this.picURL = picURL;
        this.imdbURL = imdbURL;
      /*  this.actor = actor;
        this.years = years;
        
      */
        // this.age = function() {
        //     var currentYear = new Date().getFullYear();
        //     return Math.round(this.km / (currentYear - this.year + 1));
        // };
    }

    return Movie;
})