import { useState, useEffect } from "react";
import { format, addHours } from "date-fns";
import axios from "axios";
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
  const [hours, setHours] = useState([]);
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    reservationDay: reservationDay,
    reservationDate: reservationDate?.split("T")[0],
    reservationHours: reservationHours.split(":")[0] + ":00",
    id: id,
  });

  useEffect(() => {
    const startTime = new Date();
    startTime.setHours(9, 0, 0);
    const endTime = new Date();
    endTime.setHours(17, 0, 0);

    const hoursList = [];
    let currentHour = startTime;

    while (currentHour <= endTime) {
      hoursList.push(format(currentHour, "HH:mm"));
      currentHour = addHours(currentHour, 1);
    }

    setHours(hoursList);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/reservation`, formData)
      .then((res) => {
        if (res.status === 200) {
          console.log("Modifications enregistrées");
        }
      })
      .catch((err) => console.error(err));
    console.log(formData);
  };
  const handleDelete = () => {
    deleteReservation(id);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Numéro de téléphone"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
        />
        <select
          name="reservationDay"
          value={formData.reservationDay}
          onChange={handleChange}
        >
          <option value="Mon">Mon</option>
          <option value="Tue">Tue</option>
          <option value="Wed">Wed</option>
          <option value="Thu">Thu</option>
          <option value="Fri">Fri</option>
          <option value="Sat">Sat</option>
          <option value="Sun">Sun</option>
        </select>
        <input
          type="date"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          placeholder="Date de la réservation"
        />
        <select
          name="reservationHours"
          value={formData.reservationHours}
          onChange={handleChange}
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <button
          onClick={handleDelete}
          type="button"
          className="my-3 mx-auto btn bg-rose-700 bg-opacity-75 border-none text-primary"
        >
          Supprimer
        </button>
        <button type="submit">Modifier</button>
      </form>
    </>
  );
}
export default ReservationCard;
