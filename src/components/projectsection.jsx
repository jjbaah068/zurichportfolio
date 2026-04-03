import { useState } from 'react';
import { useReveal } from '../Usereveal'
import xoom from '../assets/images/xoom.png';
import kp from '../assets/images/KP.png';
import nbc from '../assets/images/NBC.jpg';
import uwfp from '../assets/images/UWFP.png';
import ghacem from '../assets/images/ghacem.jpg';
import dh from '../assets/images/DH.png';

const projects = [
  {
    index: '01',
    company: 'Xoom by PayPal',
    industry: 'Fintech',
    duration: 'Oct 2025 – December 2025',
    logo: xoom,
    accentColor: '#1a7a3c',
    objective: 'To build brand awareness in Ghana and position Xoom as a fast, secure, and trusted option for receiving money from abroad..',
    approach: 'Executed a multi-channel campaign combining radio (LPM), premium news platforms, and digital display advertising to drive awareness, credibility, and engagement.',
    role: 'Led campaign strategy, creative direction, and execution across media planning, content development, and performance reporting.',
    tags: ['Brand Awareness', 'Media Placement', 'Experiential Marketing', 'Publicity'],
  },
  {
    index: '02',
    company: 'Karpowership Ghana',
    industry: 'Energy',
    duration: 'July 2022 – 2024',
    logo: kp,
    accentColor: '#C8922A',
    objective: 'Strengthen brand affinity through impactful community and CSR events, from annual scholarship presentations to environmental and stakeholder engagement initiatives.',
    approach: "Planned and executed community-driven events within both Administration & Operational areas of work with strong media coverage to showcase Karpowership's social impact.",
    role: 'Led event planning, logistics, and on-ground coordination. Managed press relations, photography, content dissemination, and media monitoring to ensure national visibility and positive public perception.',
    tags: ['CSR Events', 'Press Relations', 'Event Planning', 'Media Monitoring'],
  },
  {
    index: '03',
    company: 'NBC Ghana Trust',
    industry: 'Pension',
    duration: 'July 2022 – Present',
    logo: nbc,
    accentColor: '#1a3a6e',
    objective: 'Enhance public awareness and strengthen trust in NBC Ghana Trust as a reliable pension partner through consistent, engaging, and professional communication.',
    approach: 'Developed and managed annual communication plans focusing on social media visibility, branding consistency, and stakeholder engagement.',
    role: 'Led content planning and social media management, supervised creative design and collateral production, and ensured cohesive visual communication across all platforms.',
    tags: ['Social Media', 'Content Strategy', 'Branding', 'Stakeholder Engagement'],
  },
  {
    index: '04',
    company: 'UNODC / World Food Programme',
    industry: 'United Nations Agencies',
    duration: '2024',
    logo: uwfp,
    accentColor: '#009EDB',
    objective: 'Support the communication efforts of UN partner agencies by enhancing visibility, strengthening public awareness, and ensuring consistent brand representation across media and stakeholder platforms.',
    approach: 'For WFP Ghana — coordinated office branding, production of collaterals, and visibility materials. For UNODC Ghana — executed media coordination and publicity management for the Safer Children Online campaign, achieving wide coverage across digital and traditional platforms.',
    role: 'Managed strategic communication planning, content creation, and stakeholder outreach to amplify key messages and initiatives for both agencies.',
    tags: ['Strategic Communications', 'UN Branding', 'Media Coordination', 'Content Creation'],
  },
  {
    index: '05',
    company: 'GHACEM Limited',
    industry: 'Manufacturing',
    duration: 'July 2022 – Present',
    logo: ghacem,
    accentColor: '#C16A3A',
    objective: 'Deliver high-impact events — from product launches to customer appreciation nights — that strengthen relationships, celebrate loyalty, and reinforce brand leadership in sustainable innovation.',
    approach: 'Turned each event into a storytelling platform through creative themes, experiential design, and seamless coordination. Integrated media visibility to extend engagement beyond the venue.',
    role: 'Led concept development, vendor and logistics coordination, guest experience, and press engagement — ensuring every event reflected brand excellence.',
    tags: ['Event Production', 'Concept Development', 'Press Engagement', 'Experiential Design'],
  },
  {
    index: '06',
    company: 'DH Industries Limited',
    industry: 'FMCG',
    duration: 'July 2025 – Present',
    logo: dh,
    accentColor: '#C16A3A',
    objective: 'To increase brand awareness in Ghana and position DH Industries’ range of detergents, washing, and bathing soaps as market-leading products within the home and personal care category.',
    approach: 'Executed an integrated 360° marketing strategy combining ATL, BTL, digital marketing, and experiential campaigns. This included outdoor (OOH) advertising, radio, and on-ground market activations to enhance brand visibility, drive product trial, and strengthen consumer engagement across key markets.',
    role: 'Supported and progressively led campaign strategy and execution across multiple channels. Contributed to media planning, content development, and experiential activations, including field marketing and product sampling initiatives. Recently took on a more leading role in overseeing campaign execution, ensuring alignment with brand objectives, and supporting performance tracking and reporting.',
    tags: ['Content Strategy', 'Event Management', 'Media Coordination', 'Brand Engagement'],
  },
];

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1raywfIP9IUV4Ee8nNkLhOc6KZWVtwFfG';

export default function ProjectsSection() {
  const ref = useReveal();
  const [expanded, setExpanded] = useState(null);
  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <>
      <style>{`
        .projects-section-pad { padding: 6rem 2.5rem; }
        .projects-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .accordion-btn {
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 2rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          text-align: left;
          transition: background 0.2s;
        }
        .accordion-btn-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
          min-width: 0;
        }
        .accordion-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .accordion-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          padding: 0 0 2.5rem 2rem;
          margin-left: 0.5rem;
        }
        .project-company-name { font-size: 1.5rem; }
        .drive-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2rem;
          background: var(--text);
          color: var(--bg);
          border: 1px solid var(--text);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, border-color 0.3s;
          cursor: pointer;
        }
        .drive-btn:hover {
          background: var(--terracotta);
          border-color: var(--terracotta);
        }
        .drive-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2rem;
          background: transparent;
          color: var(--gold);
          border: 1px solid var(--gold);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, color 0.3s;
        }
        .drive-btn-outline:hover {
          background: var(--gold);
          color: #fff;
        }

        @media (max-width: 900px) {
          .projects-section-pad { padding: 4rem 1.8rem; }
          .projects-heading-row { margin-bottom: 3rem; }
          .accordion-tags { display: none; }
          .accordion-body-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 0 2rem 1.2rem;
          }
          .accordion-btn { padding: 1.5rem 0; }
          .project-company-name { font-size: 1.2rem; }
          .drive-cta-row { flex-direction: column; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .projects-section-pad { padding: 3rem 1.4rem; }
          .accordion-btn-left { gap: 1rem; }
          .project-company-name { font-size: 1.1rem; }
        }
      `}</style>

      <section
        id="projects"
        ref={ref}
        className="projects-section-pad"
        style={{ background: 'var(--bg)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <div className="flex items-center gap-3 reveal" style={{ marginBottom: '4rem' }}>
            <span style={{ width: '30px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Projects &amp; Work
            </p>
          </div>

          {/* Heading row */}
          <div className="projects-heading-row">
            <h2
              className="font-display reveal delay-100"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)' }}
            >
              Work that
              <br />
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>speaks.</em>
            </h2>
            <p
              className="reveal delay-200"
              style={{ fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '340px', lineHeight: 1.8 }}
            >
              A selection of brand and communications engagements across fintech, energy, pension, international agencies and manufacturing.
            </p>
          </div>

          {/* Accordion list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {projects.map((project, i) => {
              const isOpen = expanded === i;
              return (
                <div
                  key={i}
                  className={`reveal delay-${(i + 1) * 100}`}
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <button
                    className="accordion-btn"
                    onClick={() => toggle(i)}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,146,42,0.03)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div className="accordion-btn-left">
                      <span
                        className="font-display"
                        style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--border)', lineHeight: 1, flexShrink: 0 }}
                      >
                        {project.index}
                      </span>
                      <div style={{
                        width: '48px', height: '48px', flexShrink: 0,
                        background: 'var(--bg2)', border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                        <img
                          src={project.logo}
                          alt={project.company}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '5px' }}
                        />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3
                          className="font-display project-company-name"
                          style={{ fontWeight: 300, color: 'var(--text)', lineHeight: 1.15, marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                          {project.company}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                            padding: '0.2rem 0.6rem',
                            background: 'rgba(200,146,42,0.08)', color: 'var(--gold)',
                          }}>
                            {project.industry}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <div className="accordion-tags">
                        {project.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                              padding: '0.2rem 0.55rem',
                              border: '1px solid var(--border)', color: 'var(--muted)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{
                        width: '30px', height: '30px', flexShrink: 0,
                        border: `1px solid ${isOpen ? 'var(--gold)' : 'var(--border)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        color: isOpen ? 'var(--gold)' : 'var(--muted)',
                        transition: 'transform 0.3s, border-color 0.25s, color 0.25s',
                      }}>
                        <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div style={{ overflow: 'hidden', maxHeight: isOpen ? '800px' : '0', transition: 'max-height 0.5s ease' }}>
                    <div className="accordion-body-grid" style={{ borderLeft: `3px solid ${project.accentColor}` }}>
                      {[
                        { label: 'Objective', text: project.objective },
                        { label: 'Approach',  text: project.approach  },
                        { label: 'Role',      text: project.role      },
                      ].map((col) => (
                        <div key={col.label}>
                          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>
                            {col.label}
                          </p>
                          <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8 }}>
                            {col.text}
                          </p>
                          {col.label === 'Role' && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.2rem' }}>
                              {project.tags.map(tag => (
                                <span
                                  key={tag}
                                  style={{
                                    fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                                    padding: '0.2rem 0.55rem',
                                    border: '1px solid var(--border)', color: 'var(--muted)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>

          {/* ── Google Drive CTA ── */}
          <div
            className="reveal drive-cta-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              marginTop: '5rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                className="font-display"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2, marginBottom: '0.5rem' }}
              >
                Want to see the work
                <br />
                <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>in detail?</em>
              </p>
              <p style={{ fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '380px', lineHeight: 1.8 }}>
                Browse campaign materials, event photos, press coverage and more in the full project portfolio.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="drive-btn"
              >
                {/* Google Drive icon */}
                <svg width="16" height="16" viewBox="0 0 87.3 78" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L28 55H0c0 1.55.4 3.1 1.2 4.5z" fill="#fff" opacity="0.9"/>
                  <path d="M43.65 25L29.35 0c-1.35.8-2.5 1.9-3.3 3.3L1.2 46.5C.4 47.9 0 49.45 0 51h28z" fill="#fff" opacity="0.9"/>
                  <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.3l5.9 10.8z" fill="#fff" opacity="0.9"/>
                  <path d="M43.65 25L57.95 0H29.35z" fill="#fff" opacity="0.7"/>
                  <path d="M59.3 51H87.3L73.55 26.8 57.95 0 43.65 25 59.3 51z" fill="#fff" opacity="0.7"/>
                  <path d="M28 55l-14.25 21.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2L59.3 51H28z" fill="#fff" opacity="0.7"/>
                </svg>
                View Full Portfolio
              </a>
              {/* <a
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="drive-btn-outline"
              >
                Open Google Drive →
              </a> */}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}