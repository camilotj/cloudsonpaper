import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/film', label: 'Film' },
  { to: '/photography', label: 'Photography' },
  { to: '/articles-and-essays', label: 'Articles and Essays' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header className="masthead">
        <div className="masthead__inner container">
          <p className="masthead__est">Est. 2025</p>
          <Link to="/" className="masthead__title">Clouds on Paper</Link>
        </div>
      </header>

      <nav className="nav">
        <div className="nav__inner container">
          <button
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>

          <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav__link ${pathname.startsWith(to) ? 'nav__link--active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
