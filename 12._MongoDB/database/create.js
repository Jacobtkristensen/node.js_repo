import db from "./connection.js";

const addIceCream = await db.types.insertOne({name: "Sandwich Is", price: 69.69});

const addNestle = await db.brands.insertOne({company: "Nestle", isCancelled: true})
console.log(addIceCream);
console.log(addNestle)