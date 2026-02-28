"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.initDb = initDb;
// src/db/client.ts
const mysql2_1 = require("mysql2"); // <-- plain mysql2 (not promise)
const mysql2_2 = require("drizzle-orm/mysql2");
let db;
async function initDb() {
    // Create a pool
    const pool = (0, mysql2_1.createPool)({
        host: "localhost",
        user: "root",
        password: "root",
        database: "product_db",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
    exports.db = db = (0, mysql2_2.drizzle)(pool); // Drizzle expects this type
    return db;
}
