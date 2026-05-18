import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './CategoryPage.css'

const meta = {
  photography: {
    label: 'Photography',
    subtitle: 'A collection of photographic work — series, single images, and ongoing projects.',
  },
  film: {
    label: 'Film',
    subtitle: 'Short films, experimental work, and moving image projects.',
  },
  articles: {
    label: 'Articles',
    subtitle: 'Essays and writing on image-making, process, and influence.',
  },
}

export default function CategoryPage({ category }) {
  const filtered = [...projects]
    .filter(p => p.category === category)
    .sort((a, b) => b.year - a.year)

  const { label, subtitle } = meta[category]

  return (
    <main className="catpage">
      <header className="catpage__header container">
        <h1 className="catpage__title">{label}</h1>
        <p className="catpage__subtitle">{subtitle}</p>
        <div className="catpage__count">{filtered.length} works</div>
      </header>
      <section className="catpage__grid container">
        {filtered.map(project => (
          <div key={project.id} className="catpage__item">
            <ProjectCard
              project={project}
              size="normal"
            />
          </div>
        ))}
      </section>
    </main>
  )
}
