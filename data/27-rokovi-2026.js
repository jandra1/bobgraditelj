// Dopune postojećih područja prema iskustvima kandidata s ispitnih rokova 2024.–2026.
// (pitanja zabilježena u FB grupi "Stručni ispit za građevinare") — spajaju se po id-u.
window.APP_DATA = window.APP_DATA || [];

window.APP_DATA.push({
  id: "pozar",
  summary: [
    {
      heading: "Gašenje, aparati i stabilni sustavi (pitanja s rokova)",
      points: [
        "Mjerna jedinica za SNAGU požara je vat (W) — kao i za svaku snagu; požarno opterećenje izražava se u J/m² (praktično MJ/m² ili GJ/m²).",
        "Aparatom s prahom (npr. SP6) smije se gasiti električna oprema pod naponom do 1000 V, s udaljenosti veće od 1 m.",
        "Požar električne opreme gasi se i inertnim plinom (CO2) — ne vodom.",
        "Stabilni sustavi za gašenje požara: sprinkler (voda, automatske mlaznice), drencher (voda, otvorene mlaznice), sustavi na plin (CO2, inertni plinovi), na pjenu i na prah.",
        "Stabilne sustave za gašenje i dojavu ispituje OVLAŠTENA PRAVNA osoba; ovlaštenje daje MUP. Ispitivanje je periodično (najmanje jednom godišnje).",
        "Vatrogasne aparate periodično servisira i ispituje ovlašteni serviser (najmanje jednom godišnje); korisnik redovito provjerava dostupnost i ispravnost.",
        "Temeljni zahtjev sigurnosti u slučaju požara uključuje i ZAŠTITU SPAŠAVATELJA — zato sve građevine moraju imati vatrogasni pristup (operativne površine za vozila; slobodan pojas od cca 1 m uz fasadu omogućuje kretanje vatrogasaca oko vozila)."
      ]
    }
  ],
  questions: [
    {
      q: "Koja je mjerna jedinica za snagu požara?",
      exam: true,
      options: ["Džul (J)", "Vat (W)", "MJ/m²", "Kelvin (K)"],
      correct: 1,
      explanation: "Snaga požara je oslobođena energija u jedinici vremena, dakle vat — kao svaka snaga. Požarno opterećenje (energija po površini) izražava se u J/m², praktično MJ/m² ili GJ/m².",
      source: "Fizika požara; pitano na rokovima 2025./2026."
    },
    {
      q: "Smije li se aparatom s prahom (SP6) gasiti električna oprema pod naponom?",
      exam: true,
      options: [
        "Ne, nikada",
        "Da, bez ograničenja",
        "Da, za napone do 1000 V i s udaljenosti veće od 1 m",
        "Samo ako je oprema isključena"
      ],
      correct: 2,
      explanation: "Prah nije vodljiv pa je gašenje dopušteno do 1000 V uz minimalnu udaljenost 1 m. Električna oprema gasi se i CO2 aparatima (inertni plin), nikada vodom.",
      source: "Upute za uporabu vatrogasnih aparata; pitano na rokovima"
    },
    {
      q: "Nabrojite stabilne sustave za gašenje požara.",
      exam: true,
      options: [
        "Sprinkler, drencher, sustavi na plin (CO2/inertni), na pjenu i na prah",
        "Hidranti, aparati, deke i pijesak",
        "Samo sprinkler i hidrantska mreža",
        "Vatrodojava, panik rasvjeta i evakuacijski planovi"
      ],
      correct: 0,
      explanation: "Stabilni (fiksno ugrađeni) sustavi za gašenje: sprinkler (automatske mlaznice s ampulama), drencher (otvorene mlaznice, aktivira ih vatrodojava), plinski sustavi (CO2, inertni plinovi), sustavi na pjenu i na prah.",
      source: "Zakon o zaštiti od požara; pravila struke"
    },
    {
      q: "Tko smije ispitivati stabilne sustave za gašenje požara i tko daje ovlaštenje?",
      exam: true,
      options: [
        "Bilo koja fizička osoba s položenim stručnim ispitom",
        "Ovlaštena pravna osoba; ovlaštenje daje MUP",
        "Proizvođač sustava; ovlaštenje daje HZN",
        "Vatrogasna postrojba; ovlaštenje daje župan"
      ],
      correct: 1,
      explanation: "Ispituje ovlaštena PRAVNA osoba (ne fizička!), a ovlaštenje izdaje MUP. Ispitivači na roku posebno paze na tu razliku.",
      source: "Zakon o zaštiti od požara"
    },
    {
      q: "Što u okviru temeljnog zahtjeva sigurnosti u slučaju požara znači 'zaštita spašavatelja' i kako se osigurava?",
      exam: true,
      options: [
        "Osiguranje spašavatelja kod osiguravajućeg društva",
        "Da se pri požaru vodi računa o sigurnosti spasilačkih ekipa — građevine moraju imati vatrogasni pristup (operativne površine za vozila i slobodan pojas uz fasadu)",
        "Obvezu ugradnje dizala za vatrogasce u sve zgrade",
        "Postavljanje znakova upozorenja na ulazu"
      ],
      correct: 1,
      explanation: "Jedna od točaka temeljnog zahtjeva sigurnosti u slučaju požara jest da je uzeta u obzir sigurnost spasilačkih ekipa. Osigurava se vatrogasnim pristupom: operativnim površinama za vozila, a slobodan pojas od oko 1 m uz fasadu omogućuje vatrogascima kretanje oko vozila.",
      source: "ZOG — temeljni zahtjevi; Pravilnik o uvjetima za vatrogasne pristupe"
    }
  ],
  flashcards: [
    { front: "Jedinica za snagu požara?", exam: true, back: "Vat (W). Požarno opterećenje: J/m² (MJ/m², GJ/m²)." },
    { front: "Gašenje opreme pod naponom aparatom SP6?", exam: true, back: "Dopušteno do 1000 V, s udaljenosti veće od 1 m; el. oprema gasi se i CO2 aparatom, nikada vodom." },
    { front: "Stabilni sustavi za gašenje — nabroji?", exam: true, back: "Sprinkler, drencher, plinski (CO2/inertni), na pjenu, na prah." },
    { front: "Tko ispituje stabilne sustave za gašenje?", exam: true, back: "Ovlaštena PRAVNA osoba (ne fizička); ovlaštenje daje MUP." },
    { front: "Tko ispituje vatrogasne aparate?", exam: true, back: "Ovlašteni serviser, najmanje jednom godišnje; korisnik redovito provjerava dostupnost i ispravnost." },
    { front: "Zašto slobodan pojas ~1 m uz fasadu kod vatrogasnog pristupa?", exam: true, back: "Da se vatrogasci mogu kretati oko vozila na operativnoj površini (zaštita spašavatelja)." }
  ]
});

window.APP_DATA.push({
  id: "zgrade",
  summary: [
    {
      heading: "Zaštita od buke — karta buke (pitanja s rokova arhitekture)",
      points: [
        "Karta buke je grafički/elektronički prikaz postojećih razina buke na nekom području (urbane sredine, okolica prometnica, industrijskih zona, zračnih luka).",
        "Naručitelji (obveznici izrade) su jedinice lokalne samouprave — gradovi, te upravitelji infrastrukture (ceste, pruge, zračne luke) za svoje izvore.",
        "Na temelju karte buke planiraju se mjere: akustične barijere uz prometnice ili raspored namjena koje podnose višu razinu buke uz bučne zone."
      ]
    },
    {
      heading: "Tehnički propis o akustici u zgradarstvu (NN 71/25) — NOVO",
      points: [
        "Novi tehnički propis (2025.) koji razrađuje temeljni zahtjev ZAŠTITE OD BUKE za zgrade.",
        "Uređuje zvučnu izolaciju od zračnog i udarnog zvuka između prostora, buku instalacija i opreme te zaštitu od vanjske buke pri projektiranju, građenju i održavanju zgrada.",
        "Na ispitnom je popisu za arhitekturu i elektrotehniku (traži se poznavanje osnovnog teksta i područja primjene) — uz Zakon o zaštiti od buke i Pravilnik o najvišim dopuštenim razinama buke (NN 143/21)."
      ]
    }
  ],
  questions: [
    {
      q: "Koji novi tehnički propis iz 2025. razrađuje temeljni zahtjev zaštite od buke u zgradama?",
      exam: true,
      options: [
        "Tehnički propis o zvučnim barijerama",
        "Tehnički propis o akustici u zgradarstvu (NN 71/25)",
        "Pravilnik o karti buke",
        "Tehnički propis za prozore i vrata"
      ],
      correct: 1,
      explanation: "TP o akustici u zgradarstvu (NN 71/25) uređuje zvučnu izolaciju od zračnog i udarnog zvuka, buku instalacija i zaštitu od vanjske buke. Dopuštene razine buke u okolišu i dalje propisuje Pravilnik NN 143/21 na temelju Zakona o zaštiti od buke.",
      source: "TP o akustici u zgradarstvu (NN 71/25)"
    },
    {
      q: "Što je karta buke i tko je naručuje?",
      exam: true,
      options: [
        "Popis dopuštenih razina buke po zonama; naručuje je investitor",
        "Grafički prikaz postojećih razina buke na području (uz prometnice, industrijske zone, zračne luke); obveznici izrade su gradovi (JLS) i upravitelji infrastrukture",
        "Projekt zvučne izolacije zgrade; naručuje je projektant",
        "Zapisnik o mjerenju buke gradilišta; naručuje je izvođač"
      ],
      correct: 1,
      explanation: "Karta buke prikazuje stvarne razine buke u prostoru. Na temelju nje planiraju se akustične barijere ili se uz bučne zone smještaju namjene koje višu buku podnose. Dopuštene razine po zonama propisuje pravilnik — to nije karta buke.",
      source: "Zakon o zaštiti od buke"
    }
  ],
  flashcards: [
    { front: "Karta buke — što je i tko je naručuje?", exam: true, back: "Grafički prikaz postojećih razina buke područja; obveznici izrade su gradovi (JLS) i upravitelji infrastrukture. Temelj za planiranje barijera i namjena." },
    { front: "Novi propis za zaštitu od buke u zgradama (2025.)?", exam: true, back: "Tehnički propis o akustici u zgradarstvu (NN 71/25): zvučna izolacija od zračnog i udarnog zvuka, buka instalacija, zaštita od vanjske buke." }
  ]
});

window.APP_DATA.push({
  id: "tehnicka",
  summary: [
    {
      heading: "Akreditacijske norme (pitanja s rokova)",
      points: [
        "HRN EN ISO/IEC 17025 — zahtjevi za osposobljenost ISPITNIH i UMJERNIH LABORATORIJA (po njoj HAA akreditira laboratorije).",
        "HRN EN ISO/IEC 17020 — zahtjevi za rad INSPEKCIJSKIH tijela.",
        "Akreditacijska tijela država članica EU povezana su kroz europsku organizaciju za akreditaciju (EA) — akreditacije se međusobno priznaju."
      ]
    },
    {
      heading: "Opća sigurnost proizvoda — Uredba (EU) 2023/988 (NOVO)",
      points: [
        "Opću sigurnost proizvoda uređuje Uredba (EU) 2023/988 (GPSR) — izravno primjenjiva u svim državama članicama; zamijenila je Direktivu 2001/95/EZ o općoj sigurnosti proizvoda.",
        "Primjenjuje se na neprehrambene proizvode namijenjene potrošačima u dijelu u kojem sigurnost nije uređena posebnim (sektorskim) propisima.",
        "U Hrvatskoj se provodi Zakonom o provedbi Uredbe (EU) 2023/988 o općoj sigurnosti proizvoda (NN 78/25)."
      ]
    }
  ],
  questions: [
    {
      q: "Kojim je propisom danas uređena opća sigurnost proizvoda?",
      exam: true,
      options: [
        "Direktivom 2001/95/EZ, koja je i dalje na snazi",
        "Uredbom (EU) 2023/988 (GPSR), izravno primjenjivom, koja je zamijenila Direktivu 2001/95/EZ; u RH se provodi zakonom NN 78/25",
        "Zakonom o gradnji",
        "Uredbom (EU) 305/2011"
      ],
      correct: 1,
      explanation: "GPSR (General Product Safety Regulation) vrijedi za neprehrambene potrošačke proizvode čija sigurnost nije uređena sektorskim propisima. Uredba 305/2011, odnosno njezina nasljednica 2024/3110, uređuje građevne proizvode — to je drugo područje.",
      source: "Uredba (EU) 2023/988; Zakon o provedbi (NN 78/25)"
    },
    {
      q: "Prema kojoj se normi akreditiraju ispitni i umjerni laboratoriji?",
      exam: true,
      options: [
        "HRN EN ISO 9001",
        "HRN EN ISO/IEC 17025",
        "HRN EN ISO/IEC 17020",
        "HRN EN 1990"
      ],
      correct: 1,
      explanation: "17025 vrijedi za ispitne i umjerne laboratorije, a 17020 za inspekcijska tijela; ISO 9001 je norma sustava upravljanja kvalitetom. Akreditaciju u RH provodi HAA, a europska akreditacijska tijela povezana su kroz EA.",
      source: "HRN EN ISO/IEC 17025; Zakon o akreditaciji"
    }
  ],
  flashcards: [
    { front: "Norme 17025 i 17020 — za koga vrijede?", exam: true, back: "17025: ispitni i umjerni laboratoriji; 17020: inspekcijska tijela. Akreditira HAA; EU tijela povezana kroz EA." },
    { front: "Propis o općoj sigurnosti proizvoda?", exam: true, back: "Uredba (EU) 2023/988 (GPSR) — zamijenila Direktivu 2001/95/EZ; u RH provedba Zakonom NN 78/25. Građevne proizvode uređuje posebna uredba (2024/3110)." }
  ]
});
