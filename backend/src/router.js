const express = require("express");

const router = express.Router();

const adminController = require("./controllers/AdminController");
const reservationController = require("./controllers/ReservationController");
router.post("/adminConnexion", adminController.signin);
router.post("/reservation", reservationController.createReservation);
router.get("/reservation", reservationController.getAllReservation);
router.delete("/reservation/:id", reservationController.deleteReservation);

module.exports = router;
