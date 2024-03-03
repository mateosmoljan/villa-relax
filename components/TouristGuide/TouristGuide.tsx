import TouristSwiper from "./TouristSwiper";
import "./touristguide.css";

function TouristGuide() {
  return (
    <>
      <section className="py-10 bg-gray-100 Tourist">
        <div className="container">
          <div className="w-6xl flex flex-col gap-3 pb-10">
            <h2 className="text-pink font-semibold uppercase tracking-widest">
              Tourist Guide
            </h2>
            <h1 className="font-bold text-4xl sm:text-3xl text-dark_blue_black">
              What to visit, see and do?
            </h1>
          </div>
          <TouristSwiper />
        </div>
      </section>
    </>
  );
}

export default TouristGuide;
