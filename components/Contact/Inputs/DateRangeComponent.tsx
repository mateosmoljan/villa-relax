"use client";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaCalendarAlt } from "react-icons/fa";

interface CustomRange {
  startDate: Date;
  endDate: Date | undefined;
  key: string | undefined;
}

function DataRangeComponent() {
  const dateRangeRef = useRef<HTMLDivElement>(null);
  const [activeDateRange, setActiveDateRange] = useState<boolean>(false);
  const [state, setState] = useState<CustomRange[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

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

  return (
    <div className="w-1/2 px-2">
      <button
        className="text-grey3 border-solid border-2  bg-white font-Bold font-poppins rounded-md justify-between items-center flex w-full py-[8.5px] px-[14px]"
        onClick={() => setActiveDateRange(true)}
      >
        <FaCalendarAlt />
        <span>Select Date Range</span>
      </button>
      {activeDateRange && (
        <div
          ref={dateRangeRef}
          className="absolute border-solid border-2 border-grey3 z-20"
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection as CustomRange])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            className="relative bg-white z-20"
          />
        </div>
      )}
    </div>
  );
}

export default DataRangeComponent;
