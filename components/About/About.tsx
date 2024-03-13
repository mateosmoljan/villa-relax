import { LocationToVisit } from "@/lib/LocationToVisit";

function About() {
  return (
    <section className="pt-20 Visit" id="about">
      <div className="container">
        <h1 className="flex justify-center font-arbutus text-3xl sm:text-4xl font-bold text-dark_blue_black">
          Villa Panorama - Istria
        </h1>
        <div className="pt-10">
          <p>
            Beautiful Villa Panorama Istria surrounded by nature. It's an ideal
            place to rest for all lovers of peace , quiet, and nature. Villa of
            520m square is located on a plot of 2500 m2. You have at your
            disposal a beautiful garden and a large lawn for play and
            entertainment(trampoline, football goals). The villa is carefully
            furnished , with quality furniture and great attention to
            detail.Traditional and modern elements blend together to form an
            interesting whole. Beautiful <b>Villa Panorama Istria</b> surrounded
            by <b>nature</b>. It's an ideal place to <b>rest</b> for all lovers
            of
            <b>peace</b>, <b>quiet</b>, and <b>nature</b>. Villa of{" "}
            <b>520m square</b> is located on a plot of <b>2500 m2</b>. You have
            at your disposal a beautiful <b>garden</b> and a large <b>lawn</b>{" "}
            for play and
            <b>entertainment</b> (<b>trampoline</b>, <b>football goals</b>). The
            villa is carefully <b>furnished</b>, with <b>quality furniture</b>{" "}
            and great attention to detail. <b>Traditional</b> and{" "}
            <b>modern elements</b> blend together to form an interesting{" "}
            <b>whole</b>.
          </p>
          <br />
          <h2 className="font-ExtraBold text-lg">The space</h2>
          <p>
            In front of the Villa there is a spacious summer kitchen with a
            wood-burning fireplace that serves for dining and
            entertainment(table football, piccado and billiards).Also there is a
            working room and a bathroom.In addition to the summer kitchen there
            is a{" "}
            <b>
              68 m square swimming pool with air massage facilities, a waterfall
            </b>
            .Traditional speciality is occupied by an Istrian cape built in
            stone style.It consists of a fire pit for setting a grill or baking
            for dining.It is especially attractive large terrace that spreads on
            one side of the villa overlooking the sea and surrounding green
            areas, which also makes it an ideal place for dining and resting.{" "}
            <br />
            <br />
            It consists of a spacious living room, fully equipped kitchen ,{" "}
            <b>7 charming bedrooms with bathrooms, air conditioning and TV</b>.
            Heating in every room with radiators. All rooms are air conditioned.
            In addition to the villa, there is a wellness room (
            <b>sauna ,jacuzzi, exercise equipment</b>).It is also a garage with{" "}
            <b>2 parking spaces</b> and there are <b>8 bikes</b>. Parking space
            offers the possibility of more than a dozen parking spaces. <br />
            <br />
            It consists of a spacious living room, fully equipped kitchen ,{" "}
            <b>7 charming bedrooms with bathrooms, air conditioning and TV</b>.
            Heating in every room with radiators. All rooms are air conditioned.
            In addition to the villa, there is a wellness room (
            <b>sauna ,jacuzzi, exercise equipment</b>).It is also a garage with{" "}
            <b>2 parking spaces</b> and there are <b>8 bikes</b>. Parking space
            offers the possibility of more than a dozen parking spaces.
          </p>
          <br />
          <h2 className="font-ExtraBold text-lg">Guest access</h2>
          <p>
            Jacuzzi, sauna, fitness, bikes, karaoke, billiards, foosball, darts,
            trampoline.
          </p>
        </div>
        <div className="pt-5">
          <h2 className="font-ExtraBold">What to see and visit:</h2>
          <ul className="list-disc	p-3 pl-8">
            {LocationToVisit.locations.map((item, index) => (
              <li
                key={index}
                className="mb-2 Visit"
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
