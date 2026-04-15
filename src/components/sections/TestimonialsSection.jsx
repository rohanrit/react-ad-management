import { lazy, Suspense, useRef } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'

const TestimonialsCarousel = lazy(() => import('../TestimonialsCarousel'))

export default function TestimonialsSection() {
  const anchorRef = useRef(null)
  const shouldLoad = useOnScreen(anchorRef)

  return (
    <section id="testimonials" data-pan-section className="section-shell relative overflow-hidden" ref={anchorRef}>
      <div data-pattern-float className="pattern-grid absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div data-enter="up" className="mb-8">
        <p className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Testimonials
        </p>
        <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by <span className="title-gradient">scaling teams</span></h2>
        <p className="mt-2 text-slate-600">Carousel component is lazy-loaded to keep initial page payload lean.</p>
      </div>

      <Suspense fallback={<div className="surface-card gradient-border h-[250px] animate-pulse bg-white/80" />}>
        {shouldLoad ? <TestimonialsCarousel /> : <div className="surface-card gradient-border h-[250px] animate-pulse bg-white/80" />}
      </Suspense>
    </section>
  )
}
