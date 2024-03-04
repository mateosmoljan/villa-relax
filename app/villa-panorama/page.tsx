import AvailabilityCalendar from "@/components/AvailabilityCalendar/AvailabilityCalendar";
import BookYourStayCard from "@/components/BookYourStayCard/BookYourStayCard";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import PropertyGallery from "@/components/PropertyGallery/PropertyGallery";
import { Categorization } from "@/lib/categorization";
import { Features } from "@/lib/features";

const featuresLength = Features.features.length;
function VillaPanorama() {
  return (
    <section className="pt-[10rem]">
      <div className="container">
        <h1 className="mb-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black tracking-wider">
          Holiday Home Villa Panorama
        </h1>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full sm:w-2/3 mx-auto">
            <PropertyGallery />
            <div className="flex flex-col gap-4">
              <hr />
              <div className="grid grid-cols-2 gap-4">
                {Categorization.categorization.map((item, index) => (
                  <button
                    key={index}
                    className="py-2 rounded-md border-[1px] border-black flex items-center flex-col lg:fle-row justify-center gap-2"
                  >
                    <span className="tracking-widest uppercase text-xs lg:text-sm ">
                      {item.title}
                    </span>
                    <span className="font-Bold text-xs lg:text-sm uppercase tracking-widest">
                      {item.value}
                    </span>
                  </button>
                ))}
              </div>
              <hr />
            </div>
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Villa Panorama
              </h2>
              <p>
                6 bedrooms with TV, 4 bathrooms (1 bath, 3 shower cabins), hair
                dryer, irons, ironing boards, vacuum cleaners, washing machine,
                safe, kitchen with dishwasher, microwave and oven, dining table
                with 12 seats places, heated pool of 26.5 m2 with a waterfall
                and massage pumps, jacuzzi, sauna, deck chairs, exercise bike,
                children's playground, trampoline, collection of books in
                English, German and Italian board games and toys for children.
              </p>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black">
                Features
              </h2>
              <ul className="grid grid-cols-2">
                {Features.features.map((item, index) => (
                  <li
                    key={index}
                    className={`py-4 ${
                      index != featuresLength - 1 && index != featuresLength - 2
                        ? "border-b-[1px] border-[#e5e7eb]"
                        : ""
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Pricelist
              </h2>
              <PriceTable />
              <p className="text-grey1 text-sm mt-4">
                *The price refers to the period of 7 nights in Euros
              </p>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Payment and booking conditions
              </h2>
              <PaymentConditions />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="mx-auto !sticky top-16 ml-2.5 w-full">
              <BookYourStayCard />
            </div>
          </div>
        </div>
        <div className="container py-10">
          <h2 className="block text-center font-bold text-2xl text-dark_blue_black mb-6">
            Availability Calendar
          </h2>
          <AvailabilityCalendar />
        </div>
      </div>
    </section>
  );
}

export default VillaPanorama;
