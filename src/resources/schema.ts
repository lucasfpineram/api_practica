import { integer, serial, text, pgTable, boolean, timestamp, json } from 'drizzle-orm/pg-core';

// EJEMPLO BASE
export const users: any = pgTable('minutas_usuarios', {
    id_usuario: serial('id_minutas_usuarios').primaryKey(),
    nombre: text('nombre').notNull(),
    email: text('email').notNull(),
});

// Tabla: memna_areas
export const memnaAreas = pgTable('memna_areas', {
    id_memna_areas: serial('id_memna_areas').primaryKey(),
    nombre: text('nombre').notNull(),
    email: text('email').notNull().unique(),
    activo: boolean('activo').notNull(),
    baja: boolean('baja').notNull(),
    titulos: json('titulos'),
    last_update: timestamp('last_update'),
    created_at: timestamp('created_at')
});

// Tabla: memna_contenidos
export const memnaContenidos = pgTable('memna_contenidos', {
    id_memna_contenidos: serial('id_memna_contenidos').primaryKey(),
    fk_id_memna_areas: integer('fk_id_memna_areas').references(() => memnaAreas.id_memna_areas, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }),
    periodo: integer('periodo').notNull(),
    titulo: text('titulo').notNull(),
    contenido: text('contenido'),
    last_update: timestamp('last_update'),
    created_at: timestamp('created_at')
});

// Tabla: mail_juguete
export const mailJuguete = pgTable('mail_juguete', {
    id: serial('id').primaryKey(),
    mail_institucion: text('mail_institucion').unique(),
    mail_personal: text('mail_personal').unique(),
    nombre: text('nombre'),
    apellido: text('apellido'),
    last_update: timestamp('last_update'),
    created_at: timestamp('created_at')
});
