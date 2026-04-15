import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VisionSection() {
  const visionVideoRef = useRef(null)

  useEffect(() => {
    const videoEl = visionVideoRef.current
    if (!videoEl) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoEl,
        { y: 0, scale: 1 },
        {
          y: -72,
          scale: 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: '#vision',
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
    <section id="vision" data-pan-section className="section-shell relative overflow-hidden">
      <div className="shape-donut shape-pricing-donut" aria-hidden="true" />
      <div className="shape-blob shape-pricing-blob" aria-hidden="true" />
      <div data-enter="up" className="mb-16 text-center">
        <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          Vision & Mission
        </p>
        <h2 data-plane-stop data-plane-align="start" className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          See how we build <span className="title-gradient">lasting growth systems</span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          This short brand film highlights our mission: combine creative intelligence and performance media into a single client growth engine.
        </p>
      </div>

      <div ref={visionVideoRef} data-enter="up" className="surface-card gradient-border relative z-10 overflow-hidden p-4 sm:p-6">
        <video
          className="w-full rounded-2xl bg-slate-900 shadow-[0_34px_70px_-44px_rgba(32,56,120,0.85)]"
          controls
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
