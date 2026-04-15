import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote: 'Adzapster rebuilt our ad funnel and doubled qualified demos in under eight weeks.',
    name: 'Mina Carter',
    role: 'CMO, LuminaCloud',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote: 'The creative testing framework made scaling predictable, not guesswork.',
    name: 'Rahul Joshi',
    role: 'Growth Lead, PeakFit Labs',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote: 'Their reporting clarity helped us invest confidently and win in two new markets.',
    name: 'Eleanor Finch',
    role: 'VP Marketing, Nova Retail',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
]

function TestimonialsCarousel() {
  return (
    <div className="surface-card gradient-border card-corner-orbs p-6 sm:p-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        speed={700}
        className="!pb-12"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <figure className="mx-auto max-w-3xl text-center">
              <img
                src={item.image}
                alt={`${item.name} profile`}
                className="mx-auto h-20 w-20 rounded-full border border-white/20 object-cover shadow-lg"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <blockquote className="mt-5 font-display text-2xl font-semibold leading-relaxed text-slate-900 sm:text-3xl">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">{item.name}</span>
                <span> - {item.role}</span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialsCarousel
