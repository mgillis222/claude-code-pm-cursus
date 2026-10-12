# Coffee Personality Quiz – Requirements

A short pop-culture quiz that matches people to a coffee personality and recommends one coffee.

## Language
- All quiz content in English (questions, answers, results, taglines).

## Personality → Coffee pairings (4)

| Code | Personality | Coffee | Tagline |
|------|-------------|--------|---------|
| BA | **Bold Adventurer** | Double Espresso | "You live for intensity" |
| CC | **Cozy Classic** | Medium Roast Drip | "Comfort in every cup" |
| SB | **Social Butterfly** | Cappuccino | "Coffee is better with company" |
| NO | **Night Owl** | Red Eye (coffee + espresso shot) | "Sleep is optional" |

## Quiz logic
- 6 questions, one at a time, 4 answers per question.
- Each answer maps to exactly one personality (see questions below).
- Every answer adds 1 point to its personality.
- After the last question, the personality with the most points wins.
- **Tie-breaker:** if two or more personalities share the highest score, the personality chosen on the last question that belongs to the tied group wins. (Walk back through the answers from the last question until one of the tied personalities is found.)
- Show progress (e.g. "Question 2 of 6").
- Result screen offers a "Take the quiz again" button that resets everything.

## Result display
- **Single recommendation:** show only the winning personality, its coffee, and its tagline.
- No percentages or breakdown of the other personalities.

## Visual style: Warm & cozy (based on `style-preview-4.html`)
- Background: soft warm gradient in earth tones (cream `#f6e7d4` → latte `#e9c9a6` → caramel `#c98e62`).
- Centered card in off-white (`#fffaf3`), rounded corners (~18px), soft brown shadow.
- Dark coffee-brown text (`#3b2a20`), accent color espresso brown (`#8b5a3c`).
- Headings in a serif font (Fraunces), body text in a rounded sans-serif (Nunito).
- Progress shown as small dots (filled for answered questions).
- Small ☕ "steam" accent on top of the card.
- Answer buttons: light beige, rounded; on hover they turn espresso brown with light text.
- Must work well on mobile.

## Images & icons
- **Images:** none for now (can be added later during iteration).
- **Icons:** yes, an emoji icon before every answer option (listed below).

## Questions

### 1. Which Hogwarts house would the Sorting Hat pick for you?
- 🦁 Gryffindor: brave, first into the Forbidden Forest → BA
- 🦡 Hufflepuff: the cozy common room next to the kitchens → CC
- 🐍 Slytherin: you know everyone worth knowing → SB
- 🦅 Ravenclaw: reading in the library long after curfew → NO

### 2. What are you binge-watching this weekend?
- 🏔️ A survival series in the wild → BA
- 🍂 Gilmore Girls, for the fifth time → CC
- 💬 A reality show, with the group chat on fire → SB
- 🔪 A true-crime docuseries at 2 a.m. → NO

### 3. Pick a fictional sidekick
- 🤠 Indiana Jones → BA
- 🧸 Paddington Bear → CC
- 🍕 Joey from Friends → SB
- 🦇 Batman → NO

### 4. Where would you live in a fictional world?
- 🦖 Jurassic Park (what could go wrong?) → BA
- 🏡 The Shire → CC
- ☕ Next door to Central Perk → SB
- 🌃 Gotham City → NO

### 5. Movie night: what's playing?
- 🎢 An action blockbuster → BA
- 🎄 A feel-good classic under a blanket → CC
- 🎤 Mamma Mia, with everyone singing along → SB
- 👻 A horror marathon until sunrise → NO

### 6. Your go-to karaoke song?
- 🔥 "Eye of the Tiger" → BA
- ☀️ "Here Comes the Sun" → CC
- 💃 "Dancing Queen" → SB
- 🌙 "Blinding Lights" → NO

## Nice to have (later)
- Shuffle the order of answers per question so the mapping isn't predictable.
- Coffee images on the result screen.
