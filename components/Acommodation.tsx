import PropertyCard from "./PropertyCard";

function Acommodation() {
  return (
    <section className="flex justify-center py-20">
      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:p-3 p-5 py-20">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase">ACOMMODATION</h2>
          <h1 className="font-bold text-2xl sm:text-3xl text-dark_blue_black">
            We offer you 1 Villa
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <PropertyCard />
        </div>
      </div>
    </section>
  );
}

export default Acommodation;
