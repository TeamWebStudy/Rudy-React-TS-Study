// Polymorphism

type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
}

const SuperPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

