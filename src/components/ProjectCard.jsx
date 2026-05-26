import { Link } from 'react-router-dom'
import { urlFor } from '../lib/sanityClient'
import './ProjectCard.css'

const categoryLabels = {
  'articles-and-essays': 'Articles and Essays',
  photography: 'Photography',
  film: 'Film',
}

export default function ProjectCard({ project, size = 'normal' }) {
  const href = `/${project.category}/${project.slug}`
  const imgSrc = project.coverImage ? urlFor(project.coverImage).width(800).quality(85).url() : ''

  return (
    <Link to={href} className={`card card--${size}`}>
      <div className="card__image-wrap">
        <img
          src={imgSrc}
          alt={project.title}
          className="card__image"
          loading="lazy"
        />
        <span className="card__category">{categoryLabels[project.category] || project.category}</span>
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className="card__year">{project.year}</span>
        </div>
        <h2 className="card__title">{project.title}</h2>
        <p className="card__description">{project.description}</p>
        <div className="card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
