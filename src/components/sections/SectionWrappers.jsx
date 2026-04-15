export function ServicesSection({ children }) {
  return <section id="services" data-pan-section className="section-shell relative mb-20 overflow-hidden pb-72 pt-8">{children}</section>
}

export function CTASection({ children }) {
  return <section id="cta" data-pan-section className="section-shell cta-section-bg dark-zone relative overflow-hidden">{children}</section>
}

export function WhoWeAreSection({ children }) {
  return <section id="who-we-are" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function VisionSection({ children }) {
  return <section id="vision" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function PricingSection({ children }) {
  return <section id="pricing" data-pan-section className="section-shell dark-zone relative overflow-hidden">{children}</section>
}

export function PortfolioSection({ children }) {
  return <section id="portfolio" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function GrowthSection({ children }) {
  return <section id="growth" data-pan-section className="section-shell">{children}</section>
}

export function GlobalScaleSection({ children }) {
  return <section id="global-scale" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function PartnersSection({ children }) {
  return <section id="partners" data-pan-section className="section-shell dark-zone relative overflow-hidden">{children}</section>
}

export function SubscribeSection({ children }) {
  return <section id="subscribe" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function FAQSection({ children }) {
  return <section id="faq" data-pan-section className="section-shell dark-zone relative overflow-hidden">{children}</section>
}

export function InfographicSection({ children, infographicRef }) {
  return <section id="infographic" ref={infographicRef} data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function IndustryCardsSection({ children }) {
  return <section id="cards" data-pan-section className="section-shell relative overflow-hidden">{children}</section>
}

export function TestimonialsSection({ children, testimonialAnchorRef }) {
  return <section id="testimonials" data-pan-section className="section-shell relative overflow-hidden" ref={testimonialAnchorRef}>{children}</section>
}
