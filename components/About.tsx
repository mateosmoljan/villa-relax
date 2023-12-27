import { LocationToVisit } from "../lib/LocationToVisit";

function About() {
  return (
    <section className="flex justify-center pt-20" id="info">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:p-3 p-5">
        <h1 className="flex justify-center font-arbutus text-3xl sm:text-4xl font-bold text-dark_blue_black">
          Villa Relax - Pula
        </h1>
        <div className="pt-10">
          <p>
            Boasting air-conditioned accommodation with a private pool, Villa
            Relax is situated in Pula. This property offers access to a balcony,
            pool at the pool table, free private parking and <b>free WiFi</b>.
            The villa has a <b>children's playground</b> and a <b>sauna</b>.
          </p>
          <br />
          <p>
            The spacious villa features <b>5 bedrooms</b>, <b>5 bathrooms</b>,
            bed linen, towels, a flat-screen TV with satellite channels, a
            dining area, a <b>fully equipped kitchen</b>, and a terrace with
            <b> city views</b>. For added privacy, the accommodation features a
            <b> private entrance</b>.
          </p>
          <br />
          <p>
            You can play darts at this <b>5-star villa</b>. The villa has a
            barbecue and a garden, which can be enjoyed by guests if the weather
            permits.
          </p>
          <br />
          <p>
            Valsaline <b>Beach is 1.8 km</b> from Villa Relax, while Saccorgiana
            Beach is 2.3 km from the property. The nearest airport is Pula
            Airport, 9 km from the accommodation.
          </p>
        </div>
        <div className="pt-5">
          <h2 className="font-semibold">What to see and visit:</h2>
          <ul className="list-disc	p-3 pl-8">
            {LocationToVisit.locations.map((item, index) => (
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
