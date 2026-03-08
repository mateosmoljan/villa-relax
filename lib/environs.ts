export type EnvironsItem = {
  title: string;
  description: string;
};

export type EnvironsData = {
  data?: { button: string }[];
  heroTitle: string;
  heroIntro: string;
  sections: {
    nearby: { title: string; intro: string; items: EnvironsItem[] };
    beaches: { title: string; intro: string; items: EnvironsItem[] };
    dayTrips: { title: string; intro: string; items: EnvironsItem[] };
    whyStay: { title: string; intro: string; items: EnvironsItem[] };
  };
  linksTitle: string;
  cta: {
    title: string;
    text: string;
    button: string;
  };
};

const data: Record<string, EnvironsData> = {
  en: {
    heroTitle: "Environs & coastal escapes from Villa Relax",
    heroIntro:
      "Villa Relax is a practical and comfortable villa in Istria for travellers who want beaches, city life and easy excursions in one stay. Based in Pula, you are close to Verudela, Medulin, Premantura, Cape Kamenjak, Fažana and Brijuni, while Rovinj remains an easy day trip. This makes Villa Relax a strong choice for guests searching for a villa near Pula, a villa near Medulin or one of the best villas in Istria for combining sightseeing with summer beach time.",
    sections: {
      nearby: {
        title: "Nearby towns & neighbourhoods",
        intro:
          "South Istria gives you a rare mix of urban sights, resort areas and quick seaside drives without long transfer times.",
        items: [
          { title: "Pula", description: "The largest city in Istria offers Roman landmarks, shopping, nightlife, restaurants and a lively local atmosphere throughout the summer." },
          { title: "Verudela", description: "A classic Pula holiday zone known for sea access, resorts, walking paths and beach bars." },
          { title: "Medulin", description: "Popular with families and active travellers who want beaches, waterfront dining and easy boat excursions." },
          { title: "Fažana", description: "A charming seafront town that works perfectly for dinner by the water and departures to Brijuni National Park." },
          { title: "Vodnjan", description: "A good inland contrast to the coast, known for olive oil, local character and a slower Istrian rhythm." },
          { title: "Rovinj", description: "Still very feasible as a day trip when you want a romantic old town, harbour scenery and classic west-coast charm." },
        ],
      },
      beaches: {
        title: "Beaches & coast",
        intro:
          "If your priority is sea time, this is one of the most flexible parts of Istria, especially for guests comparing villas near Pula or villas near Medulin.",
        items: [
          { title: "Verudela beaches", description: "Easy swimming access, resort facilities and a dependable choice for relaxed beach days close to the villa." },
          { title: "Medulin coastline", description: "Good for sandy and family-friendly options, evening promenades and casual summer dining." },
          { title: "Premantura", description: "A favourite for guests who want a more natural coastal feeling before heading into Cape Kamenjak." },
          { title: "Cape Kamenjak", description: "One of the signature nature spots in south Istria, loved for clear water, dramatic coves and full-day outdoor excursions." },
        ],
      },
      dayTrips: {
        title: "Day trips & landmarks",
        intro:
          "Villa Relax works well for guests who want to do something different every day without spending half the holiday in the car.",
        items: [
          { title: "Pula Arena & Roman heritage", description: "A must for first-time visitors who want history, architecture and an unmistakable Mediterranean city backdrop." },
          { title: "Brijuni National Park", description: "Reachable via Fažana, Brijuni is ideal for a memorable boat-and-island day during your stay." },
          { title: "Premantura & Kamenjak", description: "Perfect for active days with swimming, cycling, viewpoints and a more rugged Adriatic landscape." },
          { title: "Rovinj", description: "An excellent change of pace when you want galleries, narrow streets and one of the most iconic old towns on the Croatian coast." },
        ],
      },
      whyStay: {
        title: "Why stay here?",
        intro:
          "This part of south Istria suits beach lovers, city explorers and groups who want variety without complicated logistics.",
        items: [
          { title: "Beach + city + excursions", description: "A very balanced location for travellers who want a villa in Istria with both sightseeing and classic summer relaxation." },
          { title: "Excellent for families and friend groups", description: "You can split days between beaches, restaurants, cultural stops and evening time back at the villa." },
          { title: "Strong south Istria positioning", description: "A smart option for guests searching for villas near Pula, villas near Medulin or a villa near Brijuni with easy road access." },
        ],
      },
    },
    linksTitle: "Official resources for planning your stay",
    cta: {
      title: "Book Villa Relax and enjoy Pula, nearby beaches and easy excursions",
      text: "Stay at Villa Relax for a flexible south Istria holiday with city sights, beach days and some of the peninsula's best day trips all within easy reach.",
      button: "Check availability",
    },
  },
  de: {
    heroTitle: "Umgebung & Küstenausflüge rund um Villa Relax",
    heroIntro:
      "Villa Relax ist eine praktische und komfortable Villa in Istrien für Reisende, die Strände, Stadtleben und einfache Ausflüge in einem Urlaub verbinden möchten. Durch die Lage in Pula sind Verudela, Medulin, Premantura, Kap Kamenjak, Fažana und Brijuni schnell erreichbar, während auch Rovinj bequem als Tagesausflug infrage kommt. Damit ist Villa Relax eine starke Wahl für Gäste, die eine Villa nahe Pula, eine Villa nahe Medulin oder eine der vielseitigsten Villen in Istrien für Strand und Besichtigungen suchen.",
    sections: {
      nearby: {
        title: "Orte & Viertel in der Nähe",
        intro:
          "Südistien bietet eine seltene Kombination aus Stadt, Badeorten und kurzen Wegen an die Küste – ohne lange Transferzeiten.",
        items: [
          { title: "Pula", description: "Die größte Stadt Istriens bietet römische Sehenswürdigkeiten, Einkaufsmöglichkeiten, Restaurants, Nachtleben und sommerlich lebendige Atmosphäre." },
          { title: "Verudela", description: "Eine klassische Ferienzone in Pula mit Meerzugang, Resorts, Spazierwegen und Strandbars." },
          { title: "Medulin", description: "Beliebt bei Familien und aktiven Urlaubern, die Strände, Promenade und Bootsausflüge schätzen." },
          { title: "Fažana", description: "Ein charmanter Küstenort, ideal für ein Abendessen am Wasser und als Ausgangspunkt nach Brijuni." },
          { title: "Vodnjan", description: "Ein schöner Kontrast zur Küste – bekannt für Olivenöl, lokalen Charakter und entspannteres istrisches Lebensgefühl." },
          { title: "Rovinj", description: "Auch von Pula aus sehr gut als Tagesausflug machbar, wenn Sie Altstadt, Hafen und westistrischen Charme erleben möchten." },
        ],
      },
      beaches: {
        title: "Strände & Küste",
        intro:
          "Wenn Meer und Badezeit Priorität haben, gehört diese Region zu den flexibelsten Gegenden – besonders für Gäste, die Villen nahe Pula oder Villen nahe Medulin vergleichen.",
        items: [
          { title: "Strände von Verudela", description: "Schnell erreichbar und ideal für entspannte Badetage mit guter touristischer Infrastruktur in der Nähe der Villa." },
          { title: "Küste von Medulin", description: "Gut für familienfreundliche Strandtage, Abendspaziergänge und unkompliziertes Sommerleben am Wasser." },
          { title: "Premantura", description: "Besonders attraktiv für Gäste, die eine natürlichere Küstenlandschaft mögen und weiter zum Kap Kamenjak fahren möchten." },
          { title: "Kap Kamenjak", description: "Einer der markantesten Naturorte Südistriens mit klarem Wasser, wilden Buchten und großartigen Ausflugsmöglichkeiten." },
        ],
      },
      dayTrips: {
        title: "Tagesausflüge & Sehenswürdigkeiten",
        intro:
          "Villa Relax ist ideal für Gäste, die täglich etwas anderes erleben möchten, ohne einen großen Teil des Urlaubs im Auto zu verbringen.",
        items: [
          { title: "Arena von Pula & römisches Erbe", description: "Ein Muss für Erstbesucher, die Geschichte, Architektur und echtes mediterranes Stadtgefühl erleben wollen." },
          { title: "Nationalpark Brijuni", description: "Über Fažana bequem erreichbar und perfekt für einen besonderen Insel- und Bootsausflug." },
          { title: "Premantura & Kamenjak", description: "Ideal für aktive Tage mit Baden, Radfahren, Aussichtspunkten und einer raueren Adriatiklandschaft." },
          { title: "Rovinj", description: "Ein wunderbarer Kontrast mit Galerien, engen Gassen und einer der ikonischsten Altstädte an der kroatischen Küste." },
        ],
      },
      whyStay: {
        title: "Warum hier wohnen?",
        intro:
          "Dieser Teil Südistriens passt perfekt zu Strandliebhabern, Stadterkundern und Gruppen, die viel Abwechslung ohne komplizierte Planung möchten.",
        items: [
          { title: "Strand + Stadt + Ausflüge", description: "Eine sehr ausgewogene Lage für alle, die eine Villa in Istrien mit Sightseeing und klassischem Sommerurlaub verbinden möchten." },
          { title: "Ideal für Familien und Freundesgruppen", description: "Strände, Restaurants, Kultur und entspannte Abende an der Villa lassen sich mühelos kombinieren." },
          { title: "Starke Lage in Südistrien", description: "Eine kluge Wahl für Gäste, die Villen nahe Pula, Villen nahe Medulin oder eine Villa nahe Brijuni mit guter Anbindung suchen." },
        ],
      },
    },
    linksTitle: "Offizielle Quellen für die Urlaubsplanung",
    cta: {
      title: "Villa Relax buchen und Pula, die Strände der Umgebung und vielseitige Ausflüge genießen",
      text: "Entscheiden Sie sich für Villa Relax und erleben Sie Südistrien mit Stadtbesichtigungen, Badebuchten und einigen der schönsten Tagesausflüge der Halbinsel.",
      button: "Verfügbarkeit prüfen",
    },
  },
  hr: {
    heroTitle: "Okolica i obalni izleti iz Ville Relax",
    heroIntro:
      "Villa Relax je praktična i udobna vila u Istri za goste koji žele spoj plaža, gradskog sadržaja i jednostavnih izleta. Smještaj u Puli znači da su Verudela, Medulin, Premantura, Rt Kamenjak, Fažana i Brijuni vrlo blizu, a i Rovinj je lako dostupan za dnevni izlet. Zato je Villa Relax odličan izbor za one koji traže vilu blizu Pule, vilu blizu Medulina ili jednu od najpraktičnijih vila u Istri za kombinaciju razgledavanja i kupanja.",
    sections: {
      nearby: {
        title: "Obližnji gradovi i kvartovi",
        intro: "Južna Istra nudi rijedak spoj grada, resort zona i kratkih vožnji do mora bez dugih transfera.",
        items: [
          { title: "Pula", description: "Najveći grad u Istri nudi rimsku baštinu, shopping, restorane, događanja i živu ljetnu atmosferu." },
          { title: "Verudela", description: "Klasična pulska zona za odmor poznata po pristupu moru, šetnicama i beach barovima." },
          { title: "Medulin", description: "Popularan među obiteljima i aktivnim gostima koji žele plaže, rivu i jednostavne brodske izlete." },
          { title: "Fažana", description: "Šarmantno mjesto uz more, idealno za večeru na rivi i polazak prema Brijunima." },
          { title: "Vodnjan", description: "Dobar kontrast obali, poznat po maslinovom ulju, lokalnom karakteru i sporijem ritmu." },
          { title: "Rovinj", description: "I dalje vrlo izvediv kao dnevni izlet kada želite romantičnu staru jezgru i zapadnoistarski ugođaj." },
        ],
      },
      beaches: {
        title: "Plaže i obala",
        intro: "Ako vam je more prioritet, ovo je jedan od najfleksibilnijih dijelova Istre, posebno za goste koji uspoređuju vile blizu Pule ili Medulina.",
        items: [
          { title: "Plaže Verudele", description: "Brz pristup kupanju i dobra infrastruktura za opuštene dane blizu vile." },
          { title: "Medulinska obala", description: "Odlična za obiteljske opcije, večernje šetnje i lagani ljetni ritam uz more." },
          { title: "Premantura", description: "Privlačna gostima koji vole prirodniji obalni doživljaj prije nastavka prema Kamenjaku." },
          { title: "Rt Kamenjak", description: "Jedna od najprepoznatljivijih prirodnih lokacija južne Istre s bistrom vodom, uvalama i cjelodnevnim outdoor izletima." },
        ],
      },
      dayTrips: {
        title: "Izleti i znamenitosti",
        intro: "Villa Relax je odlična za goste koji žele svaki dan drukčiji program bez gubljenja vremena na duge vožnje.",
        items: [
          { title: "Arena i rimska baština Pule", description: "Obavezno za prve posjete, kada želite povijest, arhitekturu i pravi mediteranski gradski ambijent." },
          { title: "Nacionalni park Brijuni", description: "Dostupan preko Fažane i izvrstan za poseban jednodnevni otočni izlet." },
          { title: "Premantura i Kamenjak", description: "Savršeno za aktivne dane uz kupanje, bicikliranje, vidikovce i divlji južni Jadran." },
          { title: "Rovinj", description: "Odlična promjena ritma kada želite galerije, uske ulice i jedan od najpoznatijih starih gradova na obali." },
        ],
      },
      whyStay: {
        title: "Zašto odsjesti ovdje?",
        intro: "Ovaj dio južne Istre odgovara ljubiteljima plaža, gradskih sadržaja i grupama koje žele raznolik odmor bez komplicirane logistike.",
        items: [
          { title: "Plaža + grad + izleti", description: "Vrlo uravnotežena lokacija za goste koji žele vilu u Istri i za razgledavanje i za klasičan ljetni odmor." },
          { title: "Idealno za obitelji i grupe prijatelja", description: "Lako je kombinirati kupanje, restorane, kulturne točke i opuštene večeri u vili." },
          { title: "Snažna pozicija u južnoj Istri", description: "Pametan izbor za one koji traže vile blizu Pule, vile blizu Medulina ili vilu blizu Brijuna s dobrim cestovnim pristupom." },
        ],
      },
    },
    linksTitle: "Službeni izvori za planiranje boravka",
    cta: {
      title: "Rezervirajte Villa Relax i uživajte u Puli, obližnjim plažama i lakim izletima",
      text: "Odsjednite u Villa Relax i iskoristite južnu Istru za gradske sadržaje, dane na plaži i neke od najboljih izleta na poluotoku.",
      button: "Provjerite raspoloživost",
    },
  },
  it: {
    heroTitle: "Dintorni e fughe sul mare da Villa Relax",
    heroIntro:
      "Villa Relax è una villa in Istria pratica e confortevole per chi desidera spiagge, città ed escursioni facili nello stesso soggiorno. Da Pola si raggiungono rapidamente Verudela, Medolino, Premantura, Capo Promontore/Kamenjak, Fasana e Brioni, mentre Rovigno resta perfetta per una gita di giornata. Per questo Villa Relax è una scelta molto valida per chi cerca una villa vicino a Pola, una villa vicino a Medolino o una delle ville in Istria più comode per unire mare e visite.",
    sections: {
      nearby: {
        title: "Città e zone vicine",
        intro: "L'Istria meridionale offre un mix raro di città, zone balneari e brevi spostamenti verso il mare senza tempi lunghi di trasferimento.",
        items: [
          { title: "Pola", description: "La città più grande dell'Istria unisce monumenti romani, negozi, ristoranti, eventi e una vivace atmosfera estiva." },
          { title: "Verudela", description: "Una classica area vacanze di Pola con accesso al mare, resort, passeggiate e beach bar." },
          { title: "Medulin / Medolino", description: "Molto apprezzata da famiglie e viaggiatori attivi per spiagge, lungomare ed escursioni in barca." },
          { title: "Fažana / Fasana", description: "Una località sul mare perfetta per cenare sul lungomare e partire verso il Parco Nazionale di Brioni." },
          { title: "Vodnjan / Dignano", description: "Un bel contrasto rispetto alla costa, noto per olio d'oliva, autenticità e ritmo più rilassato." },
          { title: "Rovinj / Rovigno", description: "Ancora molto comoda come gita di giornata quando si desiderano centro storico e fascino della costa occidentale." },
        ],
      },
      beaches: {
        title: "Spiagge e costa",
        intro: "Se il mare è la priorità, questa è una delle zone più flessibili dell'Istria, soprattutto per chi confronta ville vicino a Pola o ville vicino a Medolino.",
        items: [
          { title: "Spiagge di Verudela", description: "Accesso semplice al bagno e servizi comodi per giornate di mare rilassate vicino alla villa." },
          { title: "Costa di Medolino", description: "Ottima per opzioni adatte alle famiglie, passeggiate serali e vita estiva sul mare." },
          { title: "Premantura", description: "Molto amata da chi preferisce un paesaggio costiero più naturale prima di entrare nella zona di Capo Promontore." },
          { title: "Capo Kamenjak / Capo Promontore", description: "Una delle aree naturali simbolo del sud dell'Istria, con acqua limpida, calette spettacolari e giornate outdoor complete." },
        ],
      },
      dayTrips: {
        title: "Gite di giornata e luoghi d'interesse",
        intro: "Villa Relax è perfetta per chi vuole vivere qualcosa di diverso ogni giorno senza passare metà vacanza in auto.",
        items: [
          { title: "Arena di Pola e patrimonio romano", description: "Imperdibile per chi visita la zona per la prima volta e vuole storia, architettura e atmosfera mediterranea." },
          { title: "Parco Nazionale di Brioni", description: "Si raggiunge facilmente via Fasana ed è ideale per una giornata speciale tra barca e isole." },
          { title: "Premantura e Kamenjak", description: "Perfetti per giornate attive tra bagni, bici, punti panoramici e natura più selvaggia." },
          { title: "Rovigno", description: "Una splendida variazione di ritmo con gallerie, vicoli stretti e uno dei centri storici più iconici dell'Adriatico." },
        ],
      },
      whyStay: {
        title: "Perché soggiornare qui?",
        intro: "Questa parte dell'Istria meridionale è ideale per chi ama spiagge, città e vacanze ricche di varietà senza logistica complicata.",
        items: [
          { title: "Spiaggia + città + escursioni", description: "Una posizione molto equilibrata per chi desidera una villa in Istria adatta sia al mare sia alle visite." },
          { title: "Ottima per famiglie e gruppi di amici", description: "È facile alternare spiagge, ristoranti, tappe culturali e serate rilassate in villa." },
          { title: "Forte posizionamento nel sud dell'Istria", description: "Una scelta intelligente per chi cerca ville vicino a Pola, ville vicino a Medolino o una villa vicino a Brioni con accessi comodi." },
        ],
      },
    },
    linksTitle: "Risorse ufficiali per organizzare il soggiorno",
    cta: {
      title: "Prenota Villa Relax e goditi Pola, le spiagge vicine e tante escursioni facili",
      text: "Scegli Villa Relax per una vacanza flessibile nell'Istria meridionale tra città, giornate di mare e alcune delle migliori escursioni della penisola.",
      button: "Verifica disponibilità",
    },
  },
};

const mapButtons: Record<string, string> = {
  en: "View map",
  de: "Karte ansehen",
  hr: "Prikaži kartu",
  it: "Apri mappa",
};

export const getEnvironsData = (language: string): EnvironsData => {
  const selected = data[language] ?? data.en;
  return {
    ...selected,
    data: [{ button: mapButtons[language] ?? mapButtons.en }],
  };
};
