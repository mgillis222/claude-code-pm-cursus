import type { Personality } from "../quiz-data";
import Confetti from "./Confetti";

type Props = {
  personality: Personality;
  onRestart: () => void;
};

export default function Result({ personality, onRestart }: Props) {
  return (
    <>
      {/* Outside the animated wrapper, so the confetti covers the whole screen */}
      <Confetti />

      <div className="fade-in text-center">
        <p className="text-sm tracking-wide text-caramel">Your coffee personality is</p>

        <div className="my-4 text-6xl" aria-hidden="true">
          {personality.emoji}
        </div>

        <h1 className="font-serif text-4xl font-bold">{personality.name}</h1>
        <p className="mt-3 text-lg italic text-caramel">&ldquo;{personality.tagline}&rdquo;</p>

        <div className="mx-auto mt-8 max-w-sm rounded-xl border border-foam bg-milk px-6 py-5">
          <p className="text-sm tracking-wide text-caramel">Your perfect cup</p>
          <p className="mt-1 font-serif text-2xl font-bold">☕ {personality.coffee}</p>
        </div>

        <button
          type="button"
          onClick={onRestart}
          className="mt-8 rounded-xl bg-espresso px-7 py-3.5 text-[1.05rem] font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-roast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso cursor-pointer"
        >
          Take the quiz again
        </button>
      </div>
    </>
  );
}
