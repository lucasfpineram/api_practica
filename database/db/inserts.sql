INSERT INTO memna_areas (id_memna_areas, email, activo, baja, options) VALUES
(1, 'santiago@example.com', TRUE, FALSE, JSON_OBJECT('setting1', 'value1')),
(2, 'nicolas@example.com', TRUE, FALSE, JSON_OBJECT('setting2', 'value2')),
(3, 'roby@example.com', FALSE, TRUE, JSON_OBJECT('setting3', 'value3'));

INSERT INTO memna_contenidos (fk_id_memna_areas, año, titulo, contenido) VALUES
(1, 2023, 'objetivos', 'Contenido relacionado con los objetivos del área 1'),
(1, 2024, 'actividades', 'Contenido relacionado con las actividades del área 1'),
(2, 2023, 'proyectos', 'Contenido relacionado con los proyectos del área 2'),
(3, 2022, 'objetivos', 'Contenido relacionado con los objetivos del área 3'),
(1, 2023, 'graduacion', 'Contenido relacionado con la graduación del área 1'),
(2, 2023, 'equipos representativos', 'Contenido relacionado con los equipos representativos del área 2'),
(3, 2022, 'Deportes individuales', 'Contenido relacionado con deportes individuales del área 3'),
(1, 2024, 'asistencia a cursos y exposiciones', 'Contenido relacionado con la asistencia a cursos y exposiciones del área 1');

INSERT INTO mail_juguete (mail_institucion, mail_personal, nombre, apellido) VALUES
('santiago@example.com', 'personal1@example.com', 'Santiago', 'Romero'),
('lucas@example.com', 'personal2@example.com', 'Lucas', 'Piñera'),
('nicolas@example.com', 'personal3@example.com', 'Nico', 'Portelli');
('roby@example.com', 'personal3@example.com', 'Roby', 'Heymann');