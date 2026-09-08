window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "instalacije",
  order: 15,
  title: "Uže područje struke – strojarske instalacije (grijanje, ventilacija, plin)",
  icon: "⚙️",
  summary: [
    {
      heading: "Opseg i ključni propisi",
      points: [
        "Uže područje za strojarsku struku: sustavi grijanja, ventilacije i klimatizacije (GViK), plinske instalacije, dimnjaci i tlačna oprema.",
        "Tehnički propis o racionalnoj uporabi energije i toplinskoj zaštiti u zgradama.",
        "Tehnički propis o sustavima grijanja i hlađenja zgrada; Tehnički propis o sustavima ventilacije, djelomične klimatizacije i klimatizacije zgrada.",
        "Tehnički propis za dimnjake u građevinama; Zakon o zapaljivim tekućinama i plinovima.",
        "Pravilnik o tlačnoj opremi (NN 79/16, direktiva PED 2014/68/EU), Pravilnik o jednostavnim tlačnim posudama (NN 27/16), Pravilnik o pokretnoj tlačnoj opremi (NN 91/13) i Pravilnik o pregledima i ispitivanju opreme pod tlakom (NN 75/20).",
        "Ključna norma: HRN EN 12831 — proračun projektnog toplinskog opterećenja (gubitaka) zgrade.",
        "Na ispitu se odabire SAMO JEDNO uže područje struke. Za strojarstvo su to: 1) energetika, 2) tlačna oprema, 3) instalacije, 4) konstrukcije i procesna tehnologija."
      ]
    },
    {
      heading: "Energetika — ključni zakoni",
      points: [
        "Zakon o energiji — krovni zakon: energetske djelatnosti, energetski subjekti, opća pravila tržišta energije.",
        "Zakon o regulaciji energetskih djelatnosti — regulator je HERA (Hrvatska energetska regulatorna agencija): izdaje dozvole za energetske djelatnosti i regulira mrežne djelatnosti.",
        "Posebni zakoni o tržištima: električne energije, plina, toplinske energije te nafte i naftnih derivata.",
        "Zakon o obnovljivim izvorima energije i visokoučinkovitoj kogeneraciji (NN 138/21) — poticanje OIE; Zakon o energetskoj učinkovitosti.",
        "Zakon o zaštiti zraka (NN 127/19) s Uredbom o razinama onečišćujućih tvari u zraku — bitni za ložišta i emisije iz energetskih postrojenja."
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
      heading: "Tlačna oprema",
      points: [
        "Pravilnik o tlačnoj opremi (PED): tlačna oprema su posude, cjevovodi, sigurnosni i tlačni pribor s najvećim dopuštenim tlakom PS > 0,5 bar.",
        "Kategorije tlačne opreme I–IV određuju se prema tlaku, volumenu (PS·V) i skupini fluida — pomoću 9 dijagrama za kategorizaciju.",
        "Fluidi se dijele u skupinu 1 (opasni: zapaljivi, eksplozivni, otrovni) i skupinu 2 (ostali, uključujući vodenu paru).",
        "Ocjenjivanje sukladnosti provodi se po modulima (A do H) — što je kategorija viša, modul je zahtjevniji i veće je sudjelovanje prijavljenog tijela.",
        "Oznake: CE za tlačnu opremu, π (pi) za pokretnu tlačnu opremu (TPED), '3' za aerosolne raspršivače.",
        "Jednostavne tlačne posude: serijski proizvedene zavarene posude za zrak ili dušik, PS ≤ 30 bar, umnožak PS·V ≤ 10.000 bar·L.",
        "Sigurnosni pribor: uređaji za zaštitu od prekoračenja dopuštenih granica (sigurnosni ventili, rasprskavajuće membrane, tlačne sklopke).",
        "Periodični pregledi opreme pod tlakom provode se prema Pravilniku o pregledima i ispitivanju opreme pod tlakom; nadzor visokorizične opreme vodi Agencija za opremu pod tlakom (OPT)."
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
      q: "Prema čemu se tlačna oprema razvrstava u kategorije I–IV?",
      exam: true,
      options: [
        "Prema proizvođaču i godini proizvodnje",
        "Prema najvećem dopuštenom tlaku, volumenu (PS·V) i skupini fluida — pomoću 9 dijagrama za kategorizaciju",
        "Prema boji i obliku posude",
        "Prema mjestu ugradnje"
      ],
      correct: 1,
      explanation: "Fluidi skupine 1 su opasni (zapaljivi, otrovni...), skupine 2 ostali (uključujući vodenu paru). Viša kategorija znači zahtjevniji modul ocjenjivanja sukladnosti i veće sudjelovanje prijavljenog tijela.",
      source: "Pravilnik o tlačnoj opremi (PED 2014/68/EU)"
    },
    {
      q: "Kojom se oznakom označava pokretna tlačna oprema?",
      exam: true,
      options: ["Oznakom CE", "Oznakom π (pi)", "Oznakom M", "Oznakom Ex"],
      correct: 1,
      explanation: "Pokretna tlačna oprema (TPED) nosi oznaku π; 'obična' tlačna oprema nosi CE, a aerosolni raspršivači oznaku '3'.",
      source: "Pravilnik o pokretnoj tlačnoj opremi (TPED)"
    },
    {
      q: "Koje su granice za jednostavne tlačne posude?",
      exam: true,
      options: [
        "Bilo koji fluid, PS ≤ 100 bar",
        "Zrak ili dušik, PS ≤ 30 bar i umnožak PS·V ≤ 10.000 bar·L",
        "Samo vodena para, PS ≤ 0,5 bar",
        "Zapaljivi plinovi, V ≤ 1000 L"
      ],
      correct: 1,
      explanation: "Jednostavne tlačne posude su serijski proizvedene zavarene posude za zrak ili dušik, najvećeg dopuštenog tlaka do 30 bar i PS·V do 10.000 bar·L (direktiva SPVD).",
      source: "Pravilnik o jednostavnim tlačnim posudama"
    },
    {
      q: "Što spada u sigurnosni pribor tlačne opreme?",
      exam: true,
      options: [
        "Manometri i termometri",
        "Uređaji za zaštitu od prekoračenja dopuštenih granica: sigurnosni ventili, rasprskavajuće membrane, tlačne sklopke",
        "Izolacija cjevovoda",
        "Nosači i oslonci posuda"
      ],
      correct: 1,
      explanation: "Sigurnosni pribor izravno štiti opremu od prekoračenja dopuštenih granica (tlaka, temperature); manometri i termometri su tlačni pribor s mjernom funkcijom.",
      source: "Pravilnik o tlačnoj opremi"
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
    },
    {
      q: "Tko u Hrvatskoj regulira energetske djelatnosti i izdaje dozvole za njihovo obavljanje?",
      exam: true,
      options: [
        "Ministarstvo gospodarstva izravno",
        "HERA — Hrvatska energetska regulatorna agencija",
        "HEP",
        "Hrvatska komora inženjera strojarstva"
      ],
      correct: 1,
      explanation: "HERA je neovisni regulator prema Zakonu o regulaciji energetskih djelatnosti: izdaje dozvole za energetske djelatnosti, regulira mrežne djelatnosti i tarife.",
      source: "Zakon o regulaciji energetskih djelatnosti"
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
    { front: "Kategorije tlačne opreme?", exam: true, back: "I–IV prema tlaku, volumenu (PS·V) i skupini fluida — 9 dijagrama; viša kategorija = zahtjevniji modul ocjenjivanja." },
    { front: "Oznake tlačne opreme?", exam: true, back: "CE — tlačna oprema; π — pokretna tlačna oprema (TPED); '3' — aerosolni raspršivači." },
    { front: "Jednostavne tlačne posude — granice?", exam: true, back: "Zrak ili dušik, PS ≤ 30 bar, PS·V ≤ 10.000 bar·L (serijske zavarene posude)." },
    { front: "Kondenzacijski kotao — prednost?", exam: true, back: "Iskorištava toplinu kondenzacije vodene pare iz dimnih plinova → veća iskoristivost, niže temperature dimnih plinova." },
    { front: "Uža područja struke za strojarstvo?", exam: true, back: "Energetika, tlačna oprema, instalacije, konstrukcije i procesna tehnologija — polaže se SAMO JEDNO." },
    { front: "Što je HERA?", exam: true, back: "Hrvatska energetska regulatorna agencija — neovisni regulator energetskih djelatnosti; izdaje dozvole i regulira mrežne djelatnosti i tarife." }
  ]
});
