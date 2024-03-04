import AvailabilityCalendar from "@/components/AvailabilityCalendar/AvailabilityCalendar";
import HowToReserve from "@/components/HowToReserve/HowToReserve";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";

function Pricelist() {
  return (
    <section className="pt-[10rem]">
      <div className="">
        <div className="pb-28 container">
          <h2 className="font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
            Price list Villa Panorama
          </h2>
          <PriceTable />
          <p className="text-grey1 text-sm mt-4">
            *The price refers to the period of 7 nights in Euros
          </p>
        </div>
        <div className="py-10 bg-gray-100">
          <div className="container">
            <h2 className="text-pink font-semibold uppercase mb-2 tracking-widest">
              TERMS & CONDITIONS
            </h2>
            <h2 className="font-bold text-3xl text-dark_blue_black mb-4">
              Payment and booking conditions
            </h2>
            <PaymentConditions />
          </div>
        </div>
        <div className="py-10 container">
          <h2 className="text-pink font-semibold uppercase mb-2 tracking-widest">
            available appointments
          </h2>
          <h2 className="block font-bold text-3xl text-dark_blue_black mb-10 ">
            Availability Calendar
          </h2>
          <div className="pt-2">
            <AvailabilityCalendar />
          </div>
        </div>
        <div className="py-10 bg-gray-100">
          <div className="container">
            <h2 className="text-pink font-semibold uppercase mb-2 tracking-widest">
              secure reservation
            </h2>
            <h2 className="block font-bold text-3xl text-dark_blue_black mb-10 ">
              How do I reserve
            </h2>
            <HowToReserve />
          </div>
        </div>
        <div className="container">
          <SendMessage />
        </div>
      </div>
      <TouristGuide />
    </section>
  );
}

export default Pricelist;
