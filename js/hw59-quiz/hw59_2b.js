window.myApp = window.myApp || {};

window.myApp.counter = (function (util) {
  "use strict";

  // SL - oops - this is shared amongst all counters, this would be a great place to keep number of counters
  // its not a good place to keep counters count, as they all share it so all counters will be using the same
  // count - which is obviously wrong
  let count = 0;
  //let incrementCount2 = () => count++;

  // let getCount2 = () => console.log(count);

  util.createCounter = function () {
    count = 0;
    return {
      // SL - no issue but I liked the names in version 1 better, incrementCount, getCount - not counter..
      incrementCounter: () => count++,
      getCounter: () => console.log(count),
    };
  };
  return util;
})(window.myApp.counter || {});
