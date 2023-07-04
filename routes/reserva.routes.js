//Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();
const {
  getReservas,
  createReservas,
  updateReservas,
  deleteReservas,
  renderReservas,
  renderFormularioReservas,
  renderEditarReservas,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas



router.get("/", renderReservas);
// Formulario para crear una reserva
router.get("/crear-reserva", renderFormularioReservas);
// Formular                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     io para actualizar una reserva
router.get("/actualizar-reserva", renderEditarReservas);
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

router.get("/api/", getReservas);

// Crear una reserva
router.post("/api/", createReservas);

// Actualizar una reserva
router.put("/api/:id", updateReservas);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", deleteReservas);

module.exports = router;