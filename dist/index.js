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
// ARRAY TYPE
const arr = [20, 21, 22, 23, 24];
console.log("arr", arr);
const arr1 = ["priyal", "riddhi", "abhishek"];
const arr3 = [true, false];
const arr4 = ["priyai", true, 23];
arr4[0] = "riddhi";
console.log("arr4", arr4);
const arr5 = [25, 23, 25];
// const form: newObj = {
//     height: 5.2,
//     weight: 50,
//     surname: "Ghevariya",
//     abcFun: (n, m) => {
//         console.log("multipication", n * m);
//     }
// }
// const form1: newObj = {
//     height: 5.6,
//     weight: '50kg',
//     surname: "goti",
//     abcFun: (n, m) => {
//         console.log("multipication", n * m);
//     }
// }
// form1.abcFun(5, 60)
// console.log("newObj", form, form1);
const obj = {
    gender: 'true',
    height: 350,
    weight: 450
};
const obj1 = {
    // gender: 'true',
    height: 350,
    weight: 450
};
console.log("obj", obj);
const ABC = (...m) => {
    return m;
};
ABC(25, 26, 27, 28, 29, 30);
// ----------------->Object with funcatiom
function objFunc(n) {
    return 45;
}
const getData = (product) => {
    console.log(product);
    // product.id = "25"
};
const productOne = {
    name: "macbook",
    stock: 48,
    price: 9888888,
    photo: "sampallphotourl",
    id: "skdjksdjfkdsjfkds"
};
getData(productOne);
// getData({
//     name: "macbook",
//     stock: 48,
//     price: 9888888,
//     photo: "saksjdk"
// })
// Never Type
// const err = new Error()
const errorHandler = () => {
    throw new Error();
};
const errorRet = () => {
    return new Error();
};
// const mood: thememode = "dsssk"
// --------------------------- classes
class Player {
    constructor(height, weight) {
        this.height = 34;
        this.weight = 50;
        this.height = height;
        this.weight = weight;
    }
}
const priyal = new Player(100, 52);
// ------------------------------->Type Asseration
// // three type of type asseration
// // 1>
// const btnClick1 = document.getElementById("btn") as HTMLHtmlElement
// // 2>
// const btnClick2 = <HTMLHtmlElement>document.getElementById("btn")
// // 3>
// const btnClick3 = document.getElementById("btn")!
// btnClick1.onclick
// const img = document.getElementById("myimgk") as HTMLImageElement
// img.src
const form = document.getElementById("myform");
const formInput = document.querySelector("form > input");
const showIncrement = document.getElementById("showData");
console.log("formInput", formInput, showIncrement);
form.onsubmit = (e) => {
    e.preventDefault();
    const NuType = Number(formInput.value);
    console.log("value of input value", typeof NuType, NuType + 20);
    const incValue = NuType + 20;
    console.log("incValue", typeof incValue);
    showIncrement.textContent = incValue.toString();
};
const myObj = {
    name: "priyal",
    email: "priyal@gmail.com"
};
const getName = () => {
    return myObj["name"];
};
const getEmail = () => {
    return myObj["email"];
};
const getdata = (key) => {
    return myObj[key];
};
