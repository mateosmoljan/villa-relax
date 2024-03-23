type TitleData = {
  des?: string;
  des2?: string;
  button?: string; 
  };

  type DataObject = {
    data: TitleData[];
  };

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createTitle = (
  des: string, 
  des2: string,
  button: string 
): TitleData => {
  return {
    des,
    des2,
    button
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [createTitle(
    enData.Villa_BookStay.des,
    enData.Villa_BookStay.des2,
    enData.Villa_BookStay.button)],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [createTitle(
    deData.Villa_BookStay.des,
    deData.Villa_BookStay.des2,
    deData.Villa_BookStay.button
    )],
};

export const TitleDataHR: DataObject = {
  data: [createTitle(
    hrData.Villa_BookStay.des,
    hrData.Villa_BookStay.des2,
    hrData.Villa_BookStay.button)],
};

export const TitleDataIT: DataObject = {
  data: [createTitle(
    itData.Villa_BookStay.des,
    itData.Villa_BookStay.des2,
    itData.Villa_BookStay.button)],
};

export const getBookStayData = (language: string): DataObject => {
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
