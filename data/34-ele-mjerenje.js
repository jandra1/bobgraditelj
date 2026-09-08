window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "ele-mjerenje",
  order: 18,
  title: "Uže područje struke – mjerenje, upravljanje i nadzor industrijskih procesa",
  icon: "🎛️",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.5.) — polažu računarski i automatizacijski smjerovi",
      points: [
        "Tehnički propis za niskonaponske električne instalacije (NN 5/10) — instalacije mjernih, upravljačkih i nadzornih sustava dio su NN instalacija građevine.",
        "Pravilnik o elektromagnetskoj kompatibilnosti (NN 28/16, 88/19) — ključni propis za opremu automatike."
      ]
    },
    {
      heading: "Mjerenje, upravljanje i nadzor — pojmovi",
      points: [
        "Sustavi NUS/SCADA: nadzorno-upravljački sustavi — prikupljanje mjerenja, daljinsko upravljanje i alarmiranje industrijskih procesa; PLC (programirljivi logički kontroler) izvršava upravljačku logiku u polju.",
        "Standardni analogni signal instrumentacije je strujna petlja 4–20 mA: otporna na smetnje i pad napona na vodičima, a 'živa nula' (4 mA) omogućuje detekciju prekida voda (struja 0 mA = kvar).",
        "Smanjenje elektromagnetskih smetnji: signalni i energetski kabeli vode se odvojenim trasama, koriste se oklopljeni (i upleteni) kabeli, oklop se uzemljuje prema pravilima (u pravilu na jednom kraju za niskofrekvencijske smetnje), izbjegavaju se petlje uzemljenja.",
        "EMC ima dvije strane: ograničenje vlastite EMISIJE smetnji i OTPORNOST (imunost) na smetnje iz okoline — oprema mora zadovoljiti oboje.",
        "U Ex prostorima mjerni krugovi izvode se kao samosigurni (Ex i) — energija kruga ograničena je ispod razine paljenja.",
        "Mjerna oprema u zakonskom mjeriteljstvu (obračunska mjerila) podliježe Zakonu o mjeriteljstvu — ovjere i umjeravanje prema etalonima."
      ]
    }
  ],
  questions: [
    {
      q: "Zašto se u industrijskoj instrumentaciji koristi strujni signal 4–20 mA, a ne naponski?",
      exam: true,
      options: [
        "Jer je jeftiniji",
        "Jer je strujna petlja otporna na smetnje i pad napona na vodičima, a 'živa nula' od 4 mA omogućuje detekciju prekida voda",
        "Jer troši manje energije od naponskog signala",
        "Zbog zakonske obveze"
      ],
      correct: 1,
      explanation: "Struja je u petlji svugdje ista bez obzira na otpor vodiča; 0 mA jasno znači prekid ili kvar (da raspon počinje od 0, prekid se ne bi razlikovao od najniže vrijednosti mjerenja).",
      source: "Pravila struke — industrijska instrumentacija"
    },
    {
      q: "Kako se smanjuju elektromagnetske smetnje na signalnim kabelima automatike?",
      exam: true,
      options: [
        "Vođenjem signalnih kabela u istoj trasi s energetskima radi uštede",
        "Odvojenim trasama signalnih i energetskih kabela, oklopljenim/upletenim kabelima i pravilnim uzemljenjem oklopa",
        "Povećanjem napona signala",
        "Skraćivanjem kabela na manje od 1 m"
      ],
      correct: 1,
      explanation: "Razdvajanje trasa smanjuje induktivno i kapacitivno sprezanje; oklop odvodi smetnje, a uzemljuje se prema pravilima (izbjegavanje petlji uzemljenja).",
      source: "Pravila struke; HRN EN 60204"
    },
    {
      q: "Koje dvije strane obuhvaća elektromagnetska kompatibilnost (EMC) opreme?",
      exam: true,
      options: [
        "Cijenu i dostupnost",
        "Ograničenje vlastite emisije smetnji i otpornost (imunost) na smetnje iz okoline",
        "Napon i frekvenciju",
        "Uzemljenje i izolaciju"
      ],
      correct: 1,
      explanation: "Oprema ne smije ometati druge uređaje (emisija) i mora ispravno raditi u svojem EM okruženju (imunost) — oboje uređuje Pravilnik o EMC (NN 28/16, 88/19).",
      source: "Pravilnik o elektromagnetskoj kompatibilnosti"
    },
    {
      q: "Što je SCADA sustav?",
      exam: true,
      options: [
        "Vrsta transformatorske stanice",
        "Nadzorno-upravljački sustav za prikupljanje mjerenja, daljinsko upravljanje i alarmiranje industrijskih procesa",
        "Program za crtanje shema",
        "Sustav vatrodojave"
      ],
      correct: 1,
      explanation: "SCADA (Supervisory Control and Data Acquisition) povezuje mjerenja i upravljanje iz polja (PLC-ovi, mjerni pretvornici) u nadzorni centar s vizualizacijom i alarmima.",
      source: "Pravila struke — automatizacija"
    },
    {
      q: "Kako se izvode mjerni i signalni krugovi u prostorima ugroženima eksplozivnom atmosferom?",
      exam: true,
      options: [
        "Standardnom opremom uz oprez",
        "Kao samosigurni krugovi (Ex i) — energija kruga ograničena je ispod razine potrebne za paljenje atmosfere",
        "Isključivo bežično",
        "U Ex prostorima mjerenja nisu dopuštena"
      ],
      correct: 1,
      explanation: "Samosigurnost (Ex ia/ib) ograničava napon i struju u krugu (Zenerove barijere, galvanski odvajači) tako da ni kvar ne može stvoriti iskru dovoljne energije; izvedba ia dopuštena je i u zoni 0.",
      source: "HRN EN 60079-11"
    }
  ],
  flashcards: [
    { front: "Zašto signal 4–20 mA?", exam: true, back: "Strujna petlja otporna na smetnje i pad napona; 'živa nula' 4 mA → 0 mA jasno znači prekid voda." },
    { front: "Smanjenje EM smetnji signala?", exam: true, back: "Odvojene trase od energetskih kabela, oklopljeni/upleteni kabeli, pravilno uzemljenje oklopa, bez petlji uzemljenja." },
    { front: "EMC — dvije strane?", exam: true, back: "Emisija (ne ometati druge) i imunost (raditi ispravno u EM okruženju) — Pravilnik NN 28/16, 88/19." },
    { front: "SCADA i PLC?", exam: true, back: "SCADA: nadzorno-upravljački sustav (mjerenja, upravljanje, alarmi); PLC: programirljivi kontroler koji izvršava logiku u polju." },
    { front: "Mjerni krugovi u Ex prostoru?", exam: true, back: "Samosigurni (Ex i) — ograničena energija kruga (barijere, galvansko odvajanje); ia i za zonu 0." }
  ]
});
