import { useEffect, useRef } from 'react'

const StickyCardsSection = () => {
  const cards = [
    { number: '01', title: 'Strategic Planning', description: 'We develop comprehensive strategies tailored to your business objectives, analyzing market trends and competitive landscapes to drive measurable growth.' },
    { number: '02', title: 'Digital Transformation', description: 'Modernize your digital presence with cutting-edge solutions that enhance user experience, streamline operations, and accelerate your go-to-market timeline.' },
    { number: '03', title: 'Performance Marketing', description: 'Data-driven campaigns optimized for ROI. We maximize your ad spend efficiency across all channels while maintaining full transparency.' },
    { number: '04', title: 'Brand Development', description: 'Build a powerful brand identity that resonates with your target audience. From visual design to messaging, we create lasting impressions.' },
    { number: '05', title: 'Analytics & Insights', description: 'Transform raw data into actionable insights. Our advanced analytics framework provides real-time visibility into campaign performance.' },
  ]

  return (
    <div 
      className="sticky-test-container"
      style={{
        background: 'linear-gradient(#e8e8e8, #e0e0e0)',
        paddingTop: '100px',
        paddingBottom: '600px',
        minHeight: '200vh',
      }}
    >
      <div 
        style={{
          paddingTop: '150px',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Services
        </h2>
        
        <ul style={{ 
          listStyle: 'none', 
          padding: '0 24px', 
          margin: 0,
        }}>
          {cards.map((card, index) => (
            <li
              key={index}
              className="sticky-test-card"
              style={{ 
                position: 'sticky',
                top: '30px',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)',
                color: '#333',
                padding: '40px',
                borderRadius: '10px',
                marginBottom: '20px',
                marginTop: index * 30,
              }}
            >
              <h3 style={{ padding: 0, margin: 0 }}>
                <span style={{ 
                  display: 'block',
                  fontSize: '14px',
                  color: '#0c4eb9',
                }}>{card.number}</span>
                <span className="text-xl font-semibold">{card.title}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mt-3" style={{ margin: 0 }}>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StickyCardsSection
