function About() {
  type LocationToVisitData = {
    placeToVisit: string;
  };

  type DataObject = {
    locations: LocationToVisitData[];
    // You can add more arrays or properties if needed
  };

  const dataObject: DataObject = {
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

  return (
    <section className="flex justify-center">
      <div className="max-w-6xl p-3 pt-20">
        <h1 className="flex justify-center font-arbutus text-4xl font-bold">
          Villa Relax - Pula
        </h1>
        <div className="pt-10">
          <p>
            Boasting air-conditioned accommodation with a private pool, Villa
            Relax is situated in Pula. This property offers access to a balcony,
            pool at the pool table, free private parking and free WiFi. The
            villa has a children's playground and a sauna.
          </p>
          <br />
          <p>
            The spacious villa features 5 bedrooms, 5 bathrooms, bed linen,
            towels, a flat-screen TV with satellite channels, a dining area, a
            fully equipped kitchen, and a terrace with city views. For added
            privacy, the accommodation features a private entrance.
          </p>
          <br />
          <p>
            You can play darts at this 5-star villa. The villa has a barbecue
            and a garden, which can be enjoyed by guests if the weather permits.
          </p>
          <br />
          <p>
            Valsaline Beach is 1.8 km from Villa Relax, while Saccorgiana Beach
            is 2.3 km from the property. The nearest airport is Pula Airport, 9
            km from the accommodation.
          </p>
        </div>
        <div className="pt-5">
          <h2 className="font-semibold">What to see and visit:</h2>
          <ul className="list-disc	p-3 pl-8">
            {dataObject.locations.map((item, index) => (
              <li
                key={index}
                className=""
                dangerouslySetInnerHTML={{ __html: item.placeToVisit }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
