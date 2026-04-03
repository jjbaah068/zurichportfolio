import { useReveal } from '../Usereveal';

const contactDetails = [
  {
    label: 'Location',
    value: 'Adenta, Accra — Ghana',
    href: null,
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'arhinowuraku02@gmail.com',
    href: 'mailto:arhinowuraku02@gmail.com',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+233 240 926 234',
    href: 'tel:+233240926234',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/owuraku-arhin-oz',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.6v1.71h.05a3.94 3.94 0 013.54-1.95C19.37 8.76 21 10.2 21 13.09V21h-4v-7.16c0-1.71-.61-2.87-2.13-2.87-1.16 0-1.85.78-2.16 1.53-.11.26-.14.62-.14.98V21h-4V9z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/zuriiichhh',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.487 11.24H14.31l-5.214-6.82-5.965 6.82H-.182l7.725-8.84L-.5 2.25h7.9l4.703 6.234L18.244 2.25zm-1.162 18.495h1.833L7.047 3.633H5.1l11.982 17.112z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/zuriiichhh',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm6.25.5a.75.75 0 110 1.5.75.75 0 010-1.5zM12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useReveal();

  return (
    <>
      <style>{`
        .contact-section-pad {
          padding: 6rem 2.5rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .contact-heading {
          margin-bottom: 5rem;
        }
        .contact-form-pad {
          padding: 2.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-section-pad {
            padding: 4rem 1.8rem;
          }
          .contact-heading {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 480px) {
          .contact-section-pad {
            padding: 3rem 1.4rem;
          }
          .contact-form-pad {
            padding: 1.5rem;
          }
        }
      `}</style>

      <section
        id="contact-me"
        ref={ref}
        className="contact-section-pad"
        style={{ background: 'var(--bg)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <div className="flex items-center gap-3 reveal" style={{ marginBottom: '4rem' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              04 — Contact
            </p>
          </div>

          {/* Big heading */}
          <h2
            className="font-display reveal delay-100 contact-heading"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: 'var(--text)',
              maxWidth: '800px',
            }}
          >
            Let's tell the
            <br />
            next story
            <br />
            <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>together.</em>
          </h2>

          {/* Two column layout */}
          <div className="contact-grid">

            {/* Left: details */}
            <div>
              <p
                className="reveal delay-200"
                style={{ fontSize: '0.93rem', fontWeight: 300, lineHeight: 1.85, color: 'var(--muted)', marginBottom: '3rem' }}
              >
                Whether it's shaping a brand narrative, crafting a campaign, or creating an experience
                that connects — I'm always open to new conversations and collaborations.
              </p>

              {/* Contact details */}
              <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {contactDetails.map((item) => {
                  const inner = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '40px', height: '40px', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid var(--border)', color: 'var(--gold)',
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2px' }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text)', wordBreak: 'break-word' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{ textDecoration: 'none', transition: 'opacity 0.25s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="reveal delay-400">
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
                  Connect
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: '44px', height: '44px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid var(--border)', color: 'var(--muted)',
                        textDecoration: 'none', transition: 'border-color 0.25s, color 0.25s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--gold)';
                        e.currentTarget.style.color = 'var(--gold)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--muted)';
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal-right delay-200">
              <div
                className="contact-form-pad"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              >
                <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.8rem' }}>
                  Send a Message
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                  {[
                    { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Subject', type: 'text', placeholder: "What's this about?" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        style={{
                          width: '100%', background: 'var(--bg)',
                          border: '1px solid var(--border)',
                          padding: '0.75rem 1rem',
                          fontSize: '0.88rem', color: 'var(--text)',
                          outline: 'none', fontFamily: "'DM Sans', sans-serif",
                          transition: 'border-color 0.25s',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      style={{
                        width: '100%', background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        padding: '0.75rem 1rem',
                        fontSize: '0.88rem', color: 'var(--text)',
                        outline: 'none', fontFamily: "'DM Sans', sans-serif",
                        resize: 'vertical', transition: 'border-color 0.25s',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="button"
                    style={{
                      width: '100%', padding: '0.85rem',
                      background: 'var(--text)', color: 'var(--bg)',
                      border: '1px solid var(--text)',
                      fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                      fontFamily: "'DM Sans', sans-serif",
                      cursor: 'pointer', transition: 'background 0.3s, border-color 0.3s',
                      marginTop: '0.5rem',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--terracotta)';
                      e.currentTarget.style.borderColor = 'var(--terracotta)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--text)';
                      e.currentTarget.style.borderColor = 'var(--text)';
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}