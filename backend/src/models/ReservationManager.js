const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  create(reservation) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstName, lastName, email, phoneNumber, reservationDay, reservationDate, reservationHours) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        reservation.firstName,
        reservation.lastName,
        reservation.email,
        reservation.phoneNumber,
        reservation.reservationDay,
        reservation.reservationDate,
        reservation.reservationHours,
      ]
    );
  }
}

module.exports = ReservationManager;
