import db from "./connection.js";

await db.run(`DROP TABLE IF EXISTS users;`);

await db.exec(`
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
`);

await db.run(`INSERT INTO users (email, password) VALUES (
    'johndoe@email.dk', '$2b$14$cUZ5RaldDRh7yythsNIrxeuVlKl8D3aZTOpE61U3WTjgpyYLzQzVK'
)`);

await db.run(`INSERT INTO users (email, password) VALUES (
    'alicedoe@email.dk', '$2b$14$cUZ5RaldDRh7yythsNIrxeuVlKl8D3aZTOpE61U3WTjgpyYLzQzVK'
)`);	