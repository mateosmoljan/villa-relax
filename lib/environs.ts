
type TitleData = {
  title?: string;
  des?: string;
  button?: string; 
  title2?: string;
  des2? : string;
  subtitle?: string;
  };

  type DataObject = {
    data: TitleData[];
  };

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createTitle = (
  title?: string, 
  des?: string,
  button?: string, 
  title2?: string,
  des2?: string,
  subtitle?: string
): TitleData => {
  return {
    title,
    des,
    button,
    title2,
    des2,
    subtitle,
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [createTitle(
    enData.Environs.title,
    enData.Environs.des,
    enData.Environs.button,
    enData.Environs.title2,
    enData.Environs.des2,
    enData.Environs.subtitle,
    )],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [createTitle(
    deData.Environs.title,
    deData.Environs.des,
    deData.Environs.button,
    deData.Environs.title2,
    deData.Environs.des2,
    deData.Environs.subtitle,)],
};

export const TitleDataHR: DataObject = {
  data: [createTitle(
    hrData.Environs.title,
    hrData.Environs.des,
    hrData.Environs.button,
    hrData.Environs.title2,
    hrData.Environs.des2,
    hrData.Environs.subtitle,)],
};

export const TitleDataIT: DataObject = {
  data: [createTitle(
    itData.Environs.title,
    itData.Environs.des,
    itData.Environs.button,
    itData.Environs.title2,
    itData.Environs.des2,
    itData.Environs.subtitle,)],
};

export const getEnvironsData = (language: string): DataObject => {
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
