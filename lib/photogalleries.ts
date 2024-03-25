type PhotogalleriesData = {
  subtitle?: string;
  title?: string;
  button?: string;
};

type DataObject = {
  data: PhotogalleriesData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createPhotogalleries = (
  subtitle: string,
  title: string,
  button: string
): PhotogalleriesData => {
  return {
    subtitle,
    title,
    button,
  };
};

// Define the data object
export const PhotogalleriesDataEn: DataObject = {
  data: [
    createPhotogalleries(
      enData.Photogalleries.subtitle,
      enData.Photogalleries.title,
      enData.Photogalleries.button
    ),
  ],
};

// You can also define a separate object for German translations if needed
export const PhotogalleriesDataDE: DataObject = {
  data: [
    createPhotogalleries(
      deData.Photogalleries.subtitle,
      deData.Photogalleries.title,
      deData.Photogalleries.button
    ),
  ],
};

export const PhotogalleriesDataHR: DataObject = {
  data: [
    createPhotogalleries(
      hrData.Photogalleries.subtitle,
      hrData.Photogalleries.title,
      hrData.Photogalleries.button
    ),
  ],
};

export const PhotogalleriesDataIT: DataObject = {
  data: [
    createPhotogalleries(
      itData.Photogalleries.subtitle,
      itData.Photogalleries.title,
      itData.Photogalleries.button
    ),
  ],
};

export const getPhotogalleriesData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return PhotogalleriesDataEn;
    case "de":
      return PhotogalleriesDataDE;
    case "hr":
      return PhotogalleriesDataHR;
    case "it":
      return PhotogalleriesDataIT;
    default:
      // Return default language if specified language is not found
      return PhotogalleriesDataEn;
  }
};
