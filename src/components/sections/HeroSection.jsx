function HeroSection() {
  return (
    <section id="home" className="hero-full relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-24">
      <div aria-hidden="true" className="hero-path-bg">
        <svg viewBox="0 0 1440 760" preserveAspectRatio="none" className="hero-path-svg">
          <defs>
            <linearGradient id="heroPathGradientA" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="50%" stopColor="#7a7dff" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
            <linearGradient id="heroPathGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff9a56" />
              <stop offset="55%" stopColor="#ff6bb8" />
              <stop offset="100%" stopColor="#8f56ff" />
            </linearGradient>
          </defs>

          <path className="hero-path-line line-1" d="M-120 640C140 560 300 450 520 470C720 488 920 620 1130 590C1310 565 1430 470 1560 420" stroke="url(#heroPathGradientA)" />
          <path className="hero-path-line line-2" d="M-80 560C120 500 280 390 470 405C650 420 840 530 1020 520C1210 510 1360 440 1520 360" stroke="url(#heroPathGradientB)" />
          <path className="hero-path-line line-3" d="M-140 500C120 455 270 340 470 350C660 360 850 470 1030 460C1240 447 1400 380 1560 300" stroke="url(#heroPathGradientA)" />
          <path className="hero-path-line line-4" d="M-100 430C100 390 250 300 430 302C640 305 780 385 980 394C1210 404 1370 360 1540 260" stroke="url(#heroPathGradientB)" />
          <path className="hero-path-line line-5" d="M-140 360C80 328 250 255 420 246C620 235 790 302 980 314C1180 326 1370 296 1560 220" stroke="url(#heroPathGradientA)" />
          <path className="hero-path-line line-6" d="M-120 300C90 270 220 210 390 198C590 184 760 235 960 248C1170 262 1360 238 1550 180" stroke="url(#heroPathGradientB)" />
          <path className="hero-path-line line-7" d="M-120 240C70 216 220 164 380 150C570 132 760 169 930 181C1160 198 1380 180 1560 140" stroke="url(#heroPathGradientA)" />
          <path className="hero-path-line line-8" d="M-100 180C70 162 210 130 350 112C560 88 700 115 900 130C1160 149 1380 132 1560 110" stroke="url(#heroPathGradientB)" />
          <path className="hero-path-line line-9" d="M-100 120C70 106 190 88 340 72C550 52 700 70 900 82C1180 98 1410 90 1560 84" stroke="url(#heroPathGradientA)" />
          <path className="hero-path-line line-10" d="M-80 72C90 66 220 56 360 44C550 28 720 34 900 44C1190 58 1410 58 1560 62" stroke="url(#heroPathGradientB)" />
        </svg>
      </div>

      <div className="hero-stage relative z-10 mx-auto w-full max-w-7xl">
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="shape-donut shape-hero-donut" aria-hidden="true" />
        <div className="shape-cube shape-hero-cube" aria-hidden="true" />
        <div className="shape-blob shape-hero-blob" aria-hidden="true" />

        <div data-enter="up" className="hero-center relative z-20 mx-auto max-w-3xl text-center">
          <p data-plane-stop data-plane-align="start" className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            Full-Funnel Ad Marketing
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Turn clicks into <span className="title-gradient">high-value clients</span> in one <span className="title-gradient-brand">growth engine</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We build precision ad campaigns, creative systems, and conversion funnels that make your brand irresistible at first glance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#subscribe" className="glow-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 px-7 py-3 text-sm font-bold text-white shadow-glow transition duration-300 hover:scale-[1.03]">
              Start Your Growth Sprint
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition hover:border-fuchsia-300 hover:text-fuchsia-600">
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div className="hero-infographic-cloud mt-10 lg:mt-0">
          <article data-enter="left" className="hero-float-card hero-card-a gradient-border rounded-2xl bg-white/85 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">Revenue Velocity</p>
            <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">$14.2M</p>
            <p className="text-xs text-slate-500">Pipeline influenced in 90 days</p>
            <svg viewBox="0 0 220 68" className="mt-3 h-16 w-full" role="img" aria-label="Revenue trend chart">
              <defs>
                <linearGradient id="heroLineA" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#2569ea" />
                  <stop offset="50%" stopColor="#b14dff" />
                  <stop offset="100%" stopColor="#ff8d4d" />
                </linearGradient>
              </defs>
              <path className="hero-line-draw" d="M6 52 C36 44 60 24 88 26 C116 29 138 12 164 14 C184 15 202 8 214 10" stroke="url(#heroLineA)" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </article>

          <article data-enter="right" className="hero-float-card hero-card-b gradient-border rounded-2xl bg-white/85 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-fuchsia-600">Campaign Pulse</p>
            <div className="mt-3 grid grid-cols-4 items-end gap-2">
              {[48, 68, 55, 82].map((v, idx) => (
                <div key={v} className="hero-bar-wrap h-20 rounded-md bg-slate-100 p-1">
                  <div className="hero-bar h-full rounded" style={{ '--bar-height': `${v}%`, animationDelay: `${idx * 120}ms` }} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">CTR growth across top creatives</p>
          </article>

          <article data-enter="left" className="hero-float-card hero-card-c gradient-border rounded-2xl bg-white/85 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">ROAS</p>
            <p className="mt-1 font-display text-3xl font-bold text-brand-600">245%</p>
            <p className="text-xs text-slate-500">Sustained growth curve</p>
          </article>

          <article data-enter="right" className="hero-float-card hero-card-d gradient-border rounded-2xl bg-white/85 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">CAC Drop</p>
            <p className="mt-1 font-display text-3xl font-bold text-fuchsia-600">-38%</p>
            <p className="text-xs text-slate-500">Efficiency over baseline</p>
          </article>

          <article data-enter="up" className="hero-float-card hero-card-e gradient-border rounded-2xl bg-white/85 p-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
              {[
                { text: 'Predictive bidding', icon: 'target' },
                { text: 'AI creative scoring', icon: 'sparkles' },
                { text: 'Cross-channel sync', icon: 'refresh' },
              ].map((item, idx) => (
                <span key={item.text} className="hero-chip inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700" style={{ animationDelay: `${idx * 180}ms` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
                    {item.icon === 'target' && <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>}
                    {item.icon === 'sparkles' && <><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></>}
                    {item.icon === 'refresh' && <><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></>}
                  </svg>
                  {item.text}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
