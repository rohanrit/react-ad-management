import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Gauge, Sparkles, DollarSign } from 'lucide-react'
import { counters, liveInsightItems } from '../../data/data.json'

const iconMap = { Gauge, Sparkles, DollarSign }

gsap.registerPlugin(ScrollTrigger)

export default function InfographicSection() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const [displayCounters, setDisplayCounters] = useState(counters.map(() => 0))

  useEffect(() => {
    const sectionEl = sectionRef.current
    const svgEl = svgRef.current
    if (!sectionEl || !svgEl) return undefined

    let hasPlayed = false
    const trigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 72%',
      onEnter: () => {
        if (hasPlayed) return
        hasPlayed = true

        counters.forEach((counter, index) => {
          const state = { value: 0 }
          gsap.to(state, {
            value: counter.value,
            duration: 1.7,
            ease: 'power2.out',
            onUpdate: () => {
              setDisplayCounters((prev) => {
                const next = [...prev]
                next[index] = Math.round(state.value)
                return next
              })
            },
          })
        })

        const paths = svgEl.querySelectorAll('[data-chart-line]')
        paths.forEach((path) => {
          const length = path.getTotalLength()
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: 'power3.out',
          })
        })

        gsap.fromTo(
          svgEl.querySelectorAll('[data-chart-bar]'),
          { scaleY: 0, transformOrigin: 'bottom center', opacity: 0.35 },
          { scaleY: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.2)', stagger: 0.09 },
        )

        gsap.to(svgEl.querySelectorAll('[data-chart-dot]'), {
          y: -6,
          duration: 0.9,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.1,
        })

        gsap.to(svgEl.querySelector('[data-orbit-ring]'), {
          rotation: 360,
          duration: 14,
          transformOrigin: 'center center',
          repeat: -1,
          ease: 'none',
        })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <section id="infographic" ref={sectionRef} data-pan-section className="section-shell relative overflow-hidden">
      <div data-pattern-float className="pattern-wave absolute inset-x-0 bottom-0 -z-10 h-44 opacity-35" aria-hidden="true" />
      <div data-enter="up" className="surface-card gradient-border relative overflow-hidden p-7 sm:p-10">
        <div className="pointer-events-none absolute -right-14 -top-10 h-48 w-48 rounded-full bg-fuchsia-200/60 blur-3xl" />
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Performance <span className="title-gradient">at a glance</span></h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {counters.map((counter, index) => (
            <div key={counter.label} className="gradient-border rounded-2xl bg-white/70 p-5">
              <p className="font-display text-4xl font-extrabold text-brand-500">
                {displayCounters[index].toLocaleString()}
                {counter.suffix}
              </p>
              <p className="mt-1 text-sm text-slate-600">{counter.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <svg ref={svgRef} viewBox="0 0 640 260" className="gradient-border w-full rounded-2xl bg-white/70 p-4" role="img" aria-label="Animated campaign performance infographic">
            <rect x="22" y="30" width="596" height="190" rx="20" fill="#ffffff" opacity="0.75" />

            <path data-chart-line d="M60 168 C130 128 182 150 244 120 C294 95 360 112 430 82 C490 56 530 72 585 52" stroke="#8f56ff" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path data-chart-line d="M60 188 C126 162 190 176 254 154 C320 132 374 138 448 112 C500 94 550 102 585 90" stroke="#ff8b4d" strokeWidth="3.4" fill="none" strokeLinecap="round" />

            {[120, 160, 210, 250, 300, 350, 400, 450].map((x, i) => (
              <g key={x}>
                <rect data-chart-bar x={x} y={190 - (i % 4) * 20} width="20" height={30 + (i % 4) * 20} rx="7" fill={i % 2 === 0 ? '#4e85ff' : '#ff6bb8'} opacity="0.85" />
              </g>
            ))}

            {[90, 170, 260, 340, 430, 520].map((x) => (
              <circle key={x} data-chart-dot cx={x} cy={42} r="6" fill="#ffd74d" />
            ))}

            <g data-orbit-ring>
              <circle cx="568" cy="188" r="28" fill="none" stroke="#2569ea" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" />
              <circle cx="596" cy="188" r="5" fill="#ff6bb8" />
            </g>
          </svg>

          <div className="gradient-border rounded-2xl bg-white/75 p-5">
            <h3 className="font-display text-xl font-semibold text-slate-900">Live insights panel</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {liveInsightItems.map((item) => {
                const Icon = iconMap[item.icon] || Gauge
                return <li key={item.text} className="flex items-center gap-2"><Icon size={16} className={item.tone} /> {item.text}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
