import { AtSign, Headset, Link, Mail, MapPin, MessageCircle, Phone, Play } from 'lucide-react'
import { footerWidgets } from '../../data/data.json'

export default function Footer() {
  return (
    <footer className="footer-dark relative mt-10 overflow-hidden border-t border-indigo-300/20 py-12 backdrop-blur-sm">
      <div className="footer-watermark" aria-hidden="true">AZ</div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_2fr_1.1fr] lg:px-8">
        <div>
          <a href="#home" data-plane-stop data-plane-align="end" className="inline-flex items-center">
            <img
              src="https://adzapster.com/images/Logo.png"
              alt="Adzapster logo"
              className="h-11 w-auto object-contain"
              width="210"
              height="56"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
            Precision ad marketing studio for brands that want attention, trust, and client growth at first glance.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {[
              { icon: Link, label: 'LinkedIn' },
              { icon: AtSign, label: 'X' },
              { icon: MessageCircle, label: 'Instagram' },
              { icon: Play, label: 'YouTube' },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href="#" aria-label={social.label} className="gradient-border flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-fuchsia-700">
                  <Icon size={15} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {footerWidgets.map((widget) => (
            <div key={widget.title}>
              <h3 className="font-semibold text-slate-100">{widget.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {widget.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-brand-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-slate-100">Contact details</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="mailto:info@adzapster.com" className="inline-flex items-center gap-2 hover:text-brand-300"><Mail size={14} /> info@adzapster.com</a></li>
            <li><a href="tel:+18005551234" className="inline-flex items-center gap-2 hover:text-brand-300"><Phone size={14} /> +1 (800) 555-1234</a></li>
            <li className="inline-flex items-center gap-2"><MapPin size={14} /> 515 Madison Ave, New York, NY 10022</li>
          </ul>
          <a href="#subscribe" className="gradient-border mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-fuchsia-700">
            <Headset size={18} />
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-indigo-200/20 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Adzapster. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-300">Privacy Policy</a>
          <a href="#" className="hover:text-brand-300">Terms of Service</a>
          <a href="#" className="hover:text-brand-300">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}
