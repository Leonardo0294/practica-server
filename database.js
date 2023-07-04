const { Sequelize, Model } = require("sequelize");
require("dotenv").config();

const { DB_NAME, DB_USER, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, "", {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

// Autenticación a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

module.exports = { sequelize, Model };