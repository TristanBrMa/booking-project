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
      console.log(formData);
    } catch (error) {
      console.error("Erreur lors de la requête POST :", error);
    }
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center h-screen lg:h-full p-3 pb-7">
        <h1 className="absolute top-5 left-5  text-3xl font-bold text-blue-900 font-roboto-serif lg:mb-10 lg:text-4xl">
          Réservation :
        </h1>
        <p className="font-roboto text-blue-900 my-3 mt-20  lg:text-xl">
          Pour faire votre réservation, séléctionner une date
        </p>
        <Calendar
          minDate={new Date()}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
          className="lg:w-3/6 lg:p-7"
        />

        {date.justDate && (
          <>
            <div className=" flex  justify-center mt-5  ">
              <p className="font-roboto text-blue-900 lg:text-xl ">
                Puis remplisser les champs ci-dessous :
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col w-80 border-blue-900 border-2 rounded-xl mt-3 p-3 lg:w-4/6 lg:p-6 "
            >
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className=" m-1 placeholder:text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className=" m-1 placeholder:text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className=" m-1 placeholder:text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                required
                className=" m-1 placeholder:text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />
              <input
                type="text"
                name="selectedDay"
                value={handleChangeDay(date.justDate)}
                placeholder="date de la réservation"
                readOnly
                className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />
              <input
                type="text"
                name="selectedDate"
                value={handleChangeDate(date.justDate)}
                placeholder="date de la réservation"
                readOnly
                className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
              />

              <select
                name="selectedTime"
                value={date.dateTime ? format(date.dateTime, "HH:mm") : ""}
                onChange={handleChangeHours}
                required
                className=" m-1 text-blue-900  bg-neutral-300 w-full rounded-lg focus:bg-blue-900 focus:text-white border-2 lg:p-2 lg:input-xl lg:w-full lg:my-3"
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
              <button
                type="submit"
                className="my-3  btn bg-blue-900 border-none text-white"
              >
                Réserver
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
export default Calendrier;
