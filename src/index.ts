import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { CustomError } from './error/custom.error';
import { User } from './middleware/models/user.model';
import { memnaAreas } from './resources/schema';
import { CustomResponse } from './handler/models/response.model';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno

// Variables generales en este proyectos
type Variables = {
    user: User
}

// Creo la aplicacion
const app = new Hono<{ Variables: Variables }>()

app.get('/', async (context) => {
    try {
        const queryClient = postgres("postgres://user:pass@postgres:5432/db_api"); //     const queryClient = postgres("postgres://user:pass@db-api-practica
        const db = drizzle(queryClient);
        const respuesta = await db.select().from(memnaAreas);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
    return context.json({ "prueba": 5000 });
});

// Middleware manejo de errores
app.onError(async (error, context) => {
    let customError: CustomError

    if (error instanceof CustomError) {
        customError = error
    } else {
        customError = new CustomError(
            500,
            'Internal Server Error',
            error.message,
            'Internal Server Error',
        )
    }

    // await customError.sendMail(context)
    // await customError.setLog(context)
    const customResponse: CustomResponse = new CustomResponse(customError.errorCode, null, false, customError.errorTitle, customError.errorDescription)
    return customResponse.formatResponse()

})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port
})
