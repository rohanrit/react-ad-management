import { useState, useMemo } from 'react'
import { CheckCircle2, ChevronRight, Rocket, Gauge, Landmark } from 'lucide-react'
import { basePlans } from '../../data/data.json'

const iconMap = { Rocket, Gauge, Landmark }

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const pricingPlans = useMemo(
    () =>
      basePlans.map((plan) => {
        const amount = billingCycle === 'monthly' ? plan.monthly : plan.yearly
        const cadence = billingCycle === 'monthly' ? '/month' : '/year'
        return {
          ...plan,
          icon: iconMap[plan.icon] || Rocket,
          displayPrice: amount ? `$${amount.toLocaleString()}` : 'Custom',
          cadence: amount ? cadence : 'retainer',
        }
      }),
    [billingCycle],
  )

  return (
    <section id="pricing" data-pan-section className="pricing-section dark-zone relative overflow-hidden">
      <div data-pattern-float className="pattern-dots absolute inset-0 -z-10 opacity-45" aria-hidden="true" />
      <div className="shape-donut shape-pricing-donut" aria-hidden="true" />
      <div className="shape-cube shape-pricing-cube" aria-hidden="true" />
      <div className="shape-blob shape-pricing-blob" aria-hidden="true" />
      <div className="pricing-content mx-auto max-w-6xl">
        <div data-enter="up" className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 data-plane-stop data-plane-align="end" className="font-display text-3xl font-bold text-slate-100 sm:text-4xl"><span className="title-gradient-warm">Pricing</span></h2>
            <p className="mt-3 max-w-2xl text-slate-300">Bold plans built to match your growth stage and campaign ambition.</p>
          </div>
          <div className="gradient-border inline-flex rounded-full bg-slate-900/60 p-1.5">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 text-white' : 'text-slate-300'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-brand-500 via-fuchsia-500 to-orange-400 text-white' : 'text-slate-300'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <article
                key={plan.name}
                data-enter="up"
                data-delay={index * 0.08}
                className="surface-card gradient-border group p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_-30px_rgba(255,107,184,0.6)]"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} text-white`}>
                  <Icon size={21} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-slate-100">{plan.name}</h3>
                <p className="mt-2 text-4xl font-bold text-slate-100">
                  {plan.displayPrice}
                  <span className="ml-1 text-base font-medium text-slate-400">{plan.cadence}</span>
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-fuchsia-300" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-100 transition group-hover:text-brand-200">
                  Choose plan <ChevronRight size={16} />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
