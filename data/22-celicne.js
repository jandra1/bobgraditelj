window.APP_DATA = window.APP_DATA || [];
window.APP_DATA.push({
  id: "celicne",
  order: 11,
  title: "Uže područje struke – čelične konstrukcije",
  icon: "🌉",
  summary: [
    {
      heading: "Opseg užeg područja (ispitni popis, t. 4.2.)",
      points: [
        "Na stručnom ispitu odabire se samo JEDNO uže područje struke; ovo područje pokriva čelične konstrukcije.",
        "Traži se dobro poznavanje Tehničkog propisa za građevinske konstrukcije (NN 17/17, 75/20, 7/22) i općih pravila navedenih normi s pripadajućim nacionalnim dodacima.",
        "Norme: HRN EN 1990 (EC0 – osnove projektiranja), niz HRN EN 1991 (EC1 – djelovanja), HRN EN 1993 (EC3 – čelične konstrukcije), HRN EN 1994 (EC4 – spregnute čelično-betonske), HRN EN 1997 (EC7 – geotehničko projektiranje), HRN EN 1998 (EC8 – potresna otpornost)."
      ]
    },
    {
      heading: "Konstrukcijski čelik i oznake (EC3)",
      points: [
        "Oznaka čelika: S235, S275, S355... — S = konstrukcijski čelik (structural), broj = karakteristična granica popuštanja fy u N/mm2 za debljine do 40 mm.",
        "Granica popuštanja fy — naprezanje pri kojem počinje tečenje; vlačna čvrstoća fu — najveće naprezanje koje materijal podnosi.",
        "Modul elastičnosti čelika E = 210 000 N/mm2; gustoća čelika 7850 kg/m3 (težina 78,5 kN/m3).",
        "Čelik je duktilan i jednako nosiv na tlak i vlak, ali vitki tlačni elementi otkazuju izvijanjem prije dostizanja čvrstoće.",
        "Poprečni presjeci razvrstavaju se u 4 razreda prema otpornosti na lokalno izbočivanje: razredi 1 i 2 mogu razviti plastičnu otpornost, razred 3 elastičnu, razred 4 mjerodavno je lokalno izbočivanje."
      ]
    },
    {
      heading: "Stabilnost: izvijanje i bočno-torzijsko izvijanje",
      points: [
        "Izvijanje (fleksijsko) — gubitak stabilnosti tlačnog štapa; otpornost ovisi o vitkosti (duljini izvijanja i polumjeru tromosti) i krivuljama izvijanja.",
        "Duljina izvijanja ovisi o rubnim uvjetima štapa (zglobno, upeto, konzola).",
        "Bočno-torzijsko izvijanje — gubitak stabilnosti savijanog nosača: tlačna pojasnica se bočno izmiče uz uvrtanje presjeka; sprječava se bočnim pridržanjima tlačne pojasnice.",
        "Lokalno izbočivanje tankih limova mjerodavno je kod presjeka razreda 4 (proračun s djelotvornim presjekom).",
        "Stabilizacija konstrukcije u cjelini: vertikalni i horizontalni spregovi (vjetrovni spregovi), krute jezgre ili okviri."
      ]
    },
    {
      heading: "Spojevi: vijci i zavarivanje",
      points: [
        "Razredi čvrstoće vijaka: 4.6, 5.6, 8.8, 10.9 — prva brojka x 100 = vlačna čvrstoća fub (N/mm2), umnožak brojki x 10 = granica popuštanja fyb (npr. 8.8: fub = 800, fyb = 640 N/mm2).",
        "Vijčani spojevi rade na odrez (posmik) i pritisak po omotaču rupe ili na vlak; visokovrijedni vijci (8.8, 10.9) mogu se prednapeti za tarne spojeve.",
        "Osnovne vrste zavara: sučeoni (u punoj ili djelomičnoj penetraciji) i kutni zavar (najčešći u čeličnim konstrukcijama).",
        "Kvaliteta zavarivanja i osposobljenost zavarivača dokazuju se atestima; zavari se kontroliraju vizualno i nerazornim metodama (penetranti, magnetne čestice, ultrazvuk, radiografija).",
        "Montažni spojevi u pravilu se izvode vijcima (brža i pouzdanija montaža na gradilištu), radionički spojevi zavarivanjem."
      ]
    },
    {
      heading: "Zaštita čelika od korozije i požara",
      points: [
        "Korozijska zaštita: priprema površine (pjeskarenje/sačmarenje do propisanog stupnja čistoće), premazni sustavi, vruće pocinčavanje ili čelici otporni na atmosfersku koroziju.",
        "Izbor sustava zaštite ovisi o korozivnosti okoliša (kategorije C1–C5) i projektiranoj trajnosti zaštite.",
        "Čelik je negoriv, ali mu pri požaru čvrstoća i krutost naglo padaju (oko 500 °C gubi približno polovicu nosivosti) — zato treba požarna zaštita.",
        "Požarna zaštita čelika: protupožarni ekspandirajući premazi, obloge (protupožarne ploče), ožbukavanje ili ispuna/obetoniranje.",
        "Potrebna otpornost na požar (npr. R30–R90) određuje se prema propisima o zaštiti od požara i tehničkom propisu."
      ]
    },
    {
      heading: "Spregnute konstrukcije (EC4) i potres (EC8)",
      points: [
        "Spregnuta konstrukcija: čelični nosač + armiranobetonska ploča djeluju zajednički; vezu ostvaruju moždanici (najčešće s glavom) zavareni na pojasnicu.",
        "Spregnuti stropovi često se izvode s profiliranim limom kao izgubljenom oplatom.",
        "Prednost sprezanja: beton preuzima tlak, čelik vlak — manja visina i težina nosača.",
        "EC8 za čelične konstrukcije: duktilno ponašanje postiže se izborom razreda presjeka, kapacitetnim projektiranjem i disipativnim zonama (npr. ekscentrični spregovi).",
        "Čelične konstrukcije zbog male mase i duktilnosti u pravilu povoljno podnose potres."
      ]
    },
    {
      heading: "Materijal i proizvodi",
      points: [
        "Razredi konstrukcijskog čelika: S235, S275, S355, S460 (broj = granica popuštanja fy u N/mm2 za debljine do 40 mm; s debljinom fy pada).",
        "Oznake žilavosti: JR (27 J pri +20 °C), J0 (0 °C), J2 (−20 °C) — biraju se prema temperaturi primjene i debljini radi otpora krhkom lomu.",
        "Vruće valjani profili: IPE (vitki I — nosači), HEA/HEB/HEM (širokopojasni H — stupovi), UPE/UPN (U-profili), L-profili (kutnici).",
        "Šuplji profili (cijevi okrugle, kvadratne, pravokutne): torzijski kruti, pogodni za rešetke i stupove.",
        "Hladno oblikovani tankostijeni profili i profilirani limovi: sekundarne konstrukcije, podrožnice, obloge, spregnute ploče.",
        "Materijal se dokazuje certifikatima tvornice (npr. 3.1) — kemijski sastav i mehanička svojstva svake šarže."
      ]
    },
    {
      heading: "Proračun elemenata (EC3) — pregled",
      points: [
        "Otpornost presjeka: vlak, tlak, savijanje, posmik i njihove interakcije; ovisno o razredu presjeka plastična ili elastična raspodjela.",
        "Tlačni elementi: otpornost na izvijanje preko bezdimenzijske vitkosti i krivulja izvijanja (a0–d, prema obliku presjeka i osi).",
        "Savijani nosači: uz otpornost presjeka provjerava se bočno-torzijsko izvijanje ako tlačna pojasnica nije pridržana.",
        "Vitki limovi (razred 4): proračun s djelotvornim (reduciranim) presjekom zbog lokalnog izbočivanja.",
        "GSU kod čelika: ograničenje progiba (tipično L/250 ukupno, L/300 promjenjivo — prema projektu) i vibracija.",
        "Progib ne ovisi o razredu čelika (isti E) — kod progibom mjerodavnih nosača ne pomaže čvršći čelik, nego veći presjek/visina."
      ]
    },
    {
      heading: "Izvedba i montaža (HRN EN 1090)",
      points: [
        "Izvođač čeličnih konstrukcija mora imati certificiranu tvorničku kontrolu proizvodnje (FPC) i CE označavanje prema HRN EN 1090-1.",
        "Razred izvedbe EXC1–EXC4 određuje projektant prema posljedicama otkazivanja; s razredom rastu zahtjevi kontrole i dokumentacije.",
        "Zavarivanje: kvalificirani postupci (WPS/WPQR) i atestirani zavarivači; kontrola vizualno + NDT prema razredu izvedbe.",
        "Tolerancije izrade i montaže propisane su normom (bitne tolerancije za nosivost, funkcionalne za izgled/montažu).",
        "Plan montaže: redoslijed, privremena stabilnost (spregovi, zatege), rad na visini prema pravilima zaštite na radu.",
        "Vijci se ugrađuju s propisanim pritezanjem; prednapeti spojevi kontroliranim momentom/kutom uz baždarene ključeve."
      ]
    },
    {
      heading: "Zamor i pregledi konstrukcija",
      points: [
        "Zamor je mjerodavan kod ponavljanih opterećenja: kranske staze, mostovi, dimnjaci i jarboli (vjetar), strojarske konstrukcije.",
        "Detalji spojeva svrstavaju se u kategorije detalja (krivulje zamora); loši detalji (nagli prijelazi, zavari poprijeko na naprezanje) drastično smanjuju vijek.",
        "Priznata tehnička pravila traže redovite preglede čeličnih konstrukcija u uporabi: stanje antikorozivne zaštite, spojeva (popuštanje vijaka), deformacije i pukotine.",
        "Korozija smanjuje presjek i nosivost — pregledi i obnova zaštite dio su održavanja građevine prema Zakonu o gradnji.",
        "Kod ocjene postojećih konstrukcija: pregled, ispitivanja materijala, provjera prema važećim normama."
      ]
    }
  ],
  questions: [
    {
      q: "Što označava broj u oznaci čelika S355?",
      options: [
        "Vlačnu čvrstoću od 355 N/mm2",
        "Karakterističnu granicu popuštanja od 355 N/mm2 (za debljine do 40 mm)",
        "Modul elastičnosti od 355 kN/mm2",
        "Najveću dopuštenu temperaturu primjene od 355 °C"
      ],
      correct: 1,
      explanation: "S = konstrukcijski čelik, broj je karakteristična granica popuštanja fy u N/mm2 za manje debljine proizvoda; vlačna čvrstoća fu je veća (za S355 oko 490 N/mm2).",
      source: "HRN EN 1993 (Eurokod 3); HRN EN 10025"
    },
    {
      q: "Koliki je modul elastičnosti konstrukcijskog čelika?",
      options: ["21 000 N/mm2", "70 000 N/mm2", "210 000 N/mm2", "355 000 N/mm2"],
      correct: 2,
      explanation: "E = 210 000 N/mm2 (210 GPa) — jednak za sve razrede konstrukcijskog čelika; zato se progibi ne smanjuju izborom čvršćeg čelika.",
      source: "HRN EN 1993 (Eurokod 3)"
    },
    {
      q: "Što opisuju razredi poprečnih presjeka 1–4 u Eurokodu 3?",
      options: [
        "Kvalitetu izrade profila u radionici",
        "Otpornost presjeka na lokalno izbočivanje i sposobnost razvoja plastične otpornosti",
        "Razred korozijske zaštite presjeka",
        "Dopuštenu vitkost štapa"
      ],
      correct: 1,
      explanation: "Razredi 1 i 2 mogu razviti punu plastičnu otpornost (razred 1 i rotacijski kapacitet), razred 3 samo elastičnu, kod razreda 4 mjerodavno je lokalno izbočivanje tankih dijelova (djelotvorni presjek).",
      source: "HRN EN 1993-1-1 (Eurokod 3)"
    },
    {
      q: "Što je bočno-torzijsko izvijanje?",
      options: [
        "Gubitak stabilnosti tlačnog štapa savijanjem u ravnini",
        "Gubitak stabilnosti savijanog nosača bočnim izmicanjem tlačne pojasnice uz uvrtanje presjeka",
        "Lokalno izbočivanje hrpta nosača",
        "Slom vara na spoju nosača i stupa"
      ],
      correct: 1,
      explanation: "Kod savijanih nosača tlačna pojasnica se ponaša kao tlačni štap: bez bočnih pridržanja izmiče se bočno uz torziju presjeka. Sprječava se bočnim pridržanjima ili većom torzijskom krutosti.",
      source: "HRN EN 1993-1-1 (Eurokod 3)"
    },
    {
      q: "Kolika je granica popuštanja vijka razreda 8.8?",
      options: ["400 N/mm2", "640 N/mm2", "800 N/mm2", "1000 N/mm2"],
      correct: 1,
      explanation: "Prva brojka x 100 = vlačna čvrstoća (800 N/mm2), umnožak brojki x 10 = granica popuštanja: 8 x 8 x 10 = 640 N/mm2.",
      source: "HRN EN 1993-1-8 (Eurokod 3)"
    },
    {
      q: "Koji se vijci koriste za prednapete (tarne) spojeve?",
      options: [
        "Bilo koji vijci razreda 4.6",
        "Visokovrijedni vijci razreda 8.8 i 10.9",
        "Samo sidreni vijci",
        "Zakovice"
      ],
      correct: 1,
      explanation: "Za prednapinjanje kontroliranim momentom koriste se visokovrijedni vijci (8.8, 10.9); sila prednapinjanja ostvaruje trenje među spojenim dijelovima.",
      source: "HRN EN 1993-1-8; HRN EN 1090"
    },
    {
      q: "Koja je najčešća vrsta zavara u čeličnim konstrukcijama?",
      options: ["Sučeoni zavar pune penetracije", "Kutni zavar", "Točkasti zavar", "Čepni zavar"],
      correct: 1,
      explanation: "Kutni zavar je najjednostavniji i najčešći — ne zahtijeva posebnu pripremu rubova; sučeoni zavari koriste se gdje treba puna nosivost presjeka.",
      source: "HRN EN 1993-1-8 (Eurokod 3)"
    },
    {
      q: "Zašto čelične konstrukcije trebaju požarnu zaštitu iako je čelik negoriv?",
      options: [
        "Zbog otrovnih plinova koje čelik ispušta pri požaru",
        "Jer čvrstoća i krutost čelika naglo padaju pri visokim temperaturama",
        "Jer se čelik pri požaru pretvara u lijevano željezo",
        "Ne trebaju — čelik je potpuno otporan na požar"
      ],
      correct: 1,
      explanation: "Već oko 500 °C čelik gubi približno polovicu nosivosti, a nezaštićeni profili brzo se zagrijavaju — zato se štite ekspandirajućim premazima, oblogama ili obetoniravanjem.",
      source: "HRN EN 1993-1-2; Tehnički propis za građevinske konstrukcije"
    },
    {
      q: "O čemu ovisi izbor sustava korozijske zaštite čelika?",
      options: [
        "Samo o boji završnog premaza",
        "O kategoriji korozivnosti okoliša (C1–C5) i projektiranoj trajnosti zaštite",
        "Isključivo o debljini elemenata",
        "O godišnjem dobu montaže"
      ],
      correct: 1,
      explanation: "Okoliši se razvrstavaju od C1 (grijani interijeri) do C5 (industrija/more); prema kategoriji i traženoj trajnosti biraju se priprema površine i premazni sustav odnosno pocinčavanje.",
      source: "HRN EN ISO 12944"
    },
    {
      q: "Kako se ostvaruje zajedničko djelovanje čelika i betona u spregnutom nosaču?",
      options: [
        "Lijepljenjem betona na čelik epoksidom",
        "Moždanicima zavarenima na pojasnicu čeličnog nosača",
        "Trenjem između betona i čelika bez ikakvih spojnih sredstava",
        "Vijcima kroz betonsku ploču"
      ],
      correct: 1,
      explanation: "Moždanici (najčešće s glavom) zavareni na gornju pojasnicu prenose posmik između čeličnog nosača i AB ploče i sprječavaju odvajanje — presjek djeluje spregnuto.",
      source: "HRN EN 1994 (Eurokod 4)"
    },
    {
      q: "Zašto se montažni spojevi na gradilištu u pravilu izvode vijcima, a ne zavarivanjem?",
      options: [
        "Vijčani spojevi su uvijek nosiviji od zavarenih",
        "Zbog brže, jednostavnije i pouzdanije montaže neovisne o vremenskim uvjetima i kontroli kvalitete zavarivanja na terenu",
        "Jer je zavarivanje na gradilištu zabranjeno propisima",
        "Zbog manje mase vijaka"
      ],
      correct: 1,
      explanation: "Zavarivanje na terenu ovisi o vremenskim uvjetima, položaju zavarivanja i teže je kontrolirati; vijčani montažni spojevi brži su i pouzdaniji, a zavaruje se u radionici.",
      source: "pravila struke; HRN EN 1090"
    },
    {
      q: "Čime se stabilizira čelična hala na horizontalna djelovanja (vjetar, potres)?",
      options: [
        "Samo težinom krovnog pokrova",
        "Vertikalnim i horizontalnim spregovima, okvirima ili krutim jezgrama",
        "Debljim temeljima",
        "Povećanjem nagiba krova"
      ],
      correct: 1,
      explanation: "Horizontalne sile prenose se krovnim (horizontalnim) spregovima do vertikalnih spregova ili okvira i dalje u temelje; bez sustava stabilizacije konstrukcija je pomična.",
      source: "HRN EN 1993 (Eurokod 3)"
    },
    {
      q: "Zbog čega vitki tlačni čelični štapovi otkazuju prije dostizanja čvrstoće materijala?",
      options: [
        "Zbog zamora materijala",
        "Zbog izvijanja — gubitka stabilnosti ovisnog o vitkosti štapa",
        "Zbog korozije",
        "Zbog puzanja čelika"
      ],
      correct: 1,
      explanation: "Otpornost tlačnog štapa određuje izvijanje: što je vitkost veća (veća duljina izvijanja, manji polumjer tromosti), to je kritična sila manja od plastične otpornosti presjeka.",
      source: "HRN EN 1993-1-1 (Eurokod 3)"
    },
    {
      q: "Kojim se metodama kontrolira kvaliteta zavara?",
      options: [
        "Samo vizualnim pregledom",
        "Vizualno te nerazornim metodama: penetranti, magnetne čestice, ultrazvuk, radiografija",
        "Isključivo razaranjem uzoraka iz konstrukcije",
        "Mjerenjem tvrdoće premaza"
      ],
      correct: 1,
      explanation: "Uz obvezni vizualni pregled, prema razredu izvedbe i vrsti zavara primjenjuju se nerazorne metode (NDT): penetrantske, magnetske, ultrazvučne i radiografske kontrole.",
      source: "HRN EN 1090; HRN EN ISO 17635"
    },
    {
      q: "Što su IPE, HEA i HEB profili?",
      options: [
        "Hladno oblikovani tankostijeni profili",
        "Vruće valjani profili I odnosno H poprečnog presjeka",
        "Zavareni sandučasti profili",
        "Šuplji okrugli profili (cijevi)"
      ],
      correct: 1,
      explanation: "IPE su vitki I-profili (tipično nosači), a HEA/HEB širokopojasni H-profili (tipično stupovi); broj u oznaci je nazivna visina u mm (kod HEA približno).",
      source: "HRN EN 10365; pravila struke"
    },
    {
      q: "Što znače oznake žilavosti JR, J0 i J2 uz oznaku čelika (npr. S235JR)?",
      options: [
        "Razred korozijske otpornosti",
        "Zajamčenu udarnu žilavost od 27 J pri +20, 0 odnosno −20 °C",
        "Razred zavarljivosti",
        "Dopuštenu debljinu proizvoda"
      ],
      correct: 1,
      explanation: "JR = 27 J pri +20 °C, J0 pri 0 °C, J2 pri −20 °C — kvaliteta se bira prema temperaturi primjene, debljini i naprezanju, radi otpornosti na krhki lom.",
      source: "HRN EN 10025"
    },
    {
      q: "Koje su kategorije vijčanih spojeva opterećenih na posmik prema EC3?",
      options: [
        "Kategorije I, II i III",
        "Kategorija A (odrez/pritisak po omotaču), B (tarni za GSU) i C (tarni za GSN)",
        "Kategorije M i V",
        "Ne postoje kategorije posmičnih spojeva"
      ],
      correct: 1,
      explanation: "A: obični spojevi na odrez i pritisak po omotaču rupe; B i C: prednapeti tarni spojevi — B ne smije prokliznuti u uporabi (GSU), C ni pri graničnom opterećenju (GSN). Na vlak: kategorije D i E.",
      source: "HRN EN 1993-1-8 (Eurokod 3)"
    },
    {
      q: "Što je a-mjera kutnog zavara?",
      options: [
        "Duljina zavara",
        "Računska debljina zavara — visina trokuta upisanog u presjek zavara",
        "Širina lica zavara",
        "Dubina penetracije u osnovni materijal"
      ],
      correct: 1,
      explanation: "Nosivost kutnog zavara računa se preko a-mjere (visina upisanog jednakokračnog trokuta) i duljine zavara; a-mjera se propisuje u projektu.",
      source: "HRN EN 1993-1-8 (Eurokod 3)"
    },
    {
      q: "Što određuju razredi izvedbe EXC1–EXC4 prema HRN EN 1090?",
      options: [
        "Razred korozivnosti okoliša",
        "Zahtjeve kvalitete izvedbe čelične konstrukcije (kontrole, dokumentacija) prema posljedicama otkazivanja",
        "Kategoriju vijaka",
        "Brzinu montaže"
      ],
      correct: 1,
      explanation: "Razred izvedbe raste sa značajem konstrukcije: EXC1 (male posljedice) do EXC4 (posebne konstrukcije, npr. veliki mostovi) — s razredom rastu zahtjevi kontrole zavara i dokumentacije.",
      source: "HRN EN 1090-2"
    },
    {
      q: "Za koje je čelične konstrukcije mjerodavan proračun na zamor?",
      options: [
        "Za sve zgrade",
        "Za konstrukcije izložene čestim ponavljanim opterećenjima: kranske staze, mostovi, konstrukcije strojeva",
        "Samo za temelje",
        "Zamor se kod čelika ne pojavljuje"
      ],
      correct: 1,
      explanation: "Ponavljana naprezanja uzrokuju rast pukotina i lom ispod statičke nosivosti — mjerodavno kod kranskih staza, mostova, dimnjaka (vjetar); detalji spojeva svrstavaju se u zamorne kategorije.",
      source: "HRN EN 1993-1-9 (Eurokod 3)"
    },
    {
      q: "Kolika je duljina izvijanja štapa upetog na oba kraja, a kolika konzole?",
      options: [
        "0,5 L odnosno 2 L",
        "L u oba slučaja",
        "2 L odnosno 0,5 L",
        "0,7 L odnosno L"
      ],
      correct: 0,
      explanation: "Teorijske duljine izvijanja: zglobno-zglobno L, upeto-upeto 0,5L, upeto-zglobno 0,7L, konzola 2L — kraća duljina izvijanja znači veću otpornost na izvijanje.",
      source: "HRN EN 1993-1-1 (Eurokod 3)"
    },
    {
      q: "Koju dvostruku ulogu ima profilirani lim u spregnutoj stropnoj ploči?",
      options: [
        "Toplinske izolacije i hidroizolacije",
        "Izgubljene oplate pri betoniranju i (su)djelovanja kao vlačna armatura ploče",
        "Zvučne izolacije i požarne zaštite",
        "Nema nosivu ulogu"
      ],
      correct: 1,
      explanation: "Profilirani lim nosi svježi beton kao oplata, a nakon očvršćivanja sudjeluje kao vanjska armatura spregnute ploče (uz mehaničko ozubljenje/utore za posmičnu vezu).",
      source: "HRN EN 1994 (Eurokod 4)"
    },
    {
      q: "Zašto su zatvoreni (šuplji) presjeci povoljniji za torziju od otvorenih I-presjeka?",
      options: [
        "Jer su lakši",
        "Jer imaju višestruko veću torzijsku krutost zatvorenog toka posmičnih naprezanja",
        "Jer se lakše zavaruju",
        "Nisu povoljniji — otvoreni presjeci bolje nose torziju"
      ],
      correct: 1,
      explanation: "U zatvorenom presjeku posmična naprezanja teku po zatvorenoj konturi (Bredtova teorija) — torzijska krutost je bitno veća nego kod otvorenih tankostijenih presjeka, koji se torziji opiru pretežno vitoperenjem.",
      source: "mehanika konstrukcija; HRN EN 1993"
    },
    {
      q: "Kako se osigurava stabilnost čelične konstrukcije TIJEKOM montaže?",
      options: [
        "Stabilnost tijekom montaže nije potrebna",
        "Privremenim pridržanjima i spregovima — element se otpušta s dizalice tek kad je stabilno pridržan",
        "Većim temeljima",
        "Bržom montažom prije vjetra"
      ],
      correct: 1,
      explanation: "Djelomično montirana konstrukcija nema sve spregove pa se stabilnost osigurava privremenim ukrutama, zategama i redoslijedom montaže iz plana montaže.",
      source: "HRN EN 1090; pravila zaštite na radu"
    },
    {
      q: "Kako se kontrolira sila prednapinjanja visokovrijednih vijaka?",
      options: [
        "Odokativno, prema iskustvu montera",
        "Propisanim postupcima: moment-metodom (baždareni ključ), kombiniranom metodom ili posebnim indikatorima",
        "Vaganjem vijka prije i poslije ugradnje",
        "Prednapinjanje se ne kontrolira"
      ],
      correct: 1,
      explanation: "Sila prednapinjanja postiže se kontroliranim momentom pritezanja (baždareni ključevi), kombiniranom metodom (moment + kut) ili indikatorima sile; postupak i kontrola propisani su normom.",
      source: "HRN EN 1090-2"
    },
    {
      q: "Kako djeluje ekspandirajući (intumescentni) protupožarni premaz na čeliku?",
      options: [
        "Odbija plamen glatkom površinom",
        "Pri požaru bubri u debeli izolacijski pjenasti sloj koji usporava zagrijavanje čelika",
        "Hladi čelik isparavanjem vode",
        "Pretvara se u keramiku i nosi umjesto čelika"
      ],
      correct: 1,
      explanation: "Na povišenoj temperaturi premaz ekspandira (i do 50 puta debljine) u ugljeniziranu pjenu male toplinske vodljivosti — čelik sporije doseže kritičnu temperaturu, čime se postiže tražena otpornost (npr. R30–R60).",
      source: "pravila struke; HRN EN 13381"
    },
    {
      q: "Čemu služe podrožnice u čeličnoj hali?",
      options: [
        "Temeljenju stupova",
        "Nošenju krovnog pokrova i prijenosu opterećenja na glavne nosače; tlačnoj pojasnici često su i bočno pridržanje",
        "Odvodnji krova",
        "Samo za hodanje po krovu tijekom montaže"
      ],
      correct: 1,
      explanation: "Podrožnice premošćuju razmak glavnih nosača i nose pokrov (snijeg, vjetar); ujedno mogu bočno pridržavati pojasnicu glavnog nosača protiv bočno-torzijskog izvijanja.",
      source: "pravila struke; HRN EN 1993"
    },
    {
      q: "Kako se čelični stup spaja s temeljem?",
      options: [
        "Zavarivanjem za armaturu temelja",
        "Preko podložne ploče sa sidrenim vijcima i podlijevanjem ekspandirajućim mortom",
        "Utiskivanjem stupa u svježi beton",
        "Lijepljenjem epoksidom"
      ],
      correct: 1,
      explanation: "Podložna ploča raspodjeljuje pritisak na beton, sidreni vijci prenose vlak i posmik (zglobno ili upeto ležište), a sloj podlijevanja izravnava i osigurava puni nalijeg.",
      source: "HRN EN 1993-1-8; pravila struke"
    },
    {
      q: "Što je čelik otporan na atmosfersku koroziju (npr. S355J2W)?",
      options: [
        "Nehrđajući čelik s kromom i niklom",
        "Čelik koji stvara stabilnu zaštitnu patinu pa se može koristiti bez premaza u primjerenim uvjetima",
        "Čelik s tvorničkim plastičnim premazom",
        "Pocinčani čelik"
      ],
      correct: 1,
      explanation: "Legiranje (Cu, Cr, Ni u malim količinama) omogućuje stvaranje guste patine koja usporava daljnju koroziju — uz uvjete izmjene suhog i vlažnog te konstrukcijske detalje bez zadržavanja vode.",
      source: "HRN EN 10025-5"
    },
    {
      q: "S kojim se zazorom u pravilu buše normalne rupe za vijke?",
      options: [
        "Bez zazora — promjer rupe jednak promjeru vijka",
        "S ograničenim zazorom od 1–3 mm ovisno o promjeru vijka (npr. 2 mm za M16–M24)",
        "S 10 mm zazora radi lakše montaže",
        "Zazor je proizvoljan"
      ],
      correct: 1,
      explanation: "Nazivni zazori normalnih rupa: 1 mm (M12, M14), 2 mm (M16–M24), 3 mm (M27 i veći); veći zazori mijenjaju ponašanje spoja i posebno se uzimaju u obzir.",
      source: "HRN EN 1090-2; HRN EN 1993-1-8"
    }
  ],
  flashcards: [
    { front: "Oznaka S355 — što znači?", back: "Konstrukcijski čelik granice popuštanja fy = 355 N/mm2 (za debljine do 40 mm); fu (vlačna čvrstoća) je veća." },
    { front: "Modul elastičnosti i težina čelika?", back: "E = 210 000 N/mm2; gustoća 7850 kg/m3 (78,5 kN/m3) — jednako za sve razrede čelika." },
    { front: "Razredi poprečnih presjeka (EC3)?", back: "1 i 2: plastična otpornost (1 i rotacijski kapacitet); 3: elastična otpornost; 4: mjerodavno lokalno izbočivanje (djelotvorni presjek)." },
    { front: "Vijak 8.8 — čvrstoća i granica popuštanja?", back: "fub = 800 N/mm2 (prva brojka x 100), fyb = 640 N/mm2 (umnožak brojki x 10). Analogno 10.9: 1000/900." },
    { front: "Bočno-torzijsko izvijanje?", back: "Gubitak stabilnosti savijanog nosača: tlačna pojasnica izmiče bočno uz uvrtanje presjeka; sprječava se bočnim pridržanjima tlačne pojasnice." },
    { front: "Izvijanje tlačnog štapa — o čemu ovisi?", back: "O vitkosti: duljini izvijanja (rubni uvjeti) i polumjeru tromosti presjeka; te o krivulji izvijanja (imperfekcije)." },
    { front: "Vrste zavara?", back: "Sučeoni (puna ili djelomična penetracija) i kutni (najčešći); kontrola vizualno + NDT (penetranti, magnetske čestice, ultrazvuk, radiografija)." },
    { front: "Čelik pri požaru?", back: "Negoriv, ali oko 500 °C gubi ~pola nosivosti; zaštita: ekspandirajući premazi, protupožarne obloge, žbuka, obetoniranje." },
    { front: "Kategorije korozivnosti okoliša?", back: "C1 (grijani interijer) do C5 (industrijski/morski okoliš); prema kategoriji se bira priprema površine i sustav zaštite (premazi, pocinčavanje)." },
    { front: "Spregnuti nosač — kako radi?", back: "Čelični nosač + AB ploča spojeni moždanicima: beton preuzima tlak, čelik vlak; manja visina i težina nosača (EC4)." },
    { front: "Stabilizacija čelične hale?", back: "Horizontalni (krovni) spregovi prenose sile do vertikalnih spregova/okvira i u temelje; bez njih konstrukcija nije stabilna na vjetar i potres." },
    { front: "Montažni vs. radionički spojevi?", back: "Na gradilištu vijci (brzo, pouzdano, neovisno o vremenu); u radionici zavarivanje (kontrolirani uvjeti)." },
    { front: "Zašto čelik dobro podnosi potres?", back: "Mala masa (manje potresne sile) i velika duktilnost; EC8 traži kapacitetno projektiranje s disipativnim zonama." },
    { front: "IPE vs HEA/HEB?", back: "IPE: vitki I-profili (nosači). HEA/HEB: širokopojasni H-profili (stupovi). Broj u oznaci = nazivna visina u mm." },
    { front: "Oznake žilavosti JR / J0 / J2?", back: "Zajamčeno 27 J udarne žilavosti pri +20 / 0 / −20 °C; biraju se prema temperaturi primjene i debljini (otpor krhkom lomu)." },
    { front: "Kategorije posmičnih vijčanih spojeva?", back: "A: odrez i pritisak po omotaču; B: tarni, ne proklizava u uporabi (GSU); C: tarni, ne proklizava ni u GSN. Na vlak: D, E." },
    { front: "a-mjera kutnog zavara?", back: "Računska debljina zavara = visina trokuta upisanog u presjek zavara; nosivost = f(a-mjera, duljina zavara)." },
    { front: "Razredi izvedbe EXC1–EXC4 (EN 1090)?", back: "Zahtjevi kvalitete izvedbe prema posljedicama otkazivanja: EXC1 najblaži → EXC4 posebne konstrukcije; rastu kontrole zavara i dokumentacija." },
    { front: "Duljine izvijanja (teorijske)?", back: "Zglobno-zglobno: L; upeto-upeto: 0,5L; upeto-zglobno: 0,7L; konzola: 2L." },
    { front: "Gdje je mjerodavan zamor čelika?", back: "Ponavljana opterećenja: kranske staze, mostovi, dimnjaci (vjetar); detalji spojeva imaju zamorne kategorije (EC3-1-9)." },
    { front: "Profilirani lim u spregnutoj ploči?", back: "Dvostruka uloga: izgubljena oplata pri betoniranju + vlačna armatura očvrsnule ploče (posmična veza utorima/ozubljenjem)." },
    { front: "Torzija: zatvoreni vs otvoreni presjeci?", back: "Zatvoreni (cijevi, sanduci) imaju višestruko veću torzijsku krutost (zatvoreni tok posmika); otvoreni I-presjeci torzijski su meki." },
    { front: "Stup na temelju?", back: "Podložna ploča + sidreni vijci + podlijevanje; ploča raspodjeljuje pritisak, vijci prenose vlak/posmik (zglobno ili upeto)." },
    { front: "Stabilnost tijekom montaže?", back: "Privremena pridržanja, zatege i redoslijed montaže po planu; element se otpušta s dizalice tek kad je stabilno pridržan." },
    { front: "Intumescentni premaz?", back: "Pri požaru bubri u izolacijsku pjenu (do ~50x debljine) — usporava zagrijavanje čelika do tražene otpornosti (R30–R60...)." }
  ]
});
