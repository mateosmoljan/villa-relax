
type TitleData = {
  title?: string;
  title2?: string;
  title3?: string; 
  title4?: string;
  };

  type DataObject = {
    data: TitleData[];
  };

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createTitle = (
  title: string, 
  title2: string,
  title3: string, 
  title4: string
): TitleData => {
  return {
    title,
    title2,
    title3,
    title4
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [createTitle(
    enData.PriceTable.title,
    enData.PriceTable.title2,
    enData.PriceTable.title3,
    enData.PriceTable.title4,

    )],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [createTitle(
    deData.PriceTable.title,
    deData.PriceTable.title2,
    deData.PriceTable.title3,
    deData.PriceTable.title4,
)],
};

export const TitleDataHR: DataObject = {
  data: [createTitle(
    hrData.PriceTable.title,
    hrData.PriceTable.title2,
    hrData.PriceTable.title3,
    hrData.PriceTable.title4,
)],
};

export const TitleDataIT: DataObject = {
  data: [createTitle(
    itData.PriceTable.title,
    itData.PriceTable.title2,
    itData.PriceTable.title3,
    itData.PriceTable.title4,
)],
};

export const getPriceTableData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return TitleDataEn;
    case "de":
      return TitleDataDE;
    case "hr":
      return TitleDataHR;
    case "it":
      return TitleDataIT;
    default:
      // Return default language if specified language is not found
      return TitleDataEn;
  }
};
