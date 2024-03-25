type Villa_DescriptionData = {
  des?: string;
  subtitle?: string;
  des2?: string;
  subtitle2?: string;
  des3?: string;
};

type DataObject = {
  data: Villa_DescriptionData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createVilla_Description = (
  des: string,
  subtitle: string,
  des2: string,
  subtitle2: string,
  des3: string
): Villa_DescriptionData => {
  return {
    des: des,
    subtitle: subtitle,
    des2: des2,
    subtitle2: subtitle2,
    des3: des3,
  };
};

// Define the data object
export const Villa_DescriptionDataEn: DataObject = {
  data: [
    createVilla_Description(
      enData.Villa_Description.des,
      enData.Villa_Description.subtitle,
      enData.Villa_Description.des2,
      enData.Villa_Description.subtitle2,
      enData.Villa_Description.des3
    ),
  ],
};

// You can also define a separate object for German translations if needed
export const Villa_DescriptionDataDE: DataObject = {
  data: [
    createVilla_Description(
      deData.Villa_Description.des,
      deData.Villa_Description.subtitle,
      deData.Villa_Description.des2,
      deData.Villa_Description.subtitle2,
      deData.Villa_Description.des3
    ),
  ],
};

export const Villa_DescriptionDataHR: DataObject = {
  data: [
    createVilla_Description(
      hrData.Villa_Description.des,
      hrData.Villa_Description.subtitle,
      hrData.Villa_Description.des2,
      hrData.Villa_Description.subtitle2,
      hrData.Villa_Description.des3
    ),
  ],
};

export const Villa_DescriptionDataIT: DataObject = {
  data: [
    createVilla_Description(
      itData.Villa_Description.des,
      itData.Villa_Description.subtitle,
      itData.Villa_Description.des2,
      itData.Villa_Description.subtitle2,
      itData.Villa_Description.des3
    ),
  ],
};

export const getVilla_DescriptionData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return Villa_DescriptionDataEn;
    case "de":
      return Villa_DescriptionDataDE;
    case "hr":
      return Villa_DescriptionDataHR;
    case "it":
      return Villa_DescriptionDataIT;
    default:
      // Return default language if specified language is not found
      return Villa_DescriptionDataEn;
  }
};
