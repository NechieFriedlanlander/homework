window.myApp = window.myApp || {};

window.myApp.counter = (function (util) {
  "use strict";
  let count = 0;

  util.incrementCount = () => count++;
  util.getCount = () => console.log(count);

  return util;
})(window.myApp.counter || {});
