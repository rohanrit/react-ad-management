import { ShieldCheck, PenTool, Rocket } from 'lucide-react'
import { whoWeArePillars } from '../../data/data.json'

const iconMap = { ShieldCheck, PenTool, Rocket }

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" data-pan-section className="section-shell relative overflow-hidden">
      <div data-pattern-float className="pattern-grid absolute inset-x-0 top-8 -z-10 h-40 opacity-45" aria-hidden="true" />
      <div data-enter="up" className="surface-card gradient-border relative p-7 sm:p-10">
        <div className="animated-line mb-8" aria-hidden="true" />
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Who <span className="title-gradient">we are</span></h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          We are a performance-first ad marketing company blending media buying, AI-assisted creativity, and revenue analytics to make brands unforgettable from first impression to final conversion.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whoWeArePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck
            return (
              <div key={pillar.title} data-enter="up" data-delay={(idx + 1) * 0.06} className="gradient-border rounded-2xl bg-white/75 p-6">
                <Icon className="text-fuchsia-500" size={21} />
                <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">Aligned teams and workflows that move from concept to measurable outcomes without friction.</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
