import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'      },
  { label: 'Education',  href: '/education'  },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact',    href: '/contact'    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 66px;
          padding: 0 3rem;
          transition: background 0.4s, border-color 0.4s;
        }
        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          gap: 5px;
          padding: 0;
          z-index: 60;
        }
        .hamburger-btn .bar {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--text);
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .hamburger-btn.open .bar:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger-btn.open .bar:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .hamburger-btn.open .bar:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(44,31,14,0.4);
          z-index: 40;
        }
        .mobile-drawer {
          position: fixed;
          top: 0; right: 0;
          height: 100%;
          width: 280px;
          background: var(--bg);
          border-left: 1px solid var(--border);
          z-index: 50;
          display: flex;
          flex-direction: column;
          padding: 5rem 2.5rem 2.5rem;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }
        .drawer-nav-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: var(--text);
          text-decoration: none;
          transition: color 0.25s;
          display: block;
        }
        .drawer-nav-link:hover {
          color: var(--gold);
        }

        @media (max-width: 1024px) {
          .nav-desktop-links {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
          .mobile-overlay {
            display: block;
          }
          .nav-bar {
            padding: 0 1.5rem;
          }
        }
      `}</style>

      {/* ── Nav bar ── */}
      <nav
        className="nav-bar"
        style={{
          backgroundColor: scrolled ? 'rgba(245,239,230,0.92)' : 'rgba(245,239,230,0.78)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(139,104,60,0.18)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          OA<span style={{ color: 'var(--gold)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/projects"
            className="btn-gold"
            style={{ padding: '0.4rem 1.1rem', fontSize: '0.67rem' }}
          >
            Projects
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* ── Overlay ── */}
      <div
        className="mobile-overlay"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none', transition: 'opacity 0.3s' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Drawer ── */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontStyle: 'italic', color: 'var(--muted)', marginBottom: '0.5rem' }}>
          Navigation
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="drawer-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.2rem',
                fontWeight: 300,
                color: 'var(--gold)',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              Projects
            </Link>
          </li>
        </ul>

        <div style={{ marginTop: 'auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Owuraku Arhin
          </p>
        </div>
      </div>
    </>
  );
}