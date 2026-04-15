import { Gauge, Globe2, PenTool, DollarSign } from 'lucide-react'
import { globalScaleFeatures } from '../../data/data.json'

const iconMap = { Gauge, Globe2, PenTool, DollarSign }

export default function GlobalScaleSection() {
  return (
    <section id="global-scale" data-pan-section className="section-shell relative overflow-hidden">
      <div data-pattern-float className="pattern-grid absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
      <div data-enter="up" className="surface-card gradient-border p-7 sm:p-10">
        <div className="animated-line mb-7" aria-hidden="true" />
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Performance and <span className="title-gradient">features at global scale</span></h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {globalScaleFeatures.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Gauge
            return (
              <article key={feature.label} data-enter="up" data-delay={idx * 0.06} className="gradient-border rounded-2xl bg-white/80 p-5">
                <Icon className="text-brand-500" size={20} />
                <h3 className="mt-3 font-semibold text-slate-900">{feature.label}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
