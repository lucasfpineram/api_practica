// const oracledb = require('oracledb');
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import OracleDB, { BindParameters, Connection, ConnectionAttributes, ExecuteOptions, PoolAttributes, queueMax } from "oracledb";



export const PoolConnectionAlias = "UTDT-Pool-Connections";

export const oracleDBConfig: PoolAttributes = {
    user: "apidatospersonales",
    password: "DP$54wehj45po09",
    connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.37.121)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=utprdesa.utdt.local)))",
    poolAlias: PoolConnectionAlias,
    queueMax: -1
};

/**
 * Esta clase administra la conexion con oracle
 *
 * No olvidar inicializar previamente a ejecutar una consulta con el método initialize()
 *
 * No olvidar cerrar conexion con el método closeConnection()
 */
export class OracleConnectionManager {
    private static pool: OracleDB.Pool;

    public static initialize() {

        OracleConnectionManager.pool = OracleDB.getPool(PoolConnectionAlias);
    }

    private static defaultOptions = {
        outFormat: OracleDB.OUT_FORMAT_OBJECT, // query result format
        autoCommit: true,
        queueMax: 2000
    };

    constructor() { }

    public static async getConnection() {

        const oracleDBConfig: PoolAttributes = {
            user: "utdt",
            password: "mUo2NzErma3JPY",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.37.112)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=utprdev.utdt.local)))",
            poolAlias: PoolConnectionAlias,
            queueMax: -1
        }
        console.log("Obteniendo conexión a OracleDB");
        let pool = await OracleDB.createPool(oracleDBConfig);
        pool.getConnection().then((connection) => {
            console.log("Conexión a OracleDB exitosa");
            return connection;
        }).catch((error) => {
            console.log(error)
            throw Error(error)
         })
    }

    public static async executeQuery(connection: OracleDB.Connection, query = "", binds: BindParameters = {}, options: ExecuteOptions = this.defaultOptions) {
        if (connection) {
            return connection?.execute(query, binds, options);
        } else {
            throw new Error("Inicializar conexión para conectarse a OracleDB");
        }
    }

    public static async closeConnection(connection: OracleDB.Connection) {
        if (connection) {
            await connection.close(); // Put the connection back in the pool
        }
    }
}
