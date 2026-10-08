# Probleemanalyse: activatie bij TaskFlow

**Auteur:** Myrthe Gillis, Senior PM Activatie
**Datum:** 2026-10-08
**Status:** Ter bespreking met het management

---

## Samenvatting

De activatiegraad van TaskFlow zit al 6 maanden vast op 45%. Het grootste lek zit tussen **een eerste taak aanmaken en die afronden**: 60% van de gebruikers die een taak aanmaakt, rondt hem nooit af. Uit de enquête blijkt waarom: nieuwe gebruikers staren naar een leeg project en weten niet wat ze moeten aanmaken of hoe een goede taak eruitziet. Dit speelt het sterkst bij **kleine teams (5–20 personen)**, onze belangrijkste doelgroep.

**Voorstel:** een begeleide onboarding met een voorbeeldproject vol voorbeeldtaken, in plaats van een leeg project.

---

## 1. Het probleem

**60% van de gebruikers die een taak aanmaken, rondt die nooit af.** Dit is de grootste uitval in de hele activatiefunnel.

## 2. Kwantitatief bewijs: de funnel

Bron: Mixpanel-export, Q4 (`activation-funnel-q4.csv`), 10.000 aanmeldingen.

| Stap | Gestart | Geslaagd | Slagingspercentage | Mediane tijd |
|------|--------:|---------:|-------------------:|-------------:|
| Aanmelden | 10.000 | 10.000 | 100% | 0 min |
| Eerste taak aangemaakt | 10.000 | 7.200 | 72% | 18 min |
| **Eerste taak afgerond** | **7.200** | **2.880** | **40%** | **45 min** |
| Uitnodiging verstuurd | 2.880 | 1.440 | 50% | 24 min |

**Wat dit zegt**
- De drempel om te *beginnen* is laag: 72% maakt een taak aan.
- Daarna gaat het mis: 4.320 gebruikers (60%) ronden hun eerste taak niet af.
- Wie wél afrondt, nodigt in de helft van de gevallen een collega uit. Activatie is dus ook de motor van groei via teams.

## 3. Kwalitatief bewijs: de enquête

Bron: `user-survey-responses.csv`, 800 recent aangemelde gebruikers.

**Grootste verwarring tijdens de onboarding (gegroepeerd)**

| Thema | Aantal | Aandeel |
|---|---:|---:|
| Overweldigd door het lege project en de vele opties | 234 | 29% |
| Wist niet wat ik moest aanmaken | 230 | 29% |
| Had voorbeelden of templates nodig | 224 | 28% |
| Gewone bruikbaarheidsproblemen (navigatie, klikken) | 112 | 14% |

**86%** van de verwarring gaat dus over *het lege beginscherm en het gebrek aan voorbeelden*, niet over de interface zelf.

**Letterlijke antwoorden van gebruikers**
- *"Stared at empty project not knowing what to do"*
- *"Would help to see what a good task looks like"*
- *"Paralyzed by all the empty fields"*
- *"Show me a sample project"*

**Wat gebruikers vragen**
- 64% wil templates, voorbeelden of een voorbeeldproject
- 22% wil een eenvoudigere onboarding
- 14% wil betere hulpdocumentatie

## 4. Wie het hardst geraakt wordt

| Bedrijfsgrootte | Antwoorden | Verwarring door leeg beginscherm / geen voorbeelden | Gewone bruikbaarheidsproblemen |
|---|---:|---:|---:|
| **5–20 personen** | 467 | **95%** | 5% |
| 21–99 personen | 253 | 73% | 27% |
| 100+ personen | 80 | 74% | 26% |

**Kleine teams zijn onze doelgroep, en juist zij lopen hier het hardst tegenaan.** Ze hebben nog geen vaste werkwijze en zoeken die al doende uit. Een leeg project geeft ze geen houvast. Grotere bedrijven hebben vaker last van de interface zelf.

## 5. Voorgestelde oplossing: begeleide onboarding met een voorbeeldproject

Nieuwe gebruikers krijgen na het aanmelden geen leeg project te zien, maar een **voorbeeldproject met 5–6 voorbeeldtaken**. Elke taak laat zien hoe een goede taak eruitziet:
- een duidelijke titel
- een uitgebreide beschrijving
- een eigenaar
- een deadline
- waar zinvol: subtaken, labels en een opmerking met @-mention

Gebruikers ronden de voorbeeldtaken af om het systeem te leren kennen. Daarna maken ze een eigen project aan voor hun echte werk, eventueel op basis van een template.

**Waarom dit werkt**
- Het pakt precies de drie grootste thema's uit de enquête aan: leeg scherm, niet weten wat je moet aanmaken en geen voorbeelden.
- Het is wat 64% van de respondenten zelf vraagt.
- Gebruikers van Asana verwachten dit al ("starter templates"), dus het sluit aan bij wat ze kennen.

## 6. Verwachte uitkomst

- **Minder uitval tussen aanmaken en afronden van de eerste taak**, doordat beginnen minder intimiderend wordt.
- Een hogere activatiegraad, vooral bij kleine teams.
- Indirect meer uitnodigingen aan collega's, omdat meer mensen de stap "eerste taak afgerond" halen.

De zakelijke impact (hoeveel extra geactiveerde gebruikers en wat dat oplevert) werken we uit in de impactinschatting.

## 7. Open vragen

- Werkt één voorbeeldproject voor alle rollen (PM, engineer, marketing), of zijn er varianten per rol nodig?
- Moeten grotere bedrijven (100+) dezelfde onboarding krijgen, gezien hun andere problemen?
- Hoe voorkomen we dat voorbeeldtaken als "rommel" in het account blijven staan?
