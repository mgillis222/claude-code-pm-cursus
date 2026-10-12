"use client";

import { useState } from "react";
import { calculateResult, personalities, questions, type Answer, type PersonalityId } from "../quiz-data";
import QuizQuestion from "./QuizQuestion";
import Result from "./Result";

export default function Quiz() {
  const [chosen, setChosen] = useState<PersonalityId[]>([]);

  const finished = chosen.length === questions.length;

  function handleAnswer(answer: Answer) {
    setChosen((prev) => [...prev, answer.personality]);
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-14">
      <div className="relative w-full max-w-[560px] rounded-[18px] bg-cream px-6 pt-11 pb-9 shadow-[0_20px_50px_rgba(90,50,20,0.25)] sm:px-9">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[2.5rem]" aria-hidden="true">
          ☕
        </div>

        {finished ? (
          <Result personality={personalities[calculateResult(chosen)]} onRestart={() => setChosen([])} />
        ) : (
          <QuizQuestion
            key={chosen.length}
            question={questions[chosen.length]}
            index={chosen.length}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </main>
  );
}
