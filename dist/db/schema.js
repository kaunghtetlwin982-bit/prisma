"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.serial)("id").primaryKey(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }),
    age: (0, mysql_core_1.int)("age"),
});
