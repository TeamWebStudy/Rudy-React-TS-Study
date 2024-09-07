// 1. Basic Types
// string, number, boolean, array, undefined

const joe: string = "Joe"
const age: number = 12
const light: boolean = true
const numbers: number[] = [1,2,3,4]

// 2. Type Alias & Optional
type Name = string
type Age = number
type Player = {
    name: Name,
    age?:  Age // Optional : value or undefined
}

// 3. Function
function playerMakerBefore(name: string) {
    return {
        name:name
    }
}
let jen = playerMakerBefore("Jen")
//jen.age =  age Not Found

function playerMaker(name: string) : Player {
    return {
        name
    }
}

// 4. Tuple
const tuple: [string, number, boolean] = ["name", 23, false]
tuple[0] = "new name"
tuple[2] = true

// 5. Read-only

// var unchangable: readonly number = 10; //'readonly' type modifier is only permitted on array and tuple literal
const readonlyArray: readonly number[] = [1,2,3,4]
// readonlyArray.push(5); // Error : it is a read-only property
const readonlyTuple: readonly [string, number, boolean] = ["name", 23, false]
// readonlyTuple[0] = "other name" // Error : it is a read-only property

type Car = {
    readonly name: Name
    engine: number
}

// 6. undefined / null / any

