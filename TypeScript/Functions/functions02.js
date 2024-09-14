// Polymorphism (with Generics)
var superPrint = function (arr) {
    arr.forEach(function (i) { return console.log(i); });
};
superPrint([1, 2, 3, 4]);
superPrint([1, 2, 3, "Di"]);
var anotherPrint = function (arr) { return arr[0]; };
var aP = anotherPrint([1, 2, false, true]);
var bP = anotherPrint([1, 2, false, true]);
var cP = anotherPrint(["d", "a", "b", "c"]);
var originals = {
    title: 'Originals',
    extraInfo: {
        author: "Adam Grant"
    }
};
var second_brain = {
    title: 'second brain',
    extraInfo: null
};
