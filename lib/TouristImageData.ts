
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/images/aquarium.jpg";
import image2 from "@/public/assets/images/np-brijuni.jpg";
import image3 from "@/public/assets/images/aquacolors.jpg";
import image4 from "@/public/assets/images/arena.jpg";
import image5 from "@/public/assets/images/istralandia.jpg";
import image6 from "@/public/assets/images/beach3.jpg";
import image7 from "@/public/assets/images/aquacolors2.jpg";
import image8 from "@/public/assets/images/aquacolors3.jpg";
import image9 from "@/public/assets/images/aquacolors4.jpg";
import image10 from "@/public/assets/images/aquarium2.jpg";
import image11 from "@/public/assets/images/arena2.jpg";
import image12 from "@/public/assets/images/beach.jpg";
import image13 from "@/public/assets/images/beach2.jpg";
import image14 from "@/public/assets/images/kamenjak.jpg";


type LocationToVisitData = {
    src: StaticImageData;
    alt: string;
    title?: string;
    des?: string;
  };

  type DataObject = {
    image: LocationToVisitData[];
  };

  export const TouristImageData: DataObject = {
    image: [
      { src: image1, alt: "Aquarium Pula", title: "Aquarium Pula",
    des: "The biggest in Croatia", },
    { src: image2, alt: "NP Brijuni Panorama Istria", title: "NP Brijuni",
    des: "National Park", },
    { src: image3,  alt: "Aquacolors Porec", title: "Aquacolors Poreč",
    des: "Water park", },
    { src: image4, alt: "Arena Pula", title: "Arena Pula",
    des: "Events", },
    { src: image5,  alt: "Istralandia", title: "Istralandia",
    des: "Water park", },
    { src: image6,  alt: "Beach", title: "Kamenjak",
    des: "beach/cliff jumping", },
    { src: image7,  alt: "Aquacolors Porec", },
    { src: image8,  alt: "Aquacolors Porec",},
    { src: image9,  alt: "Aquacolors Porec",
     },
    { src: image10,  alt: "Aquarium Pula",
     },
    { src: image11,  alt: "Arena Pula",
     },
    { src: image12,  alt: "Beach",
     },
    { src: image13,  alt: "Beach",
     },
    { src: image14,  alt: "Island Kamenjak",
     },
    ],
  };