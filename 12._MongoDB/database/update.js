import db from "./connection.js";

const updateIceCream = db.types.updateOne({name: "Sandwich Is"}, {$set:{ price: 54 } } );