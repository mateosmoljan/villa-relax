type AccommodationsData = {
  subtitle?: string;
  title?: string;
  card_title?: string;
  card_des?: string;
  card_des2?: string;
  card_des3?: string;
};

type DataObject = {
  data: AccommodationsData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createAccommodation = (
  subtitle: string,
  title: string,
  card_title: string,
  card_des: string,
  card_des2: string,
  card_des3: string
): AccommodationsData => {
  return {
    subtitle,
    title,
    card_title,
    card_des,
    card_des2,
    card_des3,
  };
};

// Define the data object
export const AccommodationDataEn: DataObject = {
  data: [
    createAccommodation(
      enData.Acommodation.subtitle,
      enData.Acommodation.title,
      enData.Acommodation.card_title,
      enData.Acommodation.card_des,
      enData.Acommodation.card_des2,
      enData.Acommodation.card_des3
    ),
  ],
};

// You can also define a separate object for German translations if needed
export const AccommodationDataDE: DataObject = {
  data: [
    createAccommodation(
      deData.Acommodation.subtitle,
      deData.Acommodation.title,
      deData.Acommodation.card_title,
      deData.Acommodation.card_des,
      deData.Acommodation.card_des2,
      deData.Acommodation.card_des3
    ),
  ],
};

export const AccommodationDataHR: DataObject = {
  data: [
    createAccommodation(
      hrData.Acommodation.subtitle,
      hrData.Acommodation.title,
      hrData.Acommodation.card_title,
      hrData.Acommodation.card_des,
      hrData.Acommodation.card_des2,
      hrData.Acommodation.card_des3
    ),
  ],
};

export const AccommodationDataIT: DataObject = {
  data: [
    createAccommodation(
      itData.Acommodation.subtitle,
      itData.Acommodation.title,
      itData.Acommodation.card_title,
      itData.Acommodation.card_des,
      itData.Acommodation.card_des2,
      itData.Acommodation.card_des3
    ),
  ],
};

export const getAccommodationData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return AccommodationDataEn;
    case "de":
      return AccommodationDataDE;
    case "hr":
      return AccommodationDataHR;
    case "it":
      return AccommodationDataIT;
    default:
      // Return default language if specified language is not found
      return AccommodationDataEn;
  }
};
