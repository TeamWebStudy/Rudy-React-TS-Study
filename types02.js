// About Nothing
var car01 = { engine: null };
if (car01.name === null) {
    console.log("name is null");
}
if (car01.name === undefined) {
    console.log("name is undefined");
}
if (car01.engine === null) {
    console.log("engine is null");
}
if (car01.engine === undefined) {
    console.log("engine is undefined");
}
// null == undefined 는 참이다. 
// 엄격하게 구분하기 위해서는 === 연산자를 써야 한다.
// 2. any
var everything = [1, 2, "r", true];
var anything = 22.3323;
console.log(everything + anything);
