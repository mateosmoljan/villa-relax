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
        labelId="demo-simple-select-label"
        className="w-full bg-white"
        id="demo-simple-select"
        size="small"
        name="holidayHome"
        value={home}
        label="Holiday home"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
      </Select>
    </>
  );
}

export default HolidayHome;
