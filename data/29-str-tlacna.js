window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "tlacna",
  order: 20,
  title: "Uže područje struke – tlačna oprema (strojarstvo)",
  icon: "🛢️",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.2.)",
      points: [
        "Pravilnik o tlačnoj opremi (NN 79/16) — preuzima direktivu PED 2014/68/EU.",
        "Pravilnik o jednostavnim tlačnim posudama (NN 27/16) — direktiva SPVD 2014/29/EU.",
        "Pravilnik o pokretnoj tlačnoj opremi (NN 91/13) — direktiva TPED.",
        "Pravilnik o aerosolnim raspršivačima (NN 45/14 i dr.).",
        "Pravilnik o pregledima i ispitivanju opreme pod tlakom (NN 75/20) — oprema u uporabi."
      ]
    },
    {
      heading: "Razvrstavanje i ocjenjivanje sukladnosti",
      points: [
        "Tlačna oprema: posude, cjevovodi, sigurnosni pribor i tlačni pribor s najvećim dopuštenim tlakom PS > 0,5 bar.",
        "Kategorije I–IV određuju se prema tlaku PS, volumenu V (umnošku PS·V) i skupini fluida — pomoću 9 dijagrama za kategorizaciju.",
        "Fluidi skupine 1: opasni (zapaljivi, eksplozivni, otrovni, oksidirajući); skupina 2: svi ostali, uključujući vodenu paru.",
        "Ocjenjivanje sukladnosti po modulima (A do H) — viša kategorija znači zahtjevniji modul i veće sudjelovanje prijavljenog tijela; najzahtjevniji je modul H1 (potpuno osiguranje kvalitete s pregledom projekta).",
        "Oznake: CE za tlačnu opremu; π (pi) za pokretnu tlačnu opremu; '3' za aerosolne raspršivače.",
        "Jednostavne tlačne posude: serijski proizvedene zavarene posude za zrak ili dušik, PS ≤ 30 bar i PS·V ≤ 10.000 bar·L.",
        "Sigurnosni pribor: uređaji za zaštitu od prekoračenja dopuštenih granica (sigurnosni ventili, rasprskavajuće membrane, tlačne sklopke); tlačni pribor: manometri, termometri i sl."
      ]
    },
    {
      heading: "Oprema pod tlakom u uporabi",
      points: [
        "Periodični pregledi i ispitivanja provode se prema Pravilniku NN 75/20; rokovi ovise o razvrstavanju opreme (visoka/niska razina opasnosti).",
        "Oprema visoke razine opasnosti evidentira se i nadzire — poslove vodi Agencija za opremu pod tlakom (OPT).",
        "Vrste pregleda: prvi pregled prije puštanja u rad, periodični (vanjski, unutarnji) i izvanredni pregledi te tlačna proba (ispitivanje čvrstoće)."
      ]
    }
  ],
  questions: [
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
      source: "Pravilnik o tlačnoj opremi (NN 79/16; PED 2014/68/EU)"
    },
    {
      q: "Kako se dijele fluidi prema Pravilniku o tlačnoj opremi?",
      exam: true,
      options: [
        "Na tople i hladne",
        "Na skupinu 1 (opasni: zapaljivi, eksplozivni, otrovni, oksidirajući) i skupinu 2 (svi ostali, uključujući vodenu paru)",
        "Na tekućine i krutine",
        "Na organske i anorganske"
      ],
      correct: 1,
      explanation: "Skupina fluida izravno utječe na kategoriju opreme: isti spremnik s opasnim fluidom pada u višu kategoriju nego s fluidom skupine 2.",
      source: "Pravilnik o tlačnoj opremi (NN 79/16)"
    },
    {
      q: "Koji je najzahtjevniji modul ocjenjivanja sukladnosti tlačne opreme?",
      exam: true,
      options: [
        "Modul A (unutarnja kontrola proizvodnje)",
        "Modul H1 — potpuno osiguranje kvalitete s pregledom projekta",
        "Modul B (EU ispitivanje tipa)",
        "Modul G (pojedinačna ovjera)"
      ],
      correct: 1,
      explanation: "Moduli idu od A (najjednostavniji, bez prijavljenog tijela) do H1, gdje prijavljeno tijelo odobrava sustav kvalitete I pregledava projekt — koristi se za najvišu kategoriju opreme.",
      source: "Pravilnik o tlačnoj opremi (NN 79/16)"
    },
    {
      q: "Kojom se oznakom označava pokretna tlačna oprema?",
      exam: true,
      options: ["Oznakom CE", "Oznakom π (pi)", "Oznakom M", "Oznakom Ex"],
      correct: 1,
      explanation: "Pokretna tlačna oprema (TPED, NN 91/13) nosi oznaku π; 'obična' tlačna oprema nosi CE, a aerosolni raspršivači oznaku '3'.",
      source: "Pravilnik o pokretnoj tlačnoj opremi (NN 91/13)"
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
      explanation: "Jednostavne tlačne posude su serijski proizvedene zavarene posude za zrak ili dušik, najvećeg dopuštenog tlaka do 30 bar i PS·V do 10.000 bar·L.",
      source: "Pravilnik o jednostavnim tlačnim posudama (NN 27/16)"
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
      source: "Pravilnik o tlačnoj opremi (NN 79/16)"
    },
    {
      q: "Prema kojem se propisu pregledava i ispituje oprema pod tlakom u uporabi i tko nadzire opremu visoke razine opasnosti?",
      exam: true,
      options: [
        "Prema Zakonu o gradnji; nadzire građevinska inspekcija",
        "Prema Pravilniku o pregledima i ispitivanju opreme pod tlakom (NN 75/20); opremu visoke razine opasnosti nadzire Agencija za opremu pod tlakom (OPT)",
        "Prema PED direktivi; nadzire proizvođač",
        "Ne postoje periodični pregledi"
      ],
      correct: 1,
      explanation: "Za opremu u uporabi vrijede periodični pregledi (vanjski, unutarnji) i tlačne probe; rokovi ovise o razvrstavanju. Visokorizična oprema evidentira se pri OPT agenciji.",
      source: "Pravilnik NN 75/20"
    },
    {
      q: "Koje vrste pregleda opreme pod tlakom razlikujemo?",
      exam: true,
      options: [
        "Samo godišnji servis",
        "Prvi pregled prije puštanja u rad, periodične (vanjske i unutarnje) preglede, izvanredne preglede i tlačnu probu",
        "Samo vizualni pregled pri kupnji",
        "Preglede obavlja isključivo vatrogasna inspekcija"
      ],
      correct: 1,
      explanation: "Tlačna proba (ispitivanje čvrstoće) provodi se u propisanim rokovima ili nakon popravaka; unutarnji pregled zahtijeva otvaranje i pripremu posude.",
      source: "Pravilnik NN 75/20"
    }
  ],
  flashcards: [
    { front: "Kategorije tlačne opreme?", exam: true, back: "I–IV prema tlaku, volumenu (PS·V) i skupini fluida — 9 dijagrama; viša kategorija = zahtjevniji modul ocjenjivanja." },
    { front: "Skupine fluida (PED)?", exam: true, back: "Skupina 1: opasni (zapaljivi, eksplozivni, otrovni); skupina 2: ostali, uključujući vodenu paru." },
    { front: "Najzahtjevniji modul ocjenjivanja?", exam: true, back: "H1 — potpuno osiguranje kvalitete s pregledom projekta (prijavljeno tijelo odobrava sustav i projekt)." },
    { front: "Oznake tlačne opreme?", exam: true, back: "CE — tlačna oprema; π — pokretna tlačna oprema (TPED); '3' — aerosolni raspršivači." },
    { front: "Jednostavne tlačne posude — granice?", exam: true, back: "Zrak ili dušik, PS ≤ 30 bar, PS·V ≤ 10.000 bar·L (serijske zavarene posude)." },
    { front: "Sigurnosni vs. tlačni pribor?", exam: true, back: "Sigurnosni: štiti od prekoračenja granica (ventili, membrane, sklopke). Tlačni: mjerna funkcija (manometri, termometri)." },
    { front: "Oprema pod tlakom u uporabi — pregledi?", exam: true, back: "Prvi, periodični (vanjski/unutarnji), izvanredni + tlačna proba (NN 75/20); visokorizičnu opremu nadzire OPT agencija." }
  ]
});
