// Imports
const cors = require("cors");
const helmet = require("helmet"); // Corrección: Se importa el paquete 'helmet' en lugar de 'cors'
const morgan = require("morgan"); // Corrección: Se importa el paquete 'morgan' en lugar de 'cors'
const express = require("express");
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Configuración del motor de plantillas
app.set("views", path.join(__dirname, "views")); // Corrección: Se corrige la sintaxis del método 'join'
app.set("view engine", "ejs");

app.use(express.static('public'));

// Routes
app.use("/", require("./routes/reserva.routes"));

// Manejo de error 404
app.get("*", function (req, res) {
  res.status(404).send("Error 404: No se ha encontrado la ruta indicada");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});


require("./database")
  .sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });