// Dopuna područja "tehnicka" prema skripti 09/2026: nova Uredba (EU) 2024/3110 o građevnim proizvodima,
// izmjene ZoGP-a (NN 48/26, na snazi 16. 5. 2026.) i novi Tehnički propis za usklađeno područje (NN 97/26).
// Učitava se ZADNJA za ovo područje — nova pitanja/kartice dodaju se na kraj polja da indeksi napretka ostanu stabilni.
window.APP_DATA = window.APP_DATA || [];

window.APP_DATA.push({
  id: "tehnicka",
  questions: [
    {
      q: "Kada je Uredba (EU) 2024/3110 o građevnim proizvodima stupila na snagu i od kada se primjenjuje?",
      options: [
        "Na snazi od 7. 1. 2025., primjenjuje se od 8. 1. 2026. uz prijelazna razdoblja",
        "Na snazi od 1. 7. 2013., primjenjuje se odmah u svim članicama",
        "Na snazi od 18. 12. 2024., primjenjuje se od 1. 1. 2030.",
        "Na snazi od 16. 5. 2026., primjenjuje se samo u Hrvatskoj"
      ],
      correct: 0,
      explanation: "Uredba 2024/3110 donesena je 27. 11. 2024., objavljena u Službenom listu EU 18. 12. 2024. i stupila na snagu 7. 1. 2025.; primjenjuje se od 8. 1. 2026. (čl. 96.) uz prijelazne odredbe čl. 95. prema kojima se za proizvode pod starim usklađenim normama i EAD-ovima još primjenjuje Uredba 305/2011.",
      source: "Uredba (EU) 2024/3110, čl. 94.–96."
    },
    {
      q: "Kojim su Narodnim novinama objavljene izmjene i dopune Zakona o građevnim proizvodima kojima se u hrvatski pravni sustav preuzima provedba Uredbe (EU) 2024/3110?",
      options: [
        "NN 118/20",
        "NN 48/26",
        "NN 97/26",
        "NN 152/25"
      ],
      correct: 1,
      explanation: "Zakon o izmjenama i dopunama ZoGP-a objavljen je u NN 48/26 (8. 5. 2026.) i stupio na snagu osmoga dana od objave, 16. 5. 2026. NN 118/20 su prethodne izmjene ZoGP-a (provedba Uredbe 305/2011), a NN 97/26 novi Tehnički propis za usklađeno područje.",
      source: "Zakon o izmjenama i dopunama Zakona o građevnim proizvodima (NN 48/26)"
    },
    {
      q: "Što je »izjava o svojstvima i sukladnosti« (DoPC) i na kojem se jeziku sastavlja u Republici Hrvatskoj?",
      options: [
        "Certifikat prijavljenog tijela; sastavlja se na engleskom jeziku",
        "Dokument koji prema Uredbi 2024/3110 sastavlja proizvođač umjesto dosadašnje izjave o svojstvima; prema ZoGP čl. 22.a na hrvatskom jeziku latiničnim pismom",
        "Zapisnik nadzornog inženjera o preuzimanju proizvoda; na hrvatskom jeziku",
        "Europska tehnička ocjena koju izdaje TAB; na jeziku države TAB-a"
      ],
      correct: 1,
      explanation: "Uredba 2024/3110 umjesto izjave o svojstvima (DoP) uvodi izjavu o svojstvima i sukladnosti (DoPC, čl. 13., 15. i 16., Prilog V). Prema ZoGP čl. 22.a (NN 48/26) proizvođač je sastavlja sa sadržajem na hrvatskom jeziku latiničnim pismom; dostupna je u digitalnoj putovnici proizvoda ili na internetskim stranicama.",
      source: "Uredba (EU) 2024/3110, čl. 13.–16. i Prilog V; ZoGP čl. 22.a (NN 48/26)"
    },
    {
      q: "Koji je novi sustav ocjenjivanja i provjere uveden Uredbom (EU) 2024/3110 i čemu služi?",
      options: [
        "Sustav 2 — ponovno uveden za serijske proizvode",
        "Sustav 3+ — prijavljeno tijelo validira proizvođačevo ocjenjivanje okolišne održivosti i izdaje izvješće o validaciji",
        "Sustav 5 — za proizvode iz trećih zemalja",
        "Sustav 0 — za proizvode bez bitnih značajki"
      ],
      correct: 1,
      explanation: "Prilog IX Uredbe 2024/3110 sadrži šest sustava: 1+, 1, 2+, 3+, 3 i 4. Novi sustav 3+ odnosi se na okolišnu održivost: proizvođač prikuplja podatke i modelira, a prijavljeno tijelo (tijelo za validaciju ocjenjivanja) validira ulazne vrijednosti, pretpostavke, postupak i uporabu softvera te izdaje izvješće o validaciji.",
      source: "Uredba (EU) 2024/3110, Prilog IX"
    },
    {
      q: "Kako se prema Uredbi (EU) 2024/3110 naziva dokument koji prijavljeno tijelo za certificiranje proizvoda izdaje u sustavima 1+ i 1?",
      options: [
        "Certifikat o sukladnosti kontrole tvorničke proizvodnje",
        "Izvještaj o ispitivanju",
        "Potvrda (certifikat) o stalnosti svojstava i sukladnosti proizvoda",
        "Izvješće o validaciji"
      ],
      correct: 2,
      explanation: "Nazivi prema Uredbi 2024/3110: 1+ i 1 → potvrda o stalnosti svojstava i sukladnosti proizvoda; 2+ → potvrda o sukladnosti kontrole tvorničke proizvodnje; 3+ → izvješće o validaciji; 3 → potvrda o svojstvima i sukladnosti proizvoda; 4 → nema prijavljenog tijela. ZoGP čl. 13.d iste dokumente naziva certifikatima (certifikat o stalnosti svojstava i sukladnosti proizvoda, certifikat o sukladnosti tvorničke proizvodnje, certifikat o svojstvima i sukladnosti proizvoda, izvješće o validaciji).",
      source: "Uredba (EU) 2024/3110, Prilog IX; ZoGP čl. 13.d (NN 48/26)"
    },
    {
      q: "Koja je NOVA vrsta prijavljenog tijela za koju Ministarstvo donosi rješenje prema Uredbi 2024/3110 (ZoGP čl. 13.c)?",
      options: [
        "Tijelo za validaciju ocjenjivanja (sustav 3+)",
        "Tijelo za certificiranje proizvoda",
        "Tijelo za certificiranje kontrole tvorničke proizvodnje",
        "Hrvatsko tijelo za tehničko ocjenjivanje"
      ],
      correct: 0,
      explanation: "Prema ZoGP čl. 13.c rješenje se može donijeti za ispitni laboratorij, ispitni laboratorij za bitne značajke horizontalne prirode (požar, apsorpcija buke, opasne tvari, okolišna održivost), tijelo za validaciju ocjenjivanja (novo, za sustav 3+), tijelo za certificiranje KTP i tijelo za certificiranje proizvoda.",
      source: "ZoGP čl. 13.c (NN 48/26)"
    },
    {
      q: "Koja su prema ZoGP-u »nadležna nacionalna tijela« za provedbu Uredbe (EU) 2024/3110, a koje je »tijelo za nadzor tržišta«?",
      options: [
        "Nadležna tijela: Ministarstvo i Državni inspektorat; nadzor tržišta: Državni inspektorat",
        "Nadležna tijela: HAA i HZN; nadzor tržišta: Ministarstvo",
        "Nadležna tijela: Povjerenstvo za građevne proizvode; nadzor tržišta: Carinska uprava",
        "Nadležna tijela: Europska komisija; nadzor tržišta: prijavljena tijela"
      ],
      correct: 0,
      explanation: "ZoGP čl. 3. st. 5. (NN 48/26): »nadležna nacionalna tijela« su Ministarstvo i Državni inspektorat, a »tijelo za nadzor tržišta« je Državni inspektorat. Nadležno tijelo za provedbu Uredbe i Zakona je Ministarstvo (čl. 4. st. 3.).",
      source: "ZoGP čl. 3. i 4. (NN 48/26)"
    },
    {
      q: "U provedbi Uredbe (EU) 2024/3110 Ministarstvo je, među ostalim, član:",
      options: [
        "Stalnog odbora za graditeljstvo i Vijeća EU",
        "Stručne skupine za pravnu stečevinu Uredbe o građevnim proizvodima i Odbora za građevne proizvode",
        "Koordinacijske skupine prijavljenih tijela",
        "Organizacije TAB-ova (EOTA)"
      ],
      correct: 1,
      explanation: "Prema ZoGP čl. 5. st. 2. Ministarstvo je u provedbi Uredbe 2024/3110: kontaktna točka za građevne proizvode, tijelo koje podnosi prijavu, tijelo nadležno za imenovanje TAB-a, član Stručne skupine za pravnu stečevinu Uredbe o građevnim proizvodima (čl. 4. Uredbe) i član Odbora za građevne proizvode (čl. 90. Uredbe). Stalni odbor za graditeljstvo je tijelo po Uredbi 305/2011.",
      source: "ZoGP čl. 5. st. 2. (NN 48/26)"
    },
    {
      q: "Što prema Uredbi 2024/3110 (čl. 9., Prilog IV) i ZoGP čl. 22.b mora pratiti građevni proizvod uz izjavu o svojstvima i sukladnosti?",
      options: [
        "Samo račun i otpremnica",
        "Opće informacije o proizvodu, upute za uporabu i informacije o sigurnosti, u RH na hrvatskom jeziku latiničnim pismom",
        "Hrvatska tehnička ocjena i certifikat odobrenog tijela",
        "Izvještaj o ispitivanju akreditiranog laboratorija za svaku seriju"
      ],
      correct: 1,
      explanation: "Uz proizvod se prilažu opće informacije o proizvodu, upute za uporabu i informacije o sigurnosti prema čl. 9. i Prilogu IV Uredbe 2024/3110; ZoGP čl. 22.b zahtijeva da su napisane na hrvatskom jeziku latiničnim pismom.",
      source: "Uredba (EU) 2024/3110, čl. 9. i Prilog IV; ZoGP čl. 22.b (NN 48/26)"
    },
    {
      q: "U kojem se prilogu Uredbe (EU) 2024/3110 nalaze sustavi ocjenjivanja i provjere, a u kojem izjava o svojstvima i sukladnosti?",
      options: [
        "Sustavi u Prilogu V, izjava u Prilogu III",
        "Sustavi u Prilogu IX, izjava u Prilogu V",
        "Sustavi u Prilogu I, izjava u Prilogu II",
        "Sustavi u Prilogu VII, izjava u Prilogu VIII"
      ],
      correct: 1,
      explanation: "Prilozi 2024/3110: I temeljni zahtjevi za građevine; II okolišne bitne značajke; III zahtjevi za proizvode; IV opće informacije, upute i informacije o sigurnosti; V izjava o svojstvima i sukladnosti; VI postupak za ETA/EAD; VII porodice proizvoda; VIII zahtjevi za TAB-ove; IX sustavi ocjenjivanja i provjere; X bitne značajke horizontalne prirode; XI korelacijske tablice. (U Uredbi 305/2011 sustavi su bili u Prilogu V, a izjava u Prilogu III.)",
      source: "Uredba (EU) 2024/3110, prilozi"
    },
    {
      q: "Po čemu se definicija građevnog proizvoda u Uredbi 2024/3110 razlikuje od one u Uredbi 305/2011?",
      options: [
        "Nova definicija obuhvaća samo proizvode s CE oznakom",
        "Nova definicija zahtijeva da proizvod ima europsku tehničku ocjenu",
        "Nova definicija veže se samo uz trajnu ugradnju (uključuje i 3D ispis te isporuku na gradilištu) i više ne spominje utjecaj na temeljne zahtjeve za građevinu",
        "Nema razlike, definicija je doslovno preuzeta"
      ],
      correct: 2,
      explanation: "Prema 2024/3110 građevni proizvod je svaki oblikovani ili neoblikovani fizički predmet (uključujući proizvode nastale trodimenzionalnim ispisom) ili sklop koji se stavlja na tržište, uključujući isporukom na gradilištu, za trajnu ugradnju u građevine; »trajno« znači da ostaje u građevini nakon završetka izgradnje ili obnove. Uvjet utjecaja na temeljne zahtjeve iz 305/2011 više se ne navodi.",
      source: "Uredba (EU) 2024/3110, čl. 3."
    },
    {
      q: "Kako Uredba (EU) 2024/3110 naziva osobu s poslovnim nastanom u Uniji koja ima pisano ovlaštenje proizvođača da djeluje u njegovo ime?",
      options: [
        "Ovlašteni predstavnik",
        "Ovlašteni zastupnik",
        "Pružatelj usluge provođenja narudžbi",
        "Distributer"
      ],
      correct: 1,
      explanation: "Uredba 305/2011 koristi naziv »ovlašteni predstavnik«, a Uredba 2024/3110 »ovlašteni zastupnik« — definicija je ista: fizička ili pravna osoba s poslovnim nastanom u Uniji s pisanim ovlaštenjem proizvođača za posebne zadatke. Nova Uredba u gospodarske subjekte ubraja i pružatelja usluge provođenja narudžbi. Napomena: hrvatski ZoGP i nakon izmjena NN 48/26 na jednom mjestu koristi i naziv »ovlašteni predstavnik«, pa se oba naziva u praksi rabe ravnopravno.",
      source: "Uredba (EU) 2024/3110, čl. 3."
    },
    {
      q: "Što utvrđuje Tehnički propis objavljen u NN 97/26 (rujan 2026.)?",
      options: [
        "Popis usklađenih normi i europskih dokumenata za ocjenjivanje za građevne proizvode u usklađenom području",
        "Tehnička svojstva građevnih proizvoda u neusklađenom području i popise hrvatskih normi",
        "Sadržaj digitalne putovnice proizvoda",
        "Uvjete za akreditaciju prijavljenih tijela"
      ],
      correct: 0,
      explanation: "Tehnički propis kojim se utvrđuju tehničke specifikacije i europski dokumenti za ocjenjivanje za građevne proizvode u usklađenom području (NN 97/26; objavljen 2. 9. 2026., na snazi 10. 9. 2026.; donesen na temelju Zakona o gradnji) u Prilogu 1 daje popis usklađenih normi (s datumima početka primjene i završetka razdoblja istodobnog postojanja), a u Prilogu 2 popis EAD-ova; zamijenio je stari propis NN 4/15 … 142/23. Neusklađeno područje uređuje Tehnički propis o građevnim proizvodima (NN 35/18+).",
      source: "Tehnički propis (NN 97/26), čl. 1.–3."
    },
    {
      q: "Što je prema Uredbi (EU) 2024/3110 dodatno obuhvaćeno pojmom »stavljanje na tržište«?",
      options: [
        "Svaka isporuka distributeru unutar jedne države",
        "Prvo stavljanje na raspolaganje na tržištu Unije rabljenog proizvoda nakon njegove demontaže",
        "Ugradnja proizvoda u građevinu",
        "Izlaganje proizvoda na sajmu"
      ],
      correct: 1,
      explanation: "Stavljanje na tržište (2024/3110) je prvo stavljanje na raspolaganje proizvoda na tržištu Unije ili prvo stavljanje na raspolaganje na tržištu Unije rabljenog proizvoda nakon njegove demontaže — Uredba tako uključuje ponovnu uporabu proizvoda (kružno gospodarstvo).",
      source: "Uredba (EU) 2024/3110, čl. 3."
    },
    {
      q: "Koju novu ovlast nadležnom inspektoru daje ZoGP nakon izmjena NN 48/26 za proizvode obuhvaćene Uredbom 2024/3110?",
      options: [
        "Izdavanje CE oznake proizvođaču",
        "Naložiti internetskoj platformi za trgovanje da ukloni nezakoniti sadržaj o nesukladnom proizvodu, onemogući pristup ili prikaže upozorenje krajnjim korisnicima",
        "Imenovanje TAB-a",
        "Donošenje europskog dokumenta za ocjenjivanje"
      ],
      correct: 1,
      explanation: "ZoGP čl. 61. (NN 48/26): inspektor može za proizvode obuhvaćene Uredbom 2024/3110 naložiti internetskoj platformi za trgovanje (prema Uredbi 2022/2065 o jedinstvenom tržištu digitalnih usluga) uklanjanje sadržaja o nesukladnom proizvodu, onemogućavanje pristupa ili prikaz upozorenja. Kod formalnih nesukladnosti (nema oznake, izjave, tehničke dokumentacije ili uputa) prvo nalaže korektivne mjere u primjerenom roku.",
      source: "ZoGP čl. 61. (NN 48/26)"
    },
    {
      q: "Što su »bitne značajke« građevnog proizvoda prema Uredbi (EU) 2024/3110 (čl. 3. t. 7.)?",
      options: [
        "Značajke koje se odnose na temeljne zahtjeve za građevine (Prilog I) i na unaprijed određene okolišne bitne značajke (Prilog II)",
        "Samo estetske i dimenzijske značajke proizvoda",
        "Značajke koje određuje distributer prema tržištu",
        "Isključivo reakcija na požar i mehanička otpornost"
      ],
      correct: 0,
      explanation: "Bitne značajke su značajke proizvoda koje se odnose na temeljne zahtjeve za građevine iz Priloga I te na unaprijed određene okolišne bitne značajke iz Priloga II. Prilog I izričito navodi da se temeljni zahtjevi uzimaju kao temelj za utvrđivanje bitnih značajki i pripremu tehničkih specifikacija.",
      source: "Uredba (EU) 2024/3110, čl. 3. t. 7., Prilozi I i II"
    },
    {
      q: "Prema kojim se prilozima Uredbe (EU) 2024/3110 provodi imenovanje TAB-a (ZoGP čl. 18.a)?",
      options: [
        "Prilog I (temeljni zahtjevi) i Prilog IX (sustavi)",
        "Prilog VII (područja/porodice proizvoda) i Prilog VIII (zahtjevi za TAB-ove)",
        "Prilog III (zahtjevi za proizvode) i Prilog IV (upute)",
        "Tablica 2 Priloga IV"
      ],
      correct: 1,
      explanation: "Pravna osoba podnosi zahtjev Ministarstvu za jedno ili više područja proizvoda iz Priloga VII Uredbe 2024/3110; Ministarstvo provjerava zahtjeve iz Priloga VIII i po mišljenju Povjerenstva donosi rješenje, a podatke dostavlja EK i članicama (čl. 39. Uredbe). Tablica 2 Priloga IV odnosi se na Uredbu 305/2011.",
      source: "ZoGP čl. 18.a–18.c (NN 48/26); Uredba (EU) 2024/3110, Prilozi VII i VIII"
    }
  ],
  flashcards: [
    {
      front: "Uredba (EU) 2024/3110 — datumi i što utvrđuje",
      back: "Donesena 27. 11. 2024., SL EU 18. 12. 2024., na snazi 7. 1. 2025., primjena od 8. 1. 2026. uz prijelazna razdoblja (305/2011 paralelno za stare specifikacije). Utvrđuje: usklađena tehnička pravila za GP; obveze proizvođača, uvoznika i distributera; ocjenjivanje i provjeru svojstava; izjavu o svojstvima i sukladnosti i CE oznaku; zahtjeve i postupke za prijavljena tijela i TAB-ove; EAD/ETA; digitalnu putovnicu proizvoda; pravila za održivost i okolišne karakteristike."
    },
    {
      front: "Usporedba: Uredba 305/2011 (stara) vs. Uredba 2024/3110 (nova)",
      back: "Izjava o svojstvima (DoP) → izjava o svojstvima i sukladnosti (DoPC). CE ostaje. Sustavi 1+, 1, 2+, 3, 4 → + 3+ (okolišna održivost). Nema digitalne putovnice → digitalna putovnica GP. Fokus na svojstvima → + održivost, okoliš, kružno gospodarstvo. Obveze proizvođača/uvoznika/distributera → detaljnije, + online platforme i pružatelji usluga provođenja narudžbi. EAD/ETA ostaju, uklopljeni u novi sustav. Stari hEN → nove usklađene tehničke specifikacije (nove harmonizirane norme + provedbeni akti). Prilozi: 305/2011 ima I–V, 2024/3110 ima I–XI."
    },
    {
      front: "Prilozi Uredbe (EU) 2024/3110 (I–XI)",
      back: "I temeljni zahtjevi za građevine; II unaprijed određene okolišne bitne značajke; III zahtjevi za proizvode; IV opće informacije o proizvodu, upute za uporabu i informacije o sigurnosti; V izjava o svojstvima i sukladnosti; VI postupak za zahtjeve za ETA i donošenje EAD-a; VII popis porodica proizvoda; VIII zahtjevi za TAB-ove; IX sustavi ocjenjivanja i provjere; X bitne značajke horizontalne prirode (reakcija na požar, otpornost na požar, vanjski požar, apsorpcija buke, opasne tvari, okolišna održivost); XI korelacijske tablice."
    },
    {
      front: "Sustavi ocjenjivanja i provjere po Uredbi 2024/3110 (Prilog IX) — tko što radi i koji dokument",
      back: "1+ (tijelo za certificiranje proizvoda: vrsta/kategorija, ocjenjivanje svojstava, početna inspekcija pogona i KTP, kontinuirani nadzor, revizijsko ispitivanje uzoraka, provjera tehničke dokumentacije) → potvrda o stalnosti svojstava i sukladnosti proizvoda. 1 = 1+ bez revizijskih uzoraka → ista potvrda. 2+ (proizvođač ocjenjuje svojstva; tijelo za certificiranje KTP: inspekcija i nadzor KTP) → potvrda o sukladnosti KTP. 3+ (tijelo za validaciju ocjenjivanja validira ocjenu okolišne održivosti) → izvješće o validaciji. 3 (ispitni laboratorij ocjenjuje svojstva na uzorcima proizvođača, potvrđuje vrstu/kategoriju) → potvrda o svojstvima i sukladnosti proizvoda. 4 samoprovjera i samopotvrda proizvođača → nema prijavljenog tijela. Proizvođač uvijek provodi KTP; tehničku dokumentaciju izrađuje u svim sustavima osim 3+ (u 3+ ocjenjuje svojstva prikupljanjem podataka i modeliranjem te provodi KTP)."
    },
    {
      front: "Izjava o svojstvima i sukladnosti (DoPC) — sadržaj (Prilog V Uredbe 2024/3110) i jezik u RH",
      back: "Naziv proizvođača; šifra izjave; broj i datum verzije; opis proizvoda (oznaka vrste, kategorija, deklarirane uporabe, nominalne dimenzije/granulacija, ključni dijelovi, procijenjeni prosječni i minimalni vijek uporabe, varijante, datum/mjesto posljednjeg uklanjanja ako je bio ugrađen); trajne poveznice/nosači podataka (osim ako su u digitalnoj putovnici); proizvođač, ovlašteni zastupnik, prijavljeno tijelo, TAB; upućivanje na potvrde/izvješća o validaciji; tehnički referentni dokumenti (usklađena specifikacija ili EAD/ETA); deklarirana svojstva i karakteristike održivosti (bitne značajke, svojstva, okolišna održivost tijekom životnog ciklusa, verzija softvera Komisije); primjenjivi zahtjevi za proizvode; izjave proizvođača. ZoGP čl. 22.a: na hrvatskom jeziku latiničnim pismom."
    },
    {
      front: "ZID ZoGP NN 48/26 — što je novo u odnosu na NN 118/20?",
      back: "NN 48/26 (objavljen 8. 5. 2026., na snazi 16. 5. 2026.) = postojeći sustav 305/2011 + provedba Uredbe 2024/3110. Nadležni: Ministarstvo i Državni inspektorat (DI = nadzor tržišta). Ministarstvo: kontaktna točka, tijelo za prijavljivanje, imenovanje TAB-ova, član Stručne skupine za pravnu stečevinu i Odbora za građevne proizvode. Novi postupci za prijavljena tijela (čl. 13.b–13.d) i TAB-ove (čl. 18.a–18.c); novo tijelo za validaciju ocjenjivanja; novi nazivi potvrda. Izjava o svojstvima i sukladnosti + CE na hrvatskom latinicom (čl. 22.a); opće informacije, upute za uporabu, informacije o sigurnosti (čl. 22.b). Digitalna putovnica (uz prijelazna razdoblja). Inspektor i internetske platforme; korektivne mjere za formalne nesukladnosti. Nove prekršajne odredbe, kazne u eurima. Pravilnici (NN 118/19, NN 38/24) usklađuju se u 90 dana."
    },
    {
      front: "Tko su »nadležna nacionalna tijela« i »tijelo za nadzor tržišta« za Uredbu 2024/3110 u RH?",
      back: "Nadležna nacionalna tijela = Ministarstvo (MPUGiDI — prostornoga uređenja, graditeljstva i državne imovine) i Državni inspektorat. Tijelo za nadzor tržišta = Državni inspektorat. Nadležno tijelo za provedbu Uredbe i ZoGP-a = Ministarstvo. (ZoGP čl. 3. st. 5. i čl. 4. st. 3., NN 48/26)"
    },
    {
      front: "Vrste prijavljenih tijela prema Uredbi 2024/3110 (ZoGP čl. 13.c) i dokumenti koje izdaju (čl. 13.d)",
      back: "Ispitni laboratorij → certifikat o svojstvima i sukladnosti proizvoda (sustav 3). Ispitni laboratorij za bitne značajke horizontalne prirode (reakcija/otpornost na požar, vanjski požar, apsorpcija buke, ispuštanje i sadržaj opasnih tvari, okolišna održivost) — bez upute na usklađenu specifikaciju. Tijelo za validaciju ocjenjivanja → izvješće o validaciji (3+). Tijelo za certificiranje KTP → certifikat o sukladnosti tvorničke proizvodnje (2+). Tijelo za certificiranje proizvoda → certifikat o stalnosti svojstava i sukladnosti proizvoda (1+, 1). Zahtjev prema čl. 50., zahtjevi iz čl. 46. Uredbe, dokaz = akreditacija; rješenje Ministarstva po mišljenju Povjerenstva."
    },
    {
      front: "Tehnički propis NN 97/26 — što je, kada, što je zamijenio?",
      back: "Tehnički propis kojim se utvrđuju tehničke specifikacije i europski dokumenti za ocjenjivanje za građevne proizvode u usklađenom području; objavljen 2. 9. 2026., na snazi 10. 9. 2026.; donesen na temelju Zakona o gradnji. Prilog 1 = popis usklađenih normi (s datumima početka primjene i završetka razdoblja istodobnog postojanja sa zamijenjenom normom), Prilog 2 = popis EAD-ova. Zamijenio TP NN 4/15, 24/15 … 150/22, 142/23. Za NEusklađeno područje i dalje vrijedi Tehnički propis o građevnim proizvodima (NN 35/18, 104/19, 103/24)."
    },
    {
      front: "Definicije po Uredbi 2024/3110: građevni proizvod, »trajno«, sklop, stavljanje na tržište, stavljanje na raspolaganje",
      back: "Građevni proizvod: svaki oblikovani ili neoblikovani fizički predmet (i 3D ispis) ili sklop koji se stavlja na tržište (i isporukom na gradilištu) za trajnu ugradnju u građevine ili njihove dijelove, osim predmeta koji se moraju ugraditi u sklop/drugi GP prije trajne ugradnje. Trajno = namijenjeno da ostane u građevini nakon završetka izgradnje ili obnove. Sklop: GP koji je jedan gospodarski subjekt stavio na tržište kao skup od najmanje dva odvojena predmeta (nijedan ne mora sam biti proizvod) koje treba zajedno ugraditi. Stavljanje na tržište: prvo stavljanje na raspolaganje na tržištu Unije ili prvo stavljanje na raspolaganje rabljenog proizvoda nakon demontaže. Stavljanje na raspolaganje: svaka isporuka za distribuciju ili uporabu na tržištu Unije u trgovačkoj djelatnosti, s plaćanjem ili bez, bez obzira na to je li u okviru pružanja usluge."
    },
    {
      front: "Gospodarski subjekti po Uredbi 2024/3110 — tko je sve obuhvaćen?",
      back: "Proizvođač (definicija iz Uredbe 2019/1020: proizvodi proizvod ili se za njega projektira/proizvodi i stavlja ga na tržište pod svojim imenom/znakom), ovlašteni zastupnik (prije: ovlašteni predstavnik; pisano ovlaštenje, nastan u Uniji), uvoznik, distributer (opskrbni lanac; i ponuda za prodaju, najam, obročnu otplatu, izlaganje, prodaja na daljinu), pružatelj usluge provođenja narudžbi te bilo koja druga osoba koja podliježe Uredbi u vezi s proizvodnjom, ponovnom proizvodnjom (i ponovnom uporabom) ili stavljanjem na raspolaganje — obveze i za internetske platforme."
    },
    {
      front: "Obveze proizvođača po Uredbi 2024/3110 (čl. 22.) — što je novo u odnosu na 305/2011?",
      back: "Određuje vrstu i kategoriju proizvoda; ocjenjuje svojstva u odnosu na obvezne i deklarirane bitne značajke; osigurava da je proizvod projektiran/izrađen prema zahtjevima za proizvode (Prilog III); sastavlja tehničku dokumentaciju pa izjavu o svojstvima i sukladnosti i stavlja CE; prilaže opće informacije o proizvodu, upute za uporabu i informacije o sigurnosti (Prilog IV; u RH na hrvatskom latinicom); po potrebi oznaka »samo za profesionalnu uporabu«; digitalna putovnica proizvoda (uz prijelazna razdoblja); posebni rezervni dijelovi; dokumenti i informacije na raspolaganju nadležnim tijelima u propisanom roku (čl. 20. st. 4.); kod nesukladnosti/rizika korektivne mjere, povlačenje/opoziv i obavijest Ministarstvu i Državnom inspektoratu."
    }
  ]
});
