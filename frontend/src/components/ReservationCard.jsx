function ReservationCard({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  reservationDay,
  reservationDate,
  reservationHours,
  deleteReservation,
}) {
  const handleDelete = () => {
    deleteReservation(id);
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={firstName}
          // onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={lastName}
          // onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          // onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          // onChange={handleInputChange}
          pattern="[0-9]{10}"
          required
        />
        <input
          type="text"
          name="selectedDay"
          value={reservationDay}
          placeholder="jour de la réservation"
          readOnly
        />
        <input
          type="text"
          name="selectedDate"
          value={reservationDate}
          placeholder="date de la réservation"
          readOnly
        />
        <input
          type="text"
          name="selectedHours"
          value={reservationHours}
          placeholder="heure de la réservation"
          readOnly
        />
        <button
          onClick={handleDelete}
          type="button"
          className="my-3 mx-auto btn bg-rose-700 bg-opacity-75 border-none text-primary"
        >
          Supprimer
        </button>
        <button type="submit">Réserver</button>
      </form>
    </>
  );
}
export default ReservationCard;
