// 1. Signature
// JavaScript
function add(a, b) {
    return a + b;
}
var addA = function (a, b) { return a + b; };
var add02 = function (a, b) { return a + b; };
var func = function (a, b) {
    if (a > b) {
        return a + b;
    }
    else {
        return a - b;
    }
};
var push = function (config) {
    if (typeof config === "string") { //문자열인 경우
        console.log(config);
    }
    else { // Config라는 객체인 경우
        console.log(config.path);
    }
};
var method1 = function (param) {
    return param;
};
var method2 = function (param, param2) {
    if (typeof param2 === "number") {
        return param * param2; // number * number case
    }
    else {
        return param; // single number case
    }
    throw new Error("Invalid input");
};
console.log(method1(10, 30)); // 10
console.log(method2(2, 3)); // 6
console.log(method2(1)); // 1
