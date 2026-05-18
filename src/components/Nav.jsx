import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/photography', label: 'Photography' },
  { to: '/film', label: 'Film' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__logo">
          Clouds on Paper
        </Link>
        <ul className="nav__links">
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
