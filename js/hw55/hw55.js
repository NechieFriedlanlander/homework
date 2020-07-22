"use strict";

let letters = ["a", "B", "c"];
let letters2 = ["a", "b", "c"];
let letters3 = ["A", "B", "C"];

//q1
function isEvery(theArray, callback) {
  for (let i = 0; i < theArray.length; i++) {
    if (callback(theArray[i])) {
      return true;
    } else {
      return false;
    }
  }
}

function iscapital(i) {
  if (i === i.toUpperCase()) {
    return true;
  }
}

const tests = isEvery(letters3, iscapital);

console.log("q1 " + tests);

//q2

function isSome(theArray, callback) {
  for (let i = 0; i < theArray.length; i++) {
    if (callback(theArray[i])) {
      return true;
    }
  }
  return false;
}

function iscapital2(i) {
  return i === i.toUpperCase();
}

const test2 = isSome(letters2, iscapital2);

console.log("q2 " + test2);

//q3
function doOnlyIf(theArray, callBack, action) {
  for (let i = 0; i < theArray.length; i++) {
    if (callBack(theArray[i])) {
      action(theArray[i]);
    }
  }
}

function action(i) {
  console.log("this is a capital " + i);
}

const test3 = doOnlyIf(letters, iscapital, action);
