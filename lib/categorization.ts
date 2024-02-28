

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
        {title: "Capacity:", value: "12 persons"},
        {title: "Size:", value: "300 m²"},
        {title: "Garden:", value: "500 m²"},
      ],
  };