import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function MediaPartnerSlider({ description, cards }) {
  const sliderRef = useRef(null)

  return (
    <section id="media-partner" data-pan-section className="media-partner-section dark-zone relative overflow-hidden">
      <div className="shape-donut media-partner-donut" aria-hidden="true" />
      <div className="shape-blob media-partner-blob" aria-hidden="true" />
      <div className="media-partner-content mx-auto max-w-6xl">
        <div data-enter="up" className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-center lg:text-left">
            <p className="inline-flex rounded-full border border-brand-200/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-100">
              Media Partners
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-100 sm:text-4xl">
              <span className="title-gradient-warm">The Media Partner</span> Built for Tomorrow's Audience
            </h2>
            <p className="mt-3 text-slate-300">{description}</p>
          </div>

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            <button
              type="button"
              aria-label="Previous media partner card"
              onClick={() => sliderRef.current?.slidePrev()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50 bg-slate-800/60 text-slate-200 shadow-sm transition hover:border-brand-300 hover:text-brand-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next media partner card"
              onClick={() => sliderRef.current?.slideNext()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-500/50 bg-slate-800/60 text-slate-200 shadow-sm transition hover:border-brand-300 hover:text-brand-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            sliderRef.current = swiper
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={700}
          spaceBetween={18}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            780: { slidesPerView: 2 },
            1180: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.title}>
              <article
                data-enter="up"
                data-delay={index * 0.05}
                className="surface-card gradient-border card-corner-orbs media-partner-card h-full min-h-[230px] p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-fuchsia-300">{card.label}</p>
                  <Sparkles size={18} className="text-fuchsia-400 flex-shrink-0" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200 mt-auto">{card.description}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MediaPartnerSlider
