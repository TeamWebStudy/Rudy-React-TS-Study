// 1. Signature
// JavaScript
function add(a:number, b:number) {
    return a + b;
}

const addA = (a:number, b:number) => a + b

// TypeScript
// Function Signature in TS with Arrow Function
type Add = (a: number, b:number) => number;

const add02: Add = (a, b) => a+b;

const func: Add = (a, b) => {
    if (a > b) {
        return a + b;
    } else {
        return a - b;
    }
}

// 2. Overloading
// 이름만 같고 다른 함수시그니처를 만드는 경우
// TypeScript

type Config = {
    path: string,
    state: object
}

type Push = { // Overloading : Push의 매개변수가 달라질 수 있음을 알려줌
    (path: string): void,
    (config : Config): void
}

const push:Push = (config) => {
    if(typeof config === "string") {  //문자열인 경우
        console.log(config) 
    } else { // Config라는 객체인 경우
        console.log(config.path)
    }
}

type Method = {
    (num : number): number,
    (num01: number, num02: number): number
}

const method1: Method = (param) => {
    return param;
}

const method2: Method = (param, param2?: number) => {
    if (typeof param2 === "number") {
        return param * param2; // number * number case
    } else {
        return param; // single number case
    }
    throw new Error("Invalid input");
}

console.log(method1(10,30)) // 10
console.log(method2(2,3)) // 6
console.log(method2(1)) // 1