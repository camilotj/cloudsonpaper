import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { fetchBySlug } from '../lib/queries'
import { urlFor } from '../lib/sanityClient'
import Lightbox from '../components/Lightbox'
import './ProjectDetail.css'

const backLinks = {
  article:      { label: 'writing', to: '/writing' },
  photography:  { label: 'photography',         to: '/photography' },
  film:         { label: 'film',                to: '/film' },
}

function makePortableTextComponents(onImageClick) {
  return {
    types: {
      image: ({ value }) => {
        const displaySrc = urlFor(value).width(1200).quality(90).url()
        const lightboxSrc = urlFor(value).width(3600).quality(95).url()
        return (
          <img
            src={displaySrc}
            alt={value.alt || ''}
            className="article-inline-image"
            onClick={() => onImageClick(lightboxSrc, value.alt || '')}
            style={{ cursor: 'zoom-in' }}
          />
        )
      },
    },
    block: {
      blockquote: ({ children }) => (
        <blockquote className="article-pullquote">{children}</blockquote>
      ),
    },
  }
}

export default function ProjectDetail({ type }) {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState(null)
  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    fetchBySlug(type, slug).then(data => {
      setProject(data)
      setLoading(false)
    })
  }, [type, slug])

  const ptComponents = makePortableTextComponents((src, alt) => setLightbox({ src, alt }))
  const back = backLinks[type]

  if (loading) return <main className="detail container" />

  if (!project) return (
    <main className="detail container">
      <p style={{ paddingTop: '4rem', color: 'var(--color-text-muted)' }}>Project not found.</p>
    </main>
  )

  const isFilm = type === 'film'

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
      <main className="detail detail--article">
        <div className="article-back container">
          <Link to={back.to} className="detail__back-link">&#8592; {back.label}</Link>
        </div>

        <div className="article-column">
          <header className="article-header">
            <p className="article-kicker">{project.tags[0]}</p>
            <h1 className="article-title">{project.title}</h1>
            <p className="article-deck">{project.description}</p>
            <div className="article-byline">
              {project.author && <span>By {project.author}</span>}
              <span>{project.year}</span>
            </div>
          </header>

          <div className="article-rule-wrap" aria-hidden="true">
            <span className="article-ornament">&#10022;</span>
          </div>
        </div>

        {isFilm && project.youtubeId && (
          <div className="film-video-section">
            <div className="film-video-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="film-video"
              />
            </div>
          </div>
        )}

        <div className="article-column">
          {!isFilm && project.coverImage && (
            <img
              src={urlFor(project.coverImage).width(1560).quality(90).url()}
              alt={project.title}
              className="article-cover"
            />
          )}

          {project.body && (
            <div className="article-body">
              <PortableText value={project.body} components={ptComponents} />
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="article-gallery">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={urlFor(img).width(1600).quality(90).url()}
                  alt={`${project.title} ${i + 1}`}
                  className="article-gallery__img"
                  onClick={() => setLightbox({ src: urlFor(img).width(3600).quality(95).url(), alt: `${project.title} ${i + 1}` })}
                  style={{ cursor: 'zoom-in' }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
