# Claude Code voor PM's (cursus)

## Doel
Myrthe volgt de cursus "Claude Code for Product Managers" (https://ccforpms.com). Elke les start je
met een slash-commando, bijvoorbeeld `/start-1-1`. Daarna leidt Claude je interactief door de les.

## Herkomst
- Lesmateriaal: map `course-materials` uit https://github.com/carlvellotti/free-ai-courses,
  opgehaald met Git op 2026-10-08.
- De officiële installatie loopt via de "FSPM CLI" (`fspm`). Die is bewust niet geïnstalleerd, omdat er
  op de werklaptop niets geïnstalleerd mag worden. Het lesmateriaal is gewoon gekopieerd.
- Updates van de cursus: opnieuw ophalen uit de GitHub-repo (sparse checkout van `course-materials`,
  met `core.longpaths=true` omdat sommige paden te lang zijn voor Windows).

## Belangrijke bestanden
- `.claude/commands/start-*.md` en `.claude/skills/start-*`: de lessen
- `lesson-modules/`: lesscripts per module (0 starten, 1 basis, 2 PM-werk, 3 Nano Banana, 4 vibe coding)
- `company-context/`: het fictieve oefenbedrijf TaskFlow
- `outputs/`: hier komt het werk dat je tijdens de lessen maakt

## Besluiten
- Alleen het fictieve TaskFlow-materiaal gebruiken, geen Picnic-informatie.

## Kosten
- De lessen zelf vallen onder het Claude-abonnement.
- Module 3 (Nano Banana) gebruikt de Google Gemini API (`requirements.txt`: google-genai) en een API-sleutel
  in `.env`. Dat kan geld kosten. Eerst overleggen, en Python draait in WSL in een eigen `.venv`.
