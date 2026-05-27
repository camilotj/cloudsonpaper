import './Footer.css'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Substack',
    href: 'https://substack.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="3" rx="0.5" />
        <rect x="3" y="9.5" width="18" height="3" rx="0.5" />
        <path d="M3 15.5 L12 21 L21 15.5 V21 H3 V15.5Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <p className="footer__tagline">A journal of image and language.</p>
          <span className="footer__copy">© 2025 Camilo Tabares Jaramillo. All rights reserved.</span>
        </div>
        <nav className="footer__socials">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
