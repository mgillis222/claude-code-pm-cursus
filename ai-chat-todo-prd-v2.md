# PRD: AI-spraakchat voor je to-dolijst (v2 – Lijst eerst)

*Strategische invalshoek: de vertrouwde TaskFlow-lijst blijft centraal. Spraak is een versneller bovenop de lijst, geen nieuwe manier van werken.*

**PM:** Myrthe Gillis · **Status:** Concept · **Datum:** 2026-10-08

---

# Problem Alignment

## Problem & Opportunity

Op mobiel is TaskFlow vooral een leesapp. Taken aanmaken en bijwerken met duimen is traag en lastig, dus gebruikers stellen het uit of slaan het over. Daardoor raken ideeën en afspraken kwijt, en voelt de lijst als extra werk in plaats van als hulp.

**Waarom dit telt voor klanten en voor TaskFlow**
- 60% van onze gebruikers wil taken beheren op mobiel. Het is ons meest gevraagde onderwerp.
- 40% van de supporttickets gaat over beperkingen van de mobiele app.
- 45% slaat taken over omdat aanmaken "te veel werk" is. 73% vindt dat taakbeheer te veel tijd kost.
- 62% wil spraakinvoer en 58% wil dat AI de details invult.
- 81% wil extra betalen voor AI-functies, gemiddeld $7 per gebruiker per maand.

**Van wie we het horen**
Uit 20 interviews en een enquête onder 500 gebruikers komen drie groepen naar voren: *Mobile-First PM's* (reistijd is verloren tijd), *Overwhelmed Managers* (te veel taken om handmatig bij te houden) en *Verbal Processors* (denken beter hardop). Een designer zei: "I have my best ideas when I'm walking or driving. By the time I get to my desk, I've forgotten half of them."

**Waarom nu**
- AI en mobiel zijn allebei strategische prioriteiten. Deze feature raakt ze tegelijk.
- Asana heeft AI gelanceerd (vooral desktop). ClickUp heeft al spraakcommando's. Wachten we zes maanden, dan lopen we achter.
- 23% van de opgezegde klanten noemt "ontbrekende features" als hoofdreden. Dat raakt ons churndoel (van 3% naar 2% per maand).
- Dit is het fundament voor latere AI: vergadering naar taken, voorstellen voor de volgende stap, samenvattingen.

## High Level Approach

**Een microfoonknop in de lijst en in quick-add.** Je tikt één keer, spreekt, en AI zet je woorden om in een taak met deadline, project en persoon. Je ziet altijd eerst een bevestigingskaart. Na "Opslaan" staat de taak direct in je gewone lijst, op de plek waar je hem verwacht.

Er komt geen apart chatscherm en geen nieuw "assistent"-concept. De lijst blijft het hoofdscherm. Spraak maakt die lijst alleen sneller te vullen en bij te werken.

**Waarom spraak?**
- *Sneller invoeren:* praten gaat met zo'n 130–150 woorden per minuut, typen op een telefoon met 35–40.
- *Sneller structureren:* in gewone taal zeg je deadline, persoon en project in één zin. Bijvoorbeeld (vertaald): "Herinner me eraan dat ik vrijdag de offerte naar Sanne stuur." AI vult daaruit de velden in. Een widget of Slack-koppeling kan dat niet.

**Overwogen alternatieven**

| Optie | Waarom niet (nu) |
|---|---|
| Betere mobiele quick-add (alleen typen) | Lost het typprobleem niet op. Weinig AI-waarde. |
| Homescreen-widget | Sneller openen, maar je typt nog steeds en vult velden zelf in. |
| Slack-integratie | Werkt niet als je handen en ogen bezet zijn. Geen mobiele winst. |
| **Gespreksgerichte assistent (v1-variant "Gesprek eerst")** | Meer onderscheidend, maar nieuw gedrag, meer risico en langere bouwtijd. |
| **Microfoon in de lijst (gekozen)** | Past bij hoe mensen nu al werken. |

**De afweging, eerlijk benoemd**
- *Voordelen:* lager risico, sneller te bouwen, past bij onze belofte "in 10 minuten aan de slag". Geen nieuwe interface om te leren.
- *Nadelen:* minder onderscheidend. Het lijkt meer op de spraakcommando's van ClickUp. Ons verschil zit dus vooral in de kwaliteit van het automatisch invullen en de bevestiging. Niet in een nieuw concept.
- *Waarom toch:* we willen eerst bewijzen dat mensen spraak gebruiken en terugkomen. Daarna bouwen we het gesprek verder uit.

### Narrative

**Sanne, Mobile-First PM, in de auto.** Ze rijdt naar een klant en bedenkt dat de offerte vrijdag weg moet. Bij een rood licht tikt ze op de microfoon in haar lijst en zegt: "Offerte naar Jeroen sturen, vrijdag, project Q4-campagne." Thuis staat de taak gewoon in haar lijst onder Q4-campagne, met deadline vrijdag. Vroeger was ze dit vergeten.

**Tim, Overwhelmed Manager, tussen twee meetings.** Hij loopt naar de koffieautomaat. "Wat staat er vandaag op mijn lijst?" De app leest drie taken voor en toont ze bovenaan zijn lijst. "Markeer de sprintreview als klaar." Eén tik op bevestigen, klaar.

**Randgeval: rommelige invoer.** Iemand zegt: "Eh, die ene taak van gisteren, zet die op... nee wacht, donderdag." AI vraagt: "Bedoel je 'Roadmap delen met sales'? Deadline donderdag?" De gebruiker kiest uit twee opties. Er wordt niets opgeslagen zonder bevestiging.

## Goals

1. **Adoptie:** 20% van de wekelijks actieve mobiele gebruikers maakt binnen 3 maanden na lancering minstens één taak met spraak.
2. **Herhaalgebruik:** 40% van de eerste gebruikers gebruikt spraak opnieuw binnen 2 weken.
3. **Minder frictie:** het aandeel mobiele supporttickets daalt (nu 40%).
4. **Retentie:** bijdrage aan churnverlaging van 3% naar 2% per maand.
5. **Gevoel:** gebruikers zeggen "ik vergeet niks meer onderweg".

**Guardrails (hier grijpen we in)**
- Meer dan 15% van de spraaktaken wordt na aanmaken gecorrigeerd of verwijderd.
- Veel eenmalig gebruik zonder terugkeer.
- Dubbele of ongewenste taken in gedeelde projecten.

## Non-goals

1. **Vergadering uploaden en omzetten naar taken.** Waardevol, maar een andere taak: lange opnames, meerdere sprekers, privacyvragen. Dit is V2.
2. **Volledig handsfree automodus, CarPlay of Android Auto.** V1 werkt met één tik om te praten. Echte handsfree vraagt veel extra werk en veiligheidsafwegingen.
3. **Desktop en web.** Spraak heeft de meeste waarde op mobiel. Op desktop is typen snel genoeg.
4. **Andere talen dan Engels.** Eerst de kwaliteit in één taal goed krijgen.
5. **Complexe bulkopdrachten**, zoals "verplaats alle taken van Tim naar volgende week". Te grote kans op fouten met grote gevolgen.
6. **Een apart chatscherm of assistent.** Bewust: de lijst blijft het centrum.

# Solution Alignment

## Key Features

**Plan of record (in volgorde van prioriteit)**

1. **Microfoonknop in lijst en quick-add (iOS + Android).** Eén tik om te starten. Opnemen stopt automatisch na stilte of met een tweede tik.
2. **Taak aanmaken met spraak.** "Maak een taak…" of gewoon de taak uitspreken.
3. **Automatisch invullen.** AI haalt titel, deadline, project en toegewezen persoon uit de zin. Alleen bestaande projecten en teamleden.
4. **Bevestigingskaart, altijd.** Toont de ingevulde velden. Elk veld kun je met één tik aanpassen. Pas na "Opslaan" komt de taak in de lijst.
5. **Eenvoudige updates met spraak.** "Zet de deadline op vrijdag", "markeer als klaar". Werkt op één taak tegelijk.
6. **Lijst opvragen.** "Wat staat er vandaag op mijn lijst?" Het antwoord is een gefilterde weergave van de gewone lijst, plus een kort gesproken overzicht.
7. **Verduidelijkingsvragen.** Bij twijfel stelt AI één korte vraag met keuzeknoppen.

**Kan los eerder live?** Ja: features 1–4 (alleen aanmaken) vormen een kleinere eerste release. Updates en opvragen volgen in een tweede sprint.

**Future considerations**
- Vergadering naar taken (V2). Houd het datamodel geschikt voor meerdere taken uit één opname.
- Handsfree modus en CarPlay/Android Auto.
- Meer talen, te beginnen met Nederlands, Duits en Spaans.
- Voorstellen voor de volgende stap en samenvattingen.
- Eventueel als betaalde AI-add-on (richting $7 per gebruiker per maand).

### Key Flows

**Flow 1: taak aanmaken**
1. Gebruiker opent de lijst en tikt op de microfoon (of in quick-add).
2. Golfvorm en live transcriptie verschijnen.
3. Gebruiker spreekt: "Remind me to send the quote to Sanne on Friday."
4. Bevestigingskaart: titel "Send quote to Sanne", deadline vrijdag, toegewezen aan: jij, project: (voorstel).
5. Gebruiker tikt "Opslaan" of past een veld aan.
6. De taak verschijnt gemarkeerd in de lijst. Een snackbar biedt "Ongedaan maken".

**Flow 2: taak bijwerken**
1. Gebruiker tikt op de microfoon (in de lijst, of vanuit een geopende taak).
2. Spreekt: "Set the deadline for the roadmap task to Friday."
3. AI zoekt de taak. Eén match: kaart met de wijziging (oud → nieuw). Meerdere matches: keuzelijst.
4. Bevestigen. De lijst werkt direct bij.

**Flow 3: lijst opvragen**
1. "What's on my list today?"
2. De lijst filtert naar "Vandaag". De app leest kort de titels voor (uit te zetten).
3. Gebruiker kan direct verder: "Mark the first one as done."

**Flow 4: verduidelijking**
- Onduidelijke persoon, datum of taak? AI stelt één vraag met maximaal drie keuzes en een optie "Iets anders".
- Na twee mislukte pogingen: de kaart opent met ingevulde tekst om te typen.

Design en engineering werken deze flows uit tot acceptatiecriteria.

### Key Logic

1. **Nooit opslaan zonder bevestiging.** Geldt voor aanmaken én updates.
2. **Alleen bestaande data.** AI kiest alleen bestaande projecten en teamleden. Twijfel = vragen, niet gokken.
3. **Standaardwaarden.** Geen persoon genoemd: toegewezen aan de spreker. Geen project: het project waarin de gebruiker de lijst open had, anders "Inbox".
4. **Relatieve datums** ("vrijdag", "morgen") worden opgelost in de tijdzone van de gebruiker. "Vrijdag" op vrijdag = volgende vrijdag, met de datum zichtbaar op de kaart.
5. **Gedeelde projecten.** Toewijzen aan een ander gaat via de normale notificatie. Lijkt een nieuwe taak sterk op een bestaande open taak, dan toont de kaart een waarschuwing "Mogelijk dubbel".
6. **Eén taak per opdracht.** Bulkopdrachten krijgen een vriendelijke melding dat dit nog niet kan.
7. **Ongedaan maken** binnen 10 seconden na opslaan.
8. **Rechten.** Spraak kan niets wat de gebruiker in de app ook niet kan.
9. **Privacy.** Audio wordt niet bewaard na transcriptie. Transcripties alleen voor verwerking en, met toestemming, voor kwaliteitsverbetering. Duidelijke uitleg bij eerste gebruik.
10. **Prestaties.** Bevestigingskaart binnen 2 seconden na einde spraak (p90). Werkt ook bij zwak mobiel netwerk; zonder netwerk een nette foutmelding en de transcriptie blijft bewaard.
11. **Toegankelijkheid.** Werkt met VoiceOver en TalkBack. Microfoonknop minimaal 44×44 pt.
12. **Meten.** Log per spraaktaak: aangemaakt, gecorrigeerd (welk veld), verwijderd binnen 24 uur, en verduidelijking nodig.

# Development and Launch Planning

**Key Milestones**

| Mijlpaal | Wat | Doel-timing |
|---|---|---|
| Discovery & design | Flows, bevestigingskaart, prompt- en spraakkeuze | Sprint 1–2 |
| Bouw fase 1 | Microfoon, aanmaken, automatisch invullen, bevestiging | Sprint 3–5 |
| Interne test | Eigen team (dogfooding), meten van correctiepercentage | Sprint 6 |
| Bèta | 5–10% van mobiele gebruikers, Engelstalig | Sprint 7–8 |
| Bouw fase 2 | Updates, lijst opvragen, verduidelijkingsvragen | Sprint 7–9 |
| Algemene lancering | Alle mobiele gebruikers (iOS + Android) | Sprint 10 |
| Evaluatie | Doelen en guardrails na 3 maanden | Lancering + 3 maanden |

**Operational Checklist**

| Onderdeel | Actie | Eigenaar |
|---|---|---|
| Legal & privacy | Toestemming microfoon, privacytekst, verwerking audio | PM + Legal |
| Kosten | Kosten per spraaktaak (spraak + AI) inschatten en bewaken | Engineering |
| Analytics | Events en dashboard voor doelen en guardrails | Data |
| Support | Help-artikel en FAQ; tickets labelen op "spraak" | Customer Success |
| Marketing | In-app introductie en release notes | Marketing |
| App stores | Microfoon-uitleg voor App Store en Google Play review | Engineering |
| Kill switch | Feature flag om spraak direct uit te zetten | Engineering |

---

## Other

**Risks**
- *Te weinig onderscheid.* Lijkt op ClickUp. Mitigatie: investeer in de kwaliteit van automatisch invullen en snelle bevestiging.
- *Foute taken in gedeelde projecten.* Mitigatie: verplichte bevestiging, dubbel-waarschuwing, ongedaan maken.
- *Spraakherkenning met accenten en ruis.* Mitigatie: live transcriptie, makkelijk bewerken, bèta met diverse gebruikers.
- *AI-kosten per gebruiker.* Mitigatie: kosten bewaken in de bèta; later eventueel als betaalde add-on.
- *Veiligheid in de auto.* V1 vraagt een tik en een blik op het scherm. Duidelijke communicatie: niet gebruiken tijdens het rijden zonder veilige situatie.

**FAQ**
- *Waarom geen apart chatscherm?* Omdat we de lijst niet willen veranderen. Spraak moet voelen als een snellere toetsenbordvervanger.
- *Waarom alleen Engels?* Eerst kwaliteit bewijzen in één taal, daarna uitbreiden.

**Appendix**
- Bronnen: TaskFlow company context; User Research "Productivity & Task Management Pain Points" (20 interviews, enquête onder 500 gebruikers).
- Gerelateerd: PRD v1 (gespreksgerichte variant) ter vergelijking.

**Changelog**
- 2026-10-08: eerste concept (Myrthe Gillis).
