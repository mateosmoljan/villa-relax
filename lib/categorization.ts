

type categorization = {
    title: string;
    value: string;
  };

  type DataObject = {
    categorization: categorization[];
  };

 export const Categorization: DataObject = {
        categorization: [
        {title: "Categorization:", value: "⭐⭐⭐⭐⭐", },
        {title: "Capacity:", value: "14 persons"},
        {title: "Size:", value: "500 m²"},
        {title: "Garden:", value: "700 m²"},
      ],
  };