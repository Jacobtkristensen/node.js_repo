const myName= "Jacob";


const me = {}
me.name = myName;

//const is constant NOT in the value but in the assignment
//meaning that it cannot be reassigned and thus also HAS to be assigned

//SyntaxError: Missing initializer in const declaration
//const test;

const hobbies = ["coding", "reading", "gaming"];
hobbies.push("eating");

//hobbies = [];
//hobbies = "";

me.hobbies = hobbies;

console.log(me);

// Types in JS: number, string, boolean, object, bigint, undefined, null, symbol
// Object: object, arrays, date

//type coercion: JS will try to convert types to make the operation work
// 2 == "2" -> true
// 2 === "2" -> false

// we ALWAYS use strict equality checks
// === / !==