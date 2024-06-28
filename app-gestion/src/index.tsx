import { Hono } from 'hono'
import { renderer } from './renderer'
/*
const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

export default app
*/

const app = new Hono();

app.use(renderer);

// Definir una ruta para recibir los datos del usuario y guardarlos
app.post('/guardar-datos-usuario', (c) => {
  const { texto1, texto2, texto3 } = c.request.body;
  // Aquí podrías guardar los datos en una base de datos, por ejemplo
  // Pseudo código: guardaDatosUsuario(texto1, texto2, texto3);
  return c.send({ message: 'Datos guardados correctamente' });
});

// Definir una ruta para enviar el correo al administrador
app.post('/enviar-correo-administrador', (c) => {
  // Aquí podrías implementar la lógica para enviar el correo al administrador
  // Pseudo código: enviarCorreoAdministrador(datosUsuario);
  return c.send({ message: 'Correo enviado al administrador' });
});

export default app;