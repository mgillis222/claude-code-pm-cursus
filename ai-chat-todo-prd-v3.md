# PRD: AI-spraakchat voor je to-dolijst (v3 – In balans)

*Strategische invalshoek: spraak en lijst zijn even belangrijk. Het zijn twee verbonden weergaven van dezelfde taken, met de juiste modus voor het moment.*

**PM:** Myrthe Gillis · **Status:** Concept · **Datum:** 2026-10-08

---

# Problem Alignment

## Problem & Opportunity

TaskFlow-gebruikers hebben hun beste ideeën en afspraken onderweg, maar op de telefoon kunnen ze bijna niets met hun taken. Daardoor gaan taken verloren of blijven ze in hun hoofd zitten. Ze hebben twee dingen nodig: snel iets vastleggen als handen en ogen bezet zijn, en daarna rustig kunnen controleren en bijwerken. Eén modus alleen lost dat niet op.

**Waarom dit belangrijk is**
- **Mobiel is de grootste bewezen pijn.** 60% van de gebruikers wil taken mobiel beheren. 40% van de supporttickets gaat over beperkingen van de mobiele app.
- **Taken maken voelt als werk.** 73% besteedt te veel tijd aan taakbeheer. 45% maakt soms geen taak aan omdat het "te veel werk" is.
- **Gebruikers vragen hier zelf om.** 62% wil spraakinvoer en 58% wil dat AI taakvelden automatisch invult. 81% zou extra betalen voor AI-functies (gemiddeld +$7 per gebruiker per maand).
- **Spraak is sneller.** Mensen spreken zo'n 130–150 woorden per minuut, maar typen op een telefoon maar 35–40.
- **Een gesprek structureert ook sneller.** Bij "herinner me eraan dat ik vrijdag de offerte naar Sanne stuur" vult AI zelf deadline, persoon en project in. Een widget of Slack-koppeling kan dat niet.

**Van wie we dit horen**
Uit 20 interviews en een enquête onder 500 gebruikers komen drie persona's naar voren:
- **Mobile-First PMs:** reistijd is nu dode tijd.
- **Overwhelmed Managers:** te veel taken om alles handmatig bij te houden.
- **Verbal Processors:** denken beter hardop dan op papier.

> "I have my best ideas when I'm walking or driving. By the time I get to my desk, I've forgotten half of them." – Designer

> "The mobile app is fine for viewing but I need to be at my laptop to actually update anything meaningful." – Marketing Manager

**Waarom nu**
- Het raakt twee strategische prioriteiten tegelijk: AI-integratie en de mobiele app.
- Asana heeft AI-functies gelanceerd, maar die zijn vooral op desktop gericht. ClickUp heeft al spraakcommando's, dus spraak alleen is niet uniek. Ons onderscheid is **gesprek plus automatisch invullen, naadloos verbonden met de lijst**.
- 23% van de vertrokken klanten noemt ontbrekende functies als hoofdreden. Als we 6 maanden wachten, raken we verder achter.
- Het legt de basis voor latere AI-functies: van meeting naar taken, voorstellen voor volgende stappen, samenvattingen.

## High Level Approach

**Eén takenlijst, twee manieren om ermee te werken.** In de mobiele app kun je met één tik praten met een AI-assistent, of de vertrouwde lijst gebruiken. Beide werken op exact dezelfde taken, en je wisselt zonder iets kwijt te raken:

- **Spraak, voor onderweg:** taken vastleggen, simpel bijwerken ("zet de deadline op vrijdag", "markeer als klaar") en vragen stellen ("wat staat er vandaag op mijn lijst?").
- **Lijst, om te controleren:** wat via spraak is gemaakt, verschijnt direct in de lijst. Daar kun je het nalezen, aanpassen en bevestigen.

De brug tussen beide is de **bevestigingskaart**. Elke spraakactie toont een kaart met wat AI heeft begrepen, zoals titel, deadline, project en toegewezen persoon. Niets wordt opgeslagen zonder bevestiging. Wie een kaart niet meteen bevestigt, vindt hem terug in de lijst onder **"Te bevestigen"**.

**Overwogen alternatieven**

| Optie | Waarom niet (alleen) |
|---|---|
| Alleen een betere mobiele lijst | Lost typen onderweg en "handen bezet" niet op |
| Spraak-first, lijst op de achtergrond | Snel vastleggen, maar weinig vertrouwen en controle. Fouten blijven onopgemerkt |
| Snelle widget of Slack-koppeling | Snel, maar vult geen deadline, persoon of project in |
| **In balans (gekozen)** | Snelheid van spraak plus controle van de lijst |

**De afweging, eerlijk benoemd.** Deze aanpak combineert het beste van beide, maar kost meer ontwerpwerk. Het risico is dat we twee dingen half goed doen. Daarom leggen we duidelijke regels vast over welke modus wanneer de voorkeur heeft (zie Key Logic). We bewaken ook de kwaliteit van beide modi apart.

### Narrative

**Vandaag.** Lotte is PM en rijdt naar een klant. Ze bedenkt dat ze vrijdag de offerte naar Sanne moet sturen. Typen kan niet. Bij aankomst is ze het vergeten. Pas maandag vraagt Sanne ernaar.

**Met deze functie.** Lotte tikt één keer op de microfoon en zegt: "Herinner me eraan dat ik vrijdag de offerte naar Sanne stuur." De assistent antwoordt kort: "Taak: offerte naar Sanne sturen, vrijdag, project Klant X. Opslaan?" Lotte zegt "ja". 's Avonds op de bank opent ze de lijst. Ze ziet de taak staan, voegt een notitie toe en zet de prioriteit hoger. Spraak voor het moment zelf, de lijst voor later.

**Randgeval.** Tim zegt in een drukke trein: "Zet die demo-taak op klaar." Er zijn drie taken met "demo". De assistent vraagt: "Bedoel je de demo voor Acme, voor Beta of de interne demo?" Is het te lawaaiig, dan stelt de assistent voor om in de lijst te kiezen.

## Goals

1. **Adoptie:** 20% van de wekelijks actieve mobiele gebruikers maakt binnen 3 maanden na lancering minstens één taak via spraak.
2. **Herhaald gebruik:** 40% van de nieuwe spraakgebruikers gebruikt het binnen 2 weken opnieuw.
3. **Minder mobiele frustratie:** het aandeel mobiele supporttickets daalt (nu 40%).
4. **Bijdrage aan retentie:** helpt de maandelijkse churn te verlagen van 3% naar 2%.
5. **Gevoel:** gebruikers zeggen "ik vergeet niks meer onderweg" en vertrouwen erop dat wat ze zeggen goed in de lijst komt.

**Guardrails (signalen dat het misgaat)**
- Meer dan 15% van de spraaktaken wordt na het aanmaken gecorrigeerd of verwijderd.
- Veel gebruikers proberen het één keer en komen niet terug.
- Dubbele of ongewenste taken in gedeelde projecten.
- **Balans-guardrail:** de tevredenheid over de gewone lijst daalt niet (bijvoorbeeld NPS of aantal tickets over de lijst).

## Non-goals

1. **Meetings omzetten in taken.** Waardevol, maar een andere taak: lange opnames, meerdere sprekers, privacy. Dat komt in V2.
2. **Volledig handsfree automodus, CarPlay of Android Auto.** V1 werkt met één tik om te praten. Een echte automodus vraagt een eigen ontwerp en veiligheidsonderzoek.
3. **Desktop en web.** Spraak past het best bij mobiel. Op desktop is typen snel genoeg.
4. **Andere talen dan Engels.** We starten met één taal om de kwaliteit van herkenning en invullen te bewaken. De voorbeelden in dit document zijn vertaald.
5. **Complexe bulkopdrachten**, zoals "verplaats alle taken van Tim naar volgende week". Het risico op grote fouten is te hoog zolang het vertrouwen nog moet groeien.

# Solution Alignment

## Key Features

**Plan of record (op prioriteit)**

1. **Eén tik om te praten:** een vaste microfoonknop in de mobiele app (iOS en Android), zichtbaar vanuit de lijst en vanuit een taak.
2. **Taak maken via spraak, met automatisch invullen:** AI haalt titel, deadline, project en toegewezen persoon uit vrije spraak.
3. **Bevestigingskaart:** altijd een kaart vóór het opslaan, met bevestigen, aanpassen of annuleren. Je kunt bevestigen met stem of met een tik.
4. **Simpele updates via spraak:** deadline wijzigen, als klaar markeren, opnieuw toewijzen.
5. **Vragen aan je lijst:** "wat staat er vandaag?", "wat is er te laat?". Het antwoord is kort gesproken en de lijst toont dezelfde gefilterde taken.
6. **Naadloze overstap naar de lijst:** vanuit elk spraakantwoord met één tik naar de bijbehorende taken in de lijst.
7. **"Te bevestigen" in de lijst:** niet-bevestigde spraakkaarten blijven zichtbaar en raken nooit kwijt.
8. **Verduidelijkingsvragen:** bij twijfel stelt de assistent één gerichte vraag in plaats van te gokken.

**Future considerations**
- Meeting-opname omzetten in taken (V2). Het model van de bevestigingskaart moet ook werken voor meerdere taken tegelijk.
- Handsfree automodus en CarPlay/Android Auto.
- Proactieve suggesties ("je hebt 3 taken die vandaag verlopen").
- Meer talen, waaronder Nederlands.
- Bulkopdrachten, met een voorbeeld vooraf.

### Key Flows

**Flow 1: Vastleggen onderweg (spraak → lijst)**
1. De gebruiker tikt op de microfoon en spreekt een taak in.
2. De assistent toont een bevestigingskaart en leest een korte samenvatting voor.
3. De gebruiker zegt "ja" of tikt op bevestigen. De taak staat direct in de lijst.
4. Geen reactie binnen ~10 seconden? Dan gaat de kaart naar "Te bevestigen".

**Flow 2: Vraag stellen (spraak → lijst)**
1. "Wat staat er vandaag op mijn lijst?"
2. De assistent noemt het aantal en de top 3, kort gesproken.
3. Het scherm toont tegelijk de gefilterde lijst "Vandaag". De gebruiker kan daar verder.

**Flow 3: Controleren en afronden (lijst → spraak)**
1. De gebruiker opent de lijst en ziet onder "Te bevestigen" twee open kaarten.
2. Hij past een deadline aan met een tik en bevestigt.
3. Vanuit een taak tikt hij op de microfoon: "markeer als klaar". De context van de taak is al bekend.

**Flow 4: Onduidelijke invoer**
1. Herkenning mislukt of de opdracht is dubbelzinnig.
2. De assistent stelt één vraag of geeft maximaal drie keuzes.
3. Lukt het na twee pogingen niet, dan biedt de assistent de lijst aan: "Wil je het hier kiezen?"

### Key Logic

**Regels: welke modus wanneer**
- **Spraak heeft de voorkeur** voor vastleggen, simpele updates op één taak en korte vragen.
- **De lijst heeft de voorkeur** voor controleren, meerdere taken tegelijk, lange teksten en alles waarbij je moet kiezen uit meer dan drie opties.
- Spraakantwoorden blijven kort: maximaal ~15 seconden of 3 taken. Daarna verwijst de assistent naar de lijst.
- De gebruiker kan op elk moment van modus wisselen zonder dat er invoer verloren gaat.

**Opslaan en vertrouwen**
- Niets wordt opgeslagen zonder bevestiging, ook geen updates.
- Automatisch ingevulde velden zijn gemarkeerd ("door AI ingevuld"), zodat de gebruiker weet wat hij moet controleren.
- Onzekere velden blijven leeg in plaats van gegokt. Een ontbrekende deadline is beter dan een verkeerde.
- "Klaar" en "verwijderen" via spraak zijn altijd binnen 5 seconden ongedaan te maken.

**Gedeelde projecten**
- Voordat een taak wordt opgeslagen, controleren we op duplicaten (vergelijkbare titel in hetzelfde project in de laatste 7 dagen) en vragen we of het om dezelfde taak gaat.
- Taken toewijzen aan iemand anders volgt de bestaande rechten. De ontvanger krijgt de normale melding.

**Dubbelzinnigheid**
- Namen en projecten worden gematcht op de eigen werkruimte. Bij meerdere matches stelt de assistent een keuzevraag.
- Relatieve datums ("vrijdag", "volgende week") gebruiken de tijdzone van de gebruiker.

**Niet-functionele eisen**
- Van einde spraak tot bevestigingskaart: binnen 2 seconden (p90).
- Lijst en spraak zijn altijd in sync. Een bevestigde taak staat binnen 1 seconde in de lijst.
- Zonder internet: de opname wordt bewaard en verwerkt zodra er weer verbinding is, met een duidelijke status.
- Privacy: audio wordt niet bewaard na verwerking. Alleen de tekst wordt opgeslagen. Microfoontoegang vragen we pas bij het eerste gebruik.
- Toegankelijkheid: alles wat via spraak kan, kan ook via de lijst.

# Development and Launch Planning

**Key milestones**

| Mijlpaal | Wat | Doelmoment |
|---|---|---|
| Ontwerp en regels | Flows, bevestigingskaart, modusregels vastgelegd | Sprint 1–2 |
| Prototype | Spraak naar kaart, intern getest met 10 collega's | Sprint 3–4 |
| Alpha | Vastleggen en vragen stellen, intern (dogfooding) | Sprint 5–6 |
| Beta | 5–10% van de mobiele gebruikers, guardrails gemeten | Sprint 7–9 |
| Algemene lancering | Alle mobiele gebruikers (Engels) | Sprint 10 |
| Evaluatie | Adoptie, herhaald gebruik, correctiepercentage | 3 maanden na lancering |

**Operationeel checklist**
- [ ] Dashboard met doel- en guardrail-metrics, apart voor spraak en lijst
- [ ] Kosten per spraakverzoek (spraakherkenning + AI) berekend en begroot
- [ ] Privacy- en securityreview (audio, dataopslag, verwerkers)
- [ ] Supportteam getraind, met FAQ en macro's
- [ ] Feature flag en kill switch aanwezig
- [ ] Beslissing over prijs: onderdeel van Pro of een betaalde AI-add-on
- [ ] Lanceringscommunicatie (in-app uitleg, e-mail, salesmateriaal)
- [ ] Feedbackknop in de bevestigingskaart

---

## Other

**Risks**
- **Twee dingen half goed doen.** We hebben beperkte capaciteit (2 designers). Maatregel: strakke V1-scope, duidelijke modusregels en aparte kwaliteitsmetrics per modus.
- **Herkenningsfouten tasten het vertrouwen aan.** Maatregel: altijd bevestigen, onzekere velden leeg laten, guardrail van 15% correcties.
- **Kosten van AI-verzoeken** lopen op bij intensief gebruik. Maatregel: kosten monitoren in de beta, eventueel limieten instellen.
- **ClickUp of Asana kopieert de functie snel.** Maatregel: inzetten op de koppeling tussen gesprek en lijst, niet alleen op spraak.

**FAQ**
- *Waarom niet eerst alleen spraak?* Zonder een goede lijst om te controleren groeit het vertrouwen niet en lopen correcties en verloren taken op.
- *Waarom niet meteen ook Nederlands?* Eén taal eerst houdt de kwaliteit hoog. Meer talen volgen na de evaluatie.

**Appendix**
- Bronnen: `user-research/pain-points.md`, `taskflow-company-context.md`

**Changelog**
- 2026-10-08: eerste concept (v3 – In balans)
