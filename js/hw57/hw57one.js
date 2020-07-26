window.myApp = window.app || {};

window.myApp.utils = (function (util) {
  "use strict";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Shabbos",
  ];

  util.getDayName = (index) => days[index - 1];
  util.getDayNumber = (name) =>
    days.findIndex((elem) => elem.toLowerCase() === name.toLowerCase()) + 1;

  return util;
})(window.myApp.utils || {});

console.log(window.myApp.utils.getDayName(5));
console.log(window.myApp.utils.getDayNumber('monday'));
