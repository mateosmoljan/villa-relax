import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  period: string,
  price: number,
  persons: number,
  stay: number
) {
  return { period, price, persons, stay };
}

const rows = [
  createData("07.01. - 12.05.", 2625, 12, 7),
  createData("13.05. - 09.06.", 2625, 12, 7),
  createData("13.05. - 09.06.", 2625, 12, 7),
  createData("13.05. - 09.06.", 2625, 12, 7),
  createData("13.05. - 09.06.", 2625, 12, 7),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Pricing Table">
        <TableHead>
          <TableRow className="bg-grey2">
            <TableCell className="font-titleBold py-2 ">Period</TableCell>
            <TableCell align="right" className="font-titleBold py-2">
              Price
            </TableCell>
            <TableCell align="right" className="font-titleBold py-2">
              Persons
            </TableCell>
            <TableCell align="right" className="font-titleBold py-2">
              Min. Stay
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="font-Bold py-2">
                {row.period}
              </TableCell>
              <TableCell align="right" className="font-ExtraBold py-2">
                {row.price} €
              </TableCell>
              <TableCell align="right" className="font-Bold py-2">
                {row.persons}
              </TableCell>
              <TableCell align="right" className="font-Bold py-2">
                {row.stay}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
