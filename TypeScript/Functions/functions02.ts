// Polymorphism (with Generics)

type SuperPrint = {
    <T>(arr:T[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([1,2,3,"Di"])

type AnotherPrint = {
    <T>(arr:T[]):T
}

const anotherPrint: AnotherPrint = (arr) => arr[0]

const aP = anotherPrint<number|boolean>([1,2,false,true])
const bP = anotherPrint([1,2,false,true])
const cP = anotherPrint(["d","a","b","c"])

type Book<E> = {
    title: string
    extraInfo: E
}

type Author = { // Resusable Type
    author:string
}

type AuthorBook = Book<Author>

const originals: AuthorBook = {
    title: 'Originals',
    extraInfo: {
        author: "Adam Grant"
    } 
} 

const second_brain: Book<null> = {
    title: 'second brain',
    extraInfo: null
}

