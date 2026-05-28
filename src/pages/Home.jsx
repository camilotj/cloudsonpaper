import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAll } from '../lib/queries'
import { urlFor } from '../lib/sanityClient'
import ProjectCard from '../components/ProjectCard'
import './Home.css'

const SECTION_ORDER = ['film', 'photography', 'writing']

const sectionLabels = {
  film: 'Film',
  photography: 'Photography',
  'writing': 'Writing',
}

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchAll().then(setProjects)
  }, [])

  const [hero, ...rest] = projects

  const grouped = {}
  rest.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = []
    grouped[p.category].push(p)
  })

  const sections = SECTION_ORDER
    .filter(cat => grouped[cat]?.length)
    .map(cat => ({ category: cat, items: grouped[cat] }))

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

      {sections.map(({ category, items }) => (
        <section key={category} className="home__section">
          <div className="home__section-head container">
            <h2 className="home__section-label">{sectionLabels[category]}</h2>
          </div>
          <div className="home__feed container">
            {items.map(project => (
              <ProjectCard key={project._id} project={project} size="normal" />
            ))}
          </div>
        </section>
      ))}

    </main>
  )
}
