import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileimg from '../assets/images/image1.jpeg';

const roles = [
  'Communications Professional.',
  'Brand Strategist.',
  'Client Manager.',
  'Storyteller.',
];

export default function Hero() {
  const [loaded,      setLoaded]  = useState(false);
  const [displayText, setDisplay] = useState('');
  const [roleIdx,     setRoleIdx] = useState(0);
  const [charIdx,     setCharIdx] = useState(0);
  const [phase,       setPhase]   = useState('typing');

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const word = roles[roleIdx];
    let timeout;
    if (phase === 'typing') {
      if (charIdx < word.length) {
        timeout = setTimeout(() => {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 72);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erase'), 400);
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 38);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, charIdx, roleIdx]);

  const fade = (delay) => ({
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(16px)',
  });

  return (
    <>
      {/* Responsive styles */}
      <style>{`
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 66px);
        }
        .hero-image-col {
          position: relative;
          overflow: hidden;
          background: var(--bg2);
          min-height: 300px;
        }
        .hero-left {
          background: var(--bg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem 5rem;
          position: relative;
        }
        .hero-name {
          font-size: clamp(3.8rem, 5.5vw, 6.5rem);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-image-col {
            order: -1;
            height: 55vw;
            min-height: 260px;
            max-height: 420px;
          }
          .hero-left {
            padding: 3rem 1.8rem 5rem 1.8rem;
          }
          .hero-name {
            font-size: clamp(3rem, 11vw, 4.5rem);
          }
          .hero-scroll-hint {
            left: 1.8rem;
            bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-image-col {
            height: 70vw;
          }
          .hero-left {
            padding: 2.5rem 1.4rem 4.5rem 1.4rem;
          }
          .hero-name {
            font-size: clamp(2.8rem, 12vw, 3.5rem);
          }
          .hero-scroll-hint {
            left: 1.4rem;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* ── Left: Text ── */}
        <div className="hero-left">

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', ...fade('0.2s') }}>
            <span style={{ width: '28px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Communications &amp; Brand Strategy
            </p>
          </div>

          {/* Name */}
          <h1
            className="font-display hero-name"
            style={{
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--text)',
              marginBottom: '1.2rem',
              ...fade('0.4s'),
            }}
          >
            Owuraku
            <br />
            <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Arhin</em>
          </h1>

          {/* Typing role */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              minHeight: '1.8rem',
              marginBottom: '1.5rem',
              ...fade('0.6s'),
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--muted)' }}>
              {displayText}
            </span>
            <span className="cursor-blink" />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.92rem',
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'var(--muted)',
              maxWidth: '400px',
              marginBottom: '2.5rem',
              ...fade('0.8s'),
            }}
          >
            Connecting people and brands through story and strategy — across Event Planning,
            Digital Marketing, and Client Relations.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', ...fade('1s') }}>
            <Link to="/about" className="btn-primary">
              Discover More
            </Link>
            <Link to="/projects" className="btn-outline">
              View Projects
            </Link>
          </div>

          {/* Scroll hint */}
          <div
            className="hero-scroll-hint"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1s ease 1.4s',
            }}
          >
            <div style={{ width: '1px', height: '34px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(122,102,80,0.55)' }}>
              Scroll
            </span>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="hero-image-col">
          <img
            src={profileimg}
            alt="Owuraku Arhin"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, rgba(245,239,230,0.08) 0%, transparent 50%), linear-gradient(to top, rgba(44,31,14,0.3) 0%, transparent 45%)',
            }}
          />

          {/* Location tag */}
          <div
            style={{
              position: 'absolute', bottom: '1.5rem', left: '1.5rem',
              background: 'rgba(245,239,230,0.93)',
              backdropFilter: 'blur(8px)',
              padding: '0.65rem 1rem',
              borderLeft: '2px solid var(--gold)',
            }}
          >
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>
              Based in
            </p>
            <p className="font-display" style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
              Accra, Ghana
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-end',
            }}
          >
            {[{ n: '3+', l: 'Years Exp.' }, { n: '2', l: 'Postgrad' }].map((s) => (
              <div key={s.l} style={{ textAlign: 'right' }}>
                <p className="font-display" style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--bg)', lineHeight: 1 }}>
                  {s.n}
                </p>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.65)', marginTop: '2px' }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}