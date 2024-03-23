
type TitleData = {
  title?: string;
  title2?: string;
  title3: string; 
  title4: string;
  subtitle? : string;
  title5?: string;
  subtitle2?: string;
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
  title: string, 
  title2: string,
  title3: string, 
  title4: string,
  subtitle?: string,
  title5?: string,
  subtitle2?: string,
  button?: string
): TitleData => {
  return {
    title,
    title2,
    title3,
    title4,
    subtitle,
    title5,
    subtitle2,
    button
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [createTitle(
    enData.Titles.Villa_Panorama,
    enData.Titles.Villa_Map_Location,
    enData.Titles.Availability_Calendar,
    enData.Titles.Price_list,
    enData.Titles.Availability_Appointments_sub,
    enData.Titles.Surrondings,
    enData.Titles.Surrondings_sub,
    enData.Buttons.Show_Gallery
    )],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [createTitle(
    deData.Titles.Villa_Panorama,
    deData.Titles.Villa_Map_Location,
    deData.Titles.Availability_Calendar,
    deData.Titles.Price_list,
    deData.Titles.Availability_Appointments_sub,
    deData.Titles.Surrondings,
    deData.Titles.Surrondings_sub,
    deData.Buttons.Show_Gallery)],
};

export const TitleDataHR: DataObject = {
  data: [createTitle(
    hrData.Titles.Villa_Panorama,
    hrData.Titles.Villa_Map_Location,
    hrData.Titles.Availability_Calendar,
    hrData.Titles.Price_list,
    hrData.Titles.Availability_Appointments_sub,
    hrData.Titles.Surrondings,
    hrData.Titles.Surrondings_sub,
    hrData.Buttons.Show_Gallery)],
};

export const TitleDataIT: DataObject = {
  data: [createTitle(
    itData.Titles.Villa_Panorama,
    itData.Titles.Villa_Map_Location,
    itData.Titles.Availability_Calendar,
    itData.Titles.Price_list,
    itData.Titles.Availability_Appointments_sub,
    itData.Titles.Surrondings,
    itData.Titles.Surrondings_sub,
    itData.Buttons.Show_Gallery)],
};

export const getTitleData = (language: string): DataObject => {
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
