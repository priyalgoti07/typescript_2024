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

const arr: number[] = [20, 21, 22, 23, 24]
console.log("arr", arr);
const arr1: string[] = ["priyal", "riddhi", "abhishek"]

const arr3: Array<boolean> = [true, false]

const arr4: Array<boolean | number | string> = ["priyai", true, 23]

arr4[0] = "riddhi"
console.log("arr4", arr4);

const arr5: [number, number, number] = [25, 23, 25]



