import db from "./connection.js";
// assignment: Create volcanoes table, define the SQL below

const isDeleteMode = process.argv.includes('delete');
console.log(isDeleteMode);

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes`);
    await db.run(`DROP TABLE IF EXISTS villages`);
}

await db.exec(`
CREATE TABLE IF NOT EXISTS volcanoes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN,
    type TEXT CHECK( type IN ('Caldera', 'Underwater', 'Underground') )
)
`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcano_id INTEGER,
    FOREIGN KEY (volcano_id) REFERENCES villages (id)
)`);

//DML
if (isDeleteMode) {
await db.run(`INSERT INTO volcanoes (name, is_active, type)
VALUES ('Vesuvius', 'false', 'Caldera')
`);
await db.run(`INSERT INTO volcanoes (name, is_active, type)
        VALUES ('Mount Etna', 'true', 'Underground')
`);
await db.run(`INSERT INTO villages (name, volcano_id) VALUES ('Village 1', 1)`);
await db.run(`INSERT INTO villages (name, volcano_id) VALUES ('Village 2', 2)`);
}