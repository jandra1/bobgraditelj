window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "betonske",
  order: 10,
  title: "Uže područje struke – betonske i zidane konstrukcije",
  icon: "🏛️",
  summary: [
    {
      heading: "Opseg užeg područja (ispitni popis, t. 4.1.)",
      points: [
        "Na stručnom ispitu odabire se samo JEDNO uže područje struke; ovo područje pokriva betonske i zidane konstrukcije.",
        "Traži se dobro poznavanje Tehničkog propisa za građevinske konstrukcije (NN 17/17, 75/20, 7/22) i općih pravila navedenih normi s pripadajućim nacionalnim dodacima.",
        "Norme: HRN EN 1990 (EC0 – osnove projektiranja), niz HRN EN 1991 (EC1 – djelovanja), HRN EN 1992 (EC2 – betonske konstrukcije), HRN EN 1994 (EC4 – spregnute čelično-betonske), HRN EN 1996 (EC6 – zidane), HRN EN 1997 (EC7 – geotehničko projektiranje), HRN EN 1998 (EC8 – potresna otpornost).",
        "Uz to i Tehnički propis za dimnjake u građevinama (NN 03/07)."
      ]
    },
    {
      heading: "Eurokod 0 i 1 — osnove i djelovanja",
      points: [
        "EC0 (HRN EN 1990) daje osnove projektiranja: granična stanja, kombinacije djelovanja, parcijalne koeficijente i razrede pouzdanosti.",
        "Granično stanje nosivosti (GSN) — sigurnost konstrukcije (slom, gubitak ravnoteže); granično stanje uporabljivosti (GSU) — progibi, vibracije, pukotine.",
        "Parcijalni koeficijenti djelovanja za GSN: 1,35 za stalna (G) i 1,5 za promjenjiva djelovanja (Q); za GSU u pravilu 1,0.",
        "Djelovanja po EC1: stalna (vlastita težina, dodatno stalno), promjenjiva (korisno opterećenje, snijeg, vjetar, temperatura), izvanredna (udar, eksplozija).",
        "Vlastita težina armiranog betona uzima se s 25 kN/m3."
      ]
    },
    {
      heading: "Eurokod 2 — betonske konstrukcije",
      points: [
        "Razred tlačne čvrstoće betona: npr. C 25/30 = karakteristična čvrstoća nakon 28 dana 25 N/mm2 na valjku i 30 N/mm2 na kocki.",
        "Razredi izloženosti opisuju okolišne uvjete: X0 (bez rizika), XC (karbonatizacija), XD (kloridi), XS (morska voda), XF (smrzavanje/odmrzavanje), XA (kemijsko djelovanje).",
        "Zaštitni sloj betona štiti armaturu od korozije i osigurava požarnu otpornost i prionjivost; ovisi o razredu izloženosti i projektiranom uporabnom vijeku.",
        "Čelik za armiranje B500: granica popuštanja 500 N/mm2; razredi duktilnosti A, B, C (C najduktilniji).",
        "Njega betona: zaštita od isušivanja, ekstremnih temperatura i vibracija dok beton ne postigne dovoljnu čvrstoću; osobito važna prvih dana nakon ugradnje.",
        "Beton se ugrađuje u slojevima uz zbijanje (vibriranje); prekidi betoniranja izvode se na mjestima najmanjih posmičnih sila prema projektu.",
        "Armatura mora biti postavljena i povezana prema projektu, s propisanim razmacima šipki i preklopima te osiguranim zaštitnim slojem (distanceri)."
      ]
    },
    {
      heading: "Eurokod 6 — zidane konstrukcije",
      points: [
        "Zidane konstrukcije izvode se od zidnih elemenata (opeka, blokovi, kamen) povezanih mortom; nosivost ovisi o čvrstoći elemenata, morta i načinu zidanja.",
        "Mort opće namjene, lagani i tankoslojni; oznaka M = tlačna čvrstoća u N/mm2 nakon 28 dana (npr. M5).",
        "Najmanja čvrstoća morta: M1 za nearmirano ziđe, M5 za armirano ziđe.",
        "Omeđeno ziđe: ziđe s vertikalnim i horizontalnim armiranobetonskim serklažima — standardno rješenje za potresna područja.",
        "Vertikalni serklaži: na rubovima nosivih zidova, sjecištima zidova i uz veće otvore; betoniraju se NAKON izvedbe ziđa etaže.",
        "Horizontalni serklaži: na razini svakog stropa; betoniraju se zajedno sa stropnom konstrukcijom.",
        "Dilatacije i vezovi zidnih elemenata (preklapanje sljubnica) sprječavaju pukotine i osiguravaju monolitnost ziđa."
      ]
    },
    {
      heading: "Eurokod 7 i 8 — geotehnika i potres",
      points: [
        "EC7: geotehničko projektiranje na temelju istraživanja temeljnog tla; tri geotehničke kategorije prema složenosti i riziku.",
        "Temeljenje: plitki temelji (trakasti, samci, ploče) i duboki temelji (piloti); izbor ovisi o tlu, opterećenju i razini podzemne vode.",
        "EC8: potresna otpornost — nacionalni dodatak s kartom potresnih područja prema ubrzanju tla.",
        "Načela potresno otpornog projektiranja: jednostavnost i pravilnost tlocrta, simetrija, dvosmjerna otpornost i krutost, torzijska otpornost, kruti stropovi (dijafragme), pouzdano temeljenje.",
        "Kod betonskih konstrukcija duktilnost se osigurava pravilnim armiranjem (ovijanje, progušćene vilice u kritičnim područjima)."
      ]
    },
    {
      heading: "Tehnički propis za dimnjake (NN 03/07)",
      points: [
        "Dimnjak je građevni dio građevine za odvod dimnih plinova; mora osigurati potlak/propuh, nepropusnost i otpornost na požar čađe.",
        "Projektiranje, izvedba i održavanje dimnjaka provode se prema Tehničkom propisu za dimnjake u građevinama i pripadnim normama.",
        "Dimnjak mora biti izveden od proizvoda otpornih na temperaturu, koroziju i kondenzat te omogućiti čišćenje i pregled."
      ]
    }
  ],
  questions: [
    {
      q: "Što označava razred betona C 25/30?",
      options: [
        "Tlačnu čvrstoću od 25 N/mm2 na kocki i 30 N/mm2 na valjku",
        "Karakterističnu tlačnu čvrstoću nakon 28 dana: 25 N/mm2 na valjku i 30 N/mm2 na kocki",
        "Savojnu čvrstoću od 25 N/mm2 i tlačnu od 30 N/mm2",
        "Čvrstoću od 25 N/mm2 nakon 7 dana i 30 N/mm2 nakon 28 dana"
      ],
      correct: 1,
      explanation: "Prva brojka je karakteristična tlačna čvrstoća ispitana na valjku, druga na kocki, obje nakon 28 dana njege.",
      source: "HRN EN 1992 (Eurokod 2); HRN EN 206"
    },
    {
      q: "Koji su parcijalni koeficijenti djelovanja za granično stanje nosivosti (GSN)?",
      options: [
        "1,0 za stalna i 1,2 za promjenjiva djelovanja",
        "1,5 za stalna i 1,35 za promjenjiva djelovanja",
        "1,35 za stalna i 1,5 za promjenjiva djelovanja",
        "2,0 za sva djelovanja"
      ],
      correct: 2,
      explanation: "Za GSN stalna djelovanja množe se s 1,35, a promjenjiva s 1,5; za granično stanje uporabljivosti koeficijenti su u pravilu 1,0.",
      source: "HRN EN 1990 (Eurokod 0)"
    },
    {
      q: "Što opisuju razredi izloženosti betona (X0, XC, XD, XS, XF, XA)?",
      options: [
        "Razred tlačne čvrstoće betona",
        "Okolišne uvjete kojima je beton izložen i koji utječu na trajnost",
        "Konzistenciju svježeg betona",
        "Način ugradnje i zbijanja betona"
      ],
      correct: 1,
      explanation: "Razredi izloženosti opisuju djelovanje okoliša: karbonatizaciju (XC), kloride (XD), morsku vodu (XS), smrzavanje (XF) i kemijsko djelovanje (XA); o njima ovise sastav betona i zaštitni sloj.",
      source: "HRN EN 206; HRN EN 1992"
    },
    {
      q: "Čemu služi zaštitni sloj betona do armature?",
      options: [
        "Samo estetskom izgledu površine betona",
        "Zaštiti armature od korozije, osiguranju prionjivosti i požarne otpornosti",
        "Smanjenju vlastite težine konstrukcije",
        "Bržem vezanju betona"
      ],
      correct: 1,
      explanation: "Zaštitni sloj štiti armaturu od korozije (karbonatizacija, kloridi), osigurava zajedničko djelovanje armature i betona te potrebnu otpornost na požar.",
      source: "HRN EN 1992 (Eurokod 2)"
    },
    {
      q: "Što znači oznaka čelika za armiranje B500B?",
      options: [
        "Tlačna čvrstoća 500 N/mm2, razred izloženosti B",
        "Granica popuštanja 500 N/mm2, razred duktilnosti B",
        "Vlačna čvrstoća 500 N/mm2, promjer 500 mm",
        "Modul elastičnosti 500 kN/mm2, razred B"
      ],
      correct: 1,
      explanation: "B = čelik za armiranje, 500 = karakteristična granica popuštanja u N/mm2, zadnje slovo je razred duktilnosti (A, B ili C; C je najduktilniji).",
      source: "HRN EN 1992; norme za čelik za armiranje"
    },
    {
      q: "Koja je najmanja čvrstoća morta za armirano ziđe?",
      options: ["M1", "M2,5", "M5", "M10"],
      correct: 2,
      explanation: "Za armirano ziđe (i tankoslojni te lakoagregatni mort) traži se najmanje M5; za nearmirano ziđe dovoljan je M1.",
      source: "HRN EN 1996 (Eurokod 6); Tehnički propis za građevinske konstrukcije"
    },
    {
      q: "Kada se betoniraju vertikalni serklaži omeđenog ziđa?",
      options: [
        "Prije zidanja zidova etaže",
        "Nakon izvedbe ziđa etaže",
        "Istodobno sa zidanjem, red po red",
        "Nakon izvedbe krovišta"
      ],
      correct: 1,
      explanation: "Kod omeđenog ziđa prvo se izvede ziđe etaže (s ostavljenim vezovima), a zatim se betoniraju vertikalni serklaži — tako serklaž obuhvati i omeđi ziđe. Horizontalni serklaži betoniraju se sa stropom.",
      source: "HRN EN 1996 (Eurokod 6)"
    },
    {
      q: "Gdje se moraju izvesti vertikalni serklaži kod omeđenog ziđa?",
      options: [
        "Samo na uglovima građevine",
        "Na rubovima nosivih zidova, sjecištima zidova i uz veće otvore",
        "Isključivo uz dimnjake",
        "Samo u prizemlju građevine"
      ],
      correct: 1,
      explanation: "Vertikalni serklaži izvode se na slobodnim rubovima nosivih zidova, na sjecištima/sudarima zidova te uz veće otvore, s ograničenim međusobnim razmakom.",
      source: "HRN EN 1996 (Eurokod 6)"
    },
    {
      q: "Zašto je njega betona osobito važna u prvim danima nakon ugradnje?",
      options: [
        "Zbog postizanja projektirane boje betona",
        "Da se spriječi isušivanje i pukotine te omogući razvoj čvrstoće",
        "Zbog bržeg skidanja oplate neovisno o čvrstoći",
        "Njega betona važna je tek nakon 28 dana"
      ],
      correct: 1,
      explanation: "Hidratacija cementa zahtijeva vlagu i primjerenu temperaturu; bez njege beton se isušuje, nastaju skupljajuće pukotine i ne razvija se puna čvrstoća i trajnost.",
      source: "HRN EN 13670; pravila struke"
    },
    {
      q: "S kojom se vrijednosti uzima vlastita težina armiranobetonske konstrukcije?",
      options: ["18 kN/m3", "22 kN/m3", "25 kN/m3", "30 kN/m3"],
      correct: 2,
      explanation: "Za armirani beton računa se 25 kN/m3 (obični beton oko 24 kN/m3); vlastita težina ploče = debljina x 25 kN/m3 po m2.",
      source: "HRN EN 1991-1-1 (Eurokod 1)"
    },
    {
      q: "Koje granično stanje obuhvaća progibe i pukotine konstrukcije?",
      options: [
        "Granično stanje nosivosti (GSN)",
        "Granično stanje uporabljivosti (GSU)",
        "Granično stanje zamora",
        "Izvanredno granično stanje"
      ],
      correct: 1,
      explanation: "GSU se odnosi na uvjete normalne uporabe: progibe, vibracije i širinu pukotina; GSN na sigurnost od sloma.",
      source: "HRN EN 1990 (Eurokod 0)"
    },
    {
      q: "Koja su temeljna načela potresno otpornog koncipiranja konstrukcije prema EC8?",
      options: [
        "Što veća masa i krutost na vrhu građevine",
        "Jednostavnost, simetrija, dvosmjerna otpornost, torzijska otpornost, kruti stropovi i pouzdano temeljenje",
        "Nepravilan tlocrt s velikim istacima",
        "Meki (fleksibilni) donji kat radi izolacije potresa"
      ],
      correct: 1,
      explanation: "EC8 traži konstrukcijsku jednostavnost i pravilnost, ujednačenost i simetriju, otpornost i krutost u oba smjera, torzijsku otpornost, stropove koji djeluju kao krute dijafragme i kvalitetno temeljenje.",
      source: "HRN EN 1998 (Eurokod 8)"
    },
    {
      q: "Što određuje nacionalni dodatak Eurokodu 8 za Hrvatsku?",
      options: [
        "Cijene građenja u potresnim područjima",
        "Kartu potresnih područja prema poredbenom vršnom ubrzanju tla",
        "Popis ovlaštenih revidenata za potres",
        "Način osiguranja građevina od potresa"
      ],
      correct: 1,
      explanation: "Nacionalni dodatak sadrži seizmičku kartu Hrvatske s poredbenim vršnim ubrzanjima temeljnog tla za povratna razdoblja, prema kojoj se određuje potresno djelovanje.",
      source: "HRN EN 1998 (Eurokod 8), nacionalni dodatak"
    },
    {
      q: "Što mora osigurati dimnjak prema Tehničkom propisu za dimnjake?",
      options: [
        "Samo dovoljnu visinu iznad sljemena",
        "Odvod dimnih plinova, nepropusnost, otpornost na požar čađe te mogućnost čišćenja i pregleda",
        "Isključivo estetsko uklapanje u građevinu",
        "Prirodno provjetravanje prostorija"
      ],
      correct: 1,
      explanation: "Dimnjak mora pouzdano odvoditi dimne plinove (propuh), biti nepropustan i otporan na temperaturu, koroziju, kondenzat i požar čađe, uz omogućeno čišćenje i kontrolu.",
      source: "Tehnički propis za dimnjake u građevinama, NN 03/07"
    },
    {
      q: "Kojim se Eurokodom projektiraju spregnute čelično-betonske konstrukcije?",
      options: ["Eurokod 2", "Eurokod 3", "Eurokod 4", "Eurokod 6"],
      correct: 2,
      explanation: "EC4 (HRN EN 1994) uređuje projektiranje spregnutih čelično-betonskih konstrukcija; EC2 je beton, EC3 čelik, EC6 ziđe.",
      source: "HRN EN 1994 (Eurokod 4)"
    },
    {
      q: "O čemu ovisi izbor između plitkog i dubokog temeljenja?",
      options: [
        "Isključivo o cijeni izvedbe",
        "O svojstvima temeljnog tla, veličini opterećenja i razini podzemne vode",
        "Samo o katnosti građevine",
        "O godišnjem dobu izvođenja radova"
      ],
      correct: 1,
      explanation: "Odluka se donosi na temelju geotehničkih istraživanja: nosivosti i stišljivosti tla, opterećenja građevine, razine podzemne vode i uvjeta okolnih građevina.",
      source: "HRN EN 1997 (Eurokod 7)"
    },
    {
      q: "Čime se ispituje konzistencija svježeg betona na gradilištu?",
      options: [
        "Tlačnom presom",
        "Metodom slijeganja (slump test), razredi S1–S5",
        "Ultrazvukom",
        "Sklerometrom (Schmidtovim čekićem)"
      ],
      correct: 1,
      explanation: "Konzistencija se najčešće ispituje slijeganjem stošca (slump): razredi S1 (kruta) do S5 (tekuća); konzistencija se bira prema načinu ugradnje i gustoći armature.",
      source: "HRN EN 206; HRN EN 12350-2"
    },
    {
      q: "Kako vodocementni omjer (v/c) utječe na svojstva betona?",
      options: [
        "Ne utječe na svojstva očvrsnulog betona",
        "Niži v/c daje veću čvrstoću i trajnost; previsok v/c povećava poroznost",
        "Viši v/c uvijek daje veću čvrstoću",
        "V/c utječe samo na boju betona"
      ],
      correct: 1,
      explanation: "Višak vode koji ne sudjeluje u hidrataciji ostavlja pore — pada čvrstoća i trajnost (propusnost). Zato se v/c ograničava prema razredu izloženosti, a ugradljivost popravlja plastifikatorima.",
      source: "HRN EN 206; tehnologija betona"
    },
    {
      q: "Na kojim se uzorcima standardno ispituje tlačna čvrstoća betona i kada?",
      options: [
        "Na kockama brida 150 mm nakon 28 dana",
        "Na kockama brida 300 mm nakon 7 dana",
        "Na prizmama nakon 90 dana",
        "Na jezgrama izvađenima iz konstrukcije nakon 3 dana"
      ],
      correct: 0,
      explanation: "Standardni uzorci su kocke brida 150 mm (ili valjci 150/300 mm) njegovani i ispitani nakon 28 dana; iz konstrukcije se čvrstoća po potrebi provjerava vađenjem jezgri.",
      source: "HRN EN 12390; HRN EN 206"
    },
    {
      q: "Kada se smije skinuti nosiva oplata betonske konstrukcije?",
      options: [
        "Nakon 24 sata bez obzira na uvjete",
        "Kad beton postigne čvrstoću koja osigurava preuzimanje opterećenja, prema projektu i planu betoniranja",
        "Čim beton izgubi sjaj na površini",
        "Uvijek točno nakon 28 dana"
      ],
      correct: 1,
      explanation: "Rokovi skidanja oplate ovise o razvoju čvrstoće (vrsta cementa, temperatura, njega) i o elementu; nosiva oplata skida se tek kad konstrukcija može preuzeti opterećenja, što se utvrđuje projektom/planom betoniranja.",
      source: "HRN EN 13670; pravila struke"
    },
    {
      q: "Koje mjere zahtijeva betoniranje pri niskim temperaturama?",
      options: [
        "Nikakve — hladnoća pogoduje betonu",
        "Zaštitu svježeg betona od smrzavanja (topli sastojci, dodaci, pokrivanje, produljena njega), osobito ispod +5 °C",
        "Samo veći v/c omjer",
        "Betoniranje se zimi zakonski zabranjuje"
      ],
      correct: 1,
      explanation: "Svježi beton ne smije se smrznuti prije postizanja dovoljne čvrstoće; pri niskim temperaturama hidratacija se usporava pa se griju sastojci, koriste ubrzivači i beton se štiti i njeguje dulje.",
      source: "HRN EN 13670; tehnologija betona"
    },
    {
      q: "O čemu ovise duljine sidrenja i preklopa armaturnih šipki?",
      options: [
        "Samo o duljini šipke iz tvornice",
        "O promjeru šipke, čvrstoći betona, uvjetima prionjivosti i položaju šipke u presjeku",
        "Isključivo o broju katova građevine",
        "O boji betona"
      ],
      correct: 1,
      explanation: "EC2 duljine sidrenja/preklopa izvodi iz prionjivosti: veće za deblje šipke, slabiji beton, loše uvjete prionjivosti (gornje šipke visokih elemenata) — preklopi se razmiču i po mogućnosti izvode u manje napregnutim zonama.",
      source: "HRN EN 1992 (Eurokod 2)"
    },
    {
      q: "Koja je osnovna ideja prednapetog betona?",
      options: [
        "Beton se ugrađuje pod tlakom pumpe",
        "Visokovrijednim čelikom unosi se tlačno naprezanje u beton, čime se smanjuju vlačna naprezanja i pukotine u eksploataciji",
        "Armatura se zamjenjuje čeličnim vlaknima",
        "Beton se njeguje parom pod pritiskom"
      ],
      correct: 1,
      explanation: "Prednapinjanjem (adhezijskim ili naknadnim) beton dobiva 'rezervu' tlaka pa pri opterećenju kasnije dolazi do vlaka i pukotina — mogući su veći rasponi i vitkiji presjeci.",
      source: "HRN EN 1992 (Eurokod 2)"
    },
    {
      q: "Prema čemu se zidni elementi razvrstavaju u grupe 1–4 prema Eurokodu 6?",
      options: [
        "Prema boji i formatu",
        "Prema udjelu i orijentaciji šupljina u elementu",
        "Prema vrsti morta kojim se zidaju",
        "Prema proizvođaču"
      ],
      correct: 1,
      explanation: "Grupa 1 su puni ili gotovo puni elementi, a s porastom grupe raste udio šupljina; grupa utječe na proračunsku tlačnu čvrstoću ziđa i primjenu u potresnim područjima.",
      source: "HRN EN 1996 (Eurokod 6)"
    },
    {
      q: "O čemu ovisi karakteristična tlačna čvrstoća ziđa fk?",
      options: [
        "Samo o debljini zida",
        "O tlačnoj čvrstoći zidnog elementa (fb) i čvrstoći morta (fm)",
        "Samo o visini etaže",
        "O vrsti žbuke na zidu"
      ],
      correct: 1,
      explanation: "fk se prema EC6 računa iz normalizirane tlačne čvrstoće elementa fb i čvrstoće morta fm (uz konstante ovisne o grupi elementa i vrsti morta).",
      source: "HRN EN 1996 (Eurokod 6)"
    },
    {
      q: "Kako se kod zidanih zgrada u potresnim područjima raspoređuju nosivi zidovi?",
      options: [
        "Svi u jednom smjeru radi jednostavnosti",
        "Približno simetrično i u OBA ortogonalna smjera, po mogućnosti neprekinuto po visini",
        "Samo po obodu građevine",
        "Raspored nije bitan ako postoje serklaži"
      ],
      correct: 1,
      explanation: "Potresna otpornost zidane zgrade traži zidove u oba smjera, simetrično (mala torzija) i kontinuirano po visini do temelja; uz vertikalne i horizontalne serklaže (omeđeno ziđe).",
      source: "HRN EN 1998; HRN EN 1996"
    },
    {
      q: "Čemu služe dilatacijske reške u konstrukciji?",
      options: [
        "Bržem betoniranju",
        "Razdvajanju dijelova građevine radi temperaturnih promjena, skupljanja, različitih slijeganja ili potresnog razdvajanja",
        "Provođenju instalacija",
        "Samo estetskom raščlanjivanju fasade"
      ],
      correct: 1,
      explanation: "Dilatacije omogućuju neovisne pomake dijelova konstrukcije (temperatura, skupljanje/puzanje, nejednolika slijeganja, potres) i sprječavaju nekontrolirane pukotine.",
      source: "pravila struke; HRN EN 1992"
    },
    {
      q: "Prema čemu se bira najveće zrno agregata u betonu?",
      options: [
        "Prema želji izvođača",
        "Prema debljini elementa, zaštitnom sloju i najmanjem razmaku šipki armature",
        "Uvijek se koristi zrno 32 mm",
        "Prema godišnjem dobu"
      ],
      correct: 1,
      explanation: "Najveće zrno mora proći između šipki i u zaštitni sloj (tipično ne veće od razmaka šipki umanjenog za nekoliko mm, 1/3 debljine tanjih elemenata); inače nastaju gnijezda.",
      source: "HRN EN 206; HRN EN 1992"
    },
    {
      q: "Čemu služi vibriranje betona i koja je opasnost pretjeranog vibriranja?",
      options: [
        "Grijanju betona; opasnosti nema",
        "Istjerivanju zarobljenog zraka i popunjavanju oplate; pretjerano vibriranje uzrokuje segregaciju",
        "Ubrzanju vezanja; pretjerano vibriranje nema učinka",
        "Sušenju betona; opasnost je prebrzo očvršćivanje"
      ],
      correct: 1,
      explanation: "Vibriranjem se beton zbija (izlazi zrak, popunjavaju se kutovi oplate i obavija armatura); predugo vibriranje razdvaja krupni agregat od morta (segregacija).",
      source: "HRN EN 13670; tehnologija betona"
    },
    {
      q: "Što obuhvaća kontrola betona pri preuzimanju na gradilištu?",
      options: [
        "Samo pregled otpremnice",
        "Provjeru otpremnice i konzistencije te uzimanje uzoraka za ispitivanje tlačne čvrstoće (identitet betona)",
        "Mjerenje temperature zraka",
        "Vaganje svake mješalice"
      ],
      correct: 1,
      explanation: "Uz dokumentaciju (razred, izloženost, konzistencija) provjerava se konzistencija dostavljenog betona i uzimaju uzorci — ispitivanjem identiteta potvrđuje se sukladnost isporučenog betona.",
      source: "HRN EN 206; Tehnički propis za građevinske konstrukcije"
    },
    {
      q: "Što moraju preuzeti oplata i skela tijekom betoniranja?",
      options: [
        "Samo težinu radnika",
        "Tlak svježeg betona, vlastitu težinu, težinu betona i radna opterećenja — uz ograničene deformacije",
        "Samo vjetar",
        "Oplata ne preuzima nikakva opterećenja"
      ],
      correct: 1,
      explanation: "Oplata i skela su privremene konstrukcije koje se projektiraju: bočni tlak svježeg betona (raste s brzinom betoniranja i konzistencijom), težine i radna opterećenja, uz krutost koja osigurava točnost mjera.",
      source: "HRN EN 13670; pravila struke"
    },
    {
      q: "Zašto se armatura mora očistiti i pravilno pozicionirati distancerima prije betoniranja?",
      options: [
        "Zbog estetike vidljivog betona",
        "Da se osiguraju prionjivost (čista armatura) i projektirani zaštitni sloj te statička visina presjeka",
        "Da se uštedi na betonu",
        "Distanceri služe samo za lakše hodanje po armaturi"
      ],
      correct: 1,
      explanation: "Hrđa u listićima, masnoća ili blato smanjuju prionjivost; bez distancera armatura 'legne' na oplatu — gubi se zaštitni sloj (korozija, požar) i statička visina (nosivost).",
      source: "HRN EN 13670; HRN EN 1992"
    }
  ],
  flashcards: [
    { front: "Parcijalni koeficijenti djelovanja za GSN?", back: "1,35 za stalna djelovanja (G), 1,5 za promjenjiva (Q); za GSU u pravilu 1,0." },
    { front: "Što znači C 25/30?", back: "Karakteristična tlačna čvrstoća betona nakon 28 dana: 25 N/mm2 na valjku, 30 N/mm2 na kocki." },
    { front: "Razredi izloženosti betona?", back: "X0 bez rizika; XC karbonatizacija; XD kloridi (ne iz mora); XS morska voda; XF smrzavanje/odmrzavanje; XA kemijsko djelovanje." },
    { front: "B500B — značenje oznake?", back: "Čelik za armiranje granice popuštanja 500 N/mm2, razred duktilnosti B (razredi A, B, C; C najduktilniji)." },
    { front: "Najmanja čvrstoća morta za nearmirano i armirano ziđe?", back: "Nearmirano ziđe: M1. Armirano ziđe, tankoslojni i lakoagregatni mort: M5." },
    { front: "Gdje dolaze vertikalni serklaži omeđenog ziđa?", back: "Na rubovima nosivih zidova, sjecištima zidova i uz veće otvore; betoniraju se nakon izvedbe ziđa etaže." },
    { front: "Kada se betoniraju horizontalni serklaži?", back: "Na razini svakog stropa, zajedno sa stropnom konstrukcijom." },
    { front: "Vlastita težina armiranog betona?", back: "25 kN/m3 (ploča: debljina x 25 kN/m3 po m2 tlocrta)." },
    { front: "GSN i GSU — razlika?", back: "GSN = granično stanje nosivosti (sigurnost od sloma). GSU = granično stanje uporabljivosti (progibi, vibracije, pukotine)." },
    { front: "Čemu služi zaštitni sloj betona?", back: "Štiti armaturu od korozije, osigurava prionjivost armature i betona te požarnu otpornost; debljina ovisi o razredu izloženosti." },
    { front: "Njega betona — što i zašto?", back: "Zaštita od isušivanja, ekstremnih temperatura i vibracija prvih dana; bez njege nastaju pukotine i ne razvija se puna čvrstoća i trajnost." },
    { front: "Načela potresno otpornog koncipiranja (EC8)?", back: "Jednostavnost i pravilnost, simetrija, dvosmjerna otpornost i krutost, torzijska otpornost, kruti stropovi (dijafragme), pouzdano temeljenje." },
    { front: "Koji Eurokod pokriva koje gradivo?", back: "EC0 osnove, EC1 djelovanja, EC2 beton, EC4 spregnute, EC6 ziđe, EC7 geotehnika, EC8 potres." },
    { front: "Zahtjevi za dimnjak (TP NN 03/07)?", back: "Pouzdan odvod dimnih plinova (propuh), nepropusnost, otpornost na temperaturu, koroziju, kondenzat i požar čađe; omogućeno čišćenje i pregled." },
    { front: "Konzistencija svježeg betona?", back: "Slump test (slijeganje stošca), razredi S1 (kruta) – S5 (tekuća); bira se prema načinu ugradnje i gustoći armature." },
    { front: "Vodocementni omjer (v/c)?", back: "Niži v/c → veća čvrstoća i trajnost (manje pora); ograničava se prema razredu izloženosti, ugradljivost se popravlja plastifikatorima." },
    { front: "Standardni uzorci za tlačnu čvrstoću?", back: "Kocke brida 150 mm (ili valjci 150/300 mm), ispitivanje nakon 28 dana njege." },
    { front: "Skidanje nosive oplate?", back: "Tek kad beton postigne čvrstoću za preuzimanje opterećenja — prema projektu/planu betoniranja (ovisi o cementu, temperaturi, njezi)." },
    { front: "Betoniranje zimi?", back: "Svježi beton ne smije se smrznuti: grijani sastojci, ubrzivači, pokrivanje i produljena njega — posebne mjere ispod +5 °C." },
    { front: "Prednapeti beton — princip?", back: "Prednapinjanjem čelika u beton se unosi tlak; vlačna naprezanja i pukotine javljaju se kasnije → veći rasponi, vitkiji presjeci." },
    { front: "Grupe zidnih elemenata (EC6)?", back: "1–4 prema udjelu i orijentaciji šupljina (grupa 1 puni elementi); utječu na čvrstoću ziđa i primjenu u potresnim područjima." },
    { front: "Tlačna čvrstoća ziđa fk?", back: "Računa se iz čvrstoće zidnog elementa (fb) i morta (fm), uz konstante ovisne o grupi elementa i vrsti morta (EC6)." },
    { front: "Dilatacijske reške — čemu služe?", back: "Neovisni pomaci dijelova građevine: temperatura, skupljanje/puzanje, nejednolika slijeganja, potresno razdvajanje." },
    { front: "Najveće zrno agregata?", back: "Ograničeno razmakom šipki, zaštitnim slojem i debljinom elementa — zrno mora proći kroz armaturu, inače nastaju gnijezda." },
    { front: "Vibriranje betona?", back: "Istjeruje zrak i popunjava oplatu; predugo vibriranje → segregacija (razdvajanje agregata i morta)." },
    { front: "Kontrola betona na gradilištu?", back: "Otpremnica (razred, izloženost), provjera konzistencije, uzorci za tlačnu čvrstoću (ispitivanje identiteta)." }
  ]
});
