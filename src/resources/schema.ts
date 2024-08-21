import { serial, varchar, boolean, integer, timestamp, text, pgTable} from 'drizzle-orm/pg-core';
import { json } from 'stream/consumers';


export const memnaAreas = pgTable('memna_areas', {
    idMemnaAreas: serial('id_memna_areas').primaryKey(),
    nombre: varchar('nombre', { length: 50 }).notNull(),
    email: varchar('email', { length: 50 }).notNull().unique(),
    activo: boolean('activo').notNull(),
    baja: boolean('baja').notNull(),
    lastUpdate: timestamp('last_update').notNull().defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const memnaContenidos = pgTable('memna_contenidos', {
    idMemnaContenidos: serial('id_memna_contenidos').primaryKey(),
    fkIdMemnaAreas: integer('fk_id_memna_areas')
        .references(() => memnaAreas.idMemnaAreas),
    año: integer('año').notNull(),
    titulo: text('titulo').notNull(),
    contenido: text('contenido'),
    lastUpdate: timestamp('last_update').notNull().defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const mailJuguete = pgTable('mail_juguete', {
    id: serial('id').primaryKey(),
    mailInstitucion: varchar('mail_institucion', { length: 50 }).unique(),
    mailPersonal: varchar('mail_personal', { length: 50 }).unique(),
    nombre: varchar('nombre', { length: 50 }),
    apellido: varchar('apellido', { length: 50 }),
    lastUpdate: timestamp('last_update').notNull().defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

