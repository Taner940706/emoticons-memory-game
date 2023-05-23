import React from 'react'

export default function Card({card}) {
  return (
    <div>
          <div className="card">
            <div>
              <img className="front" src={card.src} alt="front image" />
              <img className="back" src="/images/cover.jpg" alt="cover image" />
            </div>
          </div>
    </div>
  )
}
