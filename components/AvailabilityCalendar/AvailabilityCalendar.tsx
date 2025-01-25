"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: new Date("04-12-2025"),
    to: new Date("04-19-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-23-2025"),
    to: new Date("07-17-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("07-26-2025"),
    to: new Date("09-19-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-27-2025"),
    to: new Date("10-04-2025"),
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
