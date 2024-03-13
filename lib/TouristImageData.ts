
import { StaticImageData } from "next/image";
import one from "@/public/assets/images/aquarium.jpg";
import two from "@/public/assets/images/np-brijuni.jpg";
import three from "@/public/assets/images/aquacolors.jpg";
import four from "@/public/assets/images/arena.jpg";
import five from "@/public/assets/images/istralandia.jpg";
import six from "@/public/assets/images/beach3.jpg";

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
      { src: one, alt: "Aquarium Pula", title: "Aquarium Pula",
    des: "The biggest in Croatia", },
    { src: two, alt: "NP Brijuni Panorama Istria", title: "NP Brijuni",
    des: "National Park", },
    { src: three,  alt: "Aquacolors Porec Villa Panorama Istria", title: "Aquacolors Poreč",
    des: "Water park", },
    { src: four, alt: "Arena Pula Villa Panorama Istria", title: "Arena Pula",
    des: "Events", },
    { src: five,  alt: "Istralandia Villa Panorama Istria", title: "Istralandia",
    des: "Water park", },
    { src: six,  alt: "Beach Villa Panorama Istria", title: "Kamenjak",
    des: "beach/cliff jumping", },
    ],
  };