# Communicatie: resultaten gebruikersonderzoek

*Gemaakt op basis van [user-research-synthesis.md](user-research-synthesis.md), in de stijlen uit [communication-styles](communication-styles/): Slack-update, e-mail aan het management en Notion-document.*

---

## 📱 1. Slack-update

*Stijl: [style-slack-update.md](communication-styles/style-slack-update.md). Doelgroep: het productteam.*

---

🎯 8 gebruikersinterviews afgerond, en het is opvallend eensgezind: **alle 8** willen dark mode, 7 van de 8 bouwen steeds dezelfde projecten met de hand na omdat er geen sjablonen zijn, en de meesten zetten hun notificaties uit (en missen dan juist belangrijke dingen).

💡 Goed nieuws: iedereen vindt TaskFlow lekker snel. De volledige samenvatting staat in #product-updates, input welkom vóór de sprintplanning van donderdag!

---

## 📧 2. E-mail aan het management

*Stijl: [style-executive-email.md](communication-styles/style-executive-email.md). Doelgroep: Sarah (Head of Product) en Mike (CTO).*

---

**Onderwerp: Resultaten gebruikersonderzoek: vier terugkerende knelpunten en aanbevelingen voor Q1**

We hebben 8 gebruikers gesproken, verspreid over enterprise-, team- en individuele rollen. Daar komen vier knelpunten met grote overeenstemming uit naar voren. Alle 8 gebruikers vragen om dark mode. 7 van de 8 bouwen terugkerende projecten steeds met de hand opnieuw op omdat sjablonen ontbreken, en ook 7 van de 8 vinden de mobiele ervaring onvoldoende. 6 van de 8 krijgen 30 tot 70 notificaties per dag, zetten de meeste uit en missen daardoor belangrijke updates.

Dit raakt direct aan ons activatie-OKR. Activatie staat nu op 45% met een doel van 60%, en nieuwe gebruikers doen er 45 minuten over om hun eerste taak af te ronden, tegenover ongeveer 15 minuten bij Linear. Het "leeg scherm"-probleem dat gebruikers beschrijven verklaart een groot deel van dat verschil. Daarnaast noemen enterprise-klanten de notificaties in verkoopgesprekken; dat segment levert gemiddeld $15K per deal op. Tegelijk bevestigt het onderzoek onze sterkste troef: snelheid is voor gebruikers vaak de reden geweest om over te stappen.

Ik adviseer om de herziene Q1-planning aan te houden: dark mode en een sjablonenbibliotheek met 5 tot 7 sjablonen voor web in Q1, plus de technische basis voor notificaties (asynchrone wachtrij). Het nieuwe notificatieontwerp volgt in Q2. Vóór de definitieve roadmap op 18 oktober valideer ik deze bevindingen met data over waar gebruikers afhaken en het aantal supporttickets. Ook stel ik voor om aanvullend gebruikers te interviewen die niet geactiveerd zijn, omdat deze groep vooral uit actieve gebruikers bestond.

---

## 📝 3. Notion-document

*Stijl: [style-notion-doc.md](communication-styles/style-notion-doc.md). Doelgroep: het hele bedrijf.*

---

# Onderzoeksrapport: wat 8 TaskFlow-gebruikers ons vertellen

**TL;DR:** in 8 interviews kwamen vier knelpunten steeds terug: geen dark mode (8/8), geen sjablonen (7/8), een zwakke mobiele ervaring (7/8) en te veel notificaties (6/8). Gebruikers waarderen vooral de snelheid. We adviseren dark mode en sjablonen in Q1, en de nieuwe notificaties verdeeld over Q1 (techniek) en Q2 (ontwerp).

## Achtergrond

Van 5 tot 13 oktober hebben we 8 gebruikers van TaskFlow geïnterviewd (24 tot 35 minuten per gesprek). We wilden weten waar gebruikers tegenaan lopen en welke verbeteringen het meeste bijdragen aan activatie en behoud.

**Deelnemers:**

| Rol | Bedrijf (grootte) | Abonnement |
|---|---|---|
| Director IT Operations | FinanceTech (650) | Enterprise (pilot) |
| Senior Backend Engineer | GrowthLabs (180) | Pro |
| Engineering Manager | DataFlow (220) | Pro |
| Senior Product Designer | CloudSync (95) | Pro |
| Customer Success Manager | TaskFlow (intern) | Enterprise |
| Head of Marketing | DevTools Inc (140) | Pro |
| Sales Operations Lead | Enterprise SaaS Co (280) | Enterprise |
| Associate Product Manager | FinTech Startup (65) | Pro |

## Belangrijkste bevindingen

### 1. Dark mode: 8 van de 8
Iedereen vraagt erom, ongeacht de rol. Teams werken 's avonds of over tijdzones heen. Browserextensies als noodoplossing maken de interface kapot.
- *"This is like the #1 thing I want."* (engineer)
- *"It's a running joke on our team Slack."* (Head of Marketing)

### 2. Geen sjablonen: 7 van de 8
Terugkerende projecten (onboarding, klanttrajecten, campagnes, sprints) worden steeds met de hand opnieuw opgebouwd. Nieuwe gebruikers blijven hangen bij een leeg scherm.
- *"I've literally copy-pasted the same project structure 15 times this quarter."* (customer success)
- *"I created my first project and was like... now what?"* (junior PM)

### 3. Mobiele ervaring: 7 van de 8
Wie veel onderweg is, stelt updates uit tot hij of zij weer achter de laptop zit. Dat vertraagt reacties naar klanten.
- *"I end up waiting until I'm back at my hotel to do updates."* (sales ops)

### 4. Te veel notificaties: 6 van de 8
30 tot 70 meldingen per dag. Gebruikers zetten de meeste uit en missen daardoor juist urgente updates.
- *"Someone breathes near a task I'm watching, I get an email."* (engineer)
- *"Alert me immediately if a task is tagged 'urgent'... but batch everything else into a morning digest."* (customer success)

### 5. Rapporteren kost veel handwerk: 4 van de 8
Managers en PM's maken elke week met de hand statusupdates en overzichten van deals.

> 💡 **Belangrijk inzicht:** het sjablonenprobleem en het activatieprobleem zijn hetzelfde probleem. Gebruikers met een sjabloon (vaak gekregen van een collega) komen veel sneller op gang dan gebruikers die met een leeg scherm beginnen.

## Wat goed werkt

- **Snelheid:** 5 van de 8 noemen het spontaan, vaak als reden om over te stappen van Monday.com, Asana of Jira
- **Eenvoud:** krachtig genoeg, maar niet overweldigend
- **Overzicht:** de workload-weergave maakt sommige standups overbodig
- **Aangepaste velden, GitHub-integratie, @mentions**

## Aanbevelingen

| Prioriteit | Initiatief | Draagvlak | Planning |
|---|---|---|---|
| P0 | Dark mode (web + mobiel) | 8/8 | Q1 |
| P0 | Sjablonenbibliotheek (5-7 sjablonen, + eigen project opslaan als sjabloon) | 7/8 | Q1 (web), Q2 (mobiel) |
| P1 | Notificaties: asynchrone wachtrij | 6/8 | Q1 |
| P1 | Notificaties: urgentieniveaus + dagelijks overzicht | 6/8 | Q2 |
| P2 | Automatische rapportages en statusupdates | 4/8 | Na Q1, nader te bepalen |

## Vervolgstappen

1. **Deze week:** data ophalen over waar gebruikers afhaken in de activatie en over het aantal notificatietickets
2. **16 oktober:** go/no-go voor de notificaties
3. **18 oktober:** Q1-roadmap definitief
4. **Daarna:** vervolginterviews met gebruikers die niet geactiveerd zijn

> ⚠️ **Kanttekening:** alle deelnemers zijn actieve gebruikers. We horen nog te weinig van mensen die afhaken.

**Eigenaar:** PM-team
**Betrokkenen:** Sarah (Product), Mike (Engineering), Jordan (Design), Jamie (Engineering), Alex (Mobiel)

*Gerelateerd: Q1-OKR's, analyse van de activatieratio, concurrentieonderzoek naar onboarding*
