# Samenvatting gebruikersonderzoek: TaskFlow

*Gemaakt door Claude op basis van 8 interviews in `user-interviews/` (5-13 oktober). Citaten staan in de originele taal.*

---

## In één oogopslag

| | |
|---|---|
| **Aantal interviews** | 8 (enterprise-admin, engineer, engineering manager, designer, customer success, marketing, sales ops, junior PM) |
| **Grootste klacht** | Dark mode ontbreekt: genoemd door **8 van de 8** |
| **Grootste kans voor activatie** | Sjablonen tegen het "leeg scherm"-gevoel: **7 van de 8** |
| **Grootste kracht** | Snelheid: TaskFlow voelt sneller dan Monday.com, Asana en Jira |

**Kernconclusie:** gebruikers zijn tevreden over de basis (snel, overzichtelijk, niet te ingewikkeld). Maar steeds weer lopen ze tegen dezelfde vier dingen aan: geen dark mode, steeds opnieuw dezelfde projectstructuur opbouwen, te veel notificaties en een zwakke mobiele ervaring. Sjablonen en betere notificaties hebben de meeste invloed op het activatiedoel (van 45% naar 60%).

---

## Top 5 pijnpunten

### 1. Geen dark mode: 8 van de 8 🔴
Iedereen noemt het, ongeacht de rol. Er wordt vaak 's avonds gewerkt, door verschillende tijdzones of lange werkdagen. Gebruikers proberen het nu op te lossen met browserextensies die de interface kapotmaken.

> "This is like the #1 thing I want." (David, engineer)
> "Oh man, the lack of dark mode is killing me." (Maya, designer)
> "It's a running joke on our team Slack." (Sarah, marketing)

### 2. Steeds opnieuw dezelfde projectstructuur opbouwen (geen sjablonen): 7 van de 8 🔴
Bijna iedereen bouwt terugkerende projecten met de hand na: onboarding van nieuwe medewerkers, klant-onboarding, campagnes, sprints. Nieuwe gebruikers weten niet waar ze moeten beginnen.

> "I've literally copy-pasted the same project structure 15 times this quarter." (James, customer success)
> "I created my first project and was like... now what?" (Priya, junior PM)
> "People stare at a blank screen and don't know what to do." (Rachel, IT-admin)
> "I'd save probably 30 minutes per campaign." (Sarah, marketing)

**Voor 3 van de 8 de functie die ze het liefst willen** (James, Marcus, Priya).

### 3. Mobiele ervaring schiet tekort: 7 van de 8 🔴
De mobiele website is traag en onhandig, je moet veel scrollen en het is lastig om taken bij te werken. Wie veel onderweg is (sales, customer success, marketing) stelt werk uit tot hij of zij weer achter de laptop zit.

> "I end up waiting until I'm back at my hotel to do updates." (Marcus, sales ops)
> "Sometimes I wait until I'm back at my laptop, which delays customer responses." (James, customer success)

### 4. Te veel notificaties: 6 van de 8 🟠
Gebruikers krijgen 30 tot 70 meldingen per dag, zetten de meeste uit en **missen daardoor juist belangrijke updates**. Iedereen vraagt om hetzelfde: urgente zaken direct, de rest gebundeld in een dagelijks overzicht.

> "Someone breathes near a task I'm watching, I get an email." (David, engineer)
> "I get probably 60-70 notifications a day. I've had to turn most off." (Marcus, sales ops)
> "Alert me immediately if a task is tagged 'urgent'... but batch everything else into a morning digest." (James, customer success)

### 5. Rapporteren en status bijhouden kost veel handwerk: 4 van de 8 🟠
Managers en PM's zetten elke week met de hand statusupdates, deal reviews of feedbackpatronen in elkaar.

> "Right now I manually count completed tasks and make a slide deck." (Lisa, engineering manager)
> "I'm literally opening each project, scanning tasks, making notes." (Marcus, sales ops)
> "Takes like 20-30 minutes." (Priya, over haar wekelijkse update)

---

## Andere thema's (genoemd door minder mensen)

- **Samenwerking tussen teams loopt niet altijd goed** (3 van de 8: Lisa, Maya, James): werk begint voordat het ontwerp klaar is, taggen werkt niet altijd. Gebruikers willen verplichte stappen, afhankelijkheden en automatisch escaleren.
- **Blokkades zie je te laat** (Lisa, Marcus): taken die vastzitten zouden automatisch zichtbaar moeten worden.
- **Enterprise-eisen** (Rachel): uitgebreidere audit logs, fijnmaziger rechten, kosten per afdeling, keuze waar data wordt opgeslagen, een stabielere releasecyclus.
- **Integraties** (David, Marcus): Slack in twee richtingen, Salesforce, API voor automatiseringen.
- **Zoeken en sneltoetsen** (David, Priya): combinaties van filters, meer sneltoetsen.

---

## Wat goed werkt (niet kapotmaken!)

- **Snelheid:** 5 van de 8 noemen het spontaan, vaak als reden om over te stappen.
- **Eenvoud:** "simple but not TOO simple" (Lisa), een goede balans tussen Trello en Jira/Asana.
- **Overzicht en workload-weergave:** standups zijn soms overbodig geworden.
- **Aangepaste velden, GitHub-integratie, markdown en @mentions.**

---

## Wensen voor nieuwe functies, op prioriteit

| Prioriteit | Functie | Genoemd door | Waarom |
|---|---|---|---|
| 🔴 P0 | **Dark mode** | 8/8 | Universeel, morele boost, design is al grotendeels klaar |
| 🔴 P0 | **Sjablonenbibliotheek** (+ zelf sjablonen opslaan) | 7/8 | Lost het "leeg scherm"-probleem op, past direct bij het activatie-OKR, bespaart uren per maand |
| 🔴 P1 | **Slimme notificaties** (urgentieniveaus + dagelijks overzicht) | 6/8 | Gebruikers missen belangrijke updates, terugkerende klacht van enterprise-klanten |
| 🟠 P1 | **Betere mobiele ervaring** | 7/8 | Al gepland met de mobiele app in Q1 |
| 🟠 P2 | **Automatische rapportages en statusupdates** | 4/8 | Bespaart managers en PM's elke week tijd |
| 🟢 P3 | Afhankelijkheden en verplichte velden, automatisch escaleren | 3/8 | Belangrijk voor samenwerking tussen teams |
| 🟢 P3 | Enterprise-beheer (audit logs, rechten) | 1/8 | Klein aantal, maar hoge omzet per klant |

---

## Aanbevolen vervolgstappen

1. **Dark mode in Q1 houden.** Dat sluit aan op de vraag van alle 8 gebruikers en de huidige planning.
2. **Sjablonen + onboarding samen aanpakken.** Begin met 5-7 sjablonen voor de terugkerende situaties uit de interviews: onboarding van nieuwe medewerkers, klant-onboarding, productlancering/campagne, sprintplanning, feature-ontwikkeling. Laat ze direct na het aanmelden zien.
3. **Laat gebruikers hun eigen projecten als sjabloon opslaan.** Dat is wat James, Marcus en Lisa nu met de hand proberen.
4. **Notificaties: begin met de technische basis (asynchrone wachtrij) in Q1**, en het nieuwe ontwerp met urgentieniveaus en dagelijks overzicht in Q2. Dat ondersteunt het plan uit de product sync.
5. **Dit onderzoek valideren met data:** waar haken gebruikers af in de activatie-funnel, en hoeveel supporttickets gaan over notificaties?
6. **Vervolginterviews** met nieuwe gebruikers die *niet* geactiveerd zijn. Deze groep bestaat vooral uit actieve gebruikers, dus we horen nu weinig van mensen die afhaken.
