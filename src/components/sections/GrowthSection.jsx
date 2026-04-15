import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GrowthSection() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0, scale: 1 },
        {
          y: -80,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: '#growth',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="growth" data-pan-section className="section-shell">
      <div data-enter="up" className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900 sm:text-4xl"><span className="title-gradient">Scroll-optimized</span> campaign narrative</h2>
          <p className="mt-4 text-slate-600">This featured module uses parallax motion to spotlight your value proposition while users glide through the page.</p>
        </div>
        <div ref={parallaxRef} className="surface-card gradient-border p-7 sm:p-10">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Analytics dashboard visualizing marketing growth"
            className="mb-6 h-44 w-full rounded-2xl object-cover"
            width="1200"
            height="700"
            loading="lazy"
            decoding="async"
          />
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand-700">Featured Offer</p>
          <h3 className="mt-4 font-display text-3xl font-bold text-slate-950">90-Day Demand Generation Blueprint</h3>
          <p className="mt-4 text-slate-600">From positioning and media planning to CRO and retention loops, we launch fast and scale with confidence.</p>
          <button type="button" className="glow-button mt-6 rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-[1.03]">
            See Case Study
          </button>
        </div>
      </div>
    </section>
  )
}
