var a;
// let b = a + 1; // Error : 'a' is of type 'unknown'.
if (typeof a == 'number') {
    var b = a + 1;
}
// void : is for function that return anything
// never : is for function never returns
function fail(msg) {
    throw new Error(msg);
}
try {
    fail("something wrong");
}
catch (_a) {
    console.log("Error Detected"); // Error Detected is executed
}
function hello(name) {
    if (typeof name === "string") {
        name;
    }
    else if (typeof name === "number") {
        name;
    }
    else {
        name; //name is never,
        // this scope never executed after function called
        // Error Exceptions
    }
}
