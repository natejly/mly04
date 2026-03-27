import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import './App.css'
import {
  contact,
  coopExperience,
  engineeringProjects,
  footerLinks,
  homePage,
  navigationLinks,
  photographyPage,
  profile,
} from './siteData.js'

const pageTitles = {
  '/': 'Home | Melana Ly',
  '/engineering-projects': 'Engineering Projects | Melana Ly',
  '/co-op-experience': 'Co-op Experience | Melana Ly',
  '/photography': 'Photography | Melana Ly',
  '/contact': 'Contact | Melana Ly',
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPathnameRef = useRef(pathname)

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Melana Ly'
  }, [pathname])

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    } else if (previousPathnameRef.current !== pathname) {
      window.scrollTo(0, 0)
    }

    previousPathnameRef.current = pathname
  }, [hash, pathname])

  return null
}

function Shell() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <>
      <ScrollManager />
      <div className="site-shell">
        <header className="site-header">
          <div className="container site-header__inner">
            <Link className="brand" to="/">
              <span className="brand__name">{profile.name}</span>
              <span className="brand__title">{profile.title}</span>
            </Link>
            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              + Menu
            </button>
          </div>
        </header>

        {menuOpen ? (
          <div
            className="menu-overlay"
            role="dialog"
            aria-modal="true"
            id="site-menu"
          >
            <div className="menu-panel">
              <div className="menu-panel__header">
                <p>{profile.name}</p>
                <button
                  className="menu-close"
                  type="button"
                  onClick={() => setMenuOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav className="menu-nav" aria-label="Primary">
                {navigationLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="menu-nav__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  className="menu-nav__link"
                  href={footerLinks.resume.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
                <a
                  className="menu-nav__link"
                  href={footerLinks.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>
        ) : null}

        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/engineering-projects"
              element={<EngineeringProjectsPage />}
            />
            <Route path="/co-op-experience" element={<CoopExperiencePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="container site-footer__inner">
            <Link className="site-footer__link" to={footerLinks.contact.href}>
              {footerLinks.contact.label}
            </Link>
            <a
              className="site-footer__link"
              href={footerLinks.resume.href}
              target="_blank"
              rel="noreferrer"
            >
              {footerLinks.resume.label}
            </a>
            <a
              className="site-footer__link"
              href={footerLinks.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              {footerLinks.linkedin.label}
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

function HomePage() {
  return (
    <div className="page page--home">
      <section className="container hero-card">
        <div className="hero-card__copy">
          <p className="eyebrow">About Me</p>
          <h1>{homePage.heroHeading}</h1>
          <div className="prose">
            {homePage.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="hero-card__portrait">
          <img src={homePage.portrait.src} alt={homePage.portrait.alt} />
        </div>
      </section>

      <section className="container section-grid">
        {homePage.featureCards.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </section>
    </div>
  )
}

function FeatureCard({ card }) {
  const content = (
    <>
      <div className="feature-card__image">
        <img src={card.image} alt={card.alt} />
      </div>
      <div className="feature-card__body">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </>
  )

  if (card.external) {
    return (
      <a
        className="feature-card"
        href={card.href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <Link className="feature-card" to={card.href}>
      {content}
    </Link>
  )
}

function EngineeringProjectsPage() {
  return (
    <div className="page">
      <section className="container section-intro">
        <p className="eyebrow">Engineering Projects</p>
        <h1>{engineeringProjects.heading}</h1>
        <p className="section-intro__lead">{engineeringProjects.subheading}</p>
        <p className="section-intro__hint">{engineeringProjects.note}</p>
      </section>

      <section className="container engineering-grid">
        {engineeringProjects.overviewCards.map((project) => (
          <a
            key={project.anchor}
            className="engineering-card"
            href={`#${project.anchor}`}
          >
            <div className="engineering-card__image">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="engineering-card__body">
              <h2>{project.title}</h2>
              <p>{project.meta}</p>
            </div>
          </a>
        ))}
      </section>

      <div className="container project-stack">
        {engineeringProjects.sections.map((project) => (
          <section key={project.anchor} id={project.anchor} className="project-panel">
            <div className="project-panel__intro">
              <div>
                <p className="eyebrow">{project.kicker}</p>
                <h2>{project.title}</h2>
                <p className="project-panel__meta">{project.meta}</p>
              </div>
              <div className="prose">
                {project.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {project.skills?.length ? (
              <div className="chip-row" aria-label={`${project.title} skills`}>
                {project.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}

            {project.bullets?.length ? (
              <ul className="detail-list">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}

            <div className="detail-gallery">
              {project.gallery.map((item) => (
                <figure key={item.title} className="detail-gallery__item">
                  <img src={item.image} alt={item.alt} />
                  <figcaption>
                    <span>{item.title}</span>
                    {item.caption ? <p>{item.caption}</p> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function CoopExperiencePage() {
  return (
    <div className="page">
      <section className="container section-intro section-intro--compact">
        <p className="eyebrow">Co-op Experience</p>
        <h1>Co-op Experience</h1>
      </section>

      <div className="container experience-stack">
        {coopExperience.roles.map((role) => (
          <section key={role.company} className="experience-card">
            <div className="experience-card__header">
              <div className="experience-card__logo">
                <img src={role.logo} alt={`${role.company} logo`} />
              </div>
              <div>
                <h2>{role.company}</h2>
                <p>{role.title}</p>
              </div>
            </div>
            <ul className="detail-list">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {role.additionalHeading ? (
              <div className="experience-card__subsection">
                <h3>{role.additionalHeading}</h3>
                <ul className="detail-list">
                  {role.additionalBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  )
}

function PhotographyPage() {
  return (
    <div className="page">
      <section className="container photography-intro">
        <div className="photography-intro__left">
          <p className="eyebrow">Photography</p>
          <h1>Photography</h1>
          <div className="gear-card">
            <h2>Current Gear</h2>
            <ul className="gear-list">
              {photographyPage.gear.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="photography-intro__right prose">
          <p>{photographyPage.intro}</p>
        </div>
      </section>

      <div className="container album-stack">
        {photographyPage.albums.map((album) => (
          <section key={album.title} className="album-panel">
            <h2>{album.title}</h2>
            <div className="photo-masonry">
              {album.images.map((image) => (
                <figure key={image.src} className="photo-masonry__item">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="page">
      <section className="container contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Contact Me!</h1>
        </div>
        <div className="contact-list">
          <p>
            <span>Phone</span>
            <a href={`tel:${contact.phoneDigits}`}>{contact.phoneDisplay}</a>
          </p>
          <p>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <span>LinkedIn</span>
            <a href={contact.linkedinHref} target="_blank" rel="noreferrer">
              {contact.linkedinDisplay}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
