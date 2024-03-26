import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getPriceTableData } from "@/lib/priceTable";
import { useLocale } from "next-intl";

function createData(
  period: string,
  price: number,
  persons: number,
  stay: number
) {
  return { period, price, persons, stay };
}

const rows = [
  createData("07.01. - 09.03.", 1400, 16, 4),
  createData("13.05. - 09.06.", 2200, 16, 4),
  createData("10.06. - 09.07.", 4400, 16, 4),
  createData("10.07. - 15.08.", 5200, 16, 4),
  createData("16.08. - 25.09.", 4400, 16, 4),
  createData("26.09. - 30.10.", 2600, 16, 4),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Pricing Table ">
        <TableHead className="">
          <TableRow className="bg-grey2 !font-titleBold ">
            <TableCell className="!font-titleBold !py-2 px-0 w-[160px] text-center">
              {PriceTableData.data[0].title}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title2}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title3}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title4}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                className="px-0 !font-Bold !py-2 text-center"
              >
                {row.period}
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-ExtraBold !py-2 text-center"
              >
                {row.price} €
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-Bold !py-2 text-center"
              >
                {row.persons}
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-Bold !py-2 text-center"
              >
                {row.stay}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
