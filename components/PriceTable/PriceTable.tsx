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
  createData("02.01. - 31.03.", 250, 16, 3),
  createData("01.04. - 30.04.", 250, 16, 3),
  createData("01.05. - 31.05.", 320, 16, 3),
  createData("01.06. - 30.06.", 550, 16, 3),
  createData("01.07. - 31.08.", 950, 16, 3),
  createData("01.09. - 30.09.", 420, 16, 3),
  createData("01.10. - 31.10.", 360, 16, 3),
  createData("01.11. - 30.11.", 220, 16, 3),
  createData("01.12. - 21.12.", 450, 16, 3),
  createData("22.12. - 29.12.", 500, 16, 3),
  createData("30.12. - 01.01.", 1000, 16, 3),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
      <table className="w-full" aria-label="Pricing Table">
        <thead>
          <tr className="bg-grey2">
            <th className="font-titleBold py-2 px-0 w-[160px] text-center">
              {PriceTableData.data[0].title}
            </th>
            <th className="font-titleBold py-2 px-0 w-[112px] text-center">
              {PriceTableData.data[0].title2}
            </th>
            <th className="font-titleBold py-2 px-0 w-[112px] text-center">
              {PriceTableData.data[0].title3}
            </th>
            <th className="font-titleBold py-2 px-0 w-[112px] text-center">
              {PriceTableData.data[0].title4}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.period} className="border-t border-gray-200">
              <td className="px-0 font-Bold py-2 text-center">{row.period}</td>
              <td className="px-0 font-ExtraBold py-2 text-center">{row.price} €</td>
              <td className="px-0 font-Bold py-2 text-center">{row.persons}</td>
              <td className="px-0 font-Bold py-2 text-center">{row.stay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
