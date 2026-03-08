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
      title: "Luxury Villa in Pula, Croatia",
      description: localeContent.en.siteDescription,
    },
    de: {
      title: "Luxusvilla in Pula, Kroatien",
      description: localeContent.de.siteDescription,
    },
    hr: {
      title: "Luksuzna vila u Puli, Hrvatska",
      description: localeContent.hr.siteDescription,
    },
    it: {
      title: "Villa di lusso a Pola, Croazia",
      description: localeContent.it.siteDescription,
    },
  },
  "/villa-relax": {
    en: { title: "Villa Relax Details", description: localeContent.en.siteDescription },
    de: { title: "Villa Relax Details", description: localeContent.de.siteDescription },
    hr: { title: "Detalji Villa Relax", description: localeContent.hr.siteDescription },
    it: { title: "Dettagli Villa Relax", description: localeContent.it.siteDescription },
  },
  "/photogallery": {
    en: { title: "Photo Gallery", description: "Browse photos of Villa Relax, including interiors, exterior, pool and surroundings in Pula." },
    de: { title: "Fotogalerie", description: "Entdecken Sie Fotos der Villa Relax mit Innenräumen, Außenbereich, Pool und Umgebung in Pula." },
    hr: { title: "Foto galerija", description: "Pogledajte fotografije Ville Relax — interijer, eksterijer, bazen i okolica Pule." },
    it: { title: "Galleria fotografica", description: "Sfoglia le foto di Villa Relax: interni, esterni, piscina e dintorni di Pola." },
  },
  "/pricelist": {
    en: { title: "Prices & Booking Conditions", description: "Check Villa Relax prices, booking conditions, and stay details for your visit to Pula." },
    de: { title: "Preise & Buchungsbedingungen", description: "Sehen Sie die Preise, Buchungsbedingungen und Aufenthaltsdetails der Villa Relax." },
    hr: { title: "Cjenik i uvjeti rezervacije", description: "Provjerite cijene, uvjete rezervacije i detalje boravka za Villu Relax u Puli." },
    it: { title: "Prezzi e condizioni di prenotazione", description: "Consulta prezzi, condizioni di prenotazione e dettagli del soggiorno a Villa Relax." },
  },
  "/environs": {
    en: { title: "Environs & Attractions", description: "Discover beaches, historic sites and attractions near Villa Relax in Pula and wider Istria." },
    de: { title: "Umgebung & Attraktionen", description: "Entdecken Sie Strände, Sehenswürdigkeiten und Attraktionen nahe Villa Relax in Pula und Istrien." },
    hr: { title: "Okolica i atrakcije", description: "Otkrijte plaže, znamenitosti i atrakcije u blizini Ville Relax u Puli i Istri." },
    it: { title: "Dintorni e attrazioni", description: "Scopri spiagge, siti storici e attrazioni vicino a Villa Relax a Pola e in Istria." },
  },
  "/contact": {
    en: { title: "Contact & Inquiry", description: "Send a booking inquiry to Villa Relax in Pula and plan your perfect stay in Istria." },
    de: { title: "Kontakt & Anfrage", description: "Senden Sie eine Buchungsanfrage an Villa Relax in Pula und planen Sie Ihren Aufenthalt." },
    hr: { title: "Kontakt i upit", description: "Pošaljite upit za rezervaciju Ville Relax u Puli i isplanirajte svoj boravak." },
    it: { title: "Contatto e richiesta", description: "Invia una richiesta di prenotazione a Villa Relax a Pola e pianifica il tuo soggiorno." },
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
