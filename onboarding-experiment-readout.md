# Experimentverslag: begeleide onboarding met voorbeeldproject

**Auteur:** Myrthe Gillis, Senior PM Activatie
**Datum:** 2026-10-08
**Experiment:** A/B-test, 4 weken, 8.000 nieuwe gebruikers (4.000 controle, 4.000 test)
**Data:** `onboarding-experiment-results.csv` (export uit LaunchDarkly)
**Achtergrond:** [probleemanalyse](activation-problem-analysis.md) · [impactinschatting](guided-onboarding-impact-estimate.md) · [ROI-scenario's](guided-onboarding-roi-scenarios.md)

---

## Samenvatting

✅ **UITROLLEN naar 100% van de kleine teams (5–20 personen)**
⏸️ **NIET uitrollen voor middelgrote (21–99) en grote bedrijven (100+)**: geen effect. Daarvoor starten we apart onderzoek.

**Waarom**
- Kleine teams, onze doelgroep: activatie **+10,8 procentpunten** (45,6% → 56,3%, p < 0,001), dicht bij de geschatte +13.
- Geactiveerde gebruikers blijven veel beter hangen: retentie in week 1 **71% → 95%**, en ze ronden **2,4x zoveel taken** af.
- Vroege signalen zijn sterk: **3,1x** zoveel gebruik van templates en **2,8x** zoveel uitnodigingen aan collega's.
- Voor grotere bedrijven doet de feature niets (+0,4 en −1,3 procentpunten, niet significant).

---

## 1. Resultaten op hoofdlijnen (en waarom die misleiden)

| Groep | Gebruikers | Geactiveerd | Activatie |
|---|---:|---:|---:|
| Controle | 4.000 | 1.826 | 45,6% |
| Test | 4.000 | 2.084 | 52,1% |
| **Verschil** | | | **+6,5 pp** (p < 0,001; 95%-BI +4,3 tot +8,6) |

Het effect is echt, maar maar de helft van de verwachte +13 procentpunten. **Op basis van dit getal alleen zouden we de feature onderschatten.** Het totaal mengt een groep waar het heel goed werkt met groepen waar het niets doet.

## 2. Analyse per bedrijfsgrootte: het echte verhaal

| Bedrijfsgrootte | Controle | Test | Verschil | p-waarde | 95%-BI |
|---|---:|---:|---:|---:|---|
| **5–20 (doelgroep)** | 45,6% (1.094/2.400) | **56,3%** (1.352/2.400) | **+10,8 pp** | < 0,001 | +7,9 tot +13,6 |
| 21–99 | 45,5% (546/1.200) | 45,9% (551/1.200) | +0,4 pp | 0,84 | −3,6 tot +4,4 |
| 100+ | 46,5% (186/400) | 45,2% (181/400) | −1,3 pp | 0,72 | −8,2 tot +5,7 |

**Interpretatie**
- Kleine teams hebben nog geen vaste werkwijze. Voorbeeldtaken geven ze precies het houvast dat ontbrak. Dit sluit aan bij de enquête: bij 95% van de kleine teams ging de verwarring over het lege beginscherm.
- Grotere bedrijven hebben complexere behoeften. Bij hen ging ruim een kwart van de klachten over de interface zelf. Eenvoudige voorbeelden lossen dat niet op.
- De groep 100+ is klein (800 gebruikers). Een negatief effect kunnen we niet uitsluiten, en er is zeker geen positief effect.

## 3. Kwaliteit: betere gebruikers, niet alleen meer

Alleen geactiveerde gebruikers.

| Maatstaf | Controle | Test | Verschil |
|---|---:|---:|---:|
| Retentie week 1 (actief op 3+ dagen) | 70,9% | **95,3%** | **+24,4 pp** (p < 0,001) |
| Afgeronde taken in week 1 (gemiddeld) | 2,6 | **6,4** | **2,4x** (p < 0,001) |
| Tijd tot eerste afgeronde taak (gemiddeld) | 45 min | **19 min** | **−58%** |

De extra activaties zijn geen "lege" activaties. Gebruikers uit de testgroep worden in week 1 al echte powerusers.

## 4. Vroege signalen

| Maatstaf | Controle | Test | Verschil |
|---|---:|---:|---:|
| Gebruikt templates | 11,5% | **35,4%** | **3,1x** (p < 0,001) |
| Nodigt collega uit tijdens onboarding | 12,2% | **34,6%** | **2,8x** (p < 0,001) |

- **Uitnodigingen** zijn een sterke voorspeller: volgens eerdere TaskFlow-data hebben gebruikers die een collega uitnodigen een 2,8x hogere retentie na 30 dagen.
- **Templates:** gebruikers pakken ze op, maar binnen dezelfde groep ronden templategebruikers niet meer taken af dan anderen. Het succes komt van de onboarding als geheel. Templates zijn een signaal van adoptie, geen bewezen oorzaak.

## 5. Verwachte impact bij uitrol naar kleine teams

| Aanname | Waarde |
|---|---:|
| Nieuwe aanmeldingen per maand | 5.000 |
| Aandeel kleine teams (zoals in het experiment) | 60% → 3.000 per maand |
| Bereik (alle kleine teams krijgen het) | 100% |
| Gemeten stijging | +10,8 pp |
| **Extra geactiveerde gebruikers** | **≈ +324 per maand** |
| Extra ARR per maandcohort (324 × 60% × $12 × 12) | ≈ $28.000 |
| Levenslange waarde van een jaar aan cohorten (324 × 12 × $172,80) | ≈ $672.000 |
| **ROI over 3 jaar** (investering $100.000) | **≈ 6,7x** |

Dit ligt tussen ons pessimistische (1,6x) en realistische (9,4x) scenario in. **En het is een ondergrens:** de veel hogere retentie (95% tegenover 71% in week 1) en het grotere aantal uitnodigingen zijn niet meegerekend. Die verhogen de levenslange waarde per klant.

## 6. Advies

1. **Uitrollen naar 100% van de kleine teams (5–20)**, deze week.
2. **Middelgrote en grote bedrijven houden de huidige onboarding.** Geen effect, en voor 100+ mogelijk iets negatief.
3. **Apart onderzoek starten naar onboarding voor grotere bedrijven**, met geavanceerdere voorbeelden en workflows en een betere interface.

## 7. Volgende stappen

| Wat | Wanneer | Eigenaar |
|---|---|---|
| Uitrol naar alle kleine teams | Deze week | PM + Engineering |
| Monitoren: activatie, retentie week 1, uitnodigingen | 2 weken na uitrol | PM + Data |
| Retentie na 30 en 90 dagen meten (bevestigt de LTV-winst) | 30/90 dagen | Data |
| Verschil in activatiedefinitie tussen Mixpanel (45%) en event-export (32%) uitzoeken | Volgende sprint | Data |
| Onderzoek naar onboarding voor grotere bedrijven | Start volgende maand | PM + User Research |

## 8. Lessen

- **Stop nooit bij het totaalcijfer.** Het totaal (+6,5 pp) verborg een grote winst (+10,8 pp) bij de doelgroep.
- **Kijk naar kwaliteit, niet alleen naar aantallen.** Retentie en gebruik zeggen meer over de waarde dan activatie alleen.
- **Onderscheid signaal en oorzaak.** Meer templategebruik betekent niet automatisch dat templates het succes veroorzaken.
