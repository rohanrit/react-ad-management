import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MediaPartnerSlider from './components/MediaPartnerSlider'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import CTASection from './components/sections/CTASection'
import WhoWeAreSection from './components/sections/WhoWeAreSection'
import VisionSection from './components/sections/VisionSection'
import PricingSection from './components/sections/PricingSection'
import PortfolioSection from './components/sections/PortfolioSection'
import GrowthSection from './components/sections/GrowthSection'
import GlobalScaleSection from './components/sections/GlobalScaleSection'
import PartnersSection from './components/sections/PartnersSection'
import SubscribeSection from './components/sections/SubscribeSection'
import FAQSection from './components/sections/FAQSection'
import InfographicSection from './components/sections/InfographicSection'
import IndustryCardsSection from './components/sections/IndustryCardsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import StickyCardsSection from './components/sections/StickyCardsSection'
import { mediaPartnerCards } from './data/data.json'

const StackingCards = lazy(() => import('./components/sections/StackingCards'))

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const travelerRef = useRef(null)
  const travelerPointRef = useRef({ x: 26, y: 110 })
  const planeVisibleRef = useRef(true)
  const revealRootRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  useEffect(() => {
    const setPlaneVisible = (isVisible) => {
      if (!travelerRef.current || planeVisibleRef.current === isVisible) {
        return
      }

      planeVisibleRef.current = isVisible
      gsap.to(travelerRef.current, {
        autoAlpha: isVisible ? 0.95 : 0,
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const handleMouseMove = () => setPlaneVisible(false)
    const handleScrollIntent = () => setPlaneVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScrollIntent, { passive: true })
    window.addEventListener('wheel', handleScrollIntent, { passive: true })
    window.addEventListener('touchmove', handleScrollIntent, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScrollIntent)
      window.removeEventListener('wheel', handleScrollIntent)
      window.removeEventListener('touchmove', handleScrollIntent)
    }
  }, [])

  useEffect(() => {
    let refreshHandler

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-enter]').forEach((el) => {
        const direction = el.dataset.enter || 'up'
        const delay = Number(el.dataset.delay || 0)
        const distance = Number(el.dataset.distance || 40)

        const from = { autoAlpha: 0, x: 0, y: 0, scale: 0.97, filter: 'blur(8px)' }
        if (direction === 'left') from.x = -distance
        if (direction === 'right') from.x = distance
        if (direction === 'up') from.y = distance
        if (direction === 'down') from.y = -distance

        gsap.fromTo(el, from, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          delay,
          duration: 0.88,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 87%',
          },
        })
      })

      gsap.utils.toArray('[data-pan-section]').forEach((section) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: 48,
            clipPath: 'inset(0 0 12% 0 round 28px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0 round 28px)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
            },
          },
        )
      })

      const serviceCards = gsap.utils.toArray('[data-service-card]')
      serviceCards.forEach((card) => {
        const bars = card.querySelectorAll('[data-graph-bar]')
        if (bars.length) {
          gsap.fromTo(
            bars,
            { scaleY: 0.08, transformOrigin: 'bottom center', opacity: 0.35 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: 'back.out(1.3)',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
              },
            },
          )
        }

        const rings = card.querySelectorAll('[data-graph-ring]')
        rings.forEach((ring) => {
          const circumference = 2 * Math.PI * Number(ring.getAttribute('r') || 0)
          gsap.set(ring, { strokeDasharray: circumference, strokeDashoffset: circumference })
          gsap.to(ring, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
            },
          })
        })

        const lines = card.querySelectorAll('[data-graph-line]')
        lines.forEach((line) => {
          const length = line.getTotalLength()
          gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(line, {
            strokeDashoffset: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
            },
          })
        })

        const steps = card.querySelectorAll('[data-graph-step]')
        if (steps.length) {
          gsap.fromTo(
            steps,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.09,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
              },
            },
          )
        }

        const nodes = card.querySelectorAll('[data-graph-node]')
        if (nodes.length) {
          gsap.fromTo(
            nodes,
            { scale: 0.1, opacity: 0.2, transformOrigin: 'center center' },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.06,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
              },
            },
          )
        }
      })

      gsap.utils.toArray('[data-pattern-float]').forEach((el) => {
        const section = el.closest('section')
        if (!section) return
        gsap.fromTo(
          el,
          { y: 36, opacity: 0.26 },
          {
            y: -36,
            opacity: 0.62,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          },
        )
      })

      if (travelerRef.current) {
        const stops = gsap.utils.toArray('[data-plane-stop]')
        const plane = travelerRef.current
        let currentStopIndex = -1

        const getPlanePosition = (stop) => {
          const rect = stop.getBoundingClientRect()
          const planeWidth = plane.offsetWidth || 60
          const planeHeight = plane.offsetHeight || 60
          const align = stop.dataset.planeAlign || 'end'

          let anchorX = rect.left + rect.width * 0.5
          if (align === 'start') anchorX = rect.left
          if (align === 'end') anchorX = rect.right

          const anchorY = rect.top + rect.height * 0.5
          const offsetX = align === 'start' ? -planeWidth * 0.25 : align === 'end' ? -planeWidth * 0.55 : -planeWidth * 0.5
          const offsetY = -planeHeight * 0.55

          return {
            x: Math.min(Math.max(anchorX + offsetX, 8), window.innerWidth - planeWidth - 8),
            y: Math.min(Math.max(anchorY + offsetY, 8), window.innerHeight - planeHeight - 8),
          }
        }

        const calculateRotation = (targetX, targetY) => {
          const current = travelerPointRef.current
          return (Math.atan2(targetY - current.y, targetX - current.x) * 180) / Math.PI
        }

        const moveToStop = (stop, immediate = false) => {
          if (!stop) return
          const pos = getPlanePosition(stop)
          const rotation = calculateRotation(pos.x, pos.y)
          travelerPointRef.current = pos

          gsap.to(plane, {
            x: pos.x,
            y: pos.y,
            rotation: rotation,
            duration: immediate ? 0.3 : 1.2,
            ease: immediate ? 'power2.out' : 'power3.out',
          })
        }

        stops.forEach((stop, index) => {
          ScrollTrigger.create({
            trigger: stop,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => {
              if (currentStopIndex !== index) {
                currentStopIndex = index
                moveToStop(stop)
              }
            },
            onEnterBack: () => {
              if (currentStopIndex !== index) {
                currentStopIndex = index
                moveToStop(stop)
              }
            },
          })
          if (index === 0) moveToStop(stop, true)
        })

        const onScroll = () => {
          const scrollY = window.scrollY
          const viewportHeight = window.innerHeight

          for (let i = stops.length - 1; i >= 0; i--) {
            const stop = stops[i]
            const rect = stop.getBoundingClientRect()
            const stopTop = rect.top + scrollY
            const stopMiddle = stopTop + rect.height * 0.3

            if (scrollY + viewportHeight * 0.4 >= stopMiddle) {
              if (currentStopIndex !== i) {
                currentStopIndex = i
                moveToStop(stop)
              }
              break
            }
          }
        }

        window.addEventListener('scroll', onScroll, { passive: true })

        refreshHandler = () => {
          window.removeEventListener('scroll', onScroll)
          const current = stops.find((stop) => {
            const rect = stop.getBoundingClientRect()
            return rect.top <= window.innerHeight * 0.56 && rect.bottom >= window.innerHeight * 0.2
          })
          if (current) moveToStop(current)
        }

        ScrollTrigger.addEventListener('refresh', refreshHandler)

        return () => {
          window.removeEventListener('scroll', onScroll)
        }
      }
    }, revealRootRef)

    return () => {
      if (refreshHandler) {
        ScrollTrigger.removeEventListener('refresh', refreshHandler)
      }
      context.revert()
    }
  }, [])

  return (
    <div ref={revealRootRef} className="sparkle-bg relative overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div
        ref={travelerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-20 hidden h-20 w-20 opacity-95 sm:block"
      >
        <div className="plane-3d-model animate-float">
          <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
            <defs>
              <linearGradient id="planeBody" x1="10" y1="26" x2="105" y2="74" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6ca1ff" />
                <stop offset="55%" stopColor="#4f7fff" />
                <stop offset="100%" stopColor="#2755db" />
              </linearGradient>
              <linearGradient id="planeWing" x1="34" y1="44" x2="92" y2="96" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd46f" />
                <stop offset="100%" stopColor="#ff8d4d" />
              </linearGradient>
              <linearGradient id="planeTail" x1="14" y1="54" x2="64" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d9e5ff" />
                <stop offset="100%" stopColor="#8eb0ff" />
              </linearGradient>
              <filter id="planeShadow" x="-20" y="-20" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0f2f82" floodOpacity="0.45" />
              </filter>
            </defs>

            <g filter="url(#planeShadow)">
              <path d="M10 58L108 24L72 101L54 70L24 63L10 58Z" fill="url(#planeBody)" />
              <path d="M54 70L72 101L66 66L108 24L54 70Z" fill="url(#planeWing)" />
              <path d="M24 63L46 67L38 84L16 75L24 63Z" fill="url(#planeTail)" />
              <path d="M38 56L84 38L70 56L38 56Z" fill="rgba(255,255,255,0.55)" />
            </g>
          </svg>
        </div>
      </div>

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="header-spacer" />

      <main id="main-content">
        <HeroSection />
        <CTASection />
        <ServicesSection />
        <MediaPartnerSlider
          title="The Media Partner Built for Tomorrow's Audience"
          description="Future-ready growth capabilities designed for evolving consumer behavior, platform shifts, and performance accountability."
          cards={mediaPartnerCards}
        />
        <WhoWeAreSection />
        <VisionSection />
        <PricingSection />
        <PortfolioSection />
        <GrowthSection />
        <GlobalScaleSection />
        <PartnersSection />
        <InfographicSection />
        <SubscribeSection />
        <FAQSection />
        <IndustryCardsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}

function PortfolioPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <StackingCards />
      </Suspense>
      <Footer />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  )
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
