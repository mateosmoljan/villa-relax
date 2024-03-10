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
      { place: "Sea", distance: 10 },
      { place: "Beach", distance: 10 },
      { place: "Grocery store", distance: 8 },
      { place: "Restaurant", distance: 7 },
      { place: "Bank / ATM", distance: 8 },
      { place: "pharmacy", distance: 8 },
      { place: "Hospital / infirmary", distance: 20 },
      { place: "Post", distance: 8 },
      { place: "Gas station", distance: 7 },
      { place: "Sports fields", distance: 22 },
      { place: "railway station", distance: 7 },
      { place: "Airport", distance: 22 },
    ],
  };