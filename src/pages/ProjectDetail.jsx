import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { projects } from '../data/projects'
import './ProjectDetail.css'

const articleFiles = import.meta.glob('../data/articles/*.md', { as: 'raw', eager: true })

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) return (
    <main className="detail container">
      <p style={{ paddingTop: '4rem', color: 'var(--color-text-muted)' }}>Project not found.</p>
    </main>
  )

  if (project.category === 'articles') {
    const raw = project.slug ? articleFiles[`../data/articles/${project.slug}.md`] : null

    return (
      <main className="detail detail--article">
        <div className="article-back container">
          <Link to="/articles" className="detail__back-link">&#8592; articles</Link>
        </div>

        <div className="article-column">
          <header className="article-header">
            <p className="article-kicker">{project.tags[0]}</p>
            <h1 className="article-title">{project.title}</h1>
            <p className="article-deck">{project.description}</p>
            <div className="article-byline">
              <span>{project.year}</span>
            </div>
          </header>

          <div className="article-rule-wrap" aria-hidden="true">
            <span className="article-ornament">&#10022;</span>
          </div>

          {project.coverImage && (
            <img
              src={project.coverImage}
              alt={project.title}
              className="article-cover"
            />
          )}

          {raw && (
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: marked.parse(raw) }}
            />
          )}
        </div>
      </main>
    )
  }

  return (
    <main className="detail">
      <div className="detail__back container">
        <Link to={`/${project.category}`} className="detail__back-link">
          &#8592; {project.category}
        </Link>
      </div>

      <header className="detail__header container">
        <div className="detail__meta">
          <span className="detail__year">{project.year}</span>
        </div>
        <h1 className="detail__title">{project.title}</h1>
        <p className="detail__description">{project.description}</p>
        <div className="detail__tags">
          {project.tags.map(tag => (
            <span key={tag} className="detail__tag">{tag}</span>
          ))}
        </div>
      </header>

      <div className="detail__media">
        {project.youtubeId ? (
          <div className="detail__video-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="detail__video"
            />
          </div>
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className="detail__image"
          />
        )}
      </div>
    </main>
  )
}
