import { useReveal } from '../Usereveal';
import arhin from '../assets/images/arhin.JPG';

const experiences = [
  {
    index: '01',
    role: 'Senior Client Manager',
    company: 'Origin8 Limited',
    period: 'Oct 2022 – Present',
    location: 'Accra, Ghana',
    tag: 'Current Role',
    note: 'Leading client communications and brand strategy for key accounts in a dynamic marketing agency environment.',
    highlights: [
      'Managing key client accounts and maintaining long-term relationships.',
      'Driving brand strategy and communications across campaigns.',
      'Coordinating cross-functional teams to deliver client objectives on time.',
    ],
  },
  {
    index: '02',
    role: 'Intern',
    company: 'Origin8 Limited',
    period: 'June – Dec 2020',
    location: 'Accra, Ghana',
    tag: null,
    note: null,
    highlights: [
      'Supported client communications and account management tasks.',
      'Assisted in campaign planning and execution across multiple brands.',
    ],
  },
  {
    index: '03',
    role: 'Marketing Intern',
    company: 'Hillview Guest Center',
    period: 'July – Sept 2019',
    location: 'Ghana',
    tag: null,
    note: null,
    highlights: [
      'Applied foundational marketing strategies in a hospitality context.',
      'Supported customer engagement and promotional activities.',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useReveal();

  return (
    <>
      <style>{`
        .exp-section-pad {
          padding: 6rem 2.5rem;
        }
        .exp-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          margin-bottom: 5rem;
        }
        .exp-img-height {
          height: 440px;
        }
        .exp-card-pad {
          padding: 2rem 2.5rem;
        }
        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .exp-card-left {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .exp-card-right {
          text-align: right;
          flex-shrink: 0;
        }
        .exp-index {
          font-size: 2.5rem;
        }
        .exp-role {
          font-size: 1.6rem;
        }

        @media (max-width: 900px) {
          .exp-top-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
          }
          .exp-img-height {
            height: 320px;
          }
          .exp-section-pad {
            padding: 4rem 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .exp-card-pad {
            padding: 1.5rem;
          }
          .exp-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }
          .exp-card-right {
            text-align: left;
          }
          .exp-index {
            font-size: 2rem;
          }
          .exp-role {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .exp-section-pad {
            padding: 3rem 1.4rem;
          }
          .exp-card-left {
            gap: 1rem;
          }
          .exp-index {
            font-size: 1.8rem;
          }
          .exp-role {
            font-size: 1.2rem;
          }
          .exp-img-height {
            height: 260px;
          }
        }
      `}</style>

      <section
        id="experience"
        ref={ref}
        className="exp-section-pad"
        style={{ background: 'var(--bg2)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <div className="flex items-center gap-3 reveal" style={{ marginBottom: '4rem' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              03 — Experience
            </p>
          </div>

          {/* Heading + image top grid */}
          <div className="exp-top-grid">

            {/* Left: heading + quote */}
            <div>
              <h2
                className="font-display reveal delay-100"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '2rem' }}
              >
                Professional
                <br />
                <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Journey.</em>
              </h2>

              <div
                className="reveal delay-200"
                style={{ borderLeft: '3px solid var(--terracotta)', padding: '1.2rem 1.4rem', background: 'var(--bg)' }}
              >
                <p
                  className="font-display"
                  style={{ fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.65 }}
                >
                  "The thrill of shaping a message, watching it come alive, and seeing people connect to it."
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="reveal-right delay-200" style={{ position: 'relative' }}>
              <div className="exp-img-height" style={{ width: '100%', overflow: 'hidden', background: 'var(--bg)' }}>
                <img
                  src={arhin}
                  alt="Owuraku Arhin"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              </div>

              {/* Gold gradient at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '100px',
                background: 'linear-gradient(to top, rgba(200,146,42,0.07), transparent)',
                pointerEvents: 'none',
              }} />

              {/* Gold corner — top right */}
              <div style={{
                position: 'absolute', top: '-10px', right: '-10px',
                width: '44px', height: '44px',
                borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)',
              }} />

              {/* Gold corner — bottom left */}
              <div style={{
                position: 'absolute', bottom: '-10px', left: '-10px',
                width: '44px', height: '44px',
                borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)',
              }} />

              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                background: 'rgba(245,239,230,0.94)', backdropFilter: 'blur(6px)',
                padding: '0.6rem 1rem', borderLeft: '2px solid var(--gold)',
              }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
                 Client Manager
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: 'var(--text)' }}>
                  Origin8 Limited
                </p>
              </div>
            </div>
          </div>

          {/* Experience cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card-pad reveal delay-${(i + 2) * 100}`}
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Card header */}
                <div className="exp-card-header">

                  {/* Left: index + role + company */}
                  <div className="exp-card-left">
                    <span
                      className="font-display exp-index"
                      style={{ fontWeight: 300, color: 'var(--border)', lineHeight: 1, flexShrink: 0, marginTop: '4px' }}
                    >
                      {exp.index}
                    </span>
                    <div>
                      {exp.tag && (
                        <span style={{
                          display: 'inline-block',
                          fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                          padding: '0.2rem 0.7rem',
                          background: 'rgba(200,146,42,0.1)', color: 'var(--gold)',
                          marginBottom: '0.5rem',
                        }}>
                          {exp.tag}
                        </span>
                      )}
                      <h3
                        className="font-display exp-role"
                        style={{ fontWeight: 300, color: 'var(--text)', lineHeight: 1.1, marginBottom: '0.25rem' }}
                      >
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--terracotta)' }}>{exp.company}</p>
                    </div>
                  </div>

                  {/* Right: period + location */}
                  <div className="exp-card-right">
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>{exp.period}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>📍 {exp.location}</p>
                  </div>
                </div>

                {/* Note */}
                {exp.note && (
                  <p style={{ fontSize: '0.78rem', fontStyle: 'italic', color: 'var(--muted)', marginBottom: '1rem' }}>
                    {exp.note}
                  </p>
                )}

                {/* Highlights */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: 'var(--gold)', flexShrink: 0, marginTop: '7px',
                      }} />
                      <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{h}</p>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}