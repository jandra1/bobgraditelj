window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "ele-komunikacije",
  order: 17,
  title: "Uže područje struke – elektroničke komunikacije",
  short: "Elektroničke komunikacije",
  icon: "📡",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.4.) — polažu kandidati elektroničkih komunikacija",
      points: [
        "Zakon o elektroničkim komunikacijama (NN 76/22): elektronička komunikacijska infrastruktura, opće ovlaštenje, radiofrekvencijski spektar, inspekcijski nadzor.",
        "Zakon o mjerama za smanjenje troškova postavljanja elektroničkih komunikacijskih mreža velikih brzina (NN 121/16).",
        "Pravilnik o tehničkim uvjetima za kabelsku kanalizaciju (NN 139/23); Pravilnik o svjetlovodnim distribucijskim mrežama (NN 63/24).",
        "Pravilnik o zonama elektroničke komunikacijske infrastrukture, zaštitnim zonama i radijskim koridorima (NN 146/24, 58/25).",
        "Pravilnici o namjeni i dodjeli radiofrekvencijskog spektra te o posebnim uvjetima postavljanja i uporabe radijskih postaja."
      ]
    },
    {
      heading: "Pojmovi",
      points: [
        "Regulator elektroničkih komunikacija u RH je HAKOM (Hrvatska regulatorna agencija za mrežne djelatnosti).",
        "Opće ovlaštenje: pravo pružanja elektroničkih komunikacijskih mreža i usluga bez pojedinačne dozvole, uz prethodnu obavijest HAKOM-u.",
        "Radiofrekvencijski spektar je ograničeno opće dobro — uporaba na temelju dozvole ili općeg ovlaštenja; namjenu utvrđuje pravilnik.",
        "Kabelska kanalizacija: sustav podzemnih cijevi i kabelskih zdenaca (revizijskih okana) u koje se uvlače komunikacijski kabeli — omogućuje kasnije proširenje bez ponovnog kopanja.",
        "Svjetlovodna distribucijska mreža: pasivna optička pristupna mreža od distribucijskog čvora do korisnika (FTTH).",
        "Oko infrastrukture se određuju: zona elektroničke komunikacijske infrastrukture, zaštitna zona i radijski koridor — s obvezama investitora radova u blizini (uvjeti, suglasnosti)."
      ]
    }
  ],
  questions: [
    {
      q: "Tko je regulator elektroničkih komunikacija u Hrvatskoj?",
      exam: true,
      options: ["HERA", "HAKOM", "HAA", "MUP"],
      correct: 1,
      explanation: "HAKOM (Hrvatska regulatorna agencija za mrežne djelatnosti) regulira elektroničke komunikacije: opće ovlaštenje, dodjelu spektra, zaštitne zone. HERA je regulator energetike, HAA akreditacijsko tijelo.",
      source: "Zakon o elektroničkim komunikacijama (NN 76/22)"
    },
    {
      q: "Što je opće ovlaštenje u elektroničkim komunikacijama?",
      exam: true,
      options: [
        "Pojedinačna dozvola za svakog operatora",
        "Pravo pružanja mreža i usluga bez pojedinačne dozvole, uz prethodnu obavijest HAKOM-u",
        "Građevinska dozvola za bazne stanice",
        "Ovlaštenje inženjera u komori"
      ],
      correct: 1,
      explanation: "Opće ovlaštenje zamjenjuje stari sustav koncesija: djelatnost se smije obavljati uz obavijest regulatoru; pojedinačne dozvole ostaju za ograničena dobra poput radiofrekvencijskog spektra.",
      source: "Zakon o elektroničkim komunikacijama (NN 76/22)"
    },
    {
      q: "Od čega se sastoji kabelska kanalizacija?",
      exam: true,
      options: [
        "Od nadzemnih stupova i vodiča",
        "Od sustava podzemnih cijevi i kabelskih zdenaca u koje se uvlače komunikacijski kabeli",
        "Od antenskih stupova",
        "Od odvodnih kanala za oborinsku vodu"
      ],
      correct: 1,
      explanation: "Kabelska kanalizacija (cijevi + zdenci/revizijska okna) omogućuje uvlačenje i zamjenu kabela bez ponovnog kopanja; tehničke uvjete propisuje Pravilnik NN 139/23.",
      source: "Pravilnik o tehničkim uvjetima za kabelsku kanalizaciju (NN 139/23)"
    },
    {
      q: "Što je svjetlovodna distribucijska mreža?",
      exam: true,
      options: [
        "Mreža uličnih svjetiljki",
        "Pasivna optička pristupna mreža od distribucijskog čvora do korisnika (FTTH)",
        "Bežična mreža baznih stanica",
        "Elektroenergetska mreža s optičkim zaštitnim užetom"
      ],
      correct: 1,
      explanation: "Svjetlovodna distribucijska mreža (Pravilnik NN 63/24) je pasivni optički dio pristupne mreže kojim se korisnici spajaju svjetlovodom; gradi se prema pravilima o zajedničkom korištenju infrastrukture.",
      source: "Pravilnik o svjetlovodnim distribucijskim mrežama (NN 63/24)"
    },
    {
      q: "Što se određuje oko elektroničke komunikacijske infrastrukture radi njezine zaštite?",
      exam: true,
      options: [
        "Ništa — infrastruktura nije zaštićena",
        "Zona infrastrukture, zaštitna zona i radijski koridor, s obvezama investitora radova u blizini",
        "Samo ograda visine 2 m",
        "Vatrogasni pristup"
      ],
      correct: 1,
      explanation: "Pravilnik NN 146/24 propisuje zone i radijske koridore (za mikrovalne veze); investitor radova u tim zonama mora ishoditi uvjete/suglasnost operatora infrastrukture.",
      source: "Pravilnik NN 146/24, 58/25"
    },
    {
      q: "Kako se stječe pravo uporabe radiofrekvencijskog spektra?",
      exam: true,
      options: [
        "Slobodno, bez ikakvih uvjeta",
        "Na temelju dozvole koju dodjeljuje HAKOM ili općeg ovlaštenja, sukladno pravilniku o namjeni spektra",
        "Kupnjom frekvencije u trajno vlasništvo",
        "Odobrenjem MUP-a"
      ],
      correct: 1,
      explanation: "Spektar je ograničeno opće dobro: namjena je utvrđena pravilnikom, a uporaba ide preko dozvola (npr. za mobilne mreže, često javnim natječajem/dražbom) ili općeg ovlaštenja za neke namjene.",
      source: "Zakon o elektroničkim komunikacijama; Pravilnik o namjeni RF spektra"
    }
  ],
  flashcards: [
    { front: "Regulator elektroničkih komunikacija?", exam: true, back: "HAKOM — Hrvatska regulatorna agencija za mrežne djelatnosti (HERA je za energetiku)." },
    { front: "Opće ovlaštenje?", exam: true, back: "Pravo pružanja el. kom. mreža i usluga bez pojedinačne dozvole, uz prethodnu obavijest HAKOM-u." },
    { front: "Kabelska kanalizacija — sastav?", exam: true, back: "Podzemne cijevi + kabelski zdenci (revizijska okna); kabeli se uvlače, proširenje bez kopanja (NN 139/23)." },
    { front: "Svjetlovodna distribucijska mreža?", exam: true, back: "Pasivna optička pristupna mreža od distribucijskog čvora do korisnika — FTTH (NN 63/24)." },
    { front: "Zaštita EK infrastrukture u prostoru?", exam: true, back: "Zona infrastrukture, zaštitna zona i radijski koridor — investitor radova u njima treba uvjete/suglasnost (NN 146/24)." }
  ]
});
