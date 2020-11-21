const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const { PORT } = require('./config');

const app = express();
// transformar la peticiones POST a formato Json
app.use(bodyParser.json());
app.use(cors());

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});