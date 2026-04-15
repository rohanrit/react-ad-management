import { useMemo, useRef, useEffect } from 'react'
import { BarChart3, WandSparkles, Zap, BrainCircuit } from 'lucide-react'
import { featureCards as featureCardsData } from '../../data/data.json'

const iconMap = { BarChart3, WandSparkles, Zap, BrainCircuit }

function renderServiceInfographic(kind) {
  if (kind === 'bars') {
    return (
      <svg viewBox="0 0 260 170" data-service-graph className="h-44 w-full max-w-[360px]" role="img" aria-label="Bar infographic for campaign efficiency">
        <rect x="6" y="8" width="208" height="124" rx="16" fill="rgba(255,255,255,0.9)" />
        {[28, 52, 80, 100, 112].map((h, idx) => (
          <rect data-graph-bar key={h} x={34 + idx * 28} y={118 - h} width="16" height={h} rx="6" fill={idx > 2 ? '#4f7fff' : '#8f56ff'} opacity="0.9" />
        ))}
        <path data-graph-line d="M22 106L194 44" stroke="#ff8d4d" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6" />
      </svg>
    )
  }

  if (kind === 'rings') {
    return (
      <svg viewBox="0 0 260 170" data-service-graph className="h-44 w-full max-w-[360px]" role="img" aria-label="Ring infographic for creative testing lift">
        <rect x="6" y="8" width="208" height="124" rx="16" fill="rgba(255,255,255,0.9)" />
        <circle cx="72" cy="70" r="30" fill="none" stroke="#dbeafe" strokeWidth="11" />
        <circle data-graph-ring cx="72" cy="70" r="30" fill="none" stroke="#8f56ff" strokeWidth="11" strokeDasharray="144 188" strokeLinecap="round" />
        <circle cx="145" cy="70" r="24" fill="none" stroke="#ffe7cc" strokeWidth="10" />
        <circle data-graph-ring cx="145" cy="70" r="24" fill="none" stroke="#ff8d4d" strokeWidth="10" strokeDasharray="110 150" strokeLinecap="round" />
        <text x="58" y="75" fontSize="10" fill="#475569">68%</text>
        <text x="133" y="74" fontSize="10" fill="#475569">79%</text>
      </svg>
    )
  }

  if (kind === 'funnel') {
    return (
      <svg viewBox="0 0 260 170" data-service-graph className="h-44 w-full max-w-[360px]" role="img" aria-label="Funnel infographic for conversion stages">
        <rect x="6" y="8" width="208" height="124" rx="16" fill="rgba(255,255,255,0.9)" />
        <path data-graph-step d="M28 30H192L160 58H60L28 30Z" fill="#4f7fff" opacity="0.9" />
        <path data-graph-step d="M52 66H168L146 88H74L52 66Z" fill="#8f56ff" opacity="0.86" />
        <path data-graph-step d="M78 96H142L124 112H96L78 96Z" fill="#ff8d4d" opacity="0.86" />
        <circle cx="186" cy="96" r="10" fill="#e0ecff" />
        <circle data-graph-node cx="186" cy="96" r="6" fill="#4f7fff" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 260 170" data-service-graph className="h-44 w-full max-w-[360px]" role="img" aria-label="Line infographic for attribution insights">
      <rect x="6" y="8" width="208" height="124" rx="16" fill="rgba(255,255,255,0.9)" />
      <path data-graph-line d="M20 108C54 94 70 92 92 72C112 54 130 60 151 48C167 39 182 42 200 26" stroke="#4f7fff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path data-graph-line d="M20 116C54 106 72 108 95 90C113 78 132 84 154 70C170 60 186 64 200 54" stroke="#ff8d4d" strokeWidth="3" fill="none" strokeLinecap="round" />
      {[20, 60, 100, 140, 180].map((x) => (
        <circle data-graph-node key={x} cx={x} cy="118" r="3" fill="#94a3b8" />
      ))}
    </svg>
  )
}

function ServiceCard({ card, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      let progress = 0
      if (elementTop < windowHeight) {
        progress = Math.max(0, Math.min(1, 1 - elementTop / (windowHeight - elementHeight * 0.5)))
      }

      const scale = 0.8 + progress * 0.2
      const opacity = 0.6 + progress * 0.4

      element.style.transform = `scale(${scale})`
      element.style.opacity = opacity
      element.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out'
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const Icon = card.icon

  return (
    <div
      ref={ref}
      className="service-card-wrapper"
      style={{ '--card-index': index }}
    >
      <article
        data-service-card
        className="service-card surface-card gradient-border grid min-h-[500px] gap-8 p-8 transition duration-300 hover:shadow-[0_26px_60px_-35px_rgba(155,86,255,0.75)] md:grid-cols-[1.05fr_0.95fr] md:p-10"
      >
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${card.surface} opacity-90`} />
        <div>
          <span className="icon-chip mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2569ea] via-[#b14dff] to-[#ff9a3f] text-white">
            <Icon size={22} />
          </span>
          <h3 className="font-display text-3xl font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{card.desc}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">{card.detail}</p>
          <p className="mt-4 inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
            {card.metric}
          </p>
        </div>

        <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
          {renderServiceInfographic(card.kind)}
        </div>
      </article>
    </div>
  )
}

export default function ServicesSection() {
  const featureCards = useMemo(
    () =>
      featureCardsData.map((card) => ({
        ...card,
        icon: iconMap[card.icon] || BarChart3,
      })),
    [],
  )

  return (
    <section id="services" data-pan-section className="services-section relative">
      <div data-pattern-float className="pattern-dots absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <div data-enter="up" className="mb-12 text-center">
        <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Services
        </p>
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          A <span className="title-gradient">growth stack</span> built for ambitious brands
        </h2>
        <p className="mt-4 text-slate-600">Every campaign layer is coordinated for speed, relevance, and conversion quality.</p>
      </div>

      <div className="services-stack-container">
        {featureCards.map((card, index) => (
          <ServiceCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}
