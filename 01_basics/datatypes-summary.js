//premitive
//7 types : String, Number, boolean, null, undefined, Symbol, Bigint
//string

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3481684649845561616n

//refrence type||(Nonpremitive)

//Array, Objects, Functions

const heros = ['Shaktiman', 'naagraj','doga']

let myObj = {
    name : "kailash",
    age : 40,
}

const myFunction = function(){

    console.log("hello world")

}

//https://262.ecma-international.org/5.1/#sec-11.4.3




// Memory type : Stack(primitive), Heap (Non Primitive)


let myYoutubename = "kailash@gmail.com"

let anotherName = myYoutubename

anotherName = "javascriptCode"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: "kailash@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kailash@google.com"

console.log(userOne.email)
console.log(userTwo.email)