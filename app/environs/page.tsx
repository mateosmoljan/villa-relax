import FourGallery from "@/components/Gallery/FourGallery";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { LocationToVisit } from "@/lib/LocationToVisit";
import Image from "next/image";

function Environs() {
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="container">
        <div>
          <h1 className="mt-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black tracking-wider">
            Gajana & Istria
          </h1>
        </div>
        <div>
          <FourGallery range={{ start: 0, end: 4 }} mapButton={true} />
        </div>
        <div>
          <p className="">
            <Image
              src="/assets/images/sun.png"
              alt="Grb Istre"
              width={150}
              height={150}
              className="aspect-square float-left"
            />
            Gajana is a perfect place to experience a relaxing vacation, but
            it's also close enough to all kinds of activities if you change your
            mind. Gajana is surrounded by vineyards, olive groves, woods and a
            lot of beautiful sights. You can visit Kazun Park - a park with
            traditional Istrian houses made of stone, and it's a place with most
            kazun's located in one place in the Mediterranean area. <br />
            National Park Brijuni (which is visible from the villa) and Limski
            zaljev (Channel of Lim) are also located in this region. Since
            Gajana is a place surrounded by vineyards and olive groves, the best
            way to experience it is to take some of hiking or cycling routes
            through the area. Since the coast is only 5 km away, you can try
            fishing, sailing or diving activities. Beach, bars, restaurants and
            grocery shops can be found in 5 km range.
          </p>
        </div>
        <div>
          <FourGallery range={{ start: 4, end: 8 }} mapButton={false} />
        </div>
        <div>
          <h2 className="font-titleBold text-xl mb-4">Getting around</h2>
          <p>
            You can reach the villa by car or taxi. Parking is free and
            available on site.
          </p>
          <div>
            <h3 className="font-semibold">Attractions nearby:</h3>
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
          <div>
            <FourGallery range={{ start: 8, end: 12 }} mapButton={false} />
          </div>
          <div className="mb-24">
            <SendMessage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Environs;
