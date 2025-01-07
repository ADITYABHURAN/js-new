//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt(For big values)

const score = 100
const scoreValue = 100.3 //decimal also comes in number 

const isLoggedIn = false  //boolean true or false 
const outsideTemp = null 
let userEmail;   //undefined as it is not stated 

const id = Symbol('123')  //
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n    BigInt example 



// Reference (Non primitive- Can allocate reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array example 
let myObj = {
    name: "hitesh",                             //Object Example 
    age: 22,
}

const myFunction = function(){                  //Function example 
    console.log("Hello world");
}

console.log(typeof anotherId);                //Method used to know a variables Datatype 


// Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3