import { useState, useEffect } from 'react'
import { fetchByType, categoryToType } from '../lib/queries'
import ProjectCard from '../components/ProjectCard'
import './CategoryPage.css'

const meta = {
  photography: { label: 'Photography' },
  film: { label: 'Film' },
  'writing': { label: 'Writing' },
}

export default function CategoryPage({ category }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchByType(categoryToType[category]).then(setProjects)
  }, [category])

  const { label } = meta[category]

  return (
    <main className="catpage">
      <header className="catpage__header container">
        <h1 className="catpage__title">{label}</h1>
      </header>
      <section className="catpage__grid container">
        {projects.map(project => (
          <div key={project._id} className="catpage__item">
            <ProjectCard project={project} size="normal" />
          </div>
        ))}
      </section>
    </main>
  )
}
