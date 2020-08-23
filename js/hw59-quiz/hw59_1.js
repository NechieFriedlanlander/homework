(function () {
  "use strict";

  function myMap(theArray, action) {
    let newArray = [];
    for (let i = 0; i < theArray.length; i++) {
      newArray[i] = action(theArray[i]);
    }
    return newArray;
  }

  function double(i) {
    return (i += i);
  }

  const numbers = [2, 4, 6, 9];
  const numbers2 = [3, 6, 9, 12];

  const test = myMap(numbers, double);
  console.log(test);

  const test2 = myMap(numbers2, double);
  console.log(test2);
})();
