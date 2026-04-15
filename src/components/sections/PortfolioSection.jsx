import { Sparkles, Bot, Rocket, PenTool } from 'lucide-react'
import { portfolioItems } from '../../data/data.json'

const iconMap = { Sparkles, Bot, Rocket, PenTool }

export default function PortfolioSection() {
  return (
    <section id="portfolio" data-pan-section className="section-shell relative overflow-hidden">
      <div data-pattern-float className="pattern-wave absolute inset-x-0 top-0 -z-10 h-52 opacity-40" aria-hidden="true" />
      <div data-enter="up" className="surface-card gradient-border p-7 sm:p-10">
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl"><span className="title-gradient-brand">AI powered</span> creative portfolio</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Dynamic ad creatives generated and ranked by audience intent signals, then polished by human strategists for brand precision.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {portfolioItems.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <div key={item.label} data-enter="up" data-delay={idx * 0.06} className="gradient-border rounded-2xl bg-white/80 p-5">
                <Icon className="text-orange-500" size={20} />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Creative Lab</p>
                <p className="mt-2 font-semibold text-slate-800">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
