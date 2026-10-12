// A one-time burst of confetti in the warm coffee palette, falling over the whole screen.

const COLORS = ["#8b5a3c", "#c98e62", "#e9c9a6", "#a0714f", "#f6e7d4", "#d4a373", "#6b4129"];
const PIECES = 90;

// Deterministic "random" so the confetti renders the same on every render.
function rand(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export default function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: PIECES }, (_, i) => {
        const round = rand(i + 7) > 0.65;
        return (
          <span
            key={i}
            style={{
              left: `${rand(i) * 100}%`,
              width: `${6 + rand(i + 1) * 6}px`,
              height: round ? `${6 + rand(i + 1) * 6}px` : `${10 + rand(i + 2) * 10}px`,
              borderRadius: round ? "50%" : "2px",
              background: COLORS[i % COLORS.length],
              animationDelay: `${rand(i + 3) * 0.8}s`,
              animationDuration: `${2.6 + rand(i + 4) * 1.8}s`,
              ["--drift" as string]: `${(rand(i + 5) - 0.5) * 160}px`,
              ["--spin" as string]: `${(rand(i + 6) > 0.5 ? 1 : -1) * (360 + rand(i + 6) * 720)}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
