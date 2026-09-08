window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "elektro",
  order: 15,
  title: "Uže područje struke – postrojenja i instalacije u industriji i zgradarstvu",
  icon: "⚡",
  summary: [
    {
      heading: "Opseg i ključni propisi",
      points: [
        "Uže područje za elektrotehničku struku: niskonaponske instalacije, elektroenergetska postrojenja, zaštita od munje, rad s električnom energijom.",
        "Tehnički propis za niskonaponske električne instalacije (NN 5/10) s nizom normi HRN HD 60364.",
        "Tehnički propis za sustave zaštite od djelovanja munje na građevinama (NN 87/08, 33/10) s normama HRN EN 62305.",
        "Pravilnik o sigurnosti i zdravlju pri radu s električnom energijom (NN 88/12) — temeljni ZNR propis za elektrotehniku.",
        "Pravilnik o tehničkim zahtjevima za elektroenergetska postrojenja nazivnih izmjeničnih napona iznad 1 kV (NN 105/10).",
        "Pravilnik o temeljnim zahtjevima za zaštitu od požara elektroenergetskih postrojenja i uređaja (NN 146/05).",
        "Zakon o zaštiti od elektromagnetskih polja s Pravilnikom o zaštiti od elektromagnetskih polja (NN 146/14, 31/19); Pravilnik o elektromagnetskoj kompatibilnosti (NN 28/16, 88/19).",
        "Zakon o energiji, Zakon o regulaciji energetskih djelatnosti (HERA) i Zakon o tržištu električne energije."
      ]
    },
    {
      heading: "Niskonaponske instalacije — projektiranje i ispitivanja",
      points: [
        "Niski napon: izmjenični do 1000 V (AC) odnosno istosmjerni do 1500 V (DC).",
        "Dopušteni pad napona (od priključka na javnu NN mrežu): 3% za rasvjetu, 5% za ostala trošila; kod napajanja iz vlastite trafostanice dopušta se više (6% odnosno 8%).",
        "Na pad napona utječu duljina i presjek voda, materijal vodiča, opterećenje (struja) i faktor snage; presjek kabela dimenzionira se prema trajno dopuštenoj struji, padu napona i uvjetima kratkog spoja.",
        "Ispitivanja NN instalacije: vizualni pregled pa mjerenja — neprekinutost zaštitnih vodiča, otpor izolacije, impedancija petlje kvara (automatski isklop), djelovanje RCD-a, otpor uzemljenja.",
        "Instalacije na mjestima rada periodički se ispituju najmanje jednom u četiri godine (ZNR propisi o ispitivanju instalacija).",
        "Dopušteni napon dodira: 50 V AC / 120 V DC; prema Pravilniku za postrojenja iznad 1 kV: 125 V AC unutar TS, 65 V AC izvan TS.",
        "Najdulje vrijeme isklopa zaštite u TN sustavu (230 V): 0,4 s za krajnje strujne krugove do 32 A, 5 s za razdjelne krugove."
      ]
    },
    {
      heading: "Sustavi uzemljenja i zaštita od kvara",
      points: [
        "Oznake sustava: PRVO slovo = odnos izvora prema zemlji (T = izravno uzemljeno zvjezdište, I = izolirano/preko impedancije); DRUGO slovo = odnos izloženih vodljivih dijelova prema zemlji (T = vlastito uzemljenje, N = spoj na uzemljeno zvjezdište izvora).",
        "TN sustav: zvjezdište je uzemljeno na NN strani transformatora; podsustavi TN-S (odvojeni N i PE), TN-C (zajednički PEN) i TN-C-S.",
        "U TN-C sustavu RCD (FID) sklopka NE može se koristiti — PEN vodič objedinjuje radnu i zaštitnu funkciju; u TN-S može i koristi se kao dopunska zaštita.",
        "RCD (FID) sklopka mjeri razliku struje faznog i neutralnog vodiča (diferencijsku struju); za dopunsku zaštitu od izravnog dodira nazivne diferencijske struje ≤ 30 mA.",
        "Zaštita od izravnog dodira: izolacija dijelova pod naponom, pregrade i kućišta (IP zaštita), prepreke, postavljanje izvan dohvata ruke + dopunski RCD ≤ 30 mA.",
        "IP oznaka: prva znamenka = zaštita od krutih tijela i dodira, druga znamenka = zaštita od vode.",
        "Elektrokorozija: razaranje metala (uzemljivača, cjevovoda, armature) djelovanjem istosmjernih lutajućih struja ili galvanskih parova različitih metala u tlu/elektrolitu."
      ]
    },
    {
      heading: "Zaštita od munje (LPS)",
      points: [
        "Sustav zaštite od munje projektira se na temelju PROCJENE RIZIKA prema HRN EN 62305-2 — ne automatski prema visini ili namjeni.",
        "Razine zaštite (LPS): četiri razine, I do IV (I najstroža).",
        "Gromobranska zaštita nije potrebna kada procjena rizika pokaže da je rizik manji od prihvatljivoga; za solarne elektrane zaštita se određuje istom procjenom rizika (u pravilu je potrebna).",
        "Dijelovi vanjskog LPS-a: hvataljke (prihvatni sustav), odvodi i uzemljivač; unutarnja zaštita: izjednačenje potencijala i odvodnici prenapona (SPD).",
        "Mjerni spoj: rastavljivo spojno mjesto odvoda i uzemljivača za mjerenje otpora uzemljenja; materijal se bira otporan na koroziju i pazi se na elektrokemijsku (galvansku) koroziju spoja različitih metala."
      ]
    },
    {
      heading: "Rad s električnom energijom (ZNR za elektrotehniku)",
      points: [
        "Tri načina (režima) rada u odnosu na naponsko stanje: rad u BEZNAPONSKOM stanju, rad U BLIZINI napona i rad POD NAPONOM.",
        "Rad pod naponom u Hrvatskoj JE dopušten — propisan je pravilnikom (od 2010./2012.), uz posebno osposobljavanje i ovlaštenje za određenu naponsku razinu.",
        "PET pravila sigurnosti (za rad u beznaponskom stanju): 1) isklopiti i vidljivo odvojiti od napona, 2) spriječiti ponovni uklop, 3) utvrditi beznaponsko stanje, 4) uzemljiti i kratko spojiti, 5) ograditi se od dijelova koji su ostali pod naponom.",
        "Oko neizoliranih dijelova pod naponom razlikuju se zona rada pod naponom (unutarnja) i zona približavanja (vanjska); rad unutar tih zona dopušten je samo uz propisane mjere.",
        "Ubija STRUJA (koja prolazi kroz tijelo), ali se ograničava napon jer struja kroz tijelo ovisi o naponu i otporu tijela (Ohmov zakon) — zato propisi ograničavaju napon dodira.",
        "Prostori ugroženi eksplozivnom atmosferom: zone 0/1/2 (plinovi i pare) i 20/21/22 (prašine); poslodavac izrađuje Ex dokument (dokument o zaštiti od eksplozije), oprema mora biti u Ex izvedbi za odgovarajuću zonu."
      ]
    },
    {
      heading: "Postrojenja, prenaponi, EMC i sigurnosna rasvjeta",
      points: [
        "Koordinacija izolacije: usklađivanje izolacijske čvrstoće opreme s očekivanim prenaponima u mreži i s primijenjenim zaštitnim uređajima (odvodnicima prenapona).",
        "Prenapon: privremeni (pogonski), sklopni i atmosferski (udar munje).",
        "Elektromagnetska kompatibilnost (EMC): sposobnost uređaja da ispravno radi u svojem elektromagnetskom okruženju, a da pritom sam ne stvara nedopuštene smetnje drugim uređajima.",
        "Nužna rasvjeta: rasvjeta koja se napaja iz neovisnog izvora i radi pri nestanku mrežnog napajanja; protupanična (sigurnosna evakuacijska) rasvjeta dio je nužne — osvjetljava evakuacijske putove s najmanje 1 lx.",
        "Načini napajanja protupanične rasvjete: pojedinačne svjetiljke s vlastitom baterijom ili centralni baterijski sustav (odnosno agregat); razlika je u mjestu izvora i održavanju.",
        "Elaborat zaštite od požara bitan je elektroprojektantu jer definira nužnu/protupaničnu rasvjetu, napajanje sigurnosnih sustava, odvođenje dima i požarne sektore kroz koje prolaze instalacije."
      ]
    },
    {
      heading: "Uža područja struke za elektrotehniku",
      points: [
        "Na ispitu se odabire SAMO JEDNO uže područje struke. Za elektrotehniku su to: 1) postrojenja u elektroprivredi, 2) postrojenja i instalacije u industriji, zgradarstvu, prometu i dr. (OVO područje), 3) oprema i instalacije u prostorima ugroženim od eksplozivne atmosfere, 4) elektroničke komunikacije (radijske komunikacije i telekomunikacije), 5) mjerenje, upravljanje i nadzor industrijskih procesa.",
        "Zaštitu od požara elektroenergetskih postrojenja i uređaja uređuje poseban pravilnik (NN 146/05) — uz opće ZOP propise."
      ]
    }
  ],
  questions: [
    {
      q: "Koliki je dopušteni pad napona za rasvjetu, a koliki za ostala trošila kod napajanja iz javne niskonaponske mreže?",
      exam: true,
      options: [
        "1% za rasvjetu i 3% za ostala trošila",
        "3% za rasvjetu i 5% za ostala trošila",
        "5% za rasvjetu i 3% za ostala trošila",
        "10% za sva trošila"
      ],
      correct: 1,
      explanation: "Od priključka na javnu NN mrežu dopušta se pad napona 3% za rasvjetu i 5% za ostala trošila; kod napajanja iz vlastite trafostanice dopušta se više (6% odnosno 8%).",
      source: "Tehnički propis za NN električne instalacije; HRN HD 60364-5-52"
    },
    {
      q: "Što označava prvo, a što drugo slovo u oznaci TN sustava?",
      exam: true,
      options: [
        "Prvo slovo vrstu transformatora, drugo broj vodiča",
        "Prvo slovo odnos izvora prema zemlji, drugo odnos izloženih vodljivih dijelova instalacije prema zemlji",
        "Prvo slovo naponsku razinu, drugo vrstu zaštite",
        "Prvo slovo vrstu uzemljivača, drugo materijal vodiča"
      ],
      correct: 1,
      explanation: "T (terra) = izravno uzemljeno zvjezdište izvora; N = izloženi vodljivi dijelovi spojeni na uzemljeno zvjezdište preko zaštitnog vodiča. Podsustavi su TN-S, TN-C i TN-C-S.",
      source: "HRN HD 60364-1"
    },
    {
      q: "Gdje je uzemljena neutralna točka (zvjezdište) u TN sustavu?",
      exam: true,
      options: [
        "Na visokonaponskoj strani transformatora",
        "Na zvjezdištu niskonaponske strane transformatora",
        "U glavnom razdjelnom ormaru građevine",
        "Na svakom trošilu posebno"
      ],
      correct: 1,
      explanation: "Zvjezdište NN strane distribucijskog transformatora izravno je uzemljeno, a izloženi vodljivi dijelovi instalacije vezani su na njega zaštitnim vodičem.",
      source: "HRN HD 60364-1"
    },
    {
      q: "Može li se RCD (FID) sklopka koristiti u TN-C sustavu?",
      exam: true,
      options: [
        "Da, bez ograničenja",
        "Da, ali samo za rasvjetne krugove",
        "Ne, jer zajednički PEN vodič objedinjuje radnu i zaštitnu funkciju pa RCD ne može ispravno djelovati",
        "Ne, jer je u TN-C sustavu napon previsok"
      ],
      correct: 2,
      explanation: "RCD mjeri diferencijsku struju između faznih i neutralnog vodiča. U TN-C sustavu PEN vodič je i zaštitni i neutralni, pa se RCD ne smije primijeniti — potrebno je prijeći na TN-S (razdvojiti PE i N).",
      source: "HRN HD 60364-4-41"
    },
    {
      q: "Koja je najveća dopuštena vrijednost napona dodira prema propisima o sigurnosti pri radu s električnom energijom?",
      exam: true,
      options: [
        "24 V AC / 60 V DC",
        "50 V AC / 120 V DC",
        "65 V AC / 125 V DC",
        "110 V AC / 230 V DC"
      ],
      correct: 1,
      explanation: "Opća granica je 50 V izmjeničnog i 120 V istosmjernog napona. Za postrojenja iznad 1 kV vrijede posebne vrijednosti: 125 V AC unutar TS i 65 V AC izvan TS.",
      source: "Pravilnik o sigurnosti i zdravlju pri radu s el. energijom"
    },
    {
      q: "Koliko iznosi najdulje dopušteno vrijeme isklopa zaštite za krajnje strujne krugove do 32 A u TN sustavu (230 V)?",
      exam: true,
      options: ["0,1 s", "0,4 s", "1 s", "5 s"],
      correct: 1,
      explanation: "Za krajnje krugove do 32 A vrijedi 0,4 s, a za razdjelne krugove dopušteno je do 5 s.",
      source: "HRN HD 60364-4-41"
    },
    {
      q: "Kako radi RCD (FID) sklopka?",
      exam: true,
      options: [
        "Mjeri temperaturu vodiča i isklapa kod pregrijanja",
        "Uspoređuje struju faznih i neutralnog vodiča te isklapa kada razlika (diferencijska struja) prijeđe nazivnu vrijednost",
        "Mjeri napon prema zemlji i isklapa kod prenapona",
        "Ograničava struju kratkog spoja taljenjem umetka"
      ],
      correct: 1,
      explanation: "Zbroj struja kroz RCD u ispravnom stanju je nula; struja kvara koja 'pobjegne' prema zemlji stvara razliku koju sklopka detektira. Za dopunsku zaštitu od dodira koristi se RCD ≤ 30 mA.",
      source: "HRN HD 60364-4-41"
    },
    {
      q: "Na temelju čega se određuje je li za građevinu potreban sustav zaštite od djelovanja munje?",
      exam: true,
      options: [
        "Prema visini građevine — obvezan je za sve građevine više od 15 m",
        "Prema procjeni rizika prema HRN EN 62305-2",
        "Prema odluci jedinice lokalne samouprave",
        "Obvezan je za sve građevine bez iznimke"
      ],
      correct: 1,
      explanation: "Tehnički propis upućuje na procjenu rizika (HRN EN 62305-2): zaštita nije potrebna ako je izračunani rizik manji od prihvatljivoga. Isto vrijedi i za solarne elektrane, gdje je zaštita u pravilu potrebna.",
      source: "TP za sustave zaštite od djelovanja munje; HRN EN 62305"
    },
    {
      q: "Koliko razina zaštite od munje (LPS) postoji?",
      exam: true,
      options: ["2", "3", "4", "6"],
      correct: 2,
      explanation: "Četiri razine, I–IV; razina I je najstroža (najgušći prihvatni sustav i odvodi).",
      source: "HRN EN 62305-3"
    },
    {
      q: "Čemu služi mjerni spoj kod gromobranske instalacije?",
      exam: true,
      options: [
        "Za priključak trošila na instalaciju",
        "Kao rastavljivo mjesto na kojem se odvod odvaja od uzemljivača radi mjerenja otpora uzemljenja",
        "Za spajanje dva različita uzemljivača",
        "Za izjednačenje potencijala metalnih masa u kupaonici"
      ],
      correct: 1,
      explanation: "Mjerni spoj omogućuje odvajanje odvoda od uzemljivača i mjerenje otpora rasprostiranja. Materijal spoja bira se otporan na koroziju, uz pažnju na galvansku koroziju spoja različitih metala.",
      source: "HRN EN 62305-3"
    },
    {
      q: "Što je elektrokorozija?",
      exam: true,
      options: [
        "Korozija metala uzrokovana kiselim kišama",
        "Razaranje metala djelovanjem istosmjernih lutajućih struja ili galvanskih parova različitih metala u tlu",
        "Trošenje izolacije vodiča zbog zagrijavanja",
        "Oštećenje kontakata zbog iskrenja pri isklopu"
      ],
      correct: 1,
      explanation: "Lutajuće istosmjerne struje (npr. iz elektrificirane pruge) ili galvanski članak dvaju različitih metala u vlažnom tlu razaraju metal na mjestu gdje struja izlazi iz njega — ugroženi su uzemljivači, cjevovodi i armatura.",
      source: "Osnove elektrotehnike / TP za NN instalacije"
    },
    {
      q: "Koja tri načina (režima) rada razlikujemo pri radu s električnom energijom u odnosu na naponsko stanje?",
      exam: true,
      options: [
        "Rad danju, rad noću i rad vikendom",
        "Rad u beznaponskom stanju, rad u blizini napona i rad pod naponom",
        "Rad na niskom, srednjem i visokom naponu",
        "Ručni, strojni i daljinski rad"
      ],
      correct: 1,
      explanation: "Pravilnik o sigurnosti i zdravlju pri radu s električnom energijom razlikuje upravo ta tri načina rada, sa zasebnim propisanim mjerama za svaki.",
      source: "Pravilnik o sigurnosti i zdravlju pri radu s el. energijom (NN 88/12)"
    },
    {
      q: "Je li rad pod naponom u Hrvatskoj dopušten?",
      exam: true,
      options: [
        "Ne, strogo je zabranjen",
        "Da, ali samo na instalacijama do 50 V",
        "Da — propisan je pravilnikom, uz posebno osposobljavanje i ovlaštenje za određenu naponsku razinu",
        "Dopušten je samo vatrogascima u intervenciji"
      ],
      correct: 2,
      explanation: "Rad pod naponom je dopušten i uređen pravilnikom (od 2010./2012.) — radnik mora biti posebno osposobljen i imati ovlaštenje za rad pod naponom na određenoj naponskoj razini.",
      source: "Pravilnik o sigurnosti i zdravlju pri radu s el. energijom"
    },
    {
      q: "Kojih je pet pravila sigurnosti pri radu u beznaponskom stanju (ispravnim redoslijedom)?",
      exam: true,
      options: [
        "Uzemljiti, isklopiti, ispitati, ograditi, spriječiti uklop",
        "Isklopiti i vidljivo odvojiti; spriječiti ponovni uklop; utvrditi beznaponsko stanje; uzemljiti i kratko spojiti; ograditi se od dijelova pod naponom",
        "Obavijestiti nadređenog; isklopiti; pričekati 5 minuta; ispitati; raditi",
        "Isklopiti; ispitati; raditi; uzemljiti; uklopiti"
      ],
      correct: 1,
      explanation: "Pet pravila vrijedi za rad u beznaponskom stanju. Prvo pravilo je isklopiti i vidljivo odvojiti mjesto rada od svih mogućih izvora napajanja.",
      source: "Pravilnik o sigurnosti i zdravlju pri radu s el. energijom"
    },
    {
      q: "Što ubija — struja ili napon, i zašto onda propisi ograničavaju napon?",
      exam: true,
      options: [
        "Napon; struja je bezopasna",
        "Struja kroz tijelo; napon se ograničava jer struja kroz tijelo ovisi o naponu i otporu tijela",
        "Oboje jednako, pa se ograničava snaga",
        "Frekvencija; zato se koristi istosmjerna struja"
      ],
      correct: 1,
      explanation: "Fiziološki djeluje struja kroz tijelo, ali po Ohmovom zakonu ona je određena naponom dodira i otporom tijela — ograničavanjem napona dodira (50 V AC) ograničava se i struja.",
      source: "Osnove zaštite od električnog udara"
    },
    {
      q: "Što je koordinacija izolacije?",
      exam: true,
      options: [
        "Bojanje vodiča različitim bojama radi raspoznavanja",
        "Usklađivanje izolacijske čvrstoće opreme s očekivanim prenaponima u mreži i primijenjenim zaštitnim uređajima (odvodnicima prenapona)",
        "Postavljanje dvostruke izolacije na sve kabele",
        "Mjerenje otpora izolacije jednom godišnje"
      ],
      correct: 1,
      explanation: "Cilj je da se preskok/proboj, ako do njega dođe, dogodi na predvidljivom, zaštićenom mjestu (odvodnik prenapona), a ne na opremi. Prenaponi mogu biti privremeni, sklopni i atmosferski.",
      source: "HRN EN 60071"
    },
    {
      q: "Što je elektromagnetska kompatibilnost (EMC)?",
      exam: true,
      options: [
        "Sposobnost uređaja da radi na svim naponima",
        "Sposobnost uređaja da ispravno radi u svojem elektromagnetskom okruženju, a da sam ne stvara nedopuštene smetnje drugima",
        "Zaštita ljudi od elektromagnetskog zračenja",
        "Kompatibilnost utikača i utičnica različitih zemalja"
      ],
      correct: 1,
      explanation: "EMC ima dvije strane: otpornost na smetnje iz okoline i ograničenje vlastitih emisija. Zaštita LJUDI od EM polja uređena je posebnim zakonom i pravilnikom (to nije EMC).",
      source: "Pravilnik o elektromagnetskoj kompatibilnosti"
    },
    {
      q: "Koja je razlika između nužne i protupanične rasvjete i koliko je najmanje osvjetljenje evakuacijskog puta?",
      exam: true,
      options: [
        "Isto su; osvjetljenje mora biti 50 lx",
        "Nužna rasvjeta radi pri nestanku mrežnog napajanja, a protupanična je njezin dio koji osvjetljava evakuacijske putove s najmanje 1 lx",
        "Protupanična je jača od nužne; treba 500 lx",
        "Nužna je vanjska, protupanična unutarnja rasvjeta"
      ],
      correct: 1,
      explanation: "Protupanična (sigurnosna evakuacijska) rasvjeta napaja se iz vlastitih baterija u svjetiljkama ili iz centralnog baterijskog sustava/agregata i mora osigurati najmanje 1 lx na evakuacijskom putu.",
      source: "HRN EN 1838; TP za NN električne instalacije"
    },
    {
      q: "Koje zone opasnosti razlikujemo u prostorima ugroženima eksplozivnom atmosferom plinova i para?",
      exam: true,
      options: [
        "Zone A, B i C",
        "Zone 0, 1 i 2",
        "Zone 10, 20 i 30",
        "Samo jednu Ex zonu"
      ],
      correct: 1,
      explanation: "Za plinove i pare: zona 0 (eksplozivna atmosfera trajno ili dugotrajno), zona 1 (povremeno u normalnom radu), zona 2 (rijetko i kratkotrajno). Za prašine vrijede zone 20/21/22. Poslodavac izrađuje Ex dokument, a oprema mora biti u odgovarajućoj Ex izvedbi.",
      source: "Pravilnici o protueksplozijskoj zaštiti (ATEX)"
    },
    {
      q: "Koja se ispitivanja provode na niskonaponskoj električnoj instalaciji prije predaje u uporabu?",
      exam: true,
      options: [
        "Samo mjerenje napona na utičnicama",
        "Vizualni pregled te mjerenja: neprekinutost zaštitnih vodiča, otpor izolacije, impedancija petlje kvara, djelovanje RCD-a i otpor uzemljenja",
        "Samo termovizijsko snimanje razdjelnika",
        "Tlačna proba i vodonepropusnost"
      ],
      correct: 1,
      explanation: "Redoslijed je: pregled, pa ispitivanja i mjerenja s izdavanjem izvještaja. Na mjestima rada instalacije se periodički ispituju najmanje jednom u četiri godine.",
      source: "HRN HD 60364-6; TP za NN električne instalacije"
    },
    {
      q: "Koliko užih područja struke postoji za elektrotehniku i koliko ih kandidat polaže?",
      exam: true,
      options: [
        "Tri; polažu se sva tri",
        "Pet (postrojenja u elektroprivredi; postrojenja i instalacije u industriji i zgradarstvu; Ex oprema i instalacije; elektroničke komunikacije; mjerenje, upravljanje i nadzor); polaže se samo jedno",
        "Dva; polaže se jedno po izboru ispitivača",
        "Pet; polažu se najmanje dva"
      ],
      correct: 1,
      explanation: "Kandidat odabire samo jedno uže područje prema svojem smjeru: elektroenergetski smjerovi biraju 4.1–4.3, elektroničke komunikacije 4.4, a računarski/automatizacijski smjerovi 4.5.",
      source: "Popis važeće građevno-tehničke regulative za strukovno područje elektrotehnike"
    },
    {
      q: "Koji propis uređuje temeljne zahtjeve za zaštitu od požara elektroenergetskih postrojenja i uređaja?",
      exam: true,
      options: [
        "Zakon o zaštiti od požara — nema posebnog propisa",
        "Poseban Pravilnik o temeljnim zahtjevima za zaštitu od požara elektroenergetskih postrojenja i uređaja (NN 146/05)",
        "Tehnički propis za niskonaponske električne instalacije",
        "Pravilnik o hidrantskoj mreži"
      ],
      correct: 1,
      explanation: "Uz opće ZOP propise, za elektroenergetska postrojenja i uređaje (transformatorske stanice, rasklopna postrojenja...) vrijedi poseban pravilnik NN 146/05.",
      source: "Pravilnik NN 146/05"
    }
  ],
  flashcards: [
    { front: "Dopušteni pad napona iz javne NN mreže?", exam: true, back: "3% za rasvjetu, 5% za ostala trošila (iz vlastite TS: 6% odnosno 8%)." },
    { front: "Što znače slova u oznaci TN-S sustava?", exam: true, back: "T = uzemljeno zvjezdište izvora; N = izloženi dijelovi spojeni na zvjezdište zaštitnim vodičem; S = odvojeni N i PE vodiči (C = zajednički PEN)." },
    { front: "Smije li RCD u TN-C sustav?", exam: true, back: "Ne — PEN vodič objedinjuje radnu i zaštitnu funkciju pa RCD ne može ispravno djelovati; treba TN-S." },
    { front: "Dopušteni napon dodira?", exam: true, back: "50 V AC / 120 V DC; u postrojenjima iznad 1 kV: 125 V AC u TS, 65 V AC izvan TS." },
    { front: "Vrijeme isklopa zaštite u TN sustavu (230 V)?", exam: true, back: "0,4 s za krajnje krugove do 32 A; 5 s za razdjelne krugove." },
    { front: "Pet pravila sigurnosti (beznaponsko stanje)?", exam: true, back: "1. isklopiti i vidljivo odvojiti, 2. spriječiti ponovni uklop, 3. utvrditi beznaponsko stanje, 4. uzemljiti i kratko spojiti, 5. ograditi se od dijelova pod naponom." },
    { front: "Tri načina rada s el. energijom?", exam: true, back: "U beznaponskom stanju, u blizini napona i pod naponom (pod naponom dopušteno uz osposobljenost i ovlaštenje)." },
    { front: "Kada gromobranska zaštita NIJE potrebna?", exam: true, back: "Kad procjena rizika (HRN EN 62305-2) pokaže rizik manji od prihvatljivoga; razine zaštite LPS I–IV." },
    { front: "Čemu služi mjerni spoj gromobrana?", exam: true, back: "Rastavljivo mjesto odvod–uzemljivač za mjerenje otpora uzemljenja; materijal otporan na koroziju (paziti na galvansku koroziju)." },
    { front: "Što je elektrokorozija?", exam: true, back: "Razaranje metala u tlu istosmjernim lutajućim strujama ili galvanskim parom različitih metala (ugroženi uzemljivači, cjevovodi)." },
    { front: "Koordinacija izolacije?", exam: true, back: "Usklađivanje izolacijske čvrstoće opreme s očekivanim prenaponima i zaštitnim uređajima (odvodnici prenapona)." },
    { front: "Nužna vs. protupanična rasvjeta?", exam: true, back: "Nužna radi pri nestanku mreže; protupanična je njezin dio za evakuacijske putove, min. 1 lx; napajanje: baterija u svjetiljci ili centralni baterijski sustav." },
    { front: "Ex zone za plinove i prašine?", exam: true, back: "Plinovi/pare: 0, 1, 2; prašine: 20, 21, 22. Poslodavac izrađuje Ex dokument o zaštiti od eksplozije." },
    { front: "Ispitivanja NN instalacije?", exam: true, back: "Pregled + mjerenja: neprekinutost PE vodiča, otpor izolacije, impedancija petlje, RCD, uzemljenje; na mjestima rada najmanje svake 4 godine." },
    { front: "Što ubija — struja ili napon?", exam: true, back: "Struja kroz tijelo; napon se ograničava (50 V AC) jer o njemu i otporu tijela ovisi struja (Ohmov zakon)." },
    { front: "IP oznaka — što znače znamenke?", back: "Prva: zaštita od krutih tijela i dodira; druga: zaštita od vode (npr. IP54)." },
    { front: "Uža područja struke za elektrotehniku?", exam: true, back: "Pet ih je: postrojenja u elektroprivredi; postrojenja i instalacije u industriji/zgradarstvu; Ex oprema; elektroničke komunikacije; mjerenje, upravljanje i nadzor. Polaže se SAMO JEDNO." },
    { front: "ZOP elektroenergetskih postrojenja — koji propis?", exam: true, back: "Pravilnik o temeljnim zahtjevima za zaštitu od požara elektroenergetskih postrojenja i uređaja (NN 146/05)." }
  ]
});
