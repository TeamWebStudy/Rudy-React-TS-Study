// 주석 
/*  
    주석1
    주석2
*/

//변수, 상수 선언
var a = 10;
let b = 20;
const c = 30;

a = 100.001;
b = '200'; // 다른 자료형의 값이 들어와도 할당할 수 있다.
//c = 300; // TypeError: Assignment to constant variable.

console.log(a, b, c);

//연산자
// 거듭제곱 연산자
console.log("10 ^ 2 = ", 10**2);

//반복문

//조건문
if (true) {
    console.log("True");
}


//함수

//여러 자료 형태 (열거형, 튜플, 배열, 딕셔너리, 집합, 구조체)

//클래스

//인터페이스

//타입 고급 제너릭

// Why Not JavaScript

console.log([1,2,3,4] + false)

function divide(a, b) {
	return a / b
}

console.log(divide("Hello"))
//NaN

const nico = {name:"nico"}
//nico.hello()