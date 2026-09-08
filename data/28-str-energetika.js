window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "energetika",
  order: 19,
  title: "Uže područje struke – energetika (strojarstvo)",
  icon: "🔋",
  summary: [
    {
      heading: "Opseg i ključni zakoni (ispitni popis, t. 4.1.)",
      points: [
        "Uže područje za strojare energetskog usmjerenja: energetsko zakonodavstvo, tržišta energije, obnovljivi izvori, emisije i tlačna oprema u energetici.",
        "Zakon o energiji — krovni zakon: energetske djelatnosti, energetski subjekti, opća pravila tržišta energije.",
        "Zakon o regulaciji energetskih djelatnosti — regulator je HERA (Hrvatska energetska regulatorna agencija): izdaje dozvole za obavljanje energetskih djelatnosti i regulira mrežne djelatnosti i tarife.",
        "Zakoni o tržištima: električne energije, plina, toplinske energije te nafte i naftnih derivata; Zakon o biogorivima za prijevoz.",
        "Zakon o energetskoj učinkovitosti; Zakon o obnovljivim izvorima energije i visokoučinkovitoj kogeneraciji (NN 138/21).",
        "Strategija energetskog razvoja RH do 2030. s pogledom na 2050. (NN 25/20) — dekarbonizacija, rast udjela OIE, energetska učinkovitost.",
        "Zakon o zaštiti zraka (NN 127/19) s Uredbom o razinama onečišćujućih tvari u zraku (NN 77/20) — emisije iz ložišta i energetskih postrojenja.",
        "Pravilnik o tlačnoj opremi (NN 79/16) i Pravilnik o jednostavnim tlačnim posudama (NN 27/16) — oprema u energetskim postrojenjima.",
        "Priznata tehnička pravila: Pravilnik o tehničkim normativima za projektiranje, gradnju, pogon i održavanje plinskih kotlovnica (Sl. list 10/90)."
      ]
    },
    {
      heading: "Pojmovi",
      points: [
        "Energetska djelatnost obavlja se na temelju dozvole koju izdaje HERA (osim iznimki propisanih zakonom).",
        "Kogeneracija: istodobna proizvodnja električne (ili mehaničke) i toplinske energije u jednom procesu — visokoučinkovita kogeneracija ostvaruje propisane uštede primarne energije.",
        "Obnovljivi izvori energije: sunce, vjetar, voda, geotermalna energija, biomasa, bioplin i dr.",
        "Toplinska energija isporučuje se kupcima kroz zatvorene toplinske sustave (centralni toplinski sustavi) prema Zakonu o tržištu toplinske energije.",
        "Za rad plinske kotlovnice bitni su: dovod zraka za izgaranje, odzračivanje, odvod dimnih plinova i sigurnosna oprema plinske rampe."
      ]
    }
  ],
  questions: [
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
      explanation: "HERA je neovisni regulator prema Zakonu o regulaciji energetskih djelatnosti: izdaje dozvole za energetske djelatnosti te regulira mrežne djelatnosti i tarife.",
      source: "Zakon o regulaciji energetskih djelatnosti"
    },
    {
      q: "Što je visokoučinkovita kogeneracija?",
      exam: true,
      options: [
        "Proizvodnja električne energije s dva generatora",
        "Istodobna proizvodnja električne i toplinske energije u jednom procesu, uz propisane uštede primarne energije",
        "Proizvodnja energije isključivo iz vjetra",
        "Grijanje na dva energenta istodobno"
      ],
      correct: 1,
      explanation: "Kogeneracija iskorištava otpadnu toplinu proizvodnje električne energije; 'visokoučinkovita' je kad ostvaruje uštede primarne energije propisane Zakonom o OIE i visokoučinkovitoj kogeneraciji (NN 138/21).",
      source: "Zakon o OIE i visokoučinkovitoj kogeneraciji"
    },
    {
      q: "Koji zakon i podzakonski akt uređuju dopuštene razine onečišćujućih tvari u zraku iz energetskih postrojenja?",
      exam: true,
      options: [
        "Zakon o zaštiti okoliša i Uredba o okolišnoj dozvoli",
        "Zakon o zaštiti zraka (NN 127/19) i Uredba o razinama onečišćujućih tvari u zraku (NN 77/20)",
        "Zakon o energiji",
        "Pravilnik o tlačnoj opremi"
      ],
      correct: 1,
      explanation: "Zakon o zaštiti zraka s pripadnom uredbom uređuje kvalitetu zraka i emisije — bitno za ložišta, kotlovnice i energetska postrojenja.",
      source: "Zakon o zaštiti zraka (NN 127/19)"
    },
    {
      q: "Što se ubraja u obnovljive izvore energije?",
      exam: true,
      options: [
        "Sunce, vjetar, voda, geotermalna energija, biomasa i bioplin",
        "Prirodni plin i nafta",
        "Nuklearna energija i ugljen",
        "Samo sunce i vjetar"
      ],
      correct: 0,
      explanation: "OIE su izvori koji se prirodno obnavljaju; fosilna goriva i nuklearna energija ne spadaju u njih. Poticanje OIE uređuje Zakon NN 138/21.",
      source: "Zakon o OIE i visokoučinkovitoj kogeneraciji"
    },
    {
      q: "Kroz što se toplinska energija isporučuje kupcima prema Zakonu o tržištu toplinske energije?",
      exam: true,
      options: [
        "Kroz elektroenergetsku mrežu",
        "Kroz zatvorene toplinske sustave (centralne toplinske sustave) s mrežom i toplinskim podstanicama",
        "Isključivo cisternama",
        "Kroz plinsku distribucijsku mrežu"
      ],
      correct: 1,
      explanation: "Centralni toplinski sustav čine izvor topline, distribucijska mreža i podstanice kod kupaca; djelatnosti proizvodnje i distribucije topline uređene su Zakonom o tržištu toplinske energije.",
      source: "Zakon o tržištu toplinske energije"
    },
    {
      q: "Koji je glavni smjer Strategije energetskog razvoja RH do 2030. (s pogledom na 2050.)?",
      exam: true,
      options: [
        "Povećanje uvoza ugljena",
        "Dekarbonizacija, rast udjela obnovljivih izvora i povećanje energetske učinkovitosti",
        "Zabrana svih plinskih instalacija do 2030.",
        "Izgradnja isključivo nuklearnih elektrana"
      ],
      correct: 1,
      explanation: "Strategija (NN 25/20) postavlja ciljeve smanjenja emisija stakleničkih plinova, rasta OIE i energetske učinkovitosti — zato se npr. dizalice topline potiču umjesto fosilnih kotlova.",
      source: "Strategija energetskog razvoja RH (NN 25/20)"
    },
    {
      q: "Što plinska kotlovnica mora imati za siguran rad prema pravilima za plinske kotlovnice?",
      exam: true,
      options: [
        "Samo plinomjer",
        "Dovod zraka za izgaranje, odzračivanje prostora, odvod dimnih plinova i sigurnosnu opremu plinske rampe",
        "Klimatizaciju prostora",
        "Prozor prema jugu"
      ],
      correct: 1,
      explanation: "Pravilnik o tehničkim normativima za plinske kotlovnice (Sl. list 10/90) propisuje ventilacijske otvore, odvod dimnih plinova i sigurnosne uređaje; primjenjuje se kao priznato tehničko pravilo.",
      source: "Pravilnik o plinskim kotlovnicama (Sl. list 10/90)"
    }
  ],
  flashcards: [
    { front: "Što je HERA?", exam: true, back: "Hrvatska energetska regulatorna agencija — neovisni regulator energetskih djelatnosti; izdaje dozvole i regulira mrežne djelatnosti i tarife." },
    { front: "Visokoučinkovita kogeneracija?", exam: true, back: "Istodobna proizvodnja električne i toplinske energije u jednom procesu uz propisane uštede primarne energije (Zakon NN 138/21)." },
    { front: "Obnovljivi izvori energije — nabroji?", exam: true, back: "Sunce, vjetar, voda, geotermalna energija, biomasa, bioplin i dr." },
    { front: "Emisije u zrak — koji propisi?", exam: true, back: "Zakon o zaštiti zraka (NN 127/19) + Uredba o razinama onečišćujućih tvari u zraku (NN 77/20)." },
    { front: "Strategija energetskog razvoja RH — smjer?", exam: true, back: "Dekarbonizacija, rast udjela OIE i energetska učinkovitost do 2030. s pogledom na 2050. (NN 25/20)." },
    { front: "Plinska kotlovnica — sigurnosni zahtjevi?", exam: true, back: "Dovod zraka za izgaranje, odzračivanje, odvod dimnih plinova, sigurnosna oprema plinske rampe (Sl. list 10/90)." }
  ]
});
