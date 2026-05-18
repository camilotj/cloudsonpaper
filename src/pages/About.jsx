import './About.css'

export default function About() {
  return (
    <main className="about">
      <div className="about__inner container">

        <header className="about__header">
          <h1 className="about__title">About</h1>
        </header>

        <div className="about__body">
          <div className="about__image-col">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=90"
              alt="Portrait"
              className="about__portrait"
            />
          </div>

          <div className="about__text-col">
            <p className="about__lead">
              I work with photography and film as ways of attending to the world — slowly, carefully, with as little noise as possible.
            </p>

            <p>
              Based between Bogotá and wherever the work takes me. My practice moves between documentary instinct and more formal, contemplative approaches — interested in light, duration, and what images do to time.
            </p>

            <p>
              Before turning to visual work full-time, I spent several years writing. That background still shapes how I think about framing, rhythm, and what it means to hold a viewer's attention without forcing anything on them.
            </p>

            <p>
              I'm available for commissions, collaborations, and editorial work.
            </p>

            <div className="about__contact">
              <a href="mailto:hello@cloudsonpaper.com" className="about__contact-link">
                hello@cloudsonpaper.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
