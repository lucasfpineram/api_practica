INSERT INTO memna_areas (id_memna_areas, nombre, email, activo, baja) VALUES
(1, 'Biblioteca', 'santiago@example.com', TRUE, FALSE),
(2, 'Administracion', 'nicolas@example.com', TRUE, FALSE),
(3, 'Comunicaciones', 'roby@example.com', FALSE, TRUE);

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
('santiago@example.com', 'santiagopersonal@example.com', 'Santiago', 'Romero'),
('lucas@example.com', 'lucaspersonal@example.com', 'Lucas', 'Piñera'),
('nicolas@example.com', 'nicopersonal@example.com', 'Nico', 'Portelli'),
('roby@example.com', 'robypersonal@example.com', 'Roby', 'Heymann');

