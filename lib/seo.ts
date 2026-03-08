import type { Metadata } from "next";

export const SITE_URL = "https://www.villarelaxpula.com";
const SITE_NAME = "Villa Relax";
const HERO_IMAGE = "/assets/images/outside/main.jpg";

const localeContent = {
  en: {
    siteDescription:
      "Villa Relax in Pula, Croatia — luxury accommodation with private pool, spacious interiors, and easy access to Istria's top attractions.",
  },
  de: {
    siteDescription:
      "Villa Relax in Pula, Kroatien — luxuriöse Unterkunft mit privatem Pool, großzügigem Interieur und Nähe zu den besten Attraktionen Istriens.",
  },
  hr: {
    siteDescription:
      "Villa Relax u Puli, Hrvatska — luksuzan smještaj s privatnim bazenom, prostranim interijerom i blizinom najboljih atrakcija Istre.",
  },
  it: {
    siteDescription:
      "Villa Relax a Pola, Croazia — alloggio di lusso con piscina privata, interni spaziosi e vicinanza alle migliori attrazioni dell'Istria.",
  },
} as const;

export type Locale = keyof typeof localeContent;

const supportedLocales: Locale[] = ["en", "de", "hr", "it"];

const pageCopy: Record<
  string,
  Record<Locale, { title: string; description: string }>
> = {
  "/": {
    en: {
      title: "Villa Relax | Holiday Villa in Pula, Croatia",
      description: "Villa Relax — holiday villa in Pula, 900m from the sea. Private pool, jacuzzi, sauna, fitness, elevator. Sleeps 16. Great for groups and families.",
    },
    de: {
      title: "Villa Relax | Ferienvilla in Pula, Kroatien",
      description: "Villa Relax — Ferienvilla in Pula, 900m vom Meer. Pool, Whirlpool, Sauna, Fitness, Aufzug. Bis zu 16 Personen. Ideal für Gruppen und Familien.",
    },
    hr: {
      title: "Villa Relax | Vila za odmor u Puli, Hrvatska",
      description: "Villa Relax — vila za odmor u Puli, 900m od mora. Bazen, jacuzzi, sauna, fitness, dizalo. Do 16 osoba. Idealna za grupe i obitelji.",
    },
    it: {
      title: "Villa Relax | Villa vacanze a Pola, Croazia",
      description: "Villa Relax — villa vacanze a Pola, a 900m dal mare. Piscina, jacuzzi, sauna, fitness, ascensore. Fino a 16 ospiti. Perfetta per gruppi e famiglie.",
    },
  },
  "/villa-relax": {
    en: { title: "Villa Relax — 6 Bedroom Villa in Pula Near Verudela Beach", description: "Explore Villa Relax: 6 bedrooms, pool, jacuzzi, sauna, games, elevator. 3 min from Verudela beach. Perfect for groups up to 16." },
    de: { title: "Villa Relax — 6-Schlafzimmer-Villa in Pula bei Verudela", description: "Villa Relax: 6 Schlafzimmer, Pool, Whirlpool, Sauna, Spiele, Aufzug. 3 Min. von Verudela. Ideal für Gruppen bis 16." },
    hr: { title: "Villa Relax — Vila sa 6 soba u Puli kod plaže Verudela", description: "Villa Relax: 6 soba, bazen, jacuzzi, sauna, igre, dizalo. 3 min od plaže Verudela. Za grupe do 16 osoba." },
    it: { title: "Villa Relax — Villa 6 camere a Pola vicino Verudela", description: "Villa Relax: 6 camere, piscina, jacuzzi, sauna, giochi, ascensore. 3 min da Verudela. Per gruppi fino a 16." },
  },
  "/photogallery": {
    en: { title: "Villa Relax Photos — Holiday Villa in Pula, Croatia", description: "Browse photos of Villa Relax: pool, wellness area, bedrooms, terraces and Pula surroundings." },
    de: { title: "Villa Relax Fotos — Ferienvilla in Pula, Kroatien", description: "Fotos von Villa Relax: Pool, Wellness, Schlafzimmer, Terrassen und Umgebung in Pula." },
    hr: { title: "Villa Relax Fotogalerija — Vila za odmor u Puli", description: "Fotografije Ville Relax: bazen, wellness, sobe, terase i okolica Pule." },
    it: { title: "Villa Relax Galleria — Villa vacanze a Pola", description: "Foto di Villa Relax: piscina, area wellness, camere, terrazze e dintorni di Pola." },
  },
  "/pricelist": {
    en: { title: "Villa Relax Prices — Villa Rental in Pula, Istria", description: "View seasonal prices and booking conditions for Villa Relax in Pula. Direct booking, no commission." },
    de: { title: "Villa Relax Preise — Ferienvilla in Pula, Istrien", description: "Saisonpreise und Buchungsbedingungen für Villa Relax in Pula. Direkt buchen, keine Provision." },
    hr: { title: "Villa Relax Cjenik — Vila za iznajmljivanje u Puli", description: "Sezonske cijene i uvjeti za Villu Relax u Puli. Izravna rezervacija, bez provizije." },
    it: { title: "Villa Relax Prezzi — Villa in affitto a Pola, Istria", description: "Prezzi stagionali e condizioni per Villa Relax a Pola. Prenotazione diretta, senza commissioni." },
  },
  "/environs": {
    en: { title: "Things to Do in Pula — Around Villa Relax, Istria", description: "Discover Verudela beach, Pula Arena, Brijuni, aquarium and local attractions near Villa Relax." },
    de: { title: "Ausflugsziele in Pula — Rund um Villa Relax, Istrien", description: "Verudela Strand, Arena Pula, Brijuni, Aquarium und Attraktionen nahe Villa Relax." },
    hr: { title: "Što posjetiti u Puli — Oko Ville Relax, Istra", description: "Plaža Verudela, Arena Pula, Brijuni, akvarij i atrakcije u blizini Ville Relax." },
    it: { title: "Cosa fare a Pola — Dintorni di Villa Relax, Istria", description: "Spiaggia Verudela, Arena di Pola, Brioni, acquario e attrazioni vicino a Villa Relax." },
  },
  "/contact": {
    en: { title: "Book Villa Relax — Holiday Villa in Pula, Istria", description: "Send a booking inquiry for Villa Relax in Pula. Direct contact, fast response, save on fees." },
    de: { title: "Villa Relax buchen — Ferienvilla in Pula, Istrien", description: "Buchungsanfrage für Villa Relax in Pula. Direkter Kontakt, schnelle Antwort, keine Gebühren." },
    hr: { title: "Rezerviraj Villa Relax — Vila za odmor u Puli", description: "Pošaljite upit za Villu Relax u Puli. Direktan kontakt, brzi odgovor, bez provizije." },
    it: { title: "Prenota Villa Relax — Villa vacanze a Pola", description: "Richiesta di prenotazione per Villa Relax a Pola. Contatto diretto, risposta rapida." },
  },
};

export function buildPageMetadata(locale: string, path: keyof typeof pageCopy): Metadata {
  const safeLocale = (supportedLocales.includes(locale as Locale)
    ? locale
    : "en") as Locale;

  const copy = pageCopy[path][safeLocale];
  const title = `${copy.title} | ${SITE_NAME}`;
  const pageUrl = `${SITE_URL}/${safeLocale}${path === "/" ? "" : path}`;

  const languages = Object.fromEntries(
    supportedLocales.map((lng) => [
      lng,
      `${SITE_URL}/${lng}${path === "/" ? "" : path}`,
    ])
  );

  return {
    title,
    description: copy.description,
    alternates: {
      canonical: pageUrl,
      languages,
    },
    openGraph: {
      type: "website",
      locale: safeLocale,
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      description: copy.description,
      images: [
        {
          url: `${SITE_URL}${HERO_IMAGE}`,
          width: 1920,
          height: 1080,
          alt: "Villa Relax hero image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
      images: [`${SITE_URL}${HERO_IMAGE}`],
    },
  };
}

export function getLodgingBusinessJsonLd(locale: string) {
  const safeLocale = (supportedLocales.includes(locale as Locale)
    ? locale
    : "en") as Locale;

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Villa Relax",
    description: localeContent[safeLocale].siteDescription,
    image: [`${SITE_URL}${HERO_IMAGE}`],
    url: `${SITE_URL}/${safeLocale}`,
    telephone: "+38598898959",
    email: "bookings@villarelaxpula.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pula",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8666,
      longitude: 13.8496,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    ],
  };
}
