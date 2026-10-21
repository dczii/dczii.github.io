type Star = {
  id: number;
  x: number;
  y: number;
  r: number;
  o: number;
  glow: boolean;
};

function round(value: number, places: number) {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function createStars(): Star[] {
  let seed = 20260321;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  return Array.from({ length: 28 }, (_, id) => {
    const glow = rand() > 0.72;
    return {
      id,
      x: round(rand() * 1600, 1),
      y: round(rand() * 900, 1),
      r: glow ? 2.2 : 1.35,
      o: round(glow ? 0.62 + rand() * 0.2 : 0.34 + rand() * 0.22, 2),
      glow,
    };
  });
}

const STARS = createStars();

const skyStars = (
  <svg className='sky-stars' viewBox='0 0 1600 900' preserveAspectRatio='xMidYMid slice'>
    {STARS.map((star) => (
      <g key={star.id}>
        {star.glow ? <circle cx={star.x} cy={star.y} r='8' fill='#d7e7ff' opacity='0.1' /> : null}
        <circle cx={star.x} cy={star.y} r={star.r} fill='#f3f7ff' opacity={star.o} />
      </g>
    ))}
  </svg>
);

export default function Sky() {
  return (
    <div className='sky' aria-hidden='true'>
      {skyStars}
    </div>
  );
}
