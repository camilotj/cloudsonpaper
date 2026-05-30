import { useEffect, useCallback } from 'react'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onNav }) {
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  const prev = useCallback(() => { if (hasPrev) onNav(index - 1) }, [hasPrev, index, onNav])
  const next = useCallback(() => { if (hasNext) onNav(index + 1) }, [hasNext, index, onNav])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const current = images[index]

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">&#215;</button>

      {hasPrev && (
        <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">
          &#8592;
        </button>
      )}

      <img
        className="lightbox__img"
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
      />

      {hasNext && (
        <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">
          &#8594;
        </button>
      )}

      {images.length > 1 && (
        <p className="lightbox__counter">{index + 1} / {images.length}</p>
      )}
    </div>
  )
}
