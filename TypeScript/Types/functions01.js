// 1. Signature
// JavaScript
function add(a, b) {
    return a + b;
}
var addA = function (a, b) { return a + b; };
var add02 = function (a, b) { return a + b; };
var push = function (config) {
    if (typeof config === "string") { //문자열인 경우
        console.log(config);
    }
    else { // Config라는 객체인 경우
        console.log(config.path);
    }
};
