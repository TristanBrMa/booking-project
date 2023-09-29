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
    <div className=" flex flex-col items-center p-5 ">
      <h1 className="text-3xl font-bold text-blue-900 font-roboto-serif pl-4">
        Vos demandes de réservation:
      </h1>
      <div className="w-full py-5 lg:w-3/6">
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
