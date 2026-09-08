window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "instalacije",
  order: 21,
  title: "Uže područje struke – instalacije (strojarstvo)",
  icon: "⚙️",
  summary: [
    {
      heading: "Opseg i ključni propisi",
      points: [
        "Uže područje za strojarsku struku: sustavi grijanja, ventilacije i klimatizacije (GViK), plinske instalacije, dimnjaci i tlačna oprema.",
        "Tehnički propis o racionalnoj uporabi energije i toplinskoj zaštiti u zgradama.",
        "Tehnički propis o sustavima grijanja i hlađenja zgrada; Tehnički propis o sustavima ventilacije, djelomične klimatizacije i klimatizacije zgrada.",
        "Tehnički propis za dimnjake u građevinama; Zakon o zapaljivim tekućinama i plinovima.",
        "Zakon o vodi za ljudsku potrošnju (NN 30/23) i Uredba o tvarima koje oštećuju ozonski sloj i fluoriranim stakleničkim plinovima (NN 83/21).",
        "Pravilnik o energetskom pregledu zgrade i energetskom certificiranju te Pravilnik o osobama ovlaštenima za energetsko certificiranje i redovite preglede sustava grijanja/hlađenja.",
        "Ključna norma: HRN EN 12831 — proračun projektnog toplinskog opterećenja (gubitaka) zgrade.",
        "Na ispitu se odabire SAMO JEDNO uže područje struke. Za strojarstvo su to: 1) energetika, 2) tlačna oprema, 3) instalacije (OVO područje), 4) konstrukcije i procesna tehnologija."
      ]
    },
    {
      heading: "Grijanje i dizalice topline",
      points: [
        "HRN EN 12831: projektni toplinski gubici = transmisijski (kroz ovojnicu) + ventilacijski (zagrijavanje zraka); temelj za dimenzioniranje sustava grijanja.",
        "Dizalica topline radi na ljevokretnom kružnom procesu: isparivač uzima toplinu iz okoline (zrak, voda, tlo), kompresor podiže tlak i temperaturu radne tvari, kondenzator predaje toplinu sustavu grijanja, ekspanzijski ventil zatvara krug.",
        "COP (koeficijent grijanja) = omjer predane topline i uložene električne energije; COP 4 znači 4 kWh topline za 1 kWh struje.",
        "Dizalice topline potiskuju plinske kotlove zbog energetske učinkovitosti, udjela obnovljive energije i zahtjeva propisa o racionalnoj uporabi energije (dekarbonizacija).",
        "Daljinsko (centralizirano) grijanje: centralni izvor topline, distribucijska mreža i toplinske podstanice u zgradama; podstanice mogu biti direktne ili indirektne (s izmjenjivačem topline koji odvaja mrežu od kućne instalacije).",
        "Atmosferski kotao uzima zrak iz prostora i ima visoke temperature dimnih plinova; kondenzacijski kotao iskorištava i toplinu kondenzacije vodene pare iz dimnih plinova pa ima veću iskoristivost i niže temperature dimnih plinova."
      ]
    },
    {
      heading: "Ventilacija i klimatizacija",
      points: [
        "Prirodna ventilacija koristi uzgon i vjetar (bez ventilatora); prisilna (mehanička) koristi ventilatore i njome se lakše upravlja.",
        "Klimatizacija je potpuna obrada zraka: temperatura, vlažnost, čistoća i strujanje; djelomična klimatizacija ne kontrolira sve parametre (u pravilu ne vlažnost).",
        "Provjetravanje se izražava brojem izmjena zraka na sat (h⁻¹) — koliko se puta volumen prostorije izmijeni u jednom satu.",
        "Mikroklimatski uvjeti radnog prostora: temperatura, vlažnost i brzina strujanja zraka te provjetravanje.",
        "Klima komore: sekcijski uređaji za pripremu zraka (filtracija, grijanje, hlađenje, ovlaživanje, rekuperacija topline).",
        "Protupožarne zaklopke ugrađuju se na prolazima ventilacijskih kanala kroz granice požarnih sektora; ne ugrađuju se u odsisne kanale kuhinjskih napa."
      ]
    },
    {
      heading: "Plinske instalacije i kotlovnice",
      points: [
        "Plinska rampa: sklop armature ispred plinskog trošila — zaporni ventil, filtar, regulator tlaka, sigurnosni ventili i presostati (nadzor tlaka).",
        "Prirodni plin lakši je od zraka (osjetnik propuštanja pri stropu); UNP je teži od zraka (osjetnik pri podu, prostori bez otvora prema podrumima i kanalizaciji bez sifona).",
        "Kotlovnice moraju imati ventilacijske otvore za dovod zraka za izgaranje i odzračivanje; uporabu malog spremnika UNP-a odobrava MUP potvrdom.",
        "Dimnjak mora osigurati propuh/potlak, nepropusnost i otpornost na požar čađe te omogućiti čišćenje i pregled (Tehnički propis za dimnjake)."
      ]
    },
    {
      heading: "Voda, radne tvari i energetski pregledi",
      points: [
        "Materijali i proizvodi u dodiru s vodom za ljudsku potrošnju moraju biti zdravstveno ispravni (Zakon o vodi za ljudsku potrošnju, NN 30/23).",
        "Fluorirani staklenički plinovi (radne tvari dizalica topline i rashladnih sustava): rukovanje, provjere propuštanja i prikupljanje smiju obavljati samo certificirane osobe i servisi (Uredba NN 83/21).",
        "Sustavi grijanja i klimatizacije podliježu redovitim pregledima ovlaštenih osoba prema propisima o energetskoj učinkovitosti zgrada."
      ]
    }
  ],
  questions: [
    {
      q: "Prema kojoj se normi proračunavaju projektni toplinski gubici (toplinsko opterećenje) zgrade?",
      exam: true,
      options: ["HRN EN 1990", "HRN EN 12831", "HRN EN 62305", "HRN EN 206"],
      correct: 1,
      explanation: "HRN EN 12831 obuhvaća transmisijske gubitke kroz ovojnicu i ventilacijske gubitke za zagrijavanje zraka — temelj dimenzioniranja sustava grijanja.",
      source: "HRN EN 12831"
    },
    {
      q: "Kako radi dizalica topline?",
      exam: true,
      options: [
        "Izravno pretvara električnu energiju u toplinu grijačem",
        "Ljevokretnim kružnim procesom: isparivač uzima toplinu iz okoline, kompresor podiže tlak i temperaturu radne tvari, kondenzator predaje toplinu sustavu grijanja",
        "Izgaranjem plina u kondenzacijskom izmjenjivaču",
        "Skladištenjem topline u akumulacijskom spremniku preko noći"
      ],
      correct: 1,
      explanation: "Toplina se 'diže' s niže temperature okoline (zrak, voda, tlo) na višu korisnu temperaturu uz utrošak rada kompresora; krug zatvara ekspanzijski ventil.",
      source: "Osnove termodinamike / TP o sustavima grijanja i hlađenja"
    },
    {
      q: "Što znači COP dizalice topline i što znači COP = 4?",
      exam: true,
      options: [
        "Omjer tlaka i volumena; 4 bara po litri",
        "Omjer predane topline i uložene električne energije; za 1 kWh struje dobije se 4 kWh topline",
        "Broj kompresora u uređaju",
        "Postotak gubitaka; 4% energije se gubi"
      ],
      correct: 1,
      explanation: "COP (coefficient of performance) je omjer toplinskog učinka i uložene električne snage. Viši COP znači učinkovitiji uređaj; ovisi o temperaturama izvora i ponora topline.",
      source: "HRN EN 14511"
    },
    {
      q: "Zašto se danas pri projektiranju grijanja sve više ugrađuju dizalice topline umjesto plinskih kotlova?",
      exam: true,
      options: [
        "Jer su jeftinije u nabavi",
        "Zbog energetske učinkovitosti, udjela obnovljive energije i zahtjeva propisa o racionalnoj uporabi energije",
        "Jer plinske instalacije više nisu dopuštene",
        "Jer ne trebaju električnu energiju"
      ],
      correct: 1,
      explanation: "Propisi o racionalnoj uporabi energije i ciljevi dekarbonizacije traže visok udio obnovljivih izvora; dizalica topline iz 1 kWh struje daje višestruko više topline (COP).",
      source: "TP o racionalnoj uporabi energije i toplinskoj zaštiti"
    },
    {
      q: "Od čega se sastoji sustav daljinskog grijanja?",
      exam: true,
      options: [
        "Od pojedinačnih kotlova u svakom stanu",
        "Od centralnog izvora topline, distribucijske mreže i toplinskih podstanica u zgradama",
        "Od solarnih kolektora i spremnika na krovu svake zgrade",
        "Od električnih grijača u podnim oblogama"
      ],
      correct: 1,
      explanation: "Toplinske podstanice mogu biti direktne (mrežna voda ulazi u kućnu instalaciju) ili indirektne — s izmjenjivačem topline koji hidraulički odvaja mrežu od kućne instalacije.",
      source: "Zakon o tržištu toplinske energije"
    },
    {
      q: "Koja je razlika između klimatizacije i djelomične klimatizacije?",
      exam: true,
      options: [
        "Klimatizacija radi samo ljeti, djelomična cijele godine",
        "Klimatizacija obrađuje sve parametre zraka (temperaturu, vlažnost, čistoću, strujanje), a djelomična ne kontrolira sve parametre — u pravilu ne vlažnost",
        "Djelomična klimatizacija hladi samo dio prostorija",
        "Nema razlike, riječ je o sinonimima"
      ],
      correct: 1,
      explanation: "Potpuna klimatizacija uključuje i ovlaživanje/odvlaživanje zraka; djelomična obrađuje samo neke parametre. Razlikovanje je iz Tehničkog propisa o sustavima ventilacije, djelomične klimatizacije i klimatizacije.",
      source: "TP o sustavima ventilacije, djelomične klimatizacije i klimatizacije"
    },
    {
      q: "Kojom se veličinom izražava provjetravanje prostorije?",
      exam: true,
      options: [
        "Brojem izmjena zraka na sat (h⁻¹)",
        "Kubicima po danu",
        "Postotkom vlažnosti",
        "Paskalima"
      ],
      correct: 0,
      explanation: "Broj izmjena zraka na sat kazuje koliko se puta cijeli volumen prostorije izmijeni u jednom satu; uz temperaturu, vlažnost i brzinu strujanja čini mikroklimatske uvjete.",
      source: "Pravilnik o ZNR za mjesta rada; struka GViK"
    },
    {
      q: "Što je plinska rampa?",
      exam: true,
      options: [
        "Kosina za dostavu plinskih boca u kotlovnicu",
        "Sklop armature ispred plinskog trošila: zaporni ventil, filtar, regulator tlaka, sigurnosni ventili i presostati",
        "Cijev kojom se plin dovodi od ulične mreže do brojila",
        "Sigurnosni prostor oko spremnika UNP-a"
      ],
      correct: 1,
      explanation: "Plinska rampa priprema i nadzire plin neposredno prije plamenika: filtrira ga, regulira tlak i sigurnosno zatvara dovod kod poremećaja.",
      source: "Pravila struke za plinske instalacije"
    },
    {
      q: "Gdje se postavlja osjetnik propuštanja plina za prirodni plin, a gdje za UNP?",
      exam: true,
      options: [
        "Oba pri podu",
        "Za prirodni plin pri stropu (lakši od zraka), za UNP pri podu (teži od zraka)",
        "Oba pri stropu",
        "Za prirodni plin pri podu, za UNP pri stropu"
      ],
      correct: 1,
      explanation: "Prirodni plin (metan) diže se prema stropu, a UNP (propan-butan) skuplja se pri podu — zato se kod UNP-a pazi i na odvodnju te blizinu podrumskih otvora i kanalizacije.",
      source: "Zakon o zapaljivim tekućinama i plinovima; pravila struke"
    },
    {
      q: "Po čemu se kondenzacijski kotao razlikuje od atmosferskog?",
      exam: true,
      options: [
        "Radi bez dimnjaka",
        "Iskorištava i toplinu kondenzacije vodene pare iz dimnih plinova pa ima veću iskoristivost i niže temperature dimnih plinova",
        "Ne treba dovod zraka za izgaranje",
        "Koristi isključivo UNP"
      ],
      correct: 1,
      explanation: "Hlađenjem dimnih plinova ispod rosišta oslobađa se latentna toplina vodene pare; zato kondenzacijski kotlovi postižu iskoristivost i preko 100% računato na donju ogrjevnu vrijednost.",
      source: "Pravila struke; TP o sustavima grijanja i hlađenja"
    },
    {
      q: "Kakvi moraju biti materijali i proizvodi koji dolaze u dodir s vodom za ljudsku potrošnju?",
      exam: true,
      options: [
        "Bilo kakvi, bitno je samo da ne cure",
        "Zdravstveno ispravni — ne smiju vodi mijenjati svojstva ni otpuštati štetne tvari",
        "Isključivo bakreni",
        "Isključivo plastični"
      ],
      correct: 1,
      explanation: "Zakon o vodi za ljudsku potrošnju (NN 30/23) traži da cijevi, armature i spremnici u dodiru s pitkom vodom budu zdravstveno ispravni, što se dokazuje odgovarajućim potvrdama.",
      source: "Zakon o vodi za ljudsku potrošnju (NN 30/23)"
    },
    {
      q: "Tko smije rukovati fluoriranim stakleničkim plinovima (radnim tvarima dizalica topline i rashladnih sustava)?",
      exam: true,
      options: [
        "Svatko tko posjeduje uređaj",
        "Samo certificirane osobe i certificirani servisi, uz propisane provjere propuštanja i prikupljanje radne tvari",
        "Samo proizvođač uređaja",
        "Vatrogasci"
      ],
      correct: 1,
      explanation: "Uredba NN 83/21 (provedba EU pravila o F-plinovima) propisuje certificiranje osoba i servisa, evidencije, provjere propuštanja ovisno o punjenju te obvezno prikupljanje radne tvari pri servisu i rashodovanju.",
      source: "Uredba o tvarima koje oštećuju ozonski sloj i F-plinovima (NN 83/21)"
    },
    {
      q: "Smiju li se protupožarne zaklopke ugrađivati u odsisne kanale kuhinjskih napa?",
      exam: true,
      options: [
        "Da, obavezno",
        "Ne — u odsisne kanale napa zaklopke se ne ugrađuju (masnoće bi onemogućile pouzdano zatvaranje)",
        "Da, ali samo kružnog presjeka",
        "Samo u ugostiteljskim objektima"
      ],
      correct: 1,
      explanation: "PP zaklopke ugrađuju se na prolazima ventilacijskih kanala kroz granice požarnih sektora prema pravilniku o ventilacijskim i klimatizacijskim sustavima, ali ne u odsisne kanale napa.",
      source: "Pravilnik o tehničkim normativima za ventilacijske i klimatizacijske sustave"
    },
    {
      q: "Koja uža područja struke postoje za strojarstvo i koliko ih kandidat polaže?",
      exam: true,
      options: [
        "Energetika, tlačna oprema, instalacije te konstrukcije i procesna tehnologija — polaže se samo jedno",
        "Grijanje, hlađenje i ventilacija — polažu se sva tri",
        "Samo instalacije",
        "Energetika i instalacije — polažu se oba"
      ],
      correct: 0,
      explanation: "Kandidat polaže poznavanje regulative samo iz jednog od četiri uža područja, prema poslu kojim se bavi.",
      source: "Popis važeće građevno-tehničke regulative za strukovno područje strojarstva"
    }
  ],
  flashcards: [
    { front: "Norma za proračun toplinskih gubitaka zgrade?", exam: true, back: "HRN EN 12831 — transmisijski + ventilacijski gubici; temelj dimenzioniranja grijanja." },
    { front: "Princip rada dizalice topline?", exam: true, back: "Ljevokretni kružni proces: isparivač uzima toplinu iz okoline, kompresor podiže tlak/temperaturu, kondenzator predaje toplinu grijanju, ekspanzijski ventil zatvara krug." },
    { front: "Što je COP?", exam: true, back: "Omjer predane topline i uložene el. energije; COP 4 = 4 kWh topline za 1 kWh struje." },
    { front: "Toplinska podstanica — vrste?", exam: true, back: "Direktna (mrežna voda ulazi u kućnu instalaciju) i indirektna (izmjenjivač topline odvaja mrežu od instalacije)." },
    { front: "Klimatizacija vs. djelomična klimatizacija?", exam: true, back: "Klimatizacija obrađuje temperaturu, vlažnost, čistoću i strujanje zraka; djelomična ne kontrolira sve parametre (u pravilu ne vlažnost)." },
    { front: "Mjera za provjetravanje prostorije?", exam: true, back: "Broj izmjena zraka na sat (h⁻¹)." },
    { front: "Plinska rampa — sastav?", exam: true, back: "Zaporni ventil, filtar, regulator tlaka, sigurnosni ventili i presostati ispred plinskog trošila." },
    { front: "Osjetnik plina — visina ugradnje?", exam: true, back: "Prirodni plin: pri stropu (lakši od zraka); UNP: pri podu (teži od zraka)." },
    { front: "Kondenzacijski kotao — prednost?", exam: true, back: "Iskorištava toplinu kondenzacije vodene pare iz dimnih plinova → veća iskoristivost, niže temperature dimnih plinova." },
    { front: "Uža područja struke za strojarstvo?", exam: true, back: "Energetika, tlačna oprema, instalacije, konstrukcije i procesna tehnologija — polaže se SAMO JEDNO." },
    { front: "F-plinovi — tko smije rukovati?", exam: true, back: "Samo certificirane osobe i servisi; provjere propuštanja i prikupljanje radne tvari obvezni (Uredba NN 83/21)." },
    { front: "Materijali u dodiru s pitkom vodom?", exam: true, back: "Moraju biti zdravstveno ispravni — Zakon o vodi za ljudsku potrošnju (NN 30/23)." }
  ]
});
