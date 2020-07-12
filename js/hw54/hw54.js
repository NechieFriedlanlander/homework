'use strict'

//q1
function multiply(a, b) {
    let c = a * b
    console.log(c);
};

multiply(6, 3);
multiply(5, 7);
multiply(4, 23);

//q2
function getMultiplier() {
    return function (d, e) {
        let f = d * e
        console.log(f);
    }
};
let multiplier = getMultiplier();
multiplier(6, 4)

//q3
function getMultiplier2(g) {
    return function (h) {
        let i = g * h
        console.log(i);
    }
};
let multiplyByFive = getMultiplier2(5);
multiplyByFive(4)

let multiplyByTen = getMultiplier2(10);
multiplyByTen(4)