
import { StaticImageData } from "next/image";
import one from "@/public/assets/images/outside/draw-well.jpg";
import two from "@/public/assets/images/inside/jacuzzi.jpg";
import three from "@/public/assets/images/inside/fire-place2.jpg";
import four from "@/public/assets/images/inside/dinning-table.jpg";
import five from "@/public/assets/images/inside/pool-table.jpg";
import six from "@/public/assets/images/outside/entrance.jpg";
import seven from "@/public/assets/images/outside/swimming-pool.jpg";
import eight from "@/public/assets/images/outside/night-swimming-pool2.jpg";
import nine from "@/public/assets/images/outside/sky-view8.jpg";
import ten from "@/public/assets/images/outside/sky-view3.jpg";
import eleven from "@/public/assets/images/outside/grill.jpg";

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
      { src: one, alt: "Draw Well Villa Panorama Istra", title: "Welcome to Villa Panorama - Istra",
    des: "Tranquil Oasis Villa", },
    { src: two, alt: "Jacuzzi Villa Panorama Istra", title: "Jacuzzi Paradise",
    des: "Indulge in the ultimate relaxation experience as you unwind in the Jacuzzi", },
    { src: three,  alt: "Fireplace Villa Panorama Istra", title: "Rustic Fireplace Retreat",
    des: "Embrace the warmth and charm of the traditional Istrian 'Kažun' fireplace at Villa Panorama, where cozy evenings are spent in rustic tranquility.", },
    { src: four, alt: "Dinning table Villa Panorama Istra", title: "Modern Design and Spacious Dinning Table",
    des: "Enjoy cozy gatherings around the generously sized dining table", },
    { src: five,  alt: "Pool Table Villa Panorama Istra", title: "Stylish Pool Table Retreat",
    des: "Unwind with a game of pool on the sleek pool table", },
    { src: six,  alt: "Entrance", title: "Welcome Entrance",
    des: "Elegant entrance that seamlessly blends modern design and welcoming ambiance, inviting you to unwind in style.", },
    { src: seven,  alt: "Swimming Pool Villa Panorama Istra", title: "Aqua Haven",
    des: "A Modern Retreat with Private Pool, Nestled in Nature's Embrace", },
    { src: eight, alt: "Swimming Pool at night Villa Panorama Istra", title: "Aqua Haven",
    des: "Serene Swimming Pool under the Stars", },
    { src: nine, alt: "Drone View Villa Panorama Istra", title: "Villa Panorama's Vast and Serene Space",
    des: "Discover serenity in abundance at Villa Panorama, where the expansive grounds offer ample room for relaxation and exploration amidst the beauty of nature's embrace.", },
    { src: ten, alt: "Villa Relax", title: "Spacious Retreat",
    des: "Escape to Villa Panorama's expansive retreat, where abundant space invites relaxation and rejuvenation in the midst of tranquil surroundings.", },
    { src: eleven, alt: "Villa Relax", title: "Unparalleled Space for Your Ultimate Retreat",
    des: "Discover the expansive allure of Villa Panorama, where ample space and modern amenities beckon for a truly comfortable retreat.", },
    ],
  };