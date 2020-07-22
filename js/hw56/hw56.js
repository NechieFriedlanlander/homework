//question1

const dayOfWeek = (function () {
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

  return {
    getDayName: function (index) {
      return days[index - 1];
    },
    getDayNumber: function (name) {
      return (
        days.findIndex((elem) => elem.toLowerCase() === name.toLowerCase()) + 1
      );
    },
  };
})();

console.log(dayOfWeek.getDayName(2));
console.log(dayOfWeek.getDayNumber("sunday"));

//question2
const LIFE = (function () {
  "use strict";
  let interestRate = 0;
  let years = 0;
  let total = 0;
  return {
    SetInterestRate: function (rate) {
      interestRate = rate;
      return interestRate;
    },
    years: function (year) {
      years = year;

      return years;
    },
    calcInterest: function (amount) {
      total = amount * (1 + interestRate * years);
      return total;
    },
  };
})();

LIFE.SetInterestRate(2);
LIFE.years(5);
console.log(LIFE.calcInterest(5000));
