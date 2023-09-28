const models = require("../models");

const createReservation = (req, res) => {
  const reservation = req.body;
  models.reservation
    .create(reservation)
    .then(([result]) => {
      res.location(`/reservation/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};
const getAllReservation = async (req, res) => {
  try {
    const [allReservation] = await models.reservation.findAll();
    res.json(allReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteReservation = (req, res) => {
  models.reservation
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const editReservation = (req, res) => {
  const item = req.body;
  if (!item.id) {
    res.status(400).json({ message: "L'ID de la réservation est requis." });
    return;
  }
  models.reservation
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  createReservation,
  getAllReservation,
  deleteReservation,
  editReservation,
};
