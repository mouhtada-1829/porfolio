import useScrollProgress from '../../hooks/useScrollProgress'
import './RevealSection.css'

const animStyles = {
  'fade-up': (p) => ({
    transform: `translateY(${60 * Math.max(0, 1 - p)}px)`
  }),
  'fade-left': (p) => ({
    transform: `translateX(${-80 * Math.max(0, 1 - p)}px)`
  }),
  'fade-right': (p) => ({
    transform: `translateX(${80 * Math.max(0, 1 - p)}px)`
  }),
  'zoom': (p) => ({
    transform: `scale(${0.85 + 0.15 * Math.max(0, p)})`
  }),
  'flip': (p) => ({
    transform: `perspective(800px) rotateX(${15 * Math.max(0, 1 - p)}deg)`,
    transformOrigin: 'top center'
  })
}

const RevealSection = ({ children, id, className = '', animation = 'fade-up' }) => {
  const [ref, progress] = useScrollProgress()
  const style = animStyles[animation]?.(progress) ?? {}

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section ${className}`}
      style={style}
    >
      {children}
    </section>
  )
}

export default RevealSection
