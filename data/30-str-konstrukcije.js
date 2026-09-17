window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "str-konstrukcije",
  order: 22,
  title: "Uže područje struke – konstrukcije i procesna tehnologija (strojarstvo)",
  short: "Konstrukcije i procesna tehnologija",
  icon: "🔩",
  summary: [
    {
      heading: "Propisi (ispitni popis, t. 4.4.)",
      points: [
        "Tehnički propis za građevinske konstrukcije (NN 17/17, 75/20, 7/22) s Eurokodovima: HRN EN 1990 (EC0 — osnove projektiranja), niz HRN EN 1991 (EC1 — djelovanja), HRN EN 1993 (EC3 — čelične konstrukcije), HRN EN 1997 (EC7 — geotehnika), HRN EN 1998 (EC8 — potresna otpornost).",
        "Pravilnik o sigurnosti strojeva (NN 28/11) — preuzima direktivu o strojevima 2006/42/EZ.",
        "Pravilnik o sigurnosti dizala u uporabi (NN 5/19).",
        "Pravilnik o tlačnoj opremi (NN 79/16) — procesna oprema pod tlakom."
      ]
    },
    {
      heading: "Konstrukcije — osnovno",
      points: [
        "EC0 (HRN EN 1990): granična stanja nosivosti i uporabljivosti, kombinacije djelovanja, parcijalni koeficijenti (1,35 stalna / 1,5 promjenjiva djelovanja za GSN).",
        "EC3: proračun čeličnih konstrukcija — razredi čelika (npr. S235, S355), otpornost presjeka, izvijanje, spojevi (vijčani, zavareni).",
        "EC8: potresna otpornost — pravilnost konstrukcije, duktilnost, proračun prema potresnim kartama nacionalnog dodatka.",
        "Strojarske (procesne) konstrukcije: nosači opreme, cjevovodni mostovi, spremnici — projektiraju se prema TP-u za građevinske konstrukcije kad su dio građevine."
      ]
    },
    {
      heading: "Sigurnost strojeva i dizala",
      points: [
        "Stroj stavljen na tržište mora imati: CE oznaku, EZ izjavu o sukladnosti i upute na hrvatskom jeziku; mora zadovoljiti bitne zdravstvene i sigurnosne zahtjeve.",
        "Za neke skupine strojeva (Dodatak IV.) u ocjenjivanje sukladnosti uključuje se prijavljeno tijelo.",
        "Dizala u uporabi: redoviti pregled dizala najmanje jednom godišnje obavlja ovlaštena pravna osoba; vlasnik osigurava održavanje i spašavanje osoba iz kabine.",
        "Procesna tlačna oprema (izmjenjivači, kolone, spremnici) podliježe Pravilniku o tlačnoj opremi i periodičnim pregledima u uporabi."
      ]
    }
  ],
  questions: [
    {
      q: "Prema kojem se Eurokodu proračunavaju čelične konstrukcije?",
      exam: true,
      options: ["HRN EN 1992 (EC2)", "HRN EN 1993 (EC3)", "HRN EN 1996 (EC6)", "HRN EN 1997 (EC7)"],
      correct: 1,
      explanation: "EC3 pokriva čelične konstrukcije; EC2 je za betonske, EC6 za zidane, EC7 za geotehniku. Strojarima je EC3 najvažniji za nosače opreme i procesne konstrukcije.",
      source: "TP za građevinske konstrukcije; HRN EN 1993"
    },
    {
      q: "Koja norma daje osnove projektiranja konstrukcija (granična stanja, kombinacije djelovanja)?",
      exam: true,
      options: ["HRN EN 1990 (Eurokod 0)", "HRN EN 12831", "HRN EN ISO 9001", "HRN EN 62305"],
      correct: 0,
      explanation: "EC0 definira granična stanja nosivosti i uporabljivosti te parcijalne koeficijente: za GSN 1,35 za stalna i 1,5 za promjenjiva djelovanja.",
      source: "HRN EN 1990"
    },
    {
      q: "Što stroj mora imati kada se stavlja na tržište prema Pravilniku o sigurnosti strojeva?",
      exam: true,
      options: [
        "Samo račun i jamstveni list",
        "CE oznaku, EZ izjavu o sukladnosti i upute na hrvatskom jeziku",
        "Atest ovlaštenog servisera",
        "Dozvolu MUP-a"
      ],
      correct: 1,
      explanation: "Pravilnik NN 28/11 (direktiva 2006/42/EZ) traži ispunjenje bitnih zdravstvenih i sigurnosnih zahtjeva, CE označavanje, izjavu o sukladnosti i upute; za strojeve iz Dodatka IV. uključuje se prijavljeno tijelo.",
      source: "Pravilnik o sigurnosti strojeva (NN 28/11)"
    },
    {
      q: "Koliko često se obavlja redoviti pregled dizala u uporabi i tko ga obavlja?",
      exam: true,
      options: [
        "Svakih 5 godina; obavlja ga vlasnik",
        "Najmanje jednom godišnje; obavlja ga ovlaštena pravna osoba",
        "Samo nakon kvara; obavlja ga serviser",
        "Svaka 3 mjeseca; obavlja ga stanar"
      ],
      correct: 1,
      explanation: "Prema Pravilniku o sigurnosti dizala u uporabi (NN 5/19) redoviti pregled provodi ovlaštena pravna osoba najmanje jednom godišnje, a vlasnik osigurava održavanje i spašavanje osoba iz kabine.",
      source: "Pravilnik o sigurnosti dizala u uporabi (NN 5/19)"
    },
    {
      q: "Koji su parcijalni koeficijenti djelovanja za granično stanje nosivosti?",
      exam: true,
      options: [
        "1,0 za sva djelovanja",
        "1,35 za stalna i 1,5 za promjenjiva djelovanja",
        "2,0 za stalna i 3,0 za promjenjiva",
        "0,85 za stalna i 1,0 za promjenjiva"
      ],
      correct: 1,
      explanation: "Prema EC0 za GSN: stalna djelovanja (vlastita težina) množe se s 1,35, promjenjiva (korisno opterećenje, snijeg, vjetar) s 1,5; za granično stanje uporabljivosti u pravilu 1,0.",
      source: "HRN EN 1990"
    },
    {
      q: "Prema kojem se Eurokodu dokazuje potresna otpornost konstrukcija?",
      exam: true,
      options: ["HRN EN 1991 (EC1)", "HRN EN 1994 (EC4)", "HRN EN 1998 (EC8)", "HRN EN 1999 (EC9)"],
      correct: 2,
      explanation: "EC8 s nacionalnim dodatkom (potresne karte) uređuje potresnu otpornost; načela su pravilnost, simetrija i duktilnost konstrukcije.",
      source: "HRN EN 1998"
    }
  ],
  flashcards: [
    { front: "Eurokodovi za strojarsko uže područje konstrukcija?", exam: true, back: "EC0 osnove, EC1 djelovanja, EC3 čelične konstrukcije, EC7 geotehnika, EC8 potres." },
    { front: "Stroj na tržištu mora imati?", exam: true, back: "CE oznaku, EZ izjavu o sukladnosti i upute na hrvatskom (NN 28/11, direktiva 2006/42/EZ)." },
    { front: "Redoviti pregled dizala u uporabi?", exam: true, back: "Najmanje jednom godišnje, obavlja ovlaštena pravna osoba (NN 5/19)." },
    { front: "Parcijalni koeficijenti za GSN?", exam: true, back: "1,35 stalna, 1,5 promjenjiva djelovanja (EC0); za uporabljivost 1,0." },
    { front: "Razredi čelika u EC3?", back: "Npr. S235, S355 — broj je granica popuštanja u N/mm²." }
  ]
});
