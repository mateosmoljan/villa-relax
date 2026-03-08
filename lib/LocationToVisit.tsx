import React from "react";

export type LocationToVisitData = {
  placeToVisit: React.ReactNode;
  des?: string;
};

type DataObject = {
  locations: LocationToVisitData[];
};

const createLink = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow underline underline-offset-4">
    {label}
  </a>
);

const data: Record<string, DataObject> = {
  en: {
    locations: [
      { placeToVisit: createLink("https://www.pulainfo.hr/en", "Pula Tourist Board"), des: "Official city guide for the Arena, Roman heritage, events and urban planning." },
      { placeToVisit: createLink("https://www.medulinriviera.info/en", "Medulin Riviera"), des: "Useful for Medulin, Premantura and broader south Istria beach planning." },
      { placeToVisit: createLink("https://www.kamenjak.hr/en", "Cape Kamenjak"), des: "Official nature-park style info for entrances, routes and outdoor day planning." },
      { placeToVisit: createLink("https://www.istra.hr/en/destinations/fazana", "Fažana Tourist Board"), des: "Helpful for Brijuni departures, waterfront recommendations and family activities." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/en", "Brijuni National Park"), des: "Tickets, excursions and practical visitor details for one of the top day trips in Istria." },
    ],
  },
  de: {
    locations: [
      { placeToVisit: createLink("https://www.pulainfo.hr/de", "Tourismusverband Pula"), des: "Offizielle Infos zu Arena, römischem Erbe, Veranstaltungen und Stadtbesuch." },
      { placeToVisit: createLink("https://www.medulinriviera.info/de", "Medulin Riviera"), des: "Hilfreich für Medulin, Premantura und die Strände Südistriens." },
      { placeToVisit: createLink("https://www.kamenjak.hr/en", "Kap Kamenjak"), des: "Praktische Hinweise zu Zugängen, Routen und Outdoor-Planung vor Ort." },
      { placeToVisit: createLink("https://www.istra.hr/de/destinationen/fazana", "Tourismusverband Fažana"), des: "Nützlich für Brijuni-Abfahrten, Uferpromenade und Familienaktivitäten." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/de", "Nationalpark Brijuni"), des: "Tickets, Ausflüge und Besucherinfos zu einem der schönsten Tagesziele Istriens." },
    ],
  },
  hr: {
    locations: [
      { placeToVisit: createLink("https://www.pulainfo.hr/hr", "TZ Pula"), des: "Službeni vodič za Arenu, događanja, rimsku baštinu i gradski posjet." },
      { placeToVisit: createLink("https://www.medulinriviera.info/hr", "Medulin Riviera"), des: "Korisno za Medulin, Premanturu i planiranje južnoistarskih plaža." },
      { placeToVisit: createLink("https://www.kamenjak.hr/", "Rt Kamenjak"), des: "Informacije o ulazima, rutama i aktivnom boravku u prirodi." },
      { placeToVisit: createLink("https://www.istra.hr/hr/destinacije/fazana", "TZ Fažana"), des: "Pomaže kod planiranja Brijuna, rive i obiteljskih sadržaja." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/", "Nacionalni park Brijuni"), des: "Ulaznice, izleti i praktične informacije za jedan od najboljih izleta u Istri." },
    ],
  },
  it: {
    locations: [
      { placeToVisit: createLink("https://www.pulainfo.hr/it", "Ente turistico di Pola"), des: "Guida ufficiale per Arena, patrimonio romano, eventi e visita della città." },
      { placeToVisit: createLink("https://www.medulinriviera.info/it", "Medulin Riviera"), des: "Utile per Medolino, Premantura e la pianificazione delle spiagge del sud Istria." },
      { placeToVisit: createLink("https://www.kamenjak.hr/en", "Capo Kamenjak / Promontore"), des: "Informazioni pratiche su accessi, percorsi e organizzazione della giornata outdoor." },
      { placeToVisit: createLink("https://www.istra.hr/it/destinazioni/fasana", "Ente turistico di Fasana"), des: "Utile per partenze verso Brioni, lungomare e attività per famiglie." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/it", "Parco Nazionale di Brioni"), des: "Biglietti, escursioni e dettagli utili per una delle migliori gite dell'Istria." },
    ],
  },
};

export const getLocationsData = (language: string): DataObject => data[language] ?? data.en;
