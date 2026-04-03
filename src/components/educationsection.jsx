import { useReveal } from '../Usereveal';
import upsa from '../assets/images/upsa.jpg';

const degrees = [
  {
    index: '01',
    title: 'MBA — Marketing',
    school: 'University of Professional Studies, Accra (UPSA)',
    period: 'Oct 2025 – 2027',
    status: 'Ongoing',
  },
  {
    index: '02',
    title: 'MA — Brands & Communication Management',
    school: 'University of Professional Studies, Accra (UPSA)',
    period: 'Aug 2024 – Aug 2025',
    status: null,
  },
  {
    index: '03',
    title: 'BBA — Business Administration',
    school: 'University of Professional Studies, Accra (UPSA)',
    period: 'Sept 2018 – Sept 2023',
    status: null,
  },
];

const certs = [
  {
    title: 'AI Career Essentials (AiCE)',
    issuer: 'ALX Africa',
    year: '2024',
    desc: 'Augmented Professional Development Skills in the Digital Age',
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Unlocked',
    year: '2023',
    desc: 'Certified in core digital marketing principles and strategy',
  },
];

export default function EducationSection() {
  const ref = useReveal();

  return (
    <>
      <style>{`
        .edu-section-pad {
          padding: 6rem 2.5rem;
        }
        .edu-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .edu-degree-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          gap: 2rem;
          flex-wrap: wrap;
        }
        .edu-degree-left {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
        }
        .edu-degree-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }
        .edu-cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .edu-index {
          font-size: 2.8rem;
        }
        .edu-degree-title {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .edu-section-pad {
            padding: 4rem 1.8rem;
          }
          .edu-degree-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem 0;
          }
          .edu-degree-left {
            gap: 1.2rem;
          }
          .edu-degree-right {
            margin-left: 0;
            padding-left: 0;
          }
          .edu-cert-grid {
            grid-template-columns: 1fr;
          }
          .edu-index {
            font-size: 2rem;
          }
          .edu-degree-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .edu-section-pad {
            padding: 3rem 1.4rem;
          }
          .edu-index {
            font-size: 1.8rem;
          }
          .edu-degree-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section
        id="education"
        ref={ref}
        className="edu-section-pad"
        style={{ background: 'var(--bg)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <div className="flex items-center gap-3 reveal" style={{ marginBottom: '4rem' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              02 — Education
            </p>
          </div>

          {/* Heading row */}
          <div className="edu-heading-row">
            <h2
              className="font-display reveal delay-100"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)' }}
            >
              Academic
              <br />
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Foundation.</em>
            </h2>

            <div className="reveal-right delay-200" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.55 }}>
              <img
                src={upsa}
                alt="UPSA"
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                UPSA, Accra
              </span>
            </div>
          </div>

          {/* Degrees list */}
          <div style={{ marginBottom: '5rem' }}>
            {degrees.map((deg, i) => (
              <div
                key={i}
                className={`edu-degree-row reveal delay-${(i + 1) * 100}`}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,146,42,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Left: index + title */}
                <div className="edu-degree-left">
                  <span
                    className="font-display edu-index"
                    style={{ fontWeight: 300, color: 'var(--border)', lineHeight: 1, flexShrink: 0, marginTop: '4px' }}
                  >
                    {deg.index}
                  </span>
                  <div>
                    <h3
                      className="font-display edu-degree-title"
                      style={{ fontWeight: 300, color: 'var(--text)', marginBottom: '0.3rem' }}
                    >
                      {deg.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{deg.school}</p>
                  </div>
                </div>

                {/* Right: period + status */}
                <div className="edu-degree-right">
                  {deg.status && (
                    <span style={{
                      fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '0.3rem 0.8rem',
                      border: '1px solid var(--gold)',
                      color: 'var(--gold)',
                      whiteSpace: 'nowrap',
                    }}>
                      {deg.status}
                    </span>
                  )}
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                    {deg.period}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>

          {/* Certifications */}
          <div className="reveal delay-400">
            <div className="flex items-center gap-3" style={{ marginBottom: '2rem' }}>
              <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Certifications
              </p>
            </div>

            <div className="edu-cert-grid">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className={`reveal delay-${(i + 5) * 100}`}
                  style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    padding: '1.8rem',
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '0.25rem 0.7rem',
                      background: 'rgba(200,146,42,0.1)',
                      color: 'var(--gold)',
                    }}>
                      {cert.issuer}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{cert.year}</span>
                  </div>
                  <h4 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.5rem' }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}