type LocationData = {
    place: string;
    distance: number;
  };

  type DataObject = {
    locations: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const dataObject: DataObject = {
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
      { place: "Center", distance: 120 },
      // Add more locations as needed
    ],
    // You can add more arrays or properties if needed
  };