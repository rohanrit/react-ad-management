import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { subscribePoints } from '../../data/data.json'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email)

  const onSubmit = (event) => {
    event.preventDefault()
    setIsTouched(true)
    if (!isEmailValid) return
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3400)
  }

  return (
    <section id="subscribe" data-pan-section className="section-shell relative overflow-hidden">
      <div className="shape-donut shape-subscribe-donut" aria-hidden="true" />
      <div className="shape-cube shape-subscribe-cube" aria-hidden="true" />
      <div className="shape-blob shape-subscribe-blob" aria-hidden="true" />
      <div data-enter="up" className="surface-card gradient-border relative z-10 grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-900">Get your free <span className="title-gradient">ad performance audit</span></h2>
          <p className="mt-3 text-slate-600">Tell us your growth target. We send back a tailored action plan within 24 hours.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {subscribePoints.map((point) => (
              <li key={point.text} className="flex items-center gap-2"><CheckCircle2 size={15} className={point.tone} /> {point.text}</li>
            ))}
          </ul>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={onSubmit} noValidate>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Work email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${isTouched && !isEmailValid ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-100'}`}
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setIsTouched(true)}
            aria-invalid={isTouched && !isEmailValid}
          />
          <p className={`mt-2 min-h-5 text-xs transition ${isTouched && !isEmailValid ? 'text-red-500' : 'text-slate-500'}`}>
            {isTouched && !isEmailValid ? 'Please enter a valid business email.' : 'No spam. Only strategic insights.'}
          </p>
          <button type="submit" className="glow-button mt-4 w-full rounded-xl bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 px-5 py-3 font-bold text-white shadow-glow transition hover:scale-[1.02]">
            Claim My Audit
          </button>

          <div className={`mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700 transition-all duration-500 ${isSubmitted ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
            Success! Your strategy brief request is in our queue.
          </div>
        </form>
      </div>
    </section>
  )
}
