CREATE TABLE IF NOT EXISTS memna_areas (
    id_memna_areas SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    activo BOOLEAN NOT NULL,
    baja BOOLEAN NOT NULL,
    titulos JSON,
    last_update TIMESTAMP,
    created_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS memna_contenidos (
    id_memna_contenidos SERIAL PRIMARY KEY,
    fk_id_memna_areas INT,
    año INT NOT NULL,
    titulo TEXT NOT NULL,
    contenido TEXT,
    last_update TIMESTAMP,
    created_at TIMESTAMP,  
    FOREIGN KEY (fk_id_memna_areas) REFERENCES memna_areas(id_memna_areas) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS mail_juguete (
    id SERIAL PRIMARY KEY,
    mail_institucion VARCHAR(50) UNIQUE,
    mail_personal VARCHAR(50) UNIQUE,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    last_update TIMESTAMP,
    created_at TIMESTAMP 
);

select * from memna_areas;
select * from memna_contenidos;
select * from mail_juguete;
