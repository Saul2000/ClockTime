(function(){
  var updateHour = function(){
      var date = new Date(),
          hours = date.getHours(),
          ampm,
          minutes = date.getMinutes(),
          seconds = date.getSeconds(),
          weekDay = date.getDay(),
          day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear();

    var pHours = document.getElementById('hours'),
        pAMPM = document.getElementById('ampm'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pWeekDay = document.getElementById('week-day'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year');
    
    // SHOW WEEK DAY
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    pWeekDay.textContent = week[weekDay];

    // SHOW MONTH DAY
    pDay.textContent = day;

    // SHOW MONTH
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    pMonth.textContent = months[month];

    pYear.textContent = year;

    if (hours >= 12){
        hours = hours - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if (hours == 0){
        hours = 12;
    }

    // SHOW HOURS
    pHours.textContent = hours;

    // SET AM || PM
    pAMPM.textContent = ampm;
    
    // SHOW MINUTES
    if(minutes < 10){minutes = "0"+minutes;}
    pMinutes.textContent = minutes;
    
    // SHOW SECONDS
    if(seconds < 10){seconds = "0"+seconds;}
    pSeconds.textContent = seconds;

  };
  
  updateHour();
  var interval = setInterval(updateHour, 1000);
  
}())