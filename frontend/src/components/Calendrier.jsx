import { useState } from "react";
import Calendar from "react-calendar";
import { add, format } from "date-fns";

function Calendrier() {
  const [date, setDate] = useState({
    justDate: "",
    dateTime: "",
  });
  console.log(date.dateTime);
  console.log(date.justDate);
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
  return (
    <div className="flex  flex-col items-center ">
      {date.justDate ? (
        <div className="flex flex-col gap-4">
          {times?.map((time, i) => (
            <div className="rounded-sm bg-gray-100 p-2" key={`time-${i}`}>
              <button
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
                type="button"
              >
                {format(time, "HH:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Calendar
          minDate={new Date()}
          className="    text-black p-2 "
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
}
export default Calendrier;
