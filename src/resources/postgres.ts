import { Client } from 'pg'; 
import { drizzle } from 'drizzle-orm/node-postgres'; 
import { memnaAreas } from './schema'; 
import dotenv from 'dotenv';

dotenv.config();

export class Postgres {
    static async getConnection() {
        const client = new Client({
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASS,
            port: parseInt(process.env.POSTGRES_PORT || '5432'), // Default port 
        });

        try {
            await client.connect();
            return client;
        } catch (error: any) {
            throw new Error("Failed to establish PostgreSQL connection: " + error.message);
        }
    }

    static async getAllTableData() {
        const client = await this.getConnection();
        const db = drizzle(client); // instanciamos Drizzle con el cliente
        return await db.select().from(memnaAreas);
    }
};

