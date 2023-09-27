import axios from "axios";

import ReservationCard from "../components/ReservationCard";
import { useEffect, useState } from "react";
function AdminPage() {
  const [allReservation, setAllReservation] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/reservation`)
      .then((response) => {
        setAllReservation(response.data);
      })
      .catch((error) => console.error(error));
  }, [allReservation]);
  const deleteReservation = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/reservation/${id}`)
      .then((res) => {
        if (res.status === 204) {
          console.log("reservation supprimer");
          setAllReservation((prevReservation) =>
            prevReservation.filter((elem) => elem.id !== id)
          );
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Reservation</h1>
      <div>
        {allReservation &&
          allReservation.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              id={reservation.id}
              firstName={reservation.firstName}
              lastName={reservation.lastName}
              email={reservation.email}
              phoneNumber={reservation.phoneNumber}
              reservationDay={reservation.reservationDay}
              reservationDate={reservation.reservationDate}
              reservationHours={reservation.reservationHours}
              deleteReservation={deleteReservation}
            />
          ))}
      </div>
    </div>
  );
}
export default AdminPage;
