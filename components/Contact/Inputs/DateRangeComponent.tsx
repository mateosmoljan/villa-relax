"use client";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaCalendarAlt } from "react-icons/fa";
import enGB from "date-fns/locale/en-GB";

interface CustomRange {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

function DataRangeComponent() {
  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [activeDateRange, setActiveDateRange] = useState<boolean>(false);
  const [state, setState] = useState<CustomRange[]>([
    {
      startDate: undefined,
      endDate: undefined,
      key: "selection",
    },
  ]);
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");

  const [calendarWidth, setCalendarWidth] = useState<string>("vertical");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target as Node)
      ) {
        setActiveDateRange(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dateRangeRef]);

  useEffect(() => {
    if (state[0].startDate) {
      const formattedArrivalDate = formatDate(state[0].startDate);
      setArrivalDate(formattedArrivalDate);
    }
    if (state[0].endDate) {
      const formattedDepartureDate = formatDate(state[0].endDate);
      setDepartureDate(formattedDepartureDate);
    }
  }, [state]);

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const disabledDates: Date[] = [
    new Date("2024-03-12"),
    new Date("2024-04-15"),
  ];

  // const disabledDates = (date: Date): boolean => {
  //   const disabledRanges = [
  //     { startDate: new Date("2024-03-10"), endDate: new Date("2024-03-15") },
  //     { startDate: new Date("2024-04-01"), endDate: new Date("2024-04-05") },
  //   ];

  //   for (const range of disabledRanges) {
  //     if (date >= range.startDate && date <= range.endDate) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 640) {
      setCalendarWidth("horizontal");
    } else {
      setCalendarWidth("vertical");
    }
  }, []);

  const handleEndDateClick = () => {
    setActiveDateRange(false); // Deactivate the date range selection
  };

  return (
    <div className="w-full px-2">
      <div className="flex flex-col sm:flex-row w-full sm:gap-4">
        <button
          className="text-grey3 border-solid border-2 bg-white font-Bold font-poppins mb-4 rounded-md justify-between items-center flex w-full py-[8.5px] px-[14px]"
          onClick={() => setActiveDateRange(true)}
        >
          <FaCalendarAlt />
          <span>{arrivalDate ? arrivalDate : "Arrival*"}</span>
        </button>
        <button
          className="text-grey3 border-solid border-2  bg-white font-Bold font-poppins mb-4 rounded-md justify-between items-center flex w-full py-[8.5px] px-[14px]"
          onClick={() => setActiveDateRange(!activeDateRange)}
        >
          <FaCalendarAlt />
          <span>{departureDate ? departureDate : "Departure*"}</span>
        </button>
      </div>
      {activeDateRange && (
        <div
          ref={dateRangeRef}
          className="absolute  border-solid border-2 border-grey3 z-20"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection as CustomRange])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            className="relative bg-white z-20 "
            months={2}
            locale={enGB}
            direction={
              calendarWidth === "horizontal" ? "horizontal" : "vertical"
            }
            rangeColors={["#000"]}
            disabledDates={disabledDates}
            dateDisplayFormat="d.M.y"
          />
        </div>
      )}
      <div>
        <input type="hidden" name="arrivalDate" value={arrivalDate} />
        <input type="hidden" name="departureDate" value={departureDate} />
      </div>
    </div>
  );
}

export default DataRangeComponent;
