"use client";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import enGB from "date-fns/locale/en-GB";

interface CustomRange {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

type Props = {
  state: CustomRange[];
  setState: (value: CustomRange[]) => void;
  calendarWidth: string;
  disabledDates: Date[];
};

export default function DateRangeCalendar({
  state,
  setState,
  calendarWidth,
  disabledDates,
}: Props) {
  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setState([item.selection as CustomRange])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      className="relative bg-white z-20 "
      months={2}
      locale={enGB}
      direction={calendarWidth === "horizontal" ? "horizontal" : "vertical"}
      rangeColors={["#B29600"]}
      disabledDates={disabledDates}
      dateDisplayFormat="d.M.y"
    />
  );
}
