// Images
import first from "@/public/assets/images/main.jpg";
import second from "@/public/assets/images/CityView.jpg";
import third from "@/public/assets/images/ArenaPula.jpg";
import fourth from "@/public/assets/images/drone.jpg";
import { StaticImageData } from "next/image";

type LocationData = {
    src: StaticImageData;
    alt: string;
  };

  type DataObject = {
    images: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const ImageGallery: DataObject = {
    images: [
      { src: first,
        alt: "Villa Relax", },
      { src: second,
        alt: "Villa Relax", },
      { src: third, 
        alt: "Villa Relax", },
      { src: fourth,
        alt: "Villa Relax", },
        { src: first,
            alt: "Villa Relax", },
          { src: second,
            alt: "Villa Relax", },
          { src: third, 
            alt: "Villa Relax", },
          { src: fourth,
            alt: "Villa Relax", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };