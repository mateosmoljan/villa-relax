import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

function HolidayHome() {
  const [home, setHome] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setHome(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label" className="font-Bold">
        Holiday home
      </InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
        className="w-full bg-white"
        id="demo-simple-select"
        size="small"
        name="holidayHome"
        value={home}
        label="Holiday home"
        onChange={handleChange}
      >
        <MenuItem value={1}>Villa Panorama</MenuItem>
      </Select>
    </>
  );
}

export default HolidayHome;
