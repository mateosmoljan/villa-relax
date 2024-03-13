import { StaticImageData } from "next/image";
import { TbHanger } from "react-icons/tb";
import hairdryer from "@/public/assets/icons/hairdryer.png";

type features = {
  icon_image?: StaticImageData;
  icon_alt?: string;
  icon?: JSX.Element;
  title: string;
  type: string;
  des?: string;
};

type DataObject = {
  features: features[];
};

export const Features: DataObject = {
  features: [
    {
      icon_image: hairdryer,
      type: "i",
      icon_alt: "hairdryer",
      title: "Hair dryer",
    },
    { type: "e", title: "Washer" },
    {
      type: "e",
      title: "Essentials",
      des: "Towels, bed sheets, soap, and toilet paper",
    },
    {
      icon: <TbHanger className="text-3xl" />,
      type: "e",
      title: "Barbecue",
    },
    { type: "e", title: "Air conditioning" },
    { type: "e", title: "Kettle" },
    { type: "e", title: "TV" },
    { type: "e", title: "Stove" },
    { type: "e", title: "Balcony/Terrace" },
    { type: "e", title: "Kettle" },
  ],
};
