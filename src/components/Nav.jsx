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
    <nav className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__logo">
          Clouds on Paper
        </Link>

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
  )
}
