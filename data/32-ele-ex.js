window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "ele-ex",
  order: 16,
  title: "Uže područje struke – oprema i instalacije u Ex prostorima",
  icon: "💥",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.3.)",
      points: [
        "Pravilnik o najmanjim zahtjevima sigurnosti i zaštite zdravlja radnika te tehničkom nadgledanju postrojenja, opreme, instalacija i uređaja u prostorima ugroženim eksplozivnom atmosferom (NN 39/06, 106/07).",
        "Pravilnik o opremi i zaštitnim sustavima namijenjenim za uporabu u potencijalno eksplozivnim atmosferama (NN 33/16) — preuzima direktivu ATEX 2014/34/EU.",
        "Tehnički propis za niskonaponske električne instalacije (NN 5/10)."
      ]
    },
    {
      heading: "Zone opasnosti i Ex dokument",
      points: [
        "Plinovi i pare: zona 0 (eksplozivna atmosfera trajno ili dugotrajno), zona 1 (povremeno u normalnom radu), zona 2 (rijetko i kratkotrajno).",
        "Zapaljive prašine: zona 20, 21 i 22 — po istoj logici trajanja prisutnosti eksplozivne atmosfere.",
        "Poslodavac izrađuje Ex dokument (dokument o zaštiti od eksplozije): procjena rizika od eksplozije, klasifikacija prostora u zone, popis opreme i tehničke i organizacijske mjere zaštite.",
        "Postrojenja u Ex prostorima podliježu tehničkom nadgledanju (periodičkim pregledima) prema Pravilniku NN 39/06."
      ]
    },
    {
      heading: "Ex oprema (ATEX)",
      points: [
        "Skupine opreme: I — rudnici (metan, ugljena prašina); II — svi ostali Ex prostori (industrija).",
        "Kategorije opreme skupine II i dopuštene zone: kategorija 1 → zona 0/20, kategorija 2 → zona 1/21, kategorija 3 → zona 2/22.",
        "Vrste protueksplozijske zaštite: Ex d (neprodorni oklop), Ex e (povećana sigurnost), Ex i (samosigurnost — ia dopuštena i u zoni 0), Ex p (nadtlak), Ex n (za zonu 2) i dr.",
        "Ex oprema označava se posebnom heksagonalnom oznakom (Ex u šesterokutu) uz CE oznaku, skupinu, kategoriju i vrstu zaštite (npr. II 2G Ex d IIB T4).",
        "U Ex zonama izbjegavaju se izvori paljenja: iskre, vruće površine, statički elektricitet — oprema se bira prema zoni, skupini plina i temperaturnom razredu."
      ]
    }
  ],
  questions: [
    {
      q: "Koje zone opasnosti razlikujemo za zapaljive prašine?",
      exam: true,
      options: ["Zone 0, 1 i 2", "Zone 20, 21 i 22", "Zone A, B i C", "Zone I, II i III"],
      correct: 1,
      explanation: "Za prašine vrijede zone 20/21/22 (analogno zonama 0/1/2 za plinove): 20 — eksplozivna atmosfera trajno, 21 — povremeno u normalnom radu, 22 — rijetko i kratkotrajno.",
      source: "Pravilnik NN 39/06; ATEX"
    },
    {
      q: "Koja kategorija ATEX opreme smije se ugraditi u zonu 0?",
      exam: true,
      options: [
        "Kategorija 3",
        "Kategorija 2",
        "Kategorija 1 (oznaka II 1G)",
        "U zonu 0 ne smije nikakva oprema"
      ],
      correct: 2,
      explanation: "Kategorija 1 → zona 0/20, kategorija 2 → zona 1/21, kategorija 3 → zona 2/22. Oprema više kategorije smije u nižu zonu, obrnuto ne.",
      source: "Pravilnik o opremi za potencijalno eksplozivne atmosfere (NN 33/16)"
    },
    {
      q: "Tko izrađuje Ex dokument (dokument o zaštiti od eksplozije) i što sadrži?",
      exam: true,
      options: [
        "MUP; sadrži popis vatrogasnih aparata",
        "Poslodavac; sadrži procjenu rizika od eksplozije, klasifikaciju prostora u zone, popis opreme te tehničke i organizacijske mjere",
        "Projektant elektrotehnike; sadrži samo sheme instalacija",
        "HERA; sadrži tarife"
      ],
      correct: 1,
      explanation: "Ex dokument je obveza POSLODAVCA prema Pravilniku NN 39/06 — na temelju njega se bira Ex oprema i provode mjere; postrojenja podliježu periodičkom tehničkom nadgledanju.",
      source: "Pravilnik NN 39/06"
    },
    {
      q: "Koja je vrsta protueksplozijske zaštite dopuštena i u zoni 0?",
      exam: true,
      options: [
        "Ex d (neprodorni oklop)",
        "Ex i — samosigurnost (izvedba ia)",
        "Ex e (povećana sigurnost)",
        "Ex n"
      ],
      correct: 1,
      explanation: "Samosigurni krugovi (Ex ia) ograničavaju energiju u krugu toliko da ni u kvaru ne mogu zapaliti eksplozivnu atmosferu — zato su dopušteni u najstrožoj zoni. Ex d i Ex e tipično idu u zonu 1, Ex n u zonu 2.",
      source: "Norme HRN EN 60079; ATEX"
    },
    {
      q: "Što znače skupine opreme I i II prema ATEX-u?",
      exam: true,
      options: [
        "I = niskonaponska, II = visokonaponska oprema",
        "I = oprema za rudnike (metan, ugljena prašina), II = oprema za ostale prostore ugrožene eksplozivnom atmosferom",
        "I = plinovi, II = prašine",
        "I = nova, II = rabljena oprema"
      ],
      correct: 1,
      explanation: "Skupina I namijenjena je rudnicima s metanom; skupina II industriji i ostalim Ex prostorima, s kategorijama 1/2/3 i podjelom na G (plinovi) i D (prašine).",
      source: "Pravilnik NN 33/16 (ATEX 2014/34/EU)"
    },
    {
      q: "Što označava oznaka 'II 2G Ex d IIB T4' na uređaju?",
      exam: true,
      options: [
        "Uređaj za rudnike, zona 22",
        "Skupina II, kategorija 2 za plinove (zona 1), zaštita neprodornim oklopom, skupina plina IIB, temperaturni razred T4",
        "Uređaj s dvostrukom izolacijom i IP54 zaštitom",
        "Uređaj za temperature do 4 °C"
      ],
      correct: 1,
      explanation: "Oznaka redom kazuje: skupinu opreme (II — industrija), kategoriju i atmosferu (2G — zona 1, plinovi), vrstu zaštite (Ex d), skupinu plina (IIB) i temperaturni razred (T4 = površina do 135 °C).",
      source: "Norme HRN EN 60079"
    }
  ],
  flashcards: [
    { front: "Ex zone za plinove i prašine?", exam: true, back: "Plinovi/pare: 0, 1, 2; prašine: 20, 21, 22 — prema trajanju prisutnosti eksplozivne atmosfere." },
    { front: "ATEX kategorije ↔ zone?", exam: true, back: "Kategorija 1 → zona 0/20; kategorija 2 → zona 1/21; kategorija 3 → zona 2/22." },
    { front: "Ex dokument — tko i što?", exam: true, back: "Izrađuje POSLODAVAC: procjena rizika od eksplozije, klasifikacija u zone, popis opreme, mjere zaštite (NN 39/06)." },
    { front: "Vrste Ex zaštite?", exam: true, back: "Ex d oklop, Ex e povećana sigurnost, Ex i samosigurnost (ia i za zonu 0), Ex p nadtlak, Ex n za zonu 2." },
    { front: "Skupine ATEX opreme?", exam: true, back: "I — rudnici (metan); II — ostali Ex prostori, s podjelom G (plinovi) / D (prašine)." }
  ]
});
