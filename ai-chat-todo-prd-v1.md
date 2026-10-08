# PRD: AI-spraakchat voor je to-dolijst (v1 – Chat eerst)

> **Strategische invalshoek:** het gesprek met je assistent is de hoofdervaring op mobiel; de to-dolijst is het resultaat van dat gesprek.

**PM:** Myrthe Gillis · **Status:** Concept · **Datum:** 2026-10-08

---

# Problem Alignment

## Problem & Opportunity

TaskFlow-gebruikers kunnen op mobiel bijna niets doen met hun taken. Ze willen taken vastleggen en bijwerken op momenten dat typen niet kan of te traag is. Daardoor gaan ideeën en afspraken verloren, of blijven ze in iemands hoofd zitten. Wij geven ze een assistent waarmee ze praten. De assistent maakt en ordent de taken.

**Waarom dit belangrijk is**
- 60% van de gebruikers wil taken op mobiel beheren. 40% van de supporttickets gaat over beperkingen van de mobiele app.
- 45% maakt soms geen taak aan, omdat het "te veel werk" is. 73% besteedt te veel tijd aan taakbeheer.
- 62% wil spraakinvoer. 58% wil dat AI de details invult.
- 81% wil extra betalen voor AI-functies, gemiddeld $7 per gebruiker per maand.

**Use cases**
1. **Handen en ogen bezet.** In de auto, op de fiets, met boodschappen in je handen. Typen kan niet.
2. **Snel een gedachte vangen.** "I have my best ideas when I'm walking or driving. By the time I get to my desk, I've forgotten half of them." (Designer)
3. **Een meeting omzetten in taken.** Waardevol, maar een andere klus: lange opnames, meerdere sprekers, privacy. Dit is V2.

**Waarom spraak, en waarom een gesprek**
- Spreken is sneller: ongeveer 130–150 woorden per minuut, tegen 35–40 bij typen op een telefoon.
- Structureren gaat sneller. In één zin zitten deadline, persoon en project: "Remind me to send the quote to Sanne on Friday." De AI vult die velden in. Een widget of Slack-integratie kan dat niet.
- Een gesprek kan doorvragen als iets onduidelijk is. Dat past bij de *Verbal Processors*: "I can articulate things way better when I'm talking than when I'm typing."

**Waarom deze AI-functie als eerste**
- Raakt twee strategische prioriteiten tegelijk: AI-integratie en de mobiele app.
- Grootste bewezen pijn (mobiel, taakoverhead).
- Fundament voor latere AI: meeting naar taken, voorstellen voor de volgende stap, samenvattingen. Die bouwen allemaal op dezelfde assistent.
- Onderscheidend: Asana's AI is vooral desktop. ClickUp heeft al spraakcommando's, dus spraak alleen is niet uniek. Ons verschil is het **gesprek plus automatisch invullen**.

**Waarom nu**
Wachten we zes maanden, dan lopen we achter. 23% van de vertrokken klanten noemt "ontbrekende functies" als hoofdreden. Asana en Linear brengen nu AI uit.

**Met wie werken we**
Bestaande klanten uit het onderzoek (20 interviews, enquête onder 500 gebruikers). Focus op drie persona's: *Mobile-First PMs*, *Overwhelmed Managers* en *Verbal Processors*.

## High Level Approach

Een **assistent-scherm in de mobiele app** waar je met één tik begint te praten. De assistent begrijpt wat je wilt, vult de taak in, laat een bevestiging zien en slaat pas daarna op. De lijst bestaat nog steeds, maar is de plek waar het resultaat van je gesprekken landt. Op mobiel opent de app voor deze gebruikers op het assistent-scherm.

**Overwogen alternatieven**

| Alternatief | Waarom niet |
|---|---|
| Lijst eerst, met een microfoonknop in het taakformulier | Kleinere gedragsverandering, maar alleen sneller typen. Geen gesprek, geen doorvragen, weinig onderscheid t.o.v. ClickUp. |
| Homescreen-widget voor snelle notities | Snel vastleggen, maar geen structuur. De gebruiker moet later alsnog alles invullen. |
| Slack-integratie | Werkt niet als je handen bezet zijn, en verplaatst het werk naar een ander hulpmiddel. |

**Bewuste afweging van "chat eerst"**
- **Voordeel:** sterkste onderscheid in de markt. Het past bij hoe gebruikers erover praten: "Let me have a conversation with my task list." Het legt de basis voor een AI-assistent als kern van TaskFlow.
- **Nadeel:** grotere gedragsverandering. Gebruikers zijn gewend aan lijsten.
- **Nadeel:** hoger AI-risico. Als de assistent iets verkeerd begrijpt, voelt de hele ervaring kapot. Daarom altijd een bevestiging vóór opslaan.
- **Nadeel:** meer werk aan gespreksontwerp (doorvragen, fouten herstellen).

### Narrative

**Vandaag.** Lotte is PM bij een bedrijf van 120 mensen. Ze rijdt naar een klant en bedenkt dat de offerte vrijdag naar Sanne moet. Ze kan niet typen. Ze neemt zich voor het te onthouden. Bij aankomst is ze het vergeten. Maandag belt Sanne.

**Met de assistent.** Lotte tikt op de microfoonknop van haar telefoon in de houder en zegt: "Remind me to send the quote to Sanne on Friday." De assistent antwoordt: "Taak 'Offerte naar Sanne sturen', deadline vrijdag, project Klant Noord. Opslaan?" Lotte zegt "Yes". Klaar in tien seconden.

**Randgeval.** Mark zegt in de trein: "Tim needs to fix the login thing." Er zijn twee Tims en drie taken over inloggen. De assistent vraagt: "Bedoel je Tim de Vries of Tim Bakker?" en stelt voor een nieuwe taak te maken in plaats van een bestaande aan te passen.

## Goals

In volgorde van prioriteit:

1. **Adoptie:** 20% van de wekelijks actieve mobiele gebruikers maakt binnen 3 maanden na lancering minstens één taak via spraak.
2. **Herhaling:** 40% van de eerste gebruikers gebruikt de assistent binnen 2 weken opnieuw.
3. **Minder supportdruk:** daling van het aandeel mobiele supporttickets (nu 40%).
4. **Bijdrage aan retentie:** helpt de maandelijkse churn te verlagen van 3% naar 2%.
5. **Gevoel:** gebruikers zeggen "ik vergeet niks meer onderweg".

**Guardrails (signalen dat het misgaat)**
- Meer dan 15% van de spraaktaken wordt na het maken gecorrigeerd of verwijderd.
- Veel gebruikers proberen het één keer en komen niet terug.
- Dubbele of ongewenste taken in gedeelde projecten (gemeld door teamleden of zichtbaar in data).

## Non-goals

1. **Meeting uploaden en omzetten in taken.** Ander probleem: lange opnames, meerdere sprekers, privacy. Komt in V2.
2. **Volledig handsfree automodus, CarPlay of Android Auto.** In V1 tik je één keer om te praten. Volledig handsfree vraagt veiligheids- en platformwerk dat de lancering vertraagt.
3. **Desktop en web.** Spraak is vooral waardevol op mobiel. Op desktop is typen snel genoeg.
4. **Andere talen dan Engels.** Eerst kwaliteit bewijzen in één taal.
5. **Complexe bulkopdrachten**, zoals "move all of Tim's tasks to next week". Het risico op grote fouten is te hoog voor V1.

# Solution Alignment

## Key Features

**Plan of record (V1, iOS en Android)**

1. **Assistent-scherm als startpunt op mobiel.** Grote microfoonknop, gespreksgeschiedenis van vandaag, onderaan een link naar de lijst.
2. **Taak maken met spraak.** "Create a task to…", "Remind me to…".
3. **AI vult automatisch in:** titel, deadline, project en toegewezen persoon, op basis van wat je zegt en je bestaande projecten en teamleden.
4. **Altijd bevestigen vóór opslaan.** Een kaart met de ingevulde velden. Je zegt "yes", tikt op opslaan of past iets aan ("make it Thursday").
5. **Eenvoudig bijwerken met spraak.** "Set the deadline to Friday", "Mark it as done".
6. **Vragen stellen aan je lijst.** "What's on my list today?" De assistent leest de taken voor en toont ze.
7. **Doorvragen bij onduidelijkheid.** Bij twijfel over persoon, project of taak stelt de assistent één korte vraag.
8. **Ongedaan maken.** Na elke actie kun je "undo" zeggen of tikken.

**Future considerations**

1. Meeting naar taken (V2). Ontwerp de assistent zo dat een opname later als invoer kan dienen.
2. Volledig handsfree automodus, CarPlay en Android Auto.
3. Voorstellen voor de volgende stap en samenvattingen van lange threads.
4. Meer talen, waaronder Nederlands.
5. Bulkopdrachten, met extra bevestiging.
6. Assistent op desktop en web.

### Key Flows

**Flow 1: Taak maken (hoofdflow)**
1. Gebruiker opent de app en komt op het assistent-scherm.
2. Tikt op de microfoon en spreekt: "Remind me to send the quote to Sanne on Friday."
3. De assistent toont de tekst live en daarna een bevestigingskaart: titel, deadline (vr 16 okt), persoon (Sanne), project.
4. Gebruiker zegt "yes" of tikt op Opslaan. De taak staat in de lijst. De assistent zegt kort "Opgeslagen" met een knop Ongedaan maken.

**Flow 2: Doorvragen**
1. Gebruiker: "Tim needs to fix the login thing."
2. Assistent: "Welke Tim bedoel je?" en toont twee opties.
3. Gebruiker kiest. De assistent toont de bevestigingskaart.

**Flow 3: Bijwerken**
1. Gebruiker: "Mark the quote for Sanne as done."
2. Assistent toont de gevonden taak: "Deze markeren als klaar?"
3. Bevestigen, klaar.

**Flow 4: Vragen**
1. Gebruiker: "What's on my list today?"
2. Assistent noemt het aantal en de eerste drie taken, en toont de volledige lijst eronder.

**Flow 5: Mislukte herkenning**
1. Geen of onduidelijke spraak (lawaai, slechte verbinding).
2. Assistent: "Ik heb je niet goed verstaan. Probeer het nog eens of typ je taak." Typen is altijd mogelijk.

### Key Logic

1. **Nooit opslaan zonder bevestiging.** Geldt voor maken, wijzigen en afvinken.
2. **Eén vraag tegelijk.** Doorvragen is kort en heeft maximaal twee rondes. Daarna maakt de assistent een taak met lege velden en markeert die als "nog aanvullen".
3. **Bij twijfel niet raden.** Onder een vertrouwensdrempel vraagt de assistent het na in plaats van een veld in te vullen.
4. **Relatieve datums** ("Friday", "next week") worden omgezet in de tijdzone van de gebruiker. De kaart toont altijd de echte datum.
5. **Gedeelde projecten:** bij een taak voor een ander of in een gedeeld project laat de kaart duidelijk zien wie de taak ziet. De assistent waarschuwt bij een mogelijke dubbele taak ("Er bestaat al 'Offerte Sanne'. Toch een nieuwe maken?").
6. **Rechten:** de assistent kan alleen doen wat de gebruiker zelf mag doen in TaskFlow.
7. **Privacy:** audio wordt niet bewaard na het omzetten naar tekst. Gebruikers worden hierover bij de eerste keer geïnformeerd.
8. **Snelheid:** de bevestigingskaart verschijnt binnen 2 seconden na het einde van de spraak (p90).
9. **Altijd een uitweg:** typen, Ongedaan maken en Annuleren zijn altijd beschikbaar.
10. **Meten:** we loggen per taak of velden na opslaan zijn aangepast of de taak is verwijderd, voor de guardrail van 15%.

# Development and Launch Planning

**Key milestones**

| Mijlpaal | Wat | Wanneer (indicatief) |
|---|---|---|
| Ontwerp en prototype | Gespreksontwerp, bevestigingskaart, testen met 8 gebruikers | Sprint 1–2 |
| Technische basis | Spraak-naar-tekst, AI voor invullen, koppeling met taken-API | Sprint 2–4 |
| Interne alpha | Team TaskFlow gebruikt het dagelijks | Sprint 5 |
| Bèta | 50 klantbedrijven, opt-in, focus op de drie persona's | Sprint 6–7 |
| Lancering | Alle mobiele gebruikers (Engels), gefaseerd uitrollen | Sprint 8 |
| Evaluatie | Adoptie, herhaling en guardrails na 3 maanden | Lancering + 3 maanden |

**Operational checklist**

| Onderdeel | Actie | Eigenaar |
|---|---|---|
| Privacy en juridisch | Toestemming microfoon, verwerking audio, verwerkersafspraken AI-leverancier | Legal / PM |
| Kosten | Kosten per spraakopdracht schatten en bewaken; prijsbeslissing (AI-add-on?) | PM / Finance |
| Support | Help-artikelen en scripts voor veelgestelde vragen | Customer Success |
| Marketing | Lanceringsbericht, app store-teksten | Marketing |
| Monitoring | Dashboard voor adoptie, correcties en fouten | Engineering |
| Feedback | Knop "Klopt dit niet?" in de assistent | Design / PM |

---

## Other

**Risks**
- **Gedragsverandering:** gebruikers kiezen toch de lijst. *Maatregel:* onboarding met één voorbeeldopdracht, en de lijst blijft één tik weg.
- **AI-fouten:** verkeerde persoon of datum schaadt vertrouwen, vooral in gedeelde projecten. *Maatregel:* altijd bevestigen, doorvragen, ongedaan maken.
- **Spraakherkenning in lawaai** (auto, straat). *Maatregel:* testen in echte omstandigheden in de bèta; typen als terugval.
- **Kosten van AI-calls** lopen op bij veel gebruik. *Maatregel:* limieten en monitoring vanaf de alpha.
- **Concurrentie kopieert snel.** *Maatregel:* snel lanceren en doorbouwen op de assistent (V2).

**FAQ**
- *Verdwijnt de lijst?* Nee. De lijst blijft, maar de assistent is het startpunt op mobiel.
- *Waarom niet meteen meetings?* Ander probleem met eigen risico's. Eerst de basis goed.
- *Kost het extra?* Nog te beslissen. Onderzoek wijst op bereidheid tot $7 per gebruiker per maand.

**Changelog**
- 2026-10-08: eerste concept (Myrthe Gillis).
