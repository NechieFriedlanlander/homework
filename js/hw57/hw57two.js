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

  util.stringCaseInsensitiveEquals = (elem, name) =>
    elem.toLowerCase() === name.toLowerCase();

  return util;
})(window.myApp.utils || {});

console.log(window.myApp.utils.stringCaseInsensitiveEquals("hello", "Hello"));
