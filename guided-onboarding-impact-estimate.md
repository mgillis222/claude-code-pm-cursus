# Impactinschatting: begeleide onboarding met voorbeeldproject

**Auteur:** Myrthe Gillis, Senior PM Activatie
**Datum:** 2026-10-08
**Methode:** [impact-estimation-framework.md](impact-estimation-framework.md)
**Achtergrond:** [activation-problem-analysis.md](activation-problem-analysis.md)

```
Impact = Bereikte gebruikers × Huidig actiepercentage × Verwachte stijging × Waarde per actie
```

---

## 1. Huidige situatie

| Maatstaf | Waarde | Bron |
|---|---:|---|
| Nieuwe aanmeldingen per maand | 5.000 | Bedrijfscijfers |
| Activatiegraad (eerste taak afgerond) | 45% | Mixpanel-funnel Q4, 10.000 gebruikers |
| Geactiveerde gebruikers per maand | 2.250 | 5.000 × 45% |
| Mediane tijd van taak aanmaken tot afronden | 45 min | Mixpanel-funnel Q4 |
| Geactiveerd → betalende klant | 60% | Raamwerk |
| Omzet per betalende gebruiker (ARPU) | $12 per maand | Raamwerk |
| Gemiddelde klantduur | 24 maanden | Raamwerk |
| **Waarde per extra activatie** | **$172,80** | $12 × 24 × 60% |

### Controle met de ruwe gebruiksdata

Ter controle heb ik de event-export `taskflow-usage-data-q4.csv` geanalyseerd (een steekproef van 250 aanmeldingen, okt–dec 2024):

| Bedrijfsgrootte | Gebruikers | Geactiveerd | Activatiegraad |
|---|---:|---:|---:|
| 5–20 personen | 147 | 42 | 28,6% |
| 21–99 personen | 82 | 33 | 40,2% |
| 100+ personen | 21 | 5 | 23,8% |
| **Totaal** | **250** | **80** | **32,0%** |

- Mediane tijd van aanmelden tot eerste afgeronde taak: **94 minuten**.
- In deze steekproef ligt de activatie lager dan in de officiële funnel (32% tegenover 45%). De steekproef is klein, dus voor het model gebruiken we de **45% uit de volledige Mixpanel-funnel**. Het verschil is wel een reden om de definitie van "activatie" in beide bronnen te controleren.
- **Belangrijk signaal:** kleine teams (5–20), onze doelgroep, activeren in de steekproef duidelijk slechter dan middelgrote teams. Dat bevestigt de enquête: juist zij lopen vast op het lege beginscherm.

---

## 2. Verwachte impact (realistisch scenario)

### Bereikte gebruikers
- 5.000 aanmeldingen per maand × **70%** die de begeleide onboarding ziet = **3.500 per maand**
- Waarom 70%: geleidelijke uitrol, alleen voor nieuwe aanmeldingen, en een deel slaat de begeleiding over.

### Verwachte stijging: van 45% naar 58% (+13 procentpunten)
- 60% van de gebruikers die een taak aanmaken, rondt die niet af. Volgens de enquête gaat 86% van de verwarring over het lege beginscherm en het gebrek aan voorbeelden.
- Als we die verwarring wegnemen en daarmee 30% van de uitval terugwinnen, levert dat ongeveer +18 procentpunten op.
- We nemen bewust een voorzichtiger getal: **+13 procentpunten**.

### Berekening

| Stap | Berekening | Uitkomst |
|---|---|---:|
| Nu geactiveerd (van de bereikte groep) | 3.500 × 45% | 1.575 per maand |
| Verwacht geactiveerd | 3.500 × 58% | 2.030 per maand |
| **Extra geactiveerde gebruikers** | 2.030 − 1.575 | **+455 per maand** |

### Omzet

| Maatstaf | Berekening | Uitkomst |
|---|---|---:|
| Extra MRR per maandcohort | 455 × 60% × $12 | $3.276 |
| Extra ARR per maandcohort | $3.276 × 12 | **≈ $39.300** |
| Levenslange waarde van een jaar aan cohorten | 455 × 12 maanden × $172,80 | **≈ $943.000** |

**Let op bij het lezen:** de $39.300 is wat *één maand* aan extra activaties per jaar oplevert. Omdat er elke maand een nieuwe groep bij komt, stapelt de omzet in werkelijkheid op. De jaar-1-ROI hieronder is dus een voorzichtige ondergrens.

---

## 3. Investering

| Onderdeel | Kosten |
|---|---:|
| Engineering (4 maanden) | $100.000 |
| **Totaal** | **$100.000** |

---

## 4. ROI

| Horizon | Berekening | ROI |
|---|---|---:|
| Jaar 1 (één maandcohort, voorzichtig) | $39.300 / $100.000 | **0,39x** |
| Levenslange waarde over 3 jaar | $943.000 / $100.000 | **9,4x** |

---

## 5. Aannames en risico's

**Aannames**
- 70% van de nieuwe gebruikers ziet de begeleide onboarding.
- De activatie stijgt van 45% naar 58%.
- 60% van de geactiveerde gebruikers wordt betalende klant, met $12 ARPU en een klantduur van 24 maanden.
- Effecten op retentie zijn **niet** meegerekend.

**Risico's**
- De stijging valt lager uit dan verwacht.
- De onboarding werkt niet voor iedere doelgroep. Grotere bedrijven hebben andere problemen (zie de probleemanalyse).
- De twee databronnen geven een andere activatiegraad (45% tegenover 32%).

**Hoe we het risico verkleinen**
- Uitbrengen als A/B-test, eerst met een deel van de nieuwe aanmeldingen.
- Resultaten per bedrijfsgrootte bekijken.
- Drie scenario's uitwerken om de bandbreedte te laten zien.
