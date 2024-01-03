
import { StaticImageData } from "next/image";
import first from "@/public/assets/images/main.jpg";
import second from "@/public/assets/images/CityView.jpg";
import third from "@/public/assets/images/ArenaPula.jpg";
import fourth from "@/public/assets/images/drone.jpg";

type LocationToVisitData = {
    src: StaticImageData;
    alt: string;
    title: string;
    des: string;
  };

  type DataObject = {
    image: LocationToVisitData[];
    // You can add more arrays or properties if needed
  };

  export const TouristImageData: DataObject = {
    image: [
      {
        src: first,
        alt:"Villa Relax",
        title: "Villa Relax",
        des: "Luxury Villa",
        
      },
      { src: second,
        alt:"Villa Relax",
    title: "Villa Relax",
        des: "Luxury Villa",
       },
      { src: third,
        alt:"Villa Relax",
    title: "Villa Relax",
        des: "Luxury Villa",
       },
      { src: fourth,
        alt:"Villa Relax",
    title: "Villa Relax",
        des: "Luxury Villa",
       },
        {
            src: first,
            alt:"Villa Relax",
            title: "Villa Relax",
        des: "Luxury Villa",
        
          },
          { src: second,
            alt:"Villa Relax",
        title: "Villa Relax",
        des: "Luxury Villa",
       },
          { src: third,
            alt:"Villa Relax",
        title: "Villa Relax",
        des: "Luxury Villa",
       },
          { src: fourth,
            alt:"Villa Relax",
        title: "Villa Relax",
        des: "Luxury Villa",
       },
      // Add more image as needed
    ],
    // You can add more arrays or properties if needed
  };