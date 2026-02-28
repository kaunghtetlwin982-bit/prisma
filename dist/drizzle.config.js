"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: "./db/schema.ts",
    out: "./drizzle/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: "localhost",
        user: "your_user",
        password: "your_password",
        database: "product_db",
    },
});
