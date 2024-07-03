import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/home', (c) => {
  return c.render(<>
  <header>
    <br></br>
  </header>
  <div class="box" id="usuario">
    <img src="/static/logo.png" alt="Logo"></img>
    <h1>Memoria Anual 2024</h1>
    <h3>Ingresar como</h3>
    <button class="user-button">Usuario</button>
    <button class="admin-button">Administrador</button>
  </div>
  </>)
})

app.get('/user', (c) => {
  return c.render(<>
    <header>
        <div class="logo">
          <img src="/static/logo.png" alt="Logo"></img>
        </div>
    </header>
    <main>
        <h1 class="h1-user">Memoria Anual 2024</h1>
        <h3 class="h3-user">Dirección de Sistemas</h3>
        <div class="box" id="objetivosBox">
            <div class="box-content">
                <strong>Objetivos 2024</strong>
                <button class="view-button" onclick="showTextarea('objetivosBox')">Agregar</button>
            </div>
            <div class="text-area-container">
            </div>
        </div>
        <div class="box" id="actividadesBox">
            <div class="box-content">
                <strong>Actividades 2024</strong>
                <button class="view-button" onclick="showTextarea('actividadesBox')">Agregar</button>
            </div>
            <div class="text-area-container">
            </div>
        </div>
        <div class="box" id="proyectosBox">
            <div class="box-content">
                <strong>Proyectos 2025</strong>
                <button class="view-button" onclick="showTextarea('proyectosBox')">Agregar</button>
            </div>
            <div class="text-area-container">
            </div>
        </div>
        <button class="confirm-button">Enviar a Secretaría Académica</button>
    </main>
  </>)
})

export default app