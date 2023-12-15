function Distances() {
  type LocationData = {
    place: string;
    distance: number;
  };

  type DataObject = {
    locations: LocationData[];
    // You can add more arrays or properties if needed
  };

  const dataObject: DataObject = {
    locations: [
      { place: "Sea", distance: 50 },
      { place: "Beach", distance: 75 },
      { place: "Center", distance: 120 },
      { place: "Sea", distance: 50 },
      { place: "Beach", distance: 75 },
      { place: "Center", distance: 120 },
      { place: "Sea", distance: 50 },
      { place: "Beach", distance: 75 },
      { place: "Center", distance: 120 },
      { place: "Sea", distance: 50 },
      { place: "Beach", distance: 75 },
      { place: "Center", distance: 120 },
      { place: "Sea", distance: 50 },
      { place: "Beach", distance: 75 },
      { place: "Center", distance: 120 },
      // Add more locations as needed
    ],
    // You can add more arrays or properties if needed
  };

  return (
    <section className="flex justify-center">
      <div className="max-w-2xl">
        <div className="flex flex-wrap">
          {dataObject.locations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between sm:w-1/2 p-3"
            >
              <span>{item.place}</span>
              <span className="text-bold">{item.distance} km</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Distances;
