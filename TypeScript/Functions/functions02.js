// Polymorphism (with Generics)
var superPrint = function (arr) {
    arr.forEach(function (i) { return console.log(i); });
};
var anotherPrint = function (arr) { return arr[0]; };
superPrint([1, 2, 3, 4]);
superPrint([1, 2, 3, "Di"]);
var d = anotherPrint([1, 2, false, true]);
