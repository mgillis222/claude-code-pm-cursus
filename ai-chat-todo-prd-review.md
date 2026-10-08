# Review: PRD v2 "Lijst eerst" (AI-spraak voor de to-dolijst)

**Beoordeeld document:** [ai-chat-todo-prd-v2.md](ai-chat-todo-prd-v2.md)
**Datum:** 2026-10-08
**Reviewers:** Engineer, Executive, User Researcher (sub-agents)

---

## Samenvatting: gemeenschappelijke thema's

| Thema | Genoemd door | Kern |
|---|---|---|
| Het voorbeeld van Sanne in de auto | Executive, User Researcher | Botst met de eigen veiligheidsboodschap. Kies een ander voorbeeld. |
| Kosten zijn niet concreet | Engineer, Executive | Geen kostenplafond per spraaktaak of per gebruiker. |
| Planning en fasering | Engineer, Executive | Fase 1 → bèta → go/no-go → fase 2. Maak fase 1 kleiner. |
| Onderscheid ten opzichte van ClickUp | Executive | Maak het meetbaar, bijvoorbeeld "90% van de velden goed ingevuld". |
| Rommelige, vage invoer | User Researcher | De PRD gaat uit van nette zinnen. Echte gebruikers praten zoekend. |

---

## 🔧 Engineer

**Oordeel:** goed te bouwen. Fase 1 (aanmaken): 3–4 sprints met één squad van 4 engineers. Tot de algemene lancering: ongeveer 10–12 sprints. Krap maar haalbaar.

**Risico's en open vragen**
- **De 2-secondengrens (p90) is ambitieus.** Spraak naar tekst, AI die de velden invult en projecten en personen opzoeken gebeuren achter elkaar. Op een zwak netwerk lukt dat vaak niet binnen 2 seconden. Er is nog niet gekozen tussen spraakherkenning op de telefoon of in de cloud. Die keuze bepaalt snelheid, kosten en privacy.
- **Offline en privacy spreken elkaar tegen.** Cloud-spraakherkenning betekent dat de audio tijdelijk op de telefoon bewaard moet worden als er geen netwerk is. Dat botst met "audio wordt niet bewaard".
- **De scope groeit ongemerkt.** "Mark the first one as done" vraagt dat de app onthoudt wat er net gezegd is. Dat is al een stap richting een gesprek. Ook de waarschuwing "Mogelijk dubbel" is apart bouwwerk dat niet in de planning staat.

**Suggesties**
1. Zet een kostenplafond in de PRD, bijvoorbeeld maximaal $0,01 per spraaktaak, en beschrijf wat er gebeurt als dat wordt overschreden.
2. Haal de planning recht: fase 1 → bèta → fase 2, met een go/no-go op een correctiepercentage onder 15%.
3. Maak fase 1 kleiner: schuif de dubbel-waarschuwing en het voorlezen van taken naar fase 2. Leg vast welke technische keuzes in sprint 1–2 vallen (spraakdienst, AI-model, native of cross-platform) en wie daarover beslist.

---

## 💼 Executive

**Oordeel:** groen licht voor fase 1 (alleen taken aanmaken). Fase 2 pas na een go/no-go op basis van de bètacijfers. Het risico is laag en het past bij twee prioriteiten, maar de businesscase is te dun voor de volledige investering van 10 sprints.

**Sterke punten**
- **Twee prioriteiten tegelijk:** AI én mobiel (60% wil mobiel, 40% van de tickets gaat over mobiel).
- **Beschermt de kern:** de lijst blijft centraal, "in 10 minuten aan de slag" blijft overeind.
- **Goed risicobeheer:** altijd bevestigen, een kill switch, guardrails en een release in fasen.

**Vragen van leadership**
1. **"Wat levert het op?"** "Bijdragen aan retentie" is niet meetbaar. Vergelijk in de bèta de churn van spraakgebruikers met die van niet-gebruikers en reken uit wat 0,1% minder churn oplevert op $4,2M ARR. Kies nu al: onderdeel van Pro, of een betaalde add-on van $7?
2. **"Wat kost het, en wat schuift ervoor op?"** Geen AI-kosten per taak en geen team toegewezen. 10 sprints met 8 engineers verdringt waarschijnlijk enterprise-werk zoals SSO. Voeg een kostenplafond toe en benoem welk squad het bouwt en wat daardoor later komt.
3. **"Waarom winnen we hiermee van ClickUp?"** Maak het onderscheid meetbaar ("90% van de velden goed ingevuld zonder correctie") en leg vast wanneer we doorgaan naar "Gesprek eerst" of naar vergadering-naar-taken.

---

## 👥 User Researcher

**Oordeel:** pakt de grootste pijn goed aan, vooral voor de Mobile-First PM. Maar de PRD gaat uit van nette zinnen met deadline, persoon en project, terwijl gebruikers onderweg vooral een vaag idee snel kwijt willen.

**Behoeften en risico's**
- **Handsfree versus "tik en kijk".** Gebruikers noemen lopen, rijden en afwassen. V1 vraagt tikken en een kaart lezen.
- **De bevestigingskaart kan nieuwe frictie geven.** Wat gebeurt er als je niet meteen kunt bevestigen? Raakt het idee dan alsnog kwijt?
- **Vage ideeën in plaats van strakke opdrachten.** Verbal Processors praten lang en zoekend. Er is geen beschrijvingsveld en geen plek voor half-af ideeën.

**Suggesties**
1. **"Nu vastleggen, later bevestigen":** onbevestigde spraaktaken komen als concept in de Inbox, zodat er nooit iets verloren gaat.
2. **Valideer vóór de bouw:** een dagboekstudie of Wizard-of-Oz-test met 6–8 gebruikers verdeeld over de drie persona's. Hoe rommelig is echte gesproken invoer? Hoe lang duurt bevestigen?
3. **Meet gedrag na de lancering, niet alleen meningen:** afgebroken kaarten, tijd tot opslaan, gebruik per persona. Interview 5–8 mensen die na één keer stopten. Meet "ik vergeet niks meer" met een korte vraag in de app.
