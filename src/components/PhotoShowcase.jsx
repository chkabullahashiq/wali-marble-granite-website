import '../styles/PhotoShowcase.css'

export default function PhotoShowcase({ image, tagline, title, text, reverse, children }) {
  return (
    <div className={`photo-showcase ${reverse ? 'is-reverse' : ''}`}>
      <div className="showcase-image">
        <img src={image} alt={title} />
      </div>
      <div className="showcase-copy">
        <span className="label">{tagline}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}
