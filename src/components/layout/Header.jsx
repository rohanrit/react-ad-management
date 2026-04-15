import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Global Scale', href: '#global-scale' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
]

const megaMenuColumns = [
  {
    title: 'Strategy',
    items: [
      { label: 'Growth Stack', href: '#services' },
      { label: 'Industry Playbooks', href: '#cards' },
      { label: 'Global Scale', href: '#global-scale' },
    ],
  },
  {
    title: 'Creative',
    items: [
      { label: 'AI Portfolio', href: '/portfolio' },
      { label: 'Vision & Mission', href: '#vision' },
      { label: 'Performance Insights', href: '#infographic' },
    ],
  },
  {
    title: 'Conversion',
    items: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
]

export default function Header({ mobileOpen = false, setMobileOpen = () => {} }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'header-scrolled' : 'header-expanded'}`}>
      <div className={`h-full border-b border-indigo-300/25 bg-[#090f24]/95 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'py-2' : 'py-4 lg:py-6'}`}>
        <div className={`mx-auto flex h-full items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${scrolled ? 'max-w-6xl' : 'max-w-7xl'}`}>
          <Link to="/" className="flex items-center">
            <img
              src="https://adzapster.com/images/Logo.png"
              alt="Adzapster logo"
              className={`transition-all duration-500 ${scrolled ? 'h-8 w-auto lg:h-10' : 'h-12 w-auto lg:h-16'}`}
              width={scrolled ? 152 : 228}
              height={scrolled ? 40 : 64}
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation">
            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 font-semibold uppercase tracking-wide text-slate-100 transition-all duration-300 hover:text-brand-300 ${scrolled ? 'text-xs' : 'text-sm'}`}
              >
                Services
                <ChevronDown size={14} />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 pt-4 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_40px_85px_-50px_rgba(2,6,23,0.45)] backdrop-blur-xl">
                  <div className="grid grid-cols-3 gap-5">
                    {megaMenuColumns.map((column) => (
                      <div key={column.title} className="gradient-border rounded-2xl bg-white p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-fuchsia-600">{column.title}</p>
                        <ul className="mt-3 space-y-2">
                          {column.items.map((entry) => (
                            <li key={entry.label}>
                              <Link to={entry.href} className="text-sm text-slate-700 hover:text-brand-600">
                                {entry.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`font-semibold uppercase tracking-wide text-slate-100 transition-all duration-300 hover:text-brand-300 ${scrolled ? 'text-[10px]' : 'text-xs'}`}>
                {item.label}
              </a>
            ))}
            <Link to="/portfolio" className={`glow-button rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 font-bold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] ${scrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}`}>
              View Portfolio
            </Link>
          </nav>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center rounded-lg border border-slate-500/70 bg-slate-900/70 px-3 py-2 font-semibold text-slate-100 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!mobileOpen}>
        <div className={`fixed inset-0 bg-slate-950/55 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <div className={`fixed right-0 top-0 h-full w-72 border-l border-indigo-300/20 bg-[#0b132d] p-6 shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <p className="font-display text-lg font-bold text-slate-100">Navigate</p>
          <div className="mt-6 flex flex-col gap-4">
            <Link to="/portfolio" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-medium text-slate-200 hover:bg-white/10 hover:text-brand-300">
              Portfolio
            </Link>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 font-medium text-slate-200 hover:bg-white/10 hover:text-brand-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
