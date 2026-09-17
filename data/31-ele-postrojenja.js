window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "ele-postrojenja",
  order: 14,
  title: "Uže područje struke – postrojenja u elektroprivredi",
  short: "Postrojenja u elektroprivredi",
  icon: "🏭",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.1.) — polažu elektroenergetski smjerovi",
      points: [
        "Pravilnik o tehničkim zahtjevima za elektroenergetska postrojenja nazivnih izmjeničnih napona iznad 1 kV (NN 105/10).",
        "Zakon o tržištu električne energije (NN 111/21, 83/23, 17/25) — pravila koja se primjenjuju na elektroenergetski sustav.",
        "Priznata tehnička pravila: Pravilnik o tehničkim normativima za izgradnju nadzemnih elektroenergetskih vodova od 1 kV do 400 kV; Pravilnik o tehničkim normativima za zaštitu niskonaponskih mreža i pripadnih transformatorskih stanica.",
        "Mrežna pravila prijenosnog sustava (NN 10/24) donosi operator prijenosnog sustava (HOPS); Mrežna pravila distribucijskog sustava (NN 74/18) operator distribucijskog sustava (HEP ODS) — oba uz suglasnost HERA-e."
      ]
    },
    {
      heading: "Postrojenja iznad 1 kV",
      points: [
        "Dopušteni naponi dodira prema Pravilniku NN 105/10: 125 V AC unutar postrojenja (TS), 65 V AC izvan postrojenja.",
        "Uzemljenja u TS: pogonsko (radno — zvjezdište transformatora), zaštitno (metalne mase) i gromobransko; mogu se izvesti kao združeno uzemljenje kad su ispunjeni uvjeti.",
        "Zaštite u postrojenjima: relejna zaštita (kratki spoj, zemljospoj, preopterećenje), odvodnici prenapona uz opremu i na ulazima vodova.",
        "Prije puštanja u pogon provode se ispitivanja: otpor uzemljenja i napon dodira/koraka, otpor izolacije, funkcionalna ispitivanja zaštita i blokada.",
        "Koordinacija izolacije: izolacijska čvrstoća opreme usklađuje se s očekivanim prenaponima (privremeni, sklopni, atmosferski) i zaštitnim uređajima."
      ]
    },
    {
      heading: "Nadzemni vodovi 1–400 kV",
      points: [
        "Dodatno opterećenje vodiča: opterećenje od leda i injenja koje se pribraja vlastitoj težini vodiča pri mehaničkom proračunu (normalno i izvanredno dodatno opterećenje).",
        "Na križanjima s prometnicama, objektima i drugim vodovima traži se pojačana sigurnost: MEHANIČKI pojačana izolacija (veća sigurnost protiv loma) i/ili ELEKTRIČKI pojačana izolacija (dodatni izolatorski članci).",
        "Propisane su sigurnosne visine i sigurnosne udaljenosti vodiča od tla, objekata i raslinja u najnepovoljnijim uvjetima (najveći provjes).",
        "Zaštitno uže na vrhu stupova štiti vod od izravnog udara munje i sudjeluje u uzemljenju stupova."
      ]
    }
  ],
  questions: [
    {
      q: "Koliki su dopušteni naponi dodira prema Pravilniku za postrojenja iznad 1 kV (NN 105/10)?",
      exam: true,
      options: [
        "50 V svugdje",
        "125 V AC unutar postrojenja (TS), 65 V AC izvan postrojenja",
        "230 V unutar TS, 110 V izvan",
        "65 V unutar TS, 125 V izvan"
      ],
      correct: 1,
      explanation: "Unutar postrojenja dopušteno je više (125 V) jer se pretpostavlja stručno osoblje i izolacijske podloge; izvan postrojenja, gdje se kreću svi, granica je 65 V. Opća granica za NN instalacije je 50 V AC.",
      source: "Pravilnik NN 105/10"
    },
    {
      q: "Koja uzemljenja razlikujemo u transformatorskoj stanici i kada se združuju?",
      exam: true,
      options: [
        "Samo gromobransko",
        "Pogonsko (zvjezdište), zaštitno (metalne mase) i gromobransko; izvode se kao združeno uzemljenje kad su ispunjeni propisani uvjeti",
        "Toplo i hladno uzemljenje",
        "Uzemljenje se u TS ne izvodi"
      ],
      correct: 1,
      explanation: "Pogonsko (radno) uzemljenje služi pogonu mreže (uzemljeno zvjezdište), zaštitno štiti od napona dodira na masama, gromobransko odvodi udare munje; združivanje je dopušteno uz zadovoljene uvjete napona dodira i koraka.",
      source: "Pravilnik NN 105/10; pravila struke"
    },
    {
      q: "Što je dodatno opterećenje vodiča nadzemnog voda?",
      exam: true,
      options: [
        "Težina montera na vodiču",
        "Opterećenje od leda i injenja koje se pri mehaničkom proračunu pribraja vlastitoj težini vodiča",
        "Sila vjetra na stup",
        "Napetost zatezanja vodiča"
      ],
      correct: 1,
      explanation: "Pravilnik za nadzemne vodove propisuje normalno i izvanredno dodatno opterećenje (led, injenje) ovisno o zoni; mjerodavno je za proračun provjesa i naprezanja vodiča.",
      source: "Pravilnik o nadzemnim vodovima 1–400 kV"
    },
    {
      q: "Što znači mehanički, a što električki pojačana izolacija na nadzemnom vodu?",
      exam: true,
      options: [
        "To su sinonimi",
        "Mehanički pojačana = veća sigurnost protiv loma (npr. dvostruke izolatorske ovjese); električki pojačana = dodatni izolatorski članci; traže se na križanjima s prometnicama i objektima",
        "Mehanički = deblji vodič; električki = viši napon",
        "Odnosi se samo na kabelske vodove"
      ],
      correct: 1,
      explanation: "Na mjestima gdje bi pad vodiča ili preskok ugrozio ljude (križanja s cestama, prugama, objektima) pravilnik traži pojačanu sigurnost izolacije — mehanički i/ili električki.",
      source: "Pravilnik o nadzemnim vodovima 1–400 kV"
    },
    {
      q: "Koja se ispitivanja provode u elektroenergetskom postrojenju prije puštanja u pogon?",
      exam: true,
      options: [
        "Samo vizualni pregled",
        "Mjerenje otpora uzemljenja te napona dodira i koraka, otpor izolacije, funkcionalna ispitivanja relejnih zaštita i blokada",
        "Samo mjerenje napona na sabirnicama",
        "Tlačna proba"
      ],
      correct: 1,
      explanation: "Ispitivanjima se dokazuje da su naponi dodira/koraka u granicama, izolacija ispravna te da zaštite i blokade ispravno djeluju; rezultati se dokumentiraju izvještajima.",
      source: "Pravilnik NN 105/10; pravila struke"
    },
    {
      q: "Tko donosi Mrežna pravila prijenosnog, a tko distribucijskog sustava?",
      exam: true,
      options: [
        "HERA sama",
        "Prijenosnog: operator prijenosnog sustava (HOPS); distribucijskog: operator distribucijskog sustava (HEP ODS) — oba uz suglasnost HERA-e",
        "Ministarstvo gospodarstva",
        "Hrvatski sabor"
      ],
      correct: 1,
      explanation: "Mrežna pravila (NN 10/24 za prijenos, NN 74/18 za distribuciju) uređuju pogon, planiranje, priključenje i mjerenje; donose ih operatori sustava uz suglasnost regulatora.",
      source: "Zakon o tržištu električne energije; Mrežna pravila"
    },
    {
      q: "Čemu služi zaštitno uže na nadzemnom vodu?",
      exam: true,
      options: [
        "Za penjanje montera na stup",
        "Štiti fazne vodiče od izravnog udara munje i sudjeluje u uzemljenju stupova",
        "Nosi fazne vodiče",
        "Služi kao rezervni vodič"
      ],
      correct: 1,
      explanation: "Zaštitno uže postavlja se na vrh stupova iznad faznih vodiča; udar munje odvodi kroz stupove u zemlju, a često sadrži i optička vlakna (OPGW) za komunikacije.",
      source: "Pravilnik o nadzemnim vodovima 1–400 kV"
    }
  ],
  flashcards: [
    { front: "Naponi dodira >1 kV (NN 105/10)?", exam: true, back: "125 V AC unutar postrojenja (TS), 65 V AC izvan postrojenja." },
    { front: "Uzemljenja u TS?", exam: true, back: "Pogonsko (zvjezdište), zaštitno (mase), gromobransko; združeno uzemljenje uz ispunjene uvjete." },
    { front: "Dodatno opterećenje vodiča DV?", exam: true, back: "Led i injenje — pribraja se vlastitoj težini u mehaničkom proračunu (normalno i izvanredno)." },
    { front: "Pojačana izolacija na DV?", exam: true, back: "Mehanički (sigurnost protiv loma) i električki (dodatni članci) — obvezna na križanjima s prometnicama i objektima." },
    { front: "Ispitivanja postrojenja prije pogona?", exam: true, back: "Otpor uzemljenja, naponi dodira/koraka, otpor izolacije, funkcionalna ispitivanja zaštita i blokada." },
    { front: "Tko donosi mrežna pravila?", exam: true, back: "Prijenos: HOPS; distribucija: HEP ODS — oba uz suglasnost HERA-e." }
  ]
});
