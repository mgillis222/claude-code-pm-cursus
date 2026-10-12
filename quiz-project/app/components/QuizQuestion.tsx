import type { Answer, Question } from "../quiz-data";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswer: (answer: Answer) => void;
};

export default function QuizQuestion({ question, index, total, onAnswer }: Props) {
  return (
    <div className="fade-in">
      <p className="text-center text-sm tracking-wide text-caramel">
        Question {index + 1} of {total}
      </p>

      <div className="mt-3 mb-7 flex justify-center gap-2" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              i <= index ? "bg-espresso" : "bg-foam"
            }`}
          />
        ))}
      </div>

      <h1 className="mb-7 text-center font-serif text-2xl leading-snug font-bold sm:text-[1.75rem]">
        {question.question}
      </h1>

      <div className="flex flex-col gap-3">
        {question.answers.map((answer) => (
          <button
            key={answer.text}
            type="button"
            onClick={() => onAnswer(answer)}
            className="flex w-full items-center gap-4 rounded-xl border border-foam bg-milk px-5 py-4 text-left text-[1.05rem] transition-all duration-200 hover:-translate-y-0.5 hover:border-espresso hover:bg-espresso hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso cursor-pointer"
          >
            <span className="text-2xl" aria-hidden="true">
              {answer.icon}
            </span>
            <span>{answer.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
