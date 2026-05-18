import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import './Home.css'

const sorted = [...projects].sort((a, b) => b.year - a.year || b.id - a.id)
const [hero, ...rest] = sorted

export default function Home() {
  return (
    <main className="home">

      {hero && (
        <section className="home__hero">
          <Link to={`/${hero.category}/${hero.id}`} className="hero-link">
            <div className="hero__image-wrap">
              <img src={hero.coverImage} alt={hero.title} className="hero__image" />
              <div className="hero__overlay">
                <div className="hero__overlay-inner">
                  <span className="hero__category">{hero.category}</span>
                  <div className="hero__text">
                    <p className="hero__year">{hero.year}</p>
                    <h1 className="hero__title">{hero.title}</h1>
                    <p className="hero__description">{hero.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <div className="home__rule" />

      <section className="home__feed container">
        {rest.map(project => (
          <ProjectCard key={project.id} project={project} size="square" />
        ))}
      </section>

    </main>
  )
}
