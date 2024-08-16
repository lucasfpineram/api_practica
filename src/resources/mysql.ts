
import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import { eq, lt, gte, ne } from 'drizzle-orm';
import { users } from './schema';
import mysql from "mysql2/promise";

export class MySQL {
    static async getConnection() {
        try {
            return await mysql.createConnection({
                host: process.env.mysql_host,
                user: process.env.mysql_user,
                database: process.env.mysql_db,
                password: process.env.mysql_pass
            });
        } catch (error: any) {
            throw new Error("Failed to establish MySQL connection: " + error.message);
        }
    }

    static async getTableData() {
        const db = drizzle(await this.getConnection());
        return await db.select().from(users).where(lt(users.id_usuario, 10));
    }
}
