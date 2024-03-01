"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: "2024-04-08T00:00:00.000Z",
    to: "2024-04-20T00:00:00.000Z",
    middayCheckout: true,
  },
  {
    from: new Date("01-16-2024"),
    to: new Date("01-27-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("05-10-2024"),
    to: new Date("08-12-2024"),
    middayCheckout: true,
  },
];

function AvailabilityCalendar() {
  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}

export default AvailabilityCalendar;
