window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "zgrade",
  summary: [
    {
      heading: "Geotehnički projekt (Eurokod 7)",
      points: [
        "Geotehnički projekt navodi pretpostavke, podatke, metode proračuna i rezultate provjere sigurnosti i uporabljivosti.",
        "Razina razrade varira ovisno o tipu projekta – za jednostavne projekte može biti dovoljna i jedna stranica.",
        "Sadržaj (s upućivanjem na izvještaj o istraživanju temeljnog tla): opis lokacije i okoline, opis uvjeta u temeljnom tlu, opis zadane gradnje uključujući djelovanja, proračunske vrijednosti svojstava tla i stijene.",
        "Dalje sadrži: izjave o primijenjenim pravilima i normama, izjave o prikladnosti lokacije u odnosu na zadanu gradnju i razini prihvatljivih rizika, proračune i crteže, preporuke za projektiranje temelja.",
        "Obvezno i popis svih stavaka koje će se kontrolirati tijekom građenja ili koje zahtijevaju održavanje ili praćenje ponašanja.",
        "Istraživanja temeljnog tla provode se u fazama:",
        "(1) prethodna istraživanja za postavljanje i projektiranje idejnog projekta konstrukcije",
        "(2) istraživanja za projekt",
        "(3) kontrola i praćenje ponašanja"
      ]
    },
    {
      heading: "Proboj armiranobetonske ploče (Eurokod 2, t. 6.4.3.5)",
      points: [
        "Proboj nastaje od koncentriranog opterećenja ili ležajne reakcije na razmjerno maloj površini – tipično ravne ploče izravno oslonjene na stupove.",
        "Dokaz preuzimanja probojne poprečne sile provodi se uzduž utvrđenog kritičnog presjeka; kod ploča opterećenih na proboj ne smije se povećati osnovna proračunska posmična čvrstoća.",
        "Uvjeti EC2 kada je nužan proračun na proboj: D ≤ 3,5d (kružni stup, D = promjer stupa) i u ≤ 11d (pravokutni stup, u = opseg stupa); d = statička visina ploče iznad stupa.",
        "Kritični opseg: opasuje ploštinu nanošenja opterećenja na razmaku 1,5d od stupa; ako je slobodni rub bliže od d – potrebna posebna rubna armatura duž ruba.",
        "Ako je vSd ≤ vRd1, poprečna armatura protiv proboja nije potrebna; inače treba poprečnu armaturu ili drugo osiguranje na posmik.",
        "U temeljnim pločama poprečna sila smije se umanjiti za rezultantu reaktivnog tlaka tla unutar kritičnog presjeka.",
        "Mjere osiguranja na proboj: poprečna armatura, zadebljanje ploče, vute (pojačanje vrha stupa)."
      ]
    },
    {
      heading: "Brojke iz prakse: opeka, ziđe, krovovi, temeljenje",
      points: [
        "Masa jednog komada opeke: 12 do 20 kg.",
        "Težina 1 m³ zida (ziđa): 8–11 kN/m³.",
        "Nagib krova za kupu mediteran: 22°.",
        "Nagib krova za kupu kanalicu: 30°–40°.",
        "Minimalna dubina temeljenja: 10–15 cm ispod dubine smrzavanja; u Republici Hrvatskoj dubina smrzavanja je 80–120 cm."
      ]
    },
    {
      heading: "Pravomoćna i izvršna građevinska dozvola",
      points: [
        "Pravomoćna GD – ne postoji više mogućnost ni žalbe ni upravnog spora.",
        "Izvršna GD – moguće je još pokretanje upravnog spora.",
        "Na odluku Ministarstva nikad nije moguća žalba – samo upravni spor."
      ]
    },
    {
      heading: "Zakon o zaštiti od buke",
      points: [
        "Utvrđuje mjere radi izbjegavanja, sprječavanja ili smanjivanja štetnih učinaka buke u okolišu na zdravlje ljudi, uključujući smetanje bukom.",
        "Tri ključne mjere: utvrđivanje izloženosti buci izradom karata buke (na temelju metoda za ocjenjivanje buke u okolišu), osiguravanje dostupnosti podataka o buci okoliša, izrada akcijskih planova temeljenih na podacima iz karata buke.",
        "Postavlja ograničenja i standarde razine buke za različita okruženja (stambena područja, škole, bolnice, javna mjesta).",
        "Propisuje postupke mjerenja, nadzora, evaluacije i kontrole buke te kazne za nepoštivanje.",
        "Dopuštene razine detaljnije uređuje Pravilnik o najvišim dopuštenim razinama buke s obzirom na vrstu izvora buke, vrijeme i mjesto nastanka."
      ]
    },
    {
      heading: "ISO 9836:2015 – proračun površina i prostora",
      points: [
        "Međunarodna norma koja definira postupke za proračun površina i prostora u zgradama.",
        "Daje smjernice za izračun ukupne prostorne površine, korisne površine, neto korisne površine i bruto površine.",
        "Sadrži definicije i preporučene metode mjerenja različitih površina i prostora u zgradama.",
        "Namijenjena projektantima, inženjerima i arhitektima radi usklađivanja s međunarodnim standardima proračuna površina."
      ]
    }
  ],
  questions: [
    {
      q: "Što geotehnički projekt prema Eurokodu 7 mora navesti?",
      exam: true,
      options: [
        "Pretpostavke, podatke, metode proračuna i rezultate provjere sigurnosti i uporabljivosti",
        "Samo rezultate laboratorijskih ispitivanja uzoraka tla",
        "Isključivo troškovnik zemljanih radova i temelja",
        "Izjavu o svojstvima ugrađenih građevnih proizvoda"
      ],
      correct: 0,
      explanation: "Geotehnički projekt navodi pretpostavke, podatke, metode proračuna i rezultate provjere sigurnosti i uporabljivosti, uz upućivanje na izvještaj o istraživanju temeljnog tla.",
      source: "Eurokod 7 (HRN EN 1997-1) – geotehnički projekt."
    },
    {
      q: "Kolika je razina razrade geotehničkog projekta?",
      options: [
        "Uvijek jednaka, neovisno o vrsti građevine",
        "Varira ovisno o tipu projekta – za jednostavne projekte može biti dovoljna i jedna stranica",
        "Najmanje 20 stranica proračuna za svaku građevinu",
        "Određuje ju nadzorni inženjer nakon početka građenja"
      ],
      correct: 1,
      explanation: "Razina razrade geotehničkog projekta varira ovisno o tipu projekta; za jednostavne projekte moguće je da je dovoljna jedna stranica.",
      source: "Eurokod 7 (HRN EN 1997-1) – geotehnički projekt."
    },
    {
      q: "Na koji se dokument geotehnički projekt upućuje u svojim stavkama?",
      options: [
        "Na građevinsku dozvolu",
        "Na elaborat zaštite od požara",
        "Na izvještaj o istraživanju temeljnog tla",
        "Na završno izvješće nadzornog inženjera"
      ],
      correct: 2,
      explanation: "Stavke geotehničkog projekta navode se s upućivanjem na izvještaj o istraživanju temeljnog tla.",
      source: "Eurokod 7 (HRN EN 1997-1) – geotehnički projekt."
    },
    {
      q: "Koja od navedenih stavki NIJE sadržaj geotehničkog projekta?",
      options: [
        "Opis uvjeta u temeljnom tlu",
        "Proračunske vrijednosti svojstava tla i stijene",
        "Preporuke za projektiranje temelja",
        "Izjava izvođača o izvedenim radovima"
      ],
      correct: 3,
      explanation: "Geotehnički projekt sadrži opis lokacije i okoline, opis uvjeta u tlu, opis zadane gradnje s djelovanjima, proračunske vrijednosti svojstava tla i stijene, izjave o pravilima i normama, izjave o prikladnosti lokacije, proračune i crteže te preporuke za temelje – ne i izjavu izvođača.",
      source: "Eurokod 7 (HRN EN 1997-1) – geotehnički projekt."
    },
    {
      q: "Što geotehnički projekt mora sadržavati u vezi s fazom građenja i uporabe?",
      options: [
        "Popis svih stavaka koje će se kontrolirati tijekom građenja ili koje zahtijevaju održavanje ili praćenje ponašanja",
        "Dinamički plan izvođenja zemljanih radova po tjednima",
        "Popis strojeva za iskop i zbijanje",
        "Program pokusnog rada građevine"
      ],
      correct: 0,
      explanation: "Jedna od obveznih stavki geotehničkog projekta jest popis svih stavaka koje će se kontrolirati tijekom građenja ili koje zahtijevaju održavanje ili praćenje ponašanja.",
      source: "Eurokod 7 (HRN EN 1997-1) – geotehnički projekt."
    },
    {
      q: "U koje se faze dijele istraživanja temeljnog tla?",
      options: [
        "Terenska i laboratorijska",
        "Prethodna istraživanja (za idejni projekt), istraživanja za projekt te kontrola i praćenje ponašanja",
        "Geološka, hidrogeološka i seizmička",
        "Istraživanja prije i nakon tehničkog pregleda"
      ],
      correct: 1,
      explanation: "Istraživanja temeljnog tla provode se u fazama: prethodna istraživanja za postavljanje i projektiranje idejnog projekta konstrukcije, istraživanja za projekt te kontrola i praćenje ponašanja.",
      source: "Eurokod 7 (HRN EN 1997-1) – istraživanja temeljnog tla."
    },
    {
      q: "Čemu služe prethodna istraživanja temeljnog tla?",
      options: [
        "Izradi projekta izvedenog stanja",
        "Kontroli kvalitete ugrađenog betona u temeljima",
        "Postavljanju i projektiranju idejnog projekta konstrukcije",
        "Izradi izjave o svojstvima geosintetika"
      ],
      correct: 2,
      explanation: "Prethodna istraživanja provode se za postavljanje i projektiranje idejnog projekta konstrukcije; slijede istraživanja za projekt te kontrola i praćenje ponašanja.",
      source: "Eurokod 7 (HRN EN 1997-1) – istraživanja temeljnog tla."
    },
    {
      q: "Zašto se istraživanja temeljnog tla provode u fazama?",
      options: [
        "Zbog ograničenja trajanja geotehničkih radova na 30 dana",
        "Jer se prve faze plaćaju iz proračuna, a ostale plaća investitor",
        "Jer nadzorni inženjer mora odobriti svaku fazu posebno",
        "Ovisno o problemima uočenim tijekom planiranja, proračuna i građenja projekta"
      ],
      correct: 3,
      explanation: "Istraživanja temeljnog tla potrebno je provoditi u fazama, ovisno o problemima koji su uočeni tijekom planiranja, proračuna i građenja projekta.",
      source: "Eurokod 7 (HRN EN 1997-1) – istraživanja temeljnog tla."
    },
    {
      q: "U kojem poglavlju Eurokoda 2 propisane su metode za procjenu otpornosti armiranog betona na proboj?",
      exam: true,
      options: [
        "6.4.3.5",
        "4.4.1",
        "7.3.2",
        "9.2.1"
      ],
      correct: 0,
      explanation: "Eurokod EC2 u poglavlju 6.4.3.5 propisuje metode za procjenu otpora armiranog betona na proboj.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4.3.5."
    },
    {
      q: "Od čega može nastati proboj armiranobetonske ploče?",
      exam: true,
      options: [
        "Od jednoliko raspodijeljenog opterećenja po cijeloj ploči",
        "Od koncentriranog opterećenja ili ležajne reakcije koja djeluje na razmjerno maloj površini, npr. kod ravnih ploča izravno oslonjenih na stupove",
        "Od skupljanja betona tijekom njege",
        "Od temperaturnih razlika između gornje i donje strane ploče"
      ],
      correct: 1,
      explanation: "Proboj nastaje od koncentriranog opterećenja ili ležajne reakcije na razmjerno maloj površini, tipično kod ravnih ploča koje su direktno oslonjene na stupove.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Prema Eurokodu 2, koji uvjet za kružni stup određuje da je nužan proračun na proboj?",
      exam: true,
      options: [
        "D ≤ 1,5d",
        "D ≤ 11d",
        "D ≤ 3,5d",
        "D ≥ 3,5d"
      ],
      correct: 2,
      explanation: "Eurokod 2 daje uvjet D ≤ 3,5d za kružni stup, gdje je D promjer stupa, a d statička visina ploče iznad stupa.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Prema Eurokodu 2, koji uvjet za pravokutni stup određuje da je nužan proračun na proboj?",
      exam: true,
      options: [
        "u ≤ 3,5d",
        "u ≤ 1,5d",
        "u ≥ 11d",
        "u ≤ 11d"
      ],
      correct: 3,
      explanation: "Za pravokutni stup vrijedi uvjet u ≤ 11d, gdje je u opseg stupa, a d statička visina ploče iznad stupa.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Što označava veličina d u uvjetima za proboj (D ≤ 3,5d, u ≤ 11d)?",
      exam: true,
      options: [
        "Statičku visinu ploče iznad stupa",
        "Promjer stupa",
        "Ukupnu debljinu ploče uključujući zaštitni sloj",
        "Razmak između stupova"
      ],
      correct: 0,
      explanation: "d je statička visina ploče iznad stupa; D je promjer stupa, a u opseg stupa.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Na kojem se razmaku od stupa nalazi kritični opseg pri proračunu na proboj (ploština opterećenja nije uz slobodni rub)?",
      exam: true,
      options: [
        "0,5d",
        "1,5d",
        "2,0d",
        "3,5d"
      ],
      correct: 1,
      explanation: "Kritični opseg za kružnu ili pravokutnu ploštinu nanošenja opterećenja određen je kao opseg koji opasuje tu ploštinu na razmaku od 1,5d od stupa.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Što je potrebno kada je pri proračunu na proboj udaljenost od stupa do slobodnog ruba ploče manja od d?",
      exam: true,
      options: [
        "Ništa posebno – rub se zanemaruje",
        "Smanjenje statičke visine ploče",
        "Posebna rubna armatura duž slobodnog ruba",
        "Obvezno zadebljanje cijele ploče"
      ],
      correct: 2,
      explanation: "Ako je u blizini slobodni rub, uzima se u obzir; ako je udaljenost manja od d, potrebna je posebna rubna armatura duž tog ruba.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Kada prema Eurokodu 2 nije potreban proračun poprečne armature protiv proboja?",
      exam: true,
      options: [
        "Kada je debljina ploče veća od 20 cm",
        "Kada je stup kružnog presjeka",
        "Kada je ploča temeljna",
        "Kada je vSd ≤ vRd1"
      ],
      correct: 3,
      explanation: "Kada je vSd ≤ vRd1 nije potreban proračun poprečne armature protiv proboja; u suprotnom treba predvidjeti poprečnu armaturu ili drugo osiguranje na posmik.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Koje su mjere za osiguranje ploče na proboj?",
      exam: true,
      options: [
        "Poprečna armatura, zadebljanje ploče, vute",
        "Povećanje razreda izloženosti betona",
        "Smanjenje razmaka stupova i dodavanje serklaža",
        "Prednapinjanje ploče i povećanje zaštitnog sloja"
      ],
      correct: 0,
      explanation: "Mjere za osiguranje na proboj su poprečna armatura, zadebljanje ploče i vute; alternativno pojačanje vrha stupa ili drugo osiguranje za djelovanje poprečnih sila.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Kako se pri dokazu na proboj tretira poprečna sila u temeljnim pločama?",
      exam: true,
      options: [
        "Uvećava se za 50 % zbog nejednolikog tlaka tla",
        "Dopušteno ju je umanjiti za vrijednost rezultante reaktivnog tlaka tla unutar kritičnog presjeka",
        "Zanemaruje se jer temelji ne mogu probiti",
        "Preuzima se isključivo pilotima"
      ],
      correct: 1,
      explanation: "U temeljnim pločama dopušteno je poprečnu silu umanjiti za vrijednost rezultante reaktivnog tlaka tla unutar kritičnog presjeka.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Što vrijedi za osnovnu proračunsku posmičnu čvrstoću kod ploča opterećenih na proboj?",
      exam: true,
      options: [
        "Može se povećati do 30 % ako je ploča debela",
        "Povećava se ovisno o razredu betona",
        "Ne smije se povećati",
        "Uzima se dvostruka vrijednost za temeljne ploče"
      ],
      correct: 2,
      explanation: "Kod ploča opterećenih na proboj ne smije se povećati osnovna proračunska posmična čvrstoća.",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Uzduž čega se provodi dokaz preuzimanja probojne poprečne sile?",
      options: [
        "Uzduž osi stupa",
        "Uzduž ruba ploče",
        "Uzduž glavne armature ploče",
        "Uzduž utvrđenog kritičnog presjeka"
      ],
      correct: 3,
      explanation: "Dokaz preuzimanja probojne poprečne sile provodi se uzduž utvrđenoga kritičnog presjeka (kritični opseg na 1,5d od stupa).",
      source: "HRN EN 1992-1-1 (Eurokod 2), t. 6.4."
    },
    {
      q: "Kolika je masa jednog komada opeke?",
      options: [
        "12 do 20 kg",
        "3 do 5 kg",
        "25 do 30 kg",
        "1 do 2 kg"
      ],
      correct: 0,
      explanation: "Prema skripti, jedan komad opeke ima masu 12 do 20 kg.",
      source: "Skripta – uže područje struke: zgrade (specifična težina opeke, ziđa)."
    },
    {
      q: "Kolika je težina 1 m³ zida (ziđa)?",
      exam: true,
      options: [
        "25 kN/m³",
        "8–11 kN/m³",
        "2–4 kN/m³",
        "15–18 kN/m³"
      ],
      correct: 1,
      explanation: "Težina m³ zida iznosi 8–11 kN/m³ (usporedbe radi, armirani beton je znatno teži).",
      source: "Skripta – uže područje struke: zgrade (specifična težina opeke, ziđa)."
    },
    {
      q: "Koliki je nagib krova za kupu mediteran?",
      options: [
        "12°",
        "45°",
        "22°",
        "35°"
      ],
      correct: 2,
      explanation: "Nagib krova za kupu mediteran iznosi 22°.",
      source: "Skripta – uže područje struke: zgrade (nagib kupe mediteran)."
    },
    {
      q: "Koliki je nagib krova za kupu kanalicu?",
      options: [
        "15°–20°",
        "22°",
        "45°–60°",
        "30°–40°"
      ],
      correct: 3,
      explanation: "Nagib krova za kupu kanalicu iznosi 30°–40° (za razliku od kupe mediteran, 22°).",
      source: "Skripta – uže područje struke: zgrade (nagib kupa kanalice)."
    },
    {
      q: "Što znači da je građevinska dozvola pravomoćna?",
      exam: true,
      options: [
        "Ne postoji više mogućnost ni žalbe ni upravnog spora",
        "Protiv nje se još može uložiti žalba Ministarstvu",
        "Moguće je pokretanje upravnog spora, ali ne i žalbe",
        "Dozvola je objavljena na elektroničkoj oglasnoj ploči"
      ],
      correct: 0,
      explanation: "Pravomoćna građevinska dozvola je ona protiv koje ne postoji mogućnost žalbe ni upravnog spora.",
      source: "Skripta – uže područje struke: zgrade (pravomoćna, izvršna GD)."
    },
    {
      q: "Što znači da je građevinska dozvola izvršna?",
      exam: true,
      options: [
        "Da su svi pravni lijekovi iscrpljeni",
        "Da je moguće još pokretanje upravnog spora",
        "Da je istekao rok njezina važenja",
        "Da je investitor prijavio početak građenja"
      ],
      correct: 1,
      explanation: "Kod izvršne građevinske dozvole još je moguće pokretanje upravnog spora, dok pravomoćna isključuje i žalbu i upravni spor.",
      source: "Skripta – uže područje struke: zgrade (pravomoćna, izvršna GD)."
    },
    {
      q: "Koji je pravni lijek moguć protiv odluke Ministarstva u postupku izdavanja dozvole?",
      options: [
        "Žalba višem upravnom tijelu",
        "Žalba i upravni spor",
        "Samo upravni spor – žalba nikad nije moguća",
        "Nikakav – odluka Ministarstva je konačna"
      ],
      correct: 2,
      explanation: "Na odluku Ministarstva nikad nije moguća žalba, moguć je samo upravni spor.",
      source: "Skripta – uže područje struke: zgrade (pravomoćna, izvršna GD)."
    },
    {
      q: "Kako se određuje minimalna dubina temeljenja?",
      options: [
        "Najmanje 50 cm ispod razine terena",
        "Najmanje jedna širina temelja ispod terena",
        "Do razine podzemne vode",
        "10–15 cm ispod dubine smrzavanja"
      ],
      correct: 3,
      explanation: "Minimalna dubina temeljenja je 10–15 cm ispod dubine smrzavanja; u Republici Hrvatskoj dubina smrzavanja je 80–120 cm.",
      source: "Skripta – uže područje struke: zgrade (minimalna dubina temeljenja)."
    },
    {
      q: "Kolika je dubina smrzavanja tla u Republici Hrvatskoj mjerodavna za dubinu temeljenja?",
      options: [
        "80 cm do 120 cm",
        "30 cm do 50 cm",
        "150 cm do 200 cm",
        "10 cm do 15 cm"
      ],
      correct: 0,
      explanation: "U Republici Hrvatskoj dubina smrzavanja iznosi 80 do 120 cm, a temelji se postavljaju 10–15 cm ispod nje.",
      source: "Skripta – uže područje struke: zgrade (minimalna dubina temeljenja)."
    },
    {
      q: "Koje mjere osobito utvrđuje Zakon o zaštiti od buke?",
      options: [
        "Obvezu ugradnje zvučne izolacije u sve nove zgrade i ispitivanje fasada",
        "Izradu karata buke, dostupnost podataka o buci okoliša i izradu akcijskih planova",
        "Certificiranje mjernih instrumenata i akreditaciju laboratorija",
        "Ograničenje radnog vremena gradilišta na 8 sati dnevno"
      ],
      correct: 1,
      explanation: "Zakon o zaštiti od buke utvrđuje osobito: utvrđivanje izloženosti buci izradom karata buke, osiguravanje dostupnosti podataka o buci okoliša te izradu akcijskih planova temeljenih na podacima iz karata buke.",
      source: "Zakon o zaštiti od buke."
    },
    {
      q: "Na čemu se temelje akcijski planovi prema Zakonu o zaštiti od buke?",
      options: [
        "Na pritužbama građana",
        "Na inspekcijskim zapisnicima",
        "Na podacima korištenim u izradi karata buke",
        "Na energetskim certifikatima zgrada"
      ],
      correct: 2,
      explanation: "Akcijski planovi izrađuju se na temelju podataka korištenih u izradi karata buke.",
      source: "Zakon o zaštiti od buke."
    },
    {
      q: "Što uređuje norma ISO 9836:2015?",
      options: [
        "Razrede reakcije na požar građevnih proizvoda",
        "Upravljanje kvalitetom u projektnim organizacijama",
        "Toplinsku zaštitu i uštedu energije u zgradama",
        "Postupke za proračun površina i prostora u zgradama"
      ],
      correct: 3,
      explanation: "ISO 9836:2015 je međunarodna norma koja definira postupke za proračun površina i prostora u zgradama te metode mjerenja.",
      source: "ISO 9836:2015 – Definiranje i proračun površina i prostora."
    },
    {
      q: "Koje površine zgrade definira norma ISO 9836:2015?",
      options: [
        "Ukupnu prostornu površinu, korisnu površinu, neto korisnu površinu i bruto površinu",
        "Samo građevinsku (bruto) površinu zgrade",
        "Površinu građevne čestice i koeficijent izgrađenosti",
        "Površinu ovojnice zgrade i faktor oblika"
      ],
      correct: 0,
      explanation: "Norma pruža smjernice za izračun ukupne prostorne površine, korisne površine, neto korisne površine i bruto površine te definicije i metode mjerenja.",
      source: "ISO 9836:2015 – Definiranje i proračun površina i prostora."
    },
    {
      q: "Za koja okruženja Zakon o zaštiti od buke postavlja ograničenja i standarde razine buke?",
      options: [
        "Samo za industrijske zone",
        "Za stambena područja, škole, bolnice i javna mjesta",
        "Samo za gradilišta i prometnice",
        "Samo za zgrade javne namjene"
      ],
      correct: 1,
      explanation: "Zakon postavlja ograničenja i standarde razine buke u različitim okruženjima kao što su stambena područja, škole, bolnice i javna mjesta, te propisuje mjerenje, nadzor, kontrolu i kazne.",
      source: "Zakon o zaštiti od buke."
    },
    {
      q: "Kako se prema Zakonu o zaštiti od buke utvrđuje izloženost buci?",
      options: [
        "Anketiranjem stanovnika",
        "Kontinuiranim mjerenjem na svakoj građevini",
        "Izradom karata buke na temelju metoda za ocjenjivanje buke u okolišu",
        "Procjenom projektanta u glavnom projektu"
      ],
      correct: 2,
      explanation: "Izloženost buci utvrđuje se tako da se izrađuju karte buke na temelju metoda za ocjenjivanje buke u okolišu.",
      source: "Zakon o zaštiti od buke."
    },
    {
      q: "Kako se zove pravilnik kojim su propisane najviše dopuštene razine buke?",
      options: [
        "Pravilnik o zaštiti od buke na radnom mjestu",
        "Pravilnik o akustičnim svojstvima zgrada",
        "Pravilnik o kartama buke i akcijskim planovima",
        "Pravilnik o najvišim dopuštenim razinama buke s obzirom na vrstu izvora buke, vrijeme i mjesto nastanka"
      ],
      correct: 3,
      explanation: "Podjela buke prema zonama uređena je Pravilnikom o najvišim dopuštenim razinama buke s obzirom na vrstu izvora buke, vrijeme i mjesto nastanka.",
      source: "Pravilnik o najvišim dopuštenim razinama buke s obzirom na vrstu izvora buke, vrijeme i mjesto nastanka."
    },
    {
      q: "Što je cilj Zakona o zaštiti od buke?",
      options: [
        "Osigurati kvalitetu života građana i zaštititi ih od negativnih učinaka buke na zdravlje",
        "Ograničiti promet u središtima gradova",
        "Propisati zvučnu izolaciju pregradnih zidova",
        "Urediti akreditaciju laboratorija za mjerenje buke"
      ],
      correct: 0,
      explanation: "Cilj Zakona je osigurati kvalitetu života građana i zaštititi ih od negativnih učinaka buke na njihovo zdravlje i dobrobit.",
      source: "Zakon o zaštiti od buke."
    }
  ],
  flashcards: [
    { front: "Što navodi geotehnički projekt?", back: "Pretpostavke, podatke, metode proračuna i rezultate provjere sigurnosti i uporabljivosti. Razina razrade ovisi o tipu projekta – za jednostavne projekte može biti dovoljna jedna stranica. Stavke se navode s upućivanjem na izvještaj o istraživanju temeljnog tla (Eurokod 7)." },
    { front: "Nabroji sadržaj geotehničkog projekta.", back: "Opis lokacije i okoline; opis uvjeta u temeljnom tlu; opis zadane gradnje uključujući djelovanja; proračunske vrijednosti svojstava tla i stijene; izjave o primijenjenim pravilima i normama; izjave o prikladnosti lokacije i razini prihvatljivih rizika; proračuni i crteži; preporuke za projektiranje temelja; popis stavaka koje se kontroliraju tijekom građenja ili zahtijevaju održavanje/praćenje ponašanja." },
    { front: "U kojim se fazama provode istraživanja temeljnog tla?", back: "1) prethodna istraživanja – za postavljanje i projektiranje idejnog projekta konstrukcije; 2) istraživanja za projekt; 3) kontrola i praćenje ponašanja. Provode se u fazama ovisno o problemima uočenim tijekom planiranja, proračuna i građenja." },
    { front: "Što je proboj armiranobetonske ploče i kada nastaje?", exam: true, back: "Lom ploče od koncentriranog opterećenja ili ležajne reakcije na razmjerno maloj površini – npr. ravne ploče izravno oslonjene na stupove. Metode procjene otpornosti na proboj daje Eurokod 2, poglavlje 6.4.3.5." },
    { front: "Koja dva uvjeta Eurokod 2 daje za nužnost proračuna na proboj?", exam: true, back: "D ≤ 3,5d za kružni stup (D = promjer stupa) i u ≤ 11d za pravokutni stup (u = opseg stupa); d = statička visina ploče iznad stupa." },
    { front: "Gdje je kritični opseg (presjek) pri proračunu na proboj?", exam: true, back: "Opseg koji opasuje ploštinu nanošenja opterećenja na razmaku 1,5d od stupa. Ako je u blizini slobodni rub, uzima se u obzir; ako je udaljenost do ruba manja od d, potrebna je posebna rubna armatura duž ruba." },
    { front: "Kada nije potrebna poprečna armatura protiv proboja?", back: "Kada je vSd ≤ vRd1. Ako je dokazano suprotno, treba predvidjeti poprečnu armaturu ili drugo osiguranje na posmik (pojačanje vrha stupa i sl.)." },
    { front: "Koje su mjere osiguranja ploče na proboj?", exam: true, back: "Poprečna armatura, zadebljanje ploče, vute (pojačanje vrha stupa). Kad debljina ploče ili temelja nije dovoljna, valja predvidjeti neku od tih mjera." },
    { front: "Posebnosti dokaza na proboj kod temeljnih ploča?", exam: true, back: "Dopušteno je poprečnu silu umanjiti za vrijednost rezultante reaktivnog tlaka tla unutar kritičnog presjeka. Kod ploča opterećenih na proboj ne smije se povećati osnovna proračunska posmična čvrstoća." },
    { front: "Uzduž čega se provodi dokaz preuzimanja probojne poprečne sile?", back: "Uzduž utvrđenoga kritičnog presjeka (kritični opseg na 1,5d od stupa)." },
    { front: "Specifična težina opeke i ziđa?", exam: true, back: "Jedan komad opeke: 12 do 20 kg. Težina 1 m³ zida: 8–11 kN/m³." },
    { front: "Nagib krova za kupu mediteran?", back: "22°." },
    { front: "Nagib krova za kupu kanalicu?", back: "30°–40°." },
    { front: "Razlika pravomoćne i izvršne građevinske dozvole?", exam: true, back: "Pravomoćna – ne postoji mogućnost ni žalbe ni upravnog spora. Izvršna – moguće je još pokretanje upravnog spora." },
    { front: "Je li moguća žalba na odluku Ministarstva?", back: "Ne – na odluku Ministarstva nikad nije moguća žalba, moguć je samo upravni spor." },
    { front: "Minimalna dubina temeljenja?", back: "10–15 cm ispod dubine smrzavanja. U Republici Hrvatskoj dubina smrzavanja iznosi 80 cm do 120 cm." },
    { front: "Što uređuje Zakon o zaštiti od buke?", back: "Mjere za izbjegavanje, sprječavanje ili smanjivanje štetnih učinaka buke u okolišu na zdravlje ljudi (uključujući smetanje bukom), osobito: utvrđivanje izloženosti buci izradom karata buke, osiguravanje dostupnosti podataka o buci okoliša i izradu akcijskih planova na temelju podataka iz karata buke." },
    { front: "Koje tri ključne mjere propisuje Zakon o zaštiti od buke?", back: "1) karte buke (utvrđivanje izloženosti buci metodama za ocjenjivanje buke u okolišu); 2) dostupnost podataka o buci okoliša; 3) akcijski planovi temeljeni na podacima iz karata buke." },
    { front: "Što još propisuje Zakon o zaštiti od buke osim karata buke i akcijskih planova?", back: "Ograničenja i standarde razine buke za različita okruženja (stambena područja, škole, bolnice, javna mjesta), postupke mjerenja, nadzora, evaluacije i kontrole buke te kazne za nepoštivanje. Cilj: kvaliteta života i zaštita zdravlja građana." },
    { front: "Kojim je pravilnikom uređena podjela buke prema zonama?", back: "Pravilnikom o najvišim dopuštenim razinama buke s obzirom na vrstu izvora buke, vrijeme i mjesto nastanka." },
    { front: "Što je ISO 9836:2015?", back: "Međunarodna norma koja definira postupke za proračun površina i prostora u zgradama: ukupna prostorna površina, korisna površina, neto korisna površina i bruto površina, uz definicije i preporučene metode mjerenja." },
    { front: "Kome je namijenjena norma ISO 9836:2015 i zašto?", back: "Projektantima, inženjerima, arhitektima i drugim stručnjacima u planiranju, projektiranju i izgradnji zgrada – radi usklađivanja s međunarodnim standardima i postupcima proračuna površina i prostora." },
    { front: "Što označavaju D, u i d u uvjetima proboja prema EC2?", back: "D – promjer (kružnog) stupa; u – opseg (pravokutnog) stupa; d – statička visina ploče iznad stupa." },
    { front: "Što se u geotehničkom projektu izjavljuje o lokaciji?", back: "Izjava o prikladnosti lokacije u odnosu na zadanu gradnju i o razini prihvatljivih rizika, te izjava o primijenjenim pravilima i normama." }
  ]
});
