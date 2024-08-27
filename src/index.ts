type UserName = string | number
let a: UserName = 25
let namebo: UserName = "Priyal"
console.log(a);


function printStatusCode(code: string) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
}

printStatusCode('priyal')
//Alias for this method
type UsName = (n: string, m: string) => string
const abc: UsName = (n, m) => {
    return n + m
}
// ARRAY TYPE
const arr: number[] = [20, 21, 22, 23, 24]
console.log("arr", arr);
const arr1: string[] = ["priyal", "riddhi", "abhishek"]

const arr3: Array<boolean> = [true, false]

const arr4: Array<boolean | number | string> = ["priyai", true, 23]

arr4[0] = "riddhi"
console.log("arr4", arr4);

const arr5: [number, number, number] = [25, 23, 25]



// OBJECT TYPE

// type Obj = {
//     height: number,
//     weight: number,
//     gender?: string
// }

interface Obj {
    height: number,
    weight: number | string,
    gender?: string
}

type FunType = (n: number, m: number) => void

interface newObj extends Obj {
    surname: string,
    abcFun: FunType
}

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

const obj: Obj = {
    gender: 'true',
    height: 350,
    weight: 450
}
const obj1: Obj = {
    // gender: 'true',
    height: 350,
    weight: 450
}

console.log("obj", obj);


//---------------------> FUNCTION

// type Functype = (n: number, m: number, l?: number) => number | string

// const ABC: Functype = (n, m, l) => {
//     if (typeof l === "undefined") return n * m

//     return n * m * l
// }

// ABC(25, 30)


// /----------------------->/Default Parameter
// const ABC: Functype = (n, m, l = 20) => {

//     return n * m * l
// }k

// ABC(25, 30)

// ----------------------------->//Rest operator

type Functype = (...m: number[]) => number[]

const ABC: Functype = (...m) => {
    return m
}

ABC(25, 26, 27, 28, 29, 30)

// ----------------->Object with funcatiom


function objFunc(n: number): number {
    return 45
}

// ------------------------------->Function With object
interface product {
    name: string, stock: number, price: number, photo: string, readonly id: string
}
type GetDataType = (product: product) => void


const getData: GetDataType = (product) => {
    console.log(product)
    // product.id = "25"
}

const productOne: product = {
    name: "macbook",
    stock: 48,
    price: 9888888,
    photo: "sampallphotourl",
    id: "skdjksdjfkdsjfkds"
}

getData(productOne)

// getData({
//     name: "macbook",
//     stock: 48,
//     price: 9888888,
//     photo: "saksjdk"
// })

// Never Type

// const err = new Error()

const errorHandler = (): never => {
    throw new Error()
}

const errorRet = (): Error => {
    return new Error()
}

type thememode = "light " | "dark"

// const mood: thememode = "dsssk"

// --------------------------- classes

class Player {
    height = 34;
    weight = 50;

    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight
    }
}

const priyal = new Player(100, 52)


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


const form = document.getElementById("myform") as HTMLFormElement

const formInput = document.querySelector("form > input") as HTMLInputElement

const showIncrement = document.getElementById("showData") as HTMLElement

console.log("formInput", formInput, showIncrement);


form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault()
    const NuType = Number(formInput.value)
    console.log("value of input value", typeof NuType, NuType + 20);
    const incValue = NuType + 20
    console.log("incValue", typeof incValue);
    showIncrement.textContent = incValue.toString()
}



interface Person {
    [key: string]: string
}

const myObj: Person = {
    name: "priyal",
    email: "priyal@gmail.com"
}

const getName = (): string => {
    return myObj["name"]
}
const getEmail = (): string => {
    return myObj["email"]
}
const getdata = (key: string): string => {
    return myObj[key]
}