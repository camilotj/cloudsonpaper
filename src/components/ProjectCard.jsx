import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project, size = 'normal' }) {
  const href = `/${project.category}/${project.id}`

  return (
    <Link to={href} className={`card card--${size}`}>
      <div className="card__image-wrap">
        <img
          src={project.coverImage}
          alt={project.title}
          className="card__image"
          loading="lazy"
        />
        <span className="card__category">{project.category}</span>
        {project.youtubeId && (
          <span className="card__play" aria-hidden="true">&#9654;</span>
        )}
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
