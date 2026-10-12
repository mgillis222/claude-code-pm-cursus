// All quiz content lives here. Edit text, emoji or mappings without touching the components.

export type PersonalityId = "BA" | "CC" | "SB" | "NO";

export type Personality = {
  id: PersonalityId;
  name: string;
  coffee: string;
  tagline: string;
  emoji: string;
};

export type Answer = {
  icon: string;
  text: string;
  personality: PersonalityId;
};

export type Question = {
  question: string;
  answers: Answer[];
};

export const personalities: Record<PersonalityId, Personality> = {
  BA: {
    id: "BA",
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    emoji: "⚡",
  },
  CC: {
    id: "CC",
    name: "Cozy Classic",
    coffee: "Medium Roast Drip",
    tagline: "Comfort in every cup",
    emoji: "🛋️",
  },
  SB: {
    id: "SB",
    name: "Social Butterfly",
    coffee: "Cappuccino",
    tagline: "Coffee is better with company",
    emoji: "🦋",
  },
  NO: {
    id: "NO",
    name: "Night Owl",
    coffee: "Red Eye (coffee + espresso shot)",
    tagline: "Sleep is optional",
    emoji: "🦉",
  },
};

export const questions: Question[] = [
  {
    question: "Which Hogwarts house would the Sorting Hat pick for you?",
    answers: [
      { icon: "🦁", text: "Gryffindor: brave, first into the Forbidden Forest", personality: "BA" },
      { icon: "🦡", text: "Hufflepuff: the cozy common room next to the kitchens", personality: "CC" },
      { icon: "🐍", text: "Slytherin: you know everyone worth knowing", personality: "SB" },
      { icon: "🦅", text: "Ravenclaw: reading in the library long after curfew", personality: "NO" },
    ],
  },
  {
    question: "What are you binge-watching this weekend?",
    answers: [
      { icon: "🏔️", text: "A survival series in the wild", personality: "BA" },
      { icon: "🍂", text: "Gilmore Girls, for the fifth time", personality: "CC" },
      { icon: "💬", text: "A reality show, with the group chat on fire", personality: "SB" },
      { icon: "🔪", text: "A true-crime docuseries at 2 a.m.", personality: "NO" },
    ],
  },
  {
    question: "Pick a fictional sidekick",
    answers: [
      { icon: "🤠", text: "Indiana Jones", personality: "BA" },
      { icon: "🧸", text: "Paddington Bear", personality: "CC" },
      { icon: "🍕", text: "Joey from Friends", personality: "SB" },
      { icon: "🦇", text: "Batman", personality: "NO" },
    ],
  },
  {
    question: "Where would you live in a fictional world?",
    answers: [
      { icon: "🦖", text: "Jurassic Park (what could go wrong?)", personality: "BA" },
      { icon: "🏡", text: "The Shire", personality: "CC" },
      { icon: "☕", text: "Next door to Central Perk", personality: "SB" },
      { icon: "🌃", text: "Gotham City", personality: "NO" },
    ],
  },
  {
    question: "Movie night: what's playing?",
    answers: [
      { icon: "🎢", text: "An action blockbuster", personality: "BA" },
      { icon: "🎄", text: "A feel-good classic under a blanket", personality: "CC" },
      { icon: "🎤", text: "Mamma Mia, with everyone singing along", personality: "SB" },
      { icon: "👻", text: "A horror marathon until sunrise", personality: "NO" },
    ],
  },
  {
    question: "Your go-to karaoke song?",
    answers: [
      { icon: "🔥", text: "\"Eye of the Tiger\"", personality: "BA" },
      { icon: "☀️", text: "\"Here Comes the Sun\"", personality: "CC" },
      { icon: "💃", text: "\"Dancing Queen\"", personality: "SB" },
      { icon: "🌙", text: "\"Blinding Lights\"", personality: "NO" },
    ],
  },
];

// One point per answer; highest score wins. On a tie, walk back from the last
// answer and pick the first personality that belongs to the tied group.
export function calculateResult(chosen: PersonalityId[]): PersonalityId {
  const scores: Record<PersonalityId, number> = { BA: 0, CC: 0, SB: 0, NO: 0 };
  for (const id of chosen) scores[id] += 1;

  const best = Math.max(...Object.values(scores));
  const tied = (Object.keys(scores) as PersonalityId[]).filter((id) => scores[id] === best);
  if (tied.length === 1) return tied[0];

  for (let i = chosen.length - 1; i >= 0; i--) {
    if (tied.includes(chosen[i])) return chosen[i];
  }
  return tied[0];
}
