type LocationToVisitData = {
    placeToVisit: string;
  };

  type DataObject = {
    locations: LocationToVisitData[];
    // You can add more arrays or properties if needed
  };

  export const LocationToVisit: DataObject = {
    locations: [
      {
        placeToVisit: `<a href="https://www.aquacolors.eu" className="text-brown">www.aquacolors.eu</a> - The Aquacolors water amusement park is only 10 km from our villas.`,
      },
      { placeToVisit: "Beach" },
      { placeToVisit: "Center" },
      { placeToVisit: "Sea" },
      { placeToVisit: "Beach" },
      // Add more locations as needed
    ],
    // You can add more arrays or properties if needed
  };