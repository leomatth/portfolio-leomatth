import { useState, useRef, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [positions, setPositions] = useState({ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } })
  const [clickedWord, setClickedWord] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const firstRef = useRef(null)
  const secondRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const moveWord = (wordKey) => {
      if (clickedWord === wordKey) return

      const ref = wordKey === 'first' ? firstRef : secondRef
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const wordCenterX = rect.left + rect.width / 2
      const wordCenterY = rect.top + rect.height / 2

      const dx = mousePos.x - wordCenterX
      const dy = mousePos.y - wordCenterY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        // Fugir do mouse
        const angle = Math.atan2(dy, dx)
        const escapeDistance = 150
        const newX = Math.cos(angle + Math.PI) * escapeDistance
        const newY = Math.sin(angle + Math.PI) * escapeDistance

        setPositions((prev) => ({
          ...prev,
          [wordKey]: { x: newX, y: newY }
        }))
      } else {
        // Movimento lateral suave
        const direction = wordKey === 'first' ? -1 : 1
        const randomX = direction * (Math.random() * 80 + 40)
        const randomY = (Math.random() - 0.5) * 60

        setPositions((prev) => ({
          ...prev,
          [wordKey]: { x: randomX, y: randomY }
        }))
      }
    }

    const interval = setInterval(() => {
      moveWord('first')
      moveWord('second')
    }, 2000)

    return () => clearInterval(interval)
  }, [mousePos, clickedWord])

  const handleWordClick = (word) => {
    setClickedWord(word)
    setPositions({ first: { x: 0, y: 0 }, second: { x: 0, y: 0 } })

    setTimeout(() => {
      setClickedWord(null)
    }, 5000)
  }

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-content">
        <h1>
          <span
            ref={firstRef}
            className="name-part first"
            style={{
              transform: `translate(${positions.first.x}px, ${positions.first.y}px)`,
              cursor: 'pointer'
            }}
            onClick={() => handleWordClick('first')}
          >
            Leonardo
          </span>
          {' '}
          <span
            ref={secondRef}
            className="name-part second"
            style={{
              transform: `translate(${positions.second.x}px, ${positions.second.y}px)`,
              cursor: 'pointer'
            }}
            onClick={() => handleWordClick('second')}
          >
            Pereira
          </span>
        </h1>
        <p className="hero-subtitle">
          Desenvolvedor front-end especializado em criar experiências web modernas com JavaScript/TypeScript.
        </p>
        <p className="hero-description">
          Transformo ideias em soluções digitais elegantes e funcionais.
        </p>
        <button className="cta-button">
          Vamos conversar?
        </button>
      </div>
      <div className="hero-decoration">
        <div className="gradient-blob"></div>
        <div className="gradient-blob-2"></div>
      </div>
    </section>
  )
}
