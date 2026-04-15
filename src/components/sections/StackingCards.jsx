import { useRef, useEffect } from "react"

const cards = [
  {
    id: 1,
    title: "Design",
    description: "Create beautiful and intuitive user interfaces that delight your users.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Develop",
    description: "Build robust and scalable applications with modern technologies.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Deploy",
    description: "Ship your products to production with confidence and ease.",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Iterate",
    description: "Continuously improve based on user feedback and analytics.",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
]

function Card({ card, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      let progress = 0
      if (elementTop < windowHeight) {
        progress = Math.max(0, Math.min(1, 1 - elementTop / (windowHeight - elementHeight * 0.5)))
      }

      const scale = 0.8 + progress * 0.2
      const opacity = 0.6 + progress * 0.4

      element.style.transform = `scale(${scale})`
      element.style.opacity = opacity
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="sticky w-full max-w-2xl mx-auto rounded-2xl p-8 shadow-2xl"
      style={{
        top: `${index * 40}px`,
      }}
    >
      <div className={`${card.color} rounded-2xl p-10 h-80 flex flex-col justify-center`}>
        <h2 className="text-5xl font-bold text-white mb-4">{card.title}</h2>
        <p className="text-xl text-white/90">{card.description}</p>
      </div>
    </div>
  )
}

const StackingCards = () => {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            Stacking Cards on Scroll
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Scroll down to see the cards stack beautifully on top of each other
          </p>
        </div>
      </div>

      <div className="relative pb-20">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-4">
            Keep Scrolling
          </h2>
          <p className="text-xl text-neutral-400">
            The cards will stick and stack as you move through the content
          </p>
        </div>
      </div>
    </div>
  )
}

export default StackingCards
