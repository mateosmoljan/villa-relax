type LocationData = {
  original: string;
  alt: string;
};

type DataObject = {
  images: LocationData[];
};

export const PropertyGalleryLib: DataObject = {
  images: [
    { original: "/assets/images/main.jpg", alt: "Villa Relax" },
    { original: "/assets/images/CityView.jpg", alt: "Villa Relax" },
    { original: "/assets/images/main.jpg",  alt: "Villa Relax" },
    { original: "/assets/images/CityView.jpg", alt: "Villa Relax" },
    { original: "/assets/images/main.jpg",  alt: "Villa Relax" },
    { original: "/assets/images/CityView.jpg",  alt: "Villa Relax" },
    { original: "/assets/images/main.jpg",  alt: "Villa Relax" },
    { original: "/assets/images/CityView.jpg", alt: "Villa Relax" },
  ],
};
