import { useState } from 'react'
import { faqItems } from '../../data/data.json'

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section id="faq" data-pan-section className="faq-section dark-zone relative overflow-hidden">
      <div className="shape-donut shape-faq-donut" aria-hidden="true" />
      <div className="shape-cube shape-faq-cube" aria-hidden="true" />
      <div className="shape-blob shape-faq-blob" aria-hidden="true" />
      <div className="faq-content mx-auto max-w-6xl">
        <div data-enter="up" className="mx-auto max-w-3xl">
          <h2 data-plane-stop data-plane-align="end" className="text-center font-display text-3xl font-bold text-slate-100 sm:text-4xl">Frequently <span className="title-gradient-warm">asked questions</span></h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index
              return (
                <article key={item.q} className="surface-card gradient-border overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-100">{item.q}</span>
                    <span className={`ml-4 text-fuchsia-300 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{item.a}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
