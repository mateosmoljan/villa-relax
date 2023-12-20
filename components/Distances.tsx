"use client";

import { dataObject } from "../lib/LocationDistance";
import AppMap from "./Geocoder";

function Distances() {
  const totalLocations = dataObject.locations.length;

  return (
    <section className="flex justify-center">
      <div className="max-w-6xl">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Distances from Villa Relax</h1>
          <button className="btn-2">Show Map</button>
        </div>
        <div className="flex flex-wrap">
          {dataObject.locations.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between sm:w-1/2 p-3 pt-5 ${
                index === totalLocations - 1 || index === totalLocations - 2
                  ? ""
                  : "border-b border-inherit"
              }`}
            >
              <span className="font-medium">{item.place}</span>
              <span className="text-sm	font-bold">{item.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Distances;
