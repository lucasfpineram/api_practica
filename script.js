const { Hono } = require('hono');
const { Sequelize, DataTypes } = require('sequelize');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

const app = new Hono();

// Conectar a PostgreSQL con Sequelize
const sequelize = new Sequelize('postgres://username:password@localhost:5432/mywebapp');

// Definir los modelos
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

const Text = sequelize.define('Text', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('draft', 'submitted'),
    defaultValue: 'draft',
  },
});

// Sincronizar los modelos con la base de datos
sequelize.sync();

// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Rutas y lógica del servidor
app.post('/submit-text', async (ctx) => {
  const { userId, content } = await ctx.req.json();
  const text = await Text.create({ userId, content, status: 'draft' });
  ctx.res.body = 'Texto guardado como borrador.';
});

app.post('/finalize-text', async (ctx) => {
  const { textId } = await ctx.req.json();
  const text = await Text.findByPk(textId);
  text.status = 'submitted';
  await text.save();

  const admin = await User.findOne({ where: { isAdmin: true } });
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: admin.email,
    subject: 'Nuevo texto enviado',
    text: `El usuario ha enviado un nuevo texto: ${text.content}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      ctx.res.status = 500;
      ctx.res.body = error.toString();
    } else {
      ctx.res.body = 'Texto enviado y correo de notificación enviado al administrador.';
    }
  });
});

app.get('/texts', async (ctx) => {
  const texts = await Text.findAll({ where: { status: 'submitted' } });
  ctx.res.body = texts;
});

app.get('/download-text/:textId', async (ctx) => {
  const { textId } = ctx.req.param();
  const text = await Text.findByPk(textId);

  const doc = new PDFDocument();
  ctx.res.headers.set('Content-Disposition', 'attachment; filename=text.pdf');
  ctx.res.headers.set('Content-Type', 'application/pdf');
  doc.text(text.content);
  doc.pipe(ctx.res);
  doc.end();
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
