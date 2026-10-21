export default function SpaceFallback({ hidden }: { hidden: boolean }) {
  return (
    <div className={hidden ? "space-fallback is-out" : "space-fallback"} aria-hidden='true'>
      <svg className='fallback-planet' viewBox='0 0 200 200'>
        <defs>
          <radialGradient id='mc-planet-body' cx='36%' cy='32%' r='68%'>
            <stop offset='0%' stopColor='#4e8eae' />
            <stop offset='42%' stopColor='#1d516c' />
            <stop offset='100%' stopColor='#0c1c2c' />
          </radialGradient>
          <radialGradient id='mc-planet-air' cx='50%' cy='50%' r='50%'>
            <stop offset='58%' stopColor='#9fd4ff' stopOpacity='0' />
            <stop offset='78%' stopColor='#9fd4ff' stopOpacity='0.55' />
            <stop offset='100%' stopColor='#9fd4ff' stopOpacity='0' />
          </radialGradient>
        </defs>
        <ellipse
          cx='100'
          cy='112'
          rx='84'
          ry='18'
          fill='none'
          stroke='#9fd4ff'
          strokeOpacity='0.8'
          strokeWidth='3'
          transform='rotate(-18 100 112)'
        />
        <ellipse
          cx='100'
          cy='116'
          rx='70'
          ry='10'
          fill='none'
          stroke='#d7ecff'
          strokeOpacity='0.35'
          strokeWidth='1.5'
          transform='rotate(-18 100 116)'
        />
        <circle cx='100' cy='96' r='48' fill='url(#mc-planet-body)' />
        <ellipse cx='86' cy='88' rx='20' ry='9' fill='#7dccb4' opacity='0.55' />
        <ellipse cx='112' cy='108' rx='16' ry='7' fill='#d7efe6' opacity='0.28' />
        <circle cx='100' cy='96' r='62' fill='url(#mc-planet-air)' />
      </svg>
    </div>
  );
}
