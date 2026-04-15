import { Handshake } from 'lucide-react'
import { partnerLogos } from '../../data/data.json'

export default function PartnersSection() {
  return (
    <section id="partners" data-pan-section className="partners-section dark-zone relative overflow-hidden">
      <div className="partners-content mx-auto max-w-6xl">
        <div data-enter="up" className="surface-card gradient-border p-7 sm:p-10">
          <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">Our <span className="title-gradient-warm">partners</span></h2>
          <p className="mt-3 text-slate-300">Certified collaboration across top ad and commerce ecosystems.</p>
          <div className="marquee mt-8">
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <div key={`${partner}-${idx}`} className="gradient-border flex h-16 min-w-[160px] items-center justify-center gap-2 rounded-2xl bg-slate-900/65 px-4 text-sm font-bold uppercase tracking-[0.13em] text-slate-100">
                  <Handshake size={16} className="text-fuchsia-300" />
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
