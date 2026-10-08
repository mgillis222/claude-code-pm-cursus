# Review: Realtime samenwerken (feature-spec-realtime-collab.md)

*Gezamenlijke review van drie sub-agents: Engineer, Executive en User Researcher.*

## Waar alle drie het over eens zijn
- **De fasevolgorde klopt niet.** Conflictoplossing (fase 3) kan niet los van tekst-sync (fase 2). En "niet overschrijven" is juist het grootste pijnpunt.
- **Offline en herverbinden horen bij de kern.** Ze staan nu bij de open vragen, maar juist daar gaat werk (en vertrouwen) verloren.
- **De succesmetrics zijn alleen technisch.** Voeg uitkomsten voor de gebruiker en het bedrijf toe.

---

## (@_@) Engineer: technische haalbaarheid
**Haalbaar**, met bestaande bibliotheken (Yjs/Automerge voor CRDT, ShareDB voor OT). Zelf bouwen is een groot risico.

**Lastigste punten**
- Kies OT of CRDT vóór fase 2 en voeg fase 2 en 3 samen (~6–8 weken).
- Mobiel in 2 weken is onrealistisch: reken op 4–6 weken, of begin met de mobiele web-versie.
- Offline-wachtrij en reconnect zijn kernvereisten.
- Bestaand documentmodel: is migratie naar het CRDT-formaat nodig? Hoe werken snapshots en opslag?

**Prestaties**
- 500 ms is haalbaar binnen één regio; leg vast of dat p90 is en of het van eind tot eind gemeten wordt.
- Begrens cursorupdates (~10–20 per seconde); WebSockets op meerdere servers hebben Redis pub/sub of sticky sessions nodig.
- "<5% conflicten" is niet goed meetbaar; meet liever verloren of onverwachte bewerkingen.

**Open technische vragen**
1. CRDT of OT? Zelf bouwen of een dienst kopen (Liveblocks, Ably)?
2. Wat gebeurt er bij de 11e gebruiker?
3. Hoe gedetailleerd moet de bewerkingsgeschiedenis zijn (per teken, per sessie, per versie)?
4. Hoe werken rechten en authenticatie op de WebSocket, en hoe trek je toegang in tijdens een sessie?

---

## (ಠ_ಠ) Executive: bedrijfswaarde en framing
**Grootste gat:** de spec legt uit *wat* er gebouwd wordt, maar niet *waarom* het bedrijf erin moet investeren.

- **Voeg een Business Impact-sectie toe:** retentie, uitbreiding van teamaccounts, deals die verloren gingen door het ontbreken van co-editing.
- **Positionering:** is dit "inhalen" (table stakes) of "onderscheidend"? Die keuze bepaalt hoeveel scope verdedigbaar is.
- **Executive summary bovenaan (3 bullets):** wat · waarom (met bewijs) · investering + gevraagd besluit (~11 weken, 5 FTE + QA).
- **Risico's:** maak van de open vragen een risicotabel (impact, mitigatie, eigenaar). Benoem eerlijk dat de 11 weken onzeker zijn tot de keuze voor OT of CRDT is gemaakt. Begin met een korte technische spike.
- **Wat ontbreekt:** infrastructuurkosten, wat we hiervoor laten liggen (opportunity cost), een "Decision Needed" (wat, door wie, wanneer) en de stakeholders (sales, support, security/privacy).

---

## (^◡^) User Researcher: het gebruikersperspectief
**Aangepakte pijnpunten** (aangenomen, niet onderbouwd): werk overschrijven, traag heen-en-weer werken, niet weten wie wat veranderde.

**Ontbrekende context**
- Geen bewijs: geen interviewcitaten, tickets of cijfers over hoe vaak conflicten voorkomen.
- Geen personas of segmenten: welke teams, welke documenten?
- Geen job-to-be-done: willen mensen echt tegelijk schrijven, of vooral samen reviewen?
- Waarom 2–10 gebruikers en waarom mobiel? Niet onderbouwd.

**Benodigde validatie**
- Gebruiksdata: hoe vaak wordt een document nu door meerdere mensen tegelijk bewerkt?
- 6–8 interviews per segment over het laatste document waaraan ze samen werkten.
- Een klikbaar prototype testen: helpen gekleurde cursors, of leiden ze af?

**UX-zorgen**
- Presence staat als vraag, terwijl user story 1 erom vraagt.
- Notificaties, undo per gebruiker, permissies en afleiding door 10 cursors ontbreken.
- Mobiel samen bewerken is waarschijnlijk een randgeval: valideer eerst of mobiele gebruikers vooral lezen of reageren.

---

## Volgende stappen
1. Kort onderzoek (data en interviews) voordat er bouwtijd wordt vastgelegd.
2. Technische spike: kies tussen OT en CRDT, en tussen zelf bouwen en kopen.
3. Spec herschrijven: executive summary, business impact, risicotabel, aangepaste fases, uitkomstmetrics.
