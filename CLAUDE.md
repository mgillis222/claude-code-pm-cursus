# Claude Code voor PM's (cursus)

## Doel
Myrthe volgt de cursus "Claude Code for Product Managers" (https://ccforpms.com). Elke les start je
met een slash-commando, bijvoorbeeld `/start-1-1`. Daarna leidt Claude je interactief door de les.

## Herkomst
- Lesmateriaal: map `course-materials` uit https://github.com/carlvellotti/free-ai-courses,
  opgehaald met Git op 2026-10-08.
- De "FSPM CLI" (`fspm`) staat wél op de laptop, in de eigen gebruikersmap
  (`AppData\Local\fspm`, geen beheerdersrechten nodig). Myrthe is ingelogd met haar Full Stack PM-account,
  zodat voortgang en certificaat worden bijgehouden (cursus-id `claude-code-for-pms`).
- Op 2026-10-08 zijn de lessen van level 1 (`.claude/skills/start-1-*` en `.claude/rules`) opnieuw
  geïnstalleerd met `fspm get claude-code-for-pms`. Alleen zo herkent `fspm` deze map als cursusmap
  en werkt `fspm progress complete`. De oude, gekopieerde versies staan in `_oud-lesmateriaal/`
  (niet in Git) en in de Git-geschiedenis; die map mag weg.
- `fspm` overschrijft nooit bestanden die het niet zelf heeft geïnstalleerd. Lukt een latere `fspm get`
  voor level 2 t/m 4 niet, zet dan eerst de gekopieerde lesmappen van dat level apart.
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
