import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';

export const users: any = pgTable('minutas_usuarios', {
    id_usuario: serial('id_minutas_usuarios').primaryKey(),
    nombre: text('nombre').notNull(),
    email: text('email').notNull(),
});
