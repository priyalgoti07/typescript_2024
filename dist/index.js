"use strict";
let a = 25;
let namebo = "Priyal";
console.log(a);
function printStatusCode(code) {
    console.log(`My status code is ${code.toUpperCase()}.`); // error: Property 'toUpperCase' does not exist ontype 'string | number'.
}
printStatusCode('priyal');
const abc = (n, m) => {
    return n + m;
};
const arr = [20, 21, 22, 23, 24];
console.log("arr", arr);
const arr1 = ["priyal", "riddhi", "abhishek"];
const arr3 = [true, false];
const arr4 = ["priyai", true, 23];
arr4[0] = "riddhi";
console.log("arr4", arr4);
const arr5 = [25, 23, 25];
