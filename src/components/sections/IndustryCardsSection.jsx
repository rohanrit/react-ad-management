import { Sparkles } from 'lucide-react'
import { industryCards } from '../../data/data.json'

export default function IndustryCardsSection() {
  return (
    <section id="cards" data-pan-section className="section-shell relative overflow-hidden">
      <div data-pattern-float className="pattern-wave absolute inset-x-0 top-4 -z-10 h-44 opacity-35" aria-hidden="true" />
      <div data-enter="up" className="mb-8 text-center">
        <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Industry Insights
        </p>
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          <span className="title-gradient-brand">Industry growth</span> playbooks
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          Each card represents a tailored acquisition strategy built for how your market buys, converts, and scales.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industryCards.map((card, index) => (
          <article
            key={card.title}
            data-enter="up"
            data-delay={index * 0.07}
            className="surface-card gradient-border group p-6 transition duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">{card.title}</p>
              <Sparkles size={22} className="text-fuchsia-500" />
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{card.heading}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            <div className={`mt-5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 via-fuchsia-500 to-orange-400 transition-all duration-300 group-hover:w-full ${index % 2 === 0 ? 'w-2/3' : 'w-1/2'}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
