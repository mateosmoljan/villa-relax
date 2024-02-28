
type LinksData = {
    title: string;
    path: string;
  };

  type DataObject = {
    NavData: LinksData[];
  };

 export const NavigationLinks: DataObject = {
    NavData: [
        {title: "Villa Panorama", path: "/villa-panorama", },
        {title: "Pricelist", path: "/pricelist"},
        {title: "Photogallery", path: "/photogallery"},
        {title: "Environs", path: "/travel-guide"},
        {title: "Contact", path: "/contact"},
      ],
  };