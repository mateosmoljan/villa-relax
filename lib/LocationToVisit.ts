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
        placeToVisit: `<a href="https://www.aquacolors.eu" target="_blank" className="text-yellow">www.aquacolors.eu</a> - The Aquacolors water amusement park.`,
      },
      {
        placeToVisit: `<a href="https://www.np-brijuni.hr/" target="_blank" className="text-yellow">www.np-brijuni.hr</a> - Explore the beautiful islands of Brijuni National Park, rich in natural beauty and cultural heritage.`,
      },
      {
        placeToVisit: `<a href="https://www.pulainfo.hr/" target="_blank" className="text-yellow">www.pulainfo.hr</a> - Discover the ancient Roman amphitheater in Pula, one of the best-preserved Roman amphitheaters in the world.`,
      },
      {
        placeToVisit: `<a href="https://aquarium.hr/" target="_blank" className="text-yellow">aquarium.hr</a> - Dive into the underwater world at Pula Aquarium, located near the city center. Explore various marine habitats, observe diverse aquatic species, and learn about the importance of marine conservation.`,
      },
      {
        placeToVisit: `<a href="https://www.istralandia.hr/" target="_blank" className="text-yellow">www.istralandia.hr</a> - Experience thrilling water slides, lazy rivers, and relaxing pools at Istralandia Aquapark, located near Novigrad. Perfect for families and water enthusiasts, this aquapark offers a fun-filled day for all ages.`,
      },
    ],
  };