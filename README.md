# Bob Graditelj — priprema za stručni ispit (građevinarstvo)

Aplikacija za pripremu stručnog ispita za poslove sudionika u gradnji (VSS, građevinarstvo), izrađena prema službenom popisu važeće građevno-tehničke regulative (u mapi `materijali/`).

## Pokretanje

Dvoklik na **`index.html`** — otvara se u pregledniku, ne treba instalacija ni internet (internet treba samo za fontove, bez njega radi s rezervnim fontom).

## Što aplikacija ima

- **Kviz** — pitanja s 4 ponuđena odgovora po područjima; svaki odgovor odmah dobije objašnjenje i izvor (zakon + članak). Može se filtrirati na "samo pogrešna / neodgovorena".
- **Simulacija ispita** — 30 nasumičnih pitanja iz svih područja.
- **Kartice (flashcards)** — Leitnerov sustav ponavljanja: kartica koju znaš vraća se rjeđe (1 → 3 → 7 dana), koju ne znaš vraća se na početak.
- **Sažeci** — ključne odredbe svakog područja za brzo ponavljanje.
- **Napredak** — sprema se lokalno u pregledniku (localStorage); briše se čišćenjem podataka preglednika.

## Struktura

```
index.html        — cijela aplikacija (HTML + CSS + JS)
data/01-08*.js    — osnovna baza pitanja, kartica i sažetaka po područjima (iz tekstova propisa)
data/11-20*.js    — dopune generirane iz skripte za stručni ispit (01/2026); spajaju se s područjem po `id`
materijali/       — službeni ispitni popis regulative (PDF) i skripta (DOCX)
```

## Dodavanje / izmjena pitanja

Pitanja su obične JavaScript datoteke u `data/`. Svako pitanje izgleda ovako:

```js
{
  q: "Tekst pitanja?",
  options: ["A", "B", "C", "D"],
  correct: 0,                        // indeks točnog odgovora (0-3)
  explanation: "Zašto je to točno.",
  source: "Zakon o gradnji, čl. 49."
}
```

Dodaš pitanje u polje `questions` (ili karticu u `flashcards`) i osvježiš stranicu.

Više datoteka može puniti isto područje — dovoljno je da objekt ima isti `id` (npr. `id: "gradnja"`); pitanja i kartice se nadovezuju redoslijedom `<script>` tagova u `index.html`. Novo područje treba `id`, `order`, `title` i `icon`.

Pitanje/kartica može imati `freq: 2` (★★ vrlo često na ispitu) ili `freq: 1` (★ često) — oznake učestalosti preuzete iz skripte (zeleno/crveno označeni odlomci); prikazuju se kao značka u kvizu i na karticama.

> **Napomena:** pitanja su generirana kao pomoć pri učenju na temelju tekstova propisa — nisu službena ispitna pitanja. Za konačnu provjeru uvijek vrijedi tekst propisa u Narodnim novinama.
