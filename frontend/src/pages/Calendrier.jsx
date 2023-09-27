import { useState } from "react";
import Calendar from "react-calendar";
import { add, format, parseISO } from "date-fns";
import axios from "axios";

function Calendrier() {
  const [date, setDate] = useState({
    justDate: "",
    dateTime: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reservationDay: "",
    reservationDate: "",
    reservationHours: "",
  });

  const getTime = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beginning = add(justDate, { hours: 9 });
    const ending = add(justDate, { hours: 18 });
    const intervall = 1;
    const times = [];
    for (let i = beginning; i <= ending; i = add(i, { hours: intervall })) {
      times.push(i);
    }
    return times;
  };
  const times = getTime();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeDate = (date) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : "";
    if (formData.reservationDate !== formattedDate) {
      setFormData((prevData) => ({
        ...prevData,
        reservationDate: formattedDate,
      }));
    }
    return formattedDate;
  };

  const handleChangeDay = (date) => {
    const formattedDay = date ? format(date, "EEE") : "";
    if (formData.reservationDay !== formattedDay) {
      setFormData((prevData) => ({
        ...prevData,
        reservationDay: formattedDay,
      }));
    }
    return formattedDay;
  };

  const handleChangeHours = (e) => {
    const selectedTime = e.target.value;
    if (date.justDate && selectedTime) {
      const newDateTime = parseISO(
        format(date.justDate, "yyyy-MM-dd") + "T" + selectedTime + ":00Z"
      );
      setDate((prev) => ({ ...prev, dateTime: newDateTime }));
      setFormData((prevData) => ({
        ...prevData,
        reservationHours: selectedTime,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/reservation`,
        formData
      );

      console.log("Réponse de la requête POST :", response.data);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        reservationDay: "",
        reservationDate: "",
        reservationHours: "",
      });
    } catch (error) {
      console.error("Erreur lors de la requête POST :", error);
    }
  };
  return (
    <div className="flex  flex-col items-center ">
      <Calendar
        minDate={new Date()}
        className="    text-black p-2 "
        view="month"
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Numéro de téléphone"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          pattern="[0-9]{10}"
          required
        />
        <input
          type="text"
          name="selectedDay"
          value={handleChangeDay(date.justDate)}
          placeholder="date de la réservation"
          readOnly
        />
        <input
          type="text"
          name="selectedDate"
          value={handleChangeDate(date.justDate)}
          placeholder="date de la réservation"
          readOnly
        />

        <select
          name="selectedTime"
          value={date.dateTime ? format(date.dateTime, "HH:mm") : ""}
          onChange={handleChangeHours}
          required
        >
          <option value="" disabled>
            Sélectionnez une heure
          </option>
          {times?.map((time, i) => (
            <option value={format(time, "HH:mm")} key={`time-${i}`}>
              {format(time, "HH:mm")}
            </option>
          ))}
        </select>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}
export default Calendrier;
