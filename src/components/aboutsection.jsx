import { useReveal } from '../Usereveal';
import aboutimg from '../assets/images/image2.jpeg';
import cv from '../assets/OWURAKU_ARHIN_2026_CV..pdf';





const skills = [
    'Media Relations',
    'Brand Strategy',
    'Event Planning & Mgt',
    'Digital Marketing',
    'Content Strategy',
    'Client Relations',
    'Project Management',
    'Strategic Communications',
];

const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '2', label: 'Postgrad Degrees' },
    { number: '∞', label: 'Stories Told' },
];

export default function AboutSection() {
    const ref = useReveal();

    return (
        <>
            <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .about-img-height {
          height: 380px;
        }
        .about-section-pad {
          padding: 6rem 2.5rem;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-img-height {
            height: 320px;
          }
          .about-section-pad {
            padding: 4rem 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .about-img-height {
            height: 260px;
          }
          .about-section-pad {
            padding: 3rem 1.4rem;
          }
        }
      `}</style>

            <section
                id="about-me"
                ref={ref}
                className="about-section-pad"
                style={{ background: 'var(--bg2)' }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Section label */}
                    <div className="flex items-center gap-3 reveal" style={{ marginBottom: '4rem' }}>
                        <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                            01 — About Me
                        </p>
                    </div>

                    <div className="about-grid">

                        {/* ── Left: Text ── */}
                        <div>
                            <h2
                                className="font-display reveal delay-100"
                                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '2rem' }}
                            >
                                A communicator
                                <br />
                                <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>by nature.</em>
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                                <p className="reveal delay-200" style={{ fontSize: '0.93rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--muted)' }}>
                                    I’m a marketing communications professional with over three years of experience
                                    helping brands connect with the right audiences through clear messaging, thoughtful
                                    strategy, and well-executed campaigns. My work spans corporate, development, and
                                    commercial sectors, where I’ve supported brands like Ghacem, Karpowership, NBC
                                    Ghana Trust, and UN agencies in delivering impactful communications and
                                    stakeholder engagement initiatives.
                                </p>
                                <p className="reveal delay-300" style={{ fontSize: '0.93rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--muted)' }}>
                                    With a background in marketing communications, events, and client management, I
                                    bring a structured yet creative approach to every project — from shaping narratives
                                    to coordinating execution across digital and traditional media platforms.
                                </p>
                                <p className="reveal delay-400" style={{ fontSize: '0.93rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--muted)' }}>
                                    I’m particularly drawn to work at the intersection of people, culture, and business —
                                    where communication goes beyond visibility to build trust, drive engagement, and
                                    create meaningful impact.
                                </p>
                            </div>

                            {/* Pull quote */}
                            <div
                                className="reveal delay-400"
                                style={{ background: 'var(--bg)', borderLeft: '3px solid var(--terracotta)', padding: '1.2rem 1.4rem', marginBottom: '2rem' }}
                            >
                                <p className="font-display" style={{ fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.65 }}>
                                    "The thrill of shaping a message, watching it come alive, and seeing people connect to it."
                                </p>
                            </div>

                            {/* CV download */}
                            <a
                                href={cv}
                                download="Owuraku_Arhin_CV.pdf"
                                className="reveal delay-500"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                                    color: 'var(--gold)', textDecoration: 'none',
                                    borderBottom: '1px solid var(--gold)', paddingBottom: '2px',
                                    transition: 'gap 0.3s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.gap = '1rem')}
                                onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}
                            >
                                Download CV <span>→</span>
                            </a>
                        </div>

                        {/* ── Right: Image + Skills + Stats ── */}
                        <div>

                            {/* Image */}
                            <div className="reveal-right delay-100" style={{ position: 'relative', marginBottom: '2.5rem' }}>
                                <div className="about-img-height" style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={aboutimg}
                                        alt="Owuraku Arhin"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                                    />
                                </div>

                                {/* Gold corner — top left */}
                                <div style={{
                                    position: 'absolute', top: '-10px', left: '-10px',
                                    width: '44px', height: '44px',
                                    borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)',
                                }} />

                                {/* Gold corner — bottom right */}
                                <div style={{
                                    position: 'absolute', bottom: '-10px', right: '-10px',
                                    width: '44px', height: '44px',
                                    borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)',
                                }} />

                                {/* Badge */}
                                {/* <div style={{
                                    position: 'absolute', bottom: '1.2rem', right: '1.2rem',
                                    background: 'rgba(245,239,230,0.94)', backdropFilter: 'blur(6px)',
                                    padding: '0.6rem 1rem', borderLeft: '2px solid var(--terracotta)',
                                }}> */}
                                {/* <p style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '3px' }}>
                                        Currently at
                                    </p> */}
                                {/* <p className="font-display" style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                                        Origin8 Limited
                                    </p>
                                </div> */}
                            </div>

                            {/* Skills */}
                            <div className="reveal delay-200" style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                                    Core Skills
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                                                padding: '0.35rem 0.8rem',
                                                border: '1px solid var(--border)', color: 'var(--muted)',
                                                cursor: 'default', transition: 'border-color 0.25s, color 0.25s',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--text)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div
                                className="reveal delay-300"
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}
                            >
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <p className="font-display" style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '4px' }}>
                                            {s.number}
                                        </p>
                                        <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                                            {s.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}