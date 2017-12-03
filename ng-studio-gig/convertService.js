app.factory("convert", function (){
    
    var timeUnits = ["HOUR","MIMUTE","SECOND"];
    var minuteRate = {
            MINUTE: 1,
            HOUR: 60,
            SECOND: (1/60)
    };

    function convertTime(duration, timeUnits){
        var hr = Math.floor(duration / minuteRate["HOUR"]);
        var mins = Math.floor(duration % minuteRate["HOUR"]);

        return (hr.toString() + "H " + mins.toString() + "m");
    }

    // factory returns
    return {
         displayTime : convertTime
    }
});