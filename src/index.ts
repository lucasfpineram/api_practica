import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { CustomError } from './error/custom.error';
import { User } from './middleware/models/user.model';
import { getTableDataFromMySQL } from './handler/getTableDataFromMySQL';
import { CustomResponse } from './handler/models/response.model';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';

// Variables generales en este proyectos
type Variables = {
    user: User
}

// Creo la aplicacion
const app = new Hono<{ Variables: Variables }>()

app.get('/', async (context) => {
    // const customResponse: CustomResponse = new CustomResponse(200, { "worker": "api-memoria-gestion", "status": "OK", "environment": process.env.environment }, true, null, null);
    // return customResponse.formatResponse()
    return context.json({ "user": 1 })
});

app.get('/test', async (context) => {
    
    try {
    // for query purposes
    const queryClient = postgres("postgres://catedra:S3cret@0.0.0.0:5432/catedra");
    const db = drizzle(queryClient);
    // console.log(queryClient);
    const tabla: any = pgTable('lucasnicosanti', {
        id: serial('id'),
        nombre: text('nombre').notNull(),
    });
    const respuesta = await db.select().from(tabla);
    console.log(respuesta);
    } catch (error) {
        // console.log(error)
    }
    return context.json({ "prueba": 5000 })
    // await db.select().from(...)...
})

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
