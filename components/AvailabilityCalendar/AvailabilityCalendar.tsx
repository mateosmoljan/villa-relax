"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: new Date("05-01-2024"),
    to: new Date("09-17-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("11-1-2024"),
    to: new Date("03-01-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-024-2025"),
    to: new Date("06-15-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("06-14-2025"),
    to: new Date("06-23-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("07-24-2025"),
    to: new Date("08-4-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("08-23-2025"),
    to: new Date("09-6-2025"),
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
