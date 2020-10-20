(function () {
  "use strict";

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  let interval;
  
 
    let hour = 12;
    let min = 0;
    let sec = 0;
    let am = true;
    
    const INCREMENT = 1;

  function startClock() {
    interval = setInterval(() => {
        sec += INCREMENT;
         
            get('hours').innerHTML = hour;
        if (min < 10){
            get('minute').innerHTML = `0${min}`;
        } else {
            get('minute').innerHTML = min;
        }
        if (sec >= 60) {
            sec = 0;

            min += INCREMENT;
            if (min >= 60) {
                min = 0;

                hour += INCREMENT;
                if (hour >= 12) {
                    hour = 1;
                }
            }
      
     
           
        }
     
    }, 1000);
  }

    startClock();
})();
