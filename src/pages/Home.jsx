import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAll } from '../lib/queries'
import { urlFor } from '../lib/sanityClient'
import ProjectCard from '../components/ProjectCard'
import './Home.css'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchAll().then(setProjects)
  }, [])

  const [hero, ...rest] = projects

  return (
    <main className="home">

      {hero && (
        <section className="home__hero">
          <Link to={`/${hero.category}/${hero.slug}`} className="hero-link">
            <div className="hero__image-wrap">
              <img
                src={hero.coverImage ? urlFor(hero.coverImage).width(2800).quality(90).url() : ''}
                alt={hero.title}
                className="hero__image"
              />
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
          <ProjectCard key={project._id} project={project} size="normal" />
        ))}
      </section>

    </main>
  )
}
