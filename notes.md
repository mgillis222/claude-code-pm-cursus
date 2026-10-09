# Notes

## 2026-10-08 · Module 1.3: First Tasks

### Prompts om te bewaren

**Vergadernotities → actiepunten**
```
Organize the action items from @product-sync-notes.md by owner
```
Tip: vraag er ook om prioriteit en deadline bij, en een blok "nog zonder eigenaar".

**Gebruikersonderzoek samenvatten (hele map)**
```
Analyze all the user interviews in @user-interviews and create a summary document highlighting overall findings and themes.
```

**Eén boodschap in meerdere stijlen**
```
Based on the communication styles in @communication-styles, create 3 messages about @user-research-synthesis.md and put them all together into a new document
```

**Feedback op een ontwerp of screenshot** (afbeelding plakken of slepen in het invoerveld)
```
Analyze this UI and provide improvement recommendations from a PM perspective. Include UX feedback, potential technical challenges, accessibility concerns, and missing user-flow elements.
```

**Oplossingen zoeken op internet**
```
Search the web for design solutions to address what we found in @user-research-synthesis.md
```

**Het patroon:** `@bestand of @map` + wat ik ermee wil (samenvatten, analyseren, eruit halen, ordenen, omzetten).

### Communicatiestijlen die handig zijn voor PM-werk

| Stijl | Opbouw |
|---|---|
| Briefing voor het management | 3 alinea's, gericht op resultaat |
| User story | Als [persona] wil ik [doel], zodat [voordeel] |
| Linear/Jira-ticket | Titel, beschrijving, acceptatiecriteria, prioriteit |
| Wekelijkse update | Wat is opgeleverd, waar wordt aan gewerkt, wat zit vast |
| Release notes | Voor klanten, gericht op het voordeel, enthousiast |
| PRD-onderdeel | Probleem, oplossing, succescriteria, user stories |
| Slack-aankondiging | Informeel, voor het team, gericht op vieren |
| E-mail aan stakeholders | Professioneel, strategisch, met veel context |

Voorbeelden van uitgewerkte stijlbestanden: [communication-styles](communication-styles/) (Slack-update, e-mail aan het management, Notion-document). Het resultaat staat in [research-communications.md](research-communications.md).

### Idee voor later
Eén persoonlijke skill `pm-communicatie` maken in `C:\Users\Myrthe Gillis\.claude\skills\`, met per stijl een bestand. Dan werkt hij in al mijn projecten. Beste aanpak: per stijl een echt voorbeeld nemen dat ik goed vond en daar de regels uit halen. Voor werk alleen algemene regels, geen Picnic-voorbeelden of namen.

## 2026-10-08 · Module 2.1 (Write a PRD)

### Socratisch vragen: is dat standaard?
- De methode is oud en bekend (Socrates): niet zelf antwoorden geven, maar vragen stellen zodat iemand scherper nadenkt en aannames ontdekt.
- [socratic-questioning.md](socratic-questioning.md) is geen officiële standaard, maar de eigen vragenlijst van de cursus, in vijf groepen: probleem, oplossing, succes, afbakening en strategie.
- Dezelfde soort vragen zie je overal in productmanagement: Marty Cagan (*Inspired*, "Opportunity Assessment"), Amazon "Working Backwards" (persbericht en veelgestelde vragen vooraf), en non-goals en "why now" in de meeste PRD-templates.
- Slim: zo'n vragenbestand met @ meegeven, zodat Claude jouw vaste aanpak volgt. Je kunt een eigen versie maken met de vragen die je team of manager altijd stelt.

## 2026-10-09 · Module 3.1.4 (Building Your Style Database)

### Waar vind ik goede promptverzamelingen voor Nano Banana?
- **Officieel:** [Google Cloud: Ultimate prompting guide for Nano Banana](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana). Best practices, prompt-frameworks en voorbeelden.
- **GitHub (gratis):**
  - [YouMind-OpenLab/awesome-nano-banana-pro-prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts): de grootste (10.000+ prompts met voorbeeldafbeeldingen, met webgalerij).
  - [ZeroLu/awesome-nanobanana-pro](https://github.com/ZeroLu/awesome-nanobanana-pro): kleiner, zorgvuldig samengesteld, geavanceerde prompts.
  - [PicoTrex/awesome-nano-banana-images](https://github.com/PicoTrex/awesome-nano-banana-images): galerij met uitleg, ook over consistente gezichten.
- **Galerij:** Banana Prompts (communitygalerij, bij elke afbeelding de exacte prompt).
- **Inspiratie zonder prompt:** Pinterest, Dribbble, Behance → stijl eruit halen met `style_extract.py` (methode 3).
- **Werkwijze:** vinden → testen → alleen bewaren wat werkt ("zet dit in mijn bibliotheek"). Voor PM-visuals (diagrammen, mockups) is de eigen [style-library.html](style-library.html) sterker dan deze verzamelingen.

### Les van de profielfoto
Een echt gezicht precies goed krijgen is het moeilijkst. Beter: één scherpe foto bewerken (alleen achtergrond en kleding laten veranderen) dan een nieuwe laten maken. Referenties groot, recht van voren, daglicht, zonder pet.
