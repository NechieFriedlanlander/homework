window.myApp = window.myApp || {};

window.myApp.counter = (function (util) {
  "use strict";
  let count = 0;
  //let incrementCount2 = () => count++;

  // let getCount2 = () => console.log(count);

  util.createCounter = function () {
    count = 0;
    return {
      incrementCounter: () => count++,
      getCounter: () => console.log(count),
    };
  };
  return util;
})(window.myApp.counter || {});
