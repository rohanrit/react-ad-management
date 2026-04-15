import { Handshake, Rocket, Globe2, BrainCircuit } from 'lucide-react'
import { ctaPanels } from '../../data/data.json'

const iconMap = { Handshake, Rocket, Globe2, BrainCircuit }

export default function CTASection() {
  return (
    <section id="cta" data-pan-section className="section-shell relative overflow-hidden">
      <div className="shape-donut shape-cta-donut" aria-hidden="true" />
      <div className="shape-blob shape-cta-blob" aria-hidden="true" />
      <div data-enter="up" className="mb-10 text-center">
        <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          CTA
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Choose the <span className="title-gradient">growth track</span> that fits your business model
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          A modular marketing framework designed for agencies, SMBs, publishers, and scaling enterprise teams.
        </p>
      </div>

      <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ctaPanels.map((panel, index) => {
          const Icon = iconMap[panel.icon] || Rocket
          return (
            <article
              key={panel.title}
              data-enter="up"
              data-delay={index * 0.07}
              className="cta-panel gradient-border group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${panel.gradient} opacity-90`} />
              <div className="icon-chip mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2569ea] via-[#b14dff] to-[#ff9a3f] text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-0 font-display text-2xl font-bold text-slate-900">{panel.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{panel.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
