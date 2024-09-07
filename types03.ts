let a : unknown;

// let b = a + 1; // Error : 'a' is of type 'unknown'.

if (typeof a == 'number') {
    let b = a + 1;
}

// void : is for function that return anything

// never : is for function never returns

function fail(msg: string): never {
    throw new Error(msg);
}

try {
    fail("something wrong")
} catch {
    console.log("Error Detected") // Error Detected is executed
}

function hello(name: number|string) {
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name //name is never,
        // this scope never executed after function called
        // Error Exceptions
    }
}