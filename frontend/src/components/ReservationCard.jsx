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
    <div className="py-3">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  border-blue-900 border-2 rounded-xl mt-3 p-3"
      >
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        />
        <select
          name="reservationDay"
          value={formData.reservationDay}
          onChange={handleChange}
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
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
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        />
        <select
          name="reservationHours"
          value={formData.reservationHours}
          onChange={handleChange}
          className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
        >
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <div className=" flex justify-between">
          <button
            onClick={handleDelete}
            type="button"
            className="my-4 mx-auto btn bg-rose-700 bg-opacity-75 border-none text-white"
          >
            Supprimer
          </button>
          <button
            type="submit"
            className="my-3 mx-auto btn bg-blue-900 bg-opacity-75 border-none text-white"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}
export default ReservationCard;
