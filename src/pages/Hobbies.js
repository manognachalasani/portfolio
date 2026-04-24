import React from 'react';

export default function Hobbies() {
  return (
    <main className="page">
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Beyond the Screen</p>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Hobbies & <em style={{ color: 'var(--gold-light)' }}>Passions</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560 }}>
            I'm not just a coder. I'm a poet, a debater, and a curious reader of human nature.
            These are the things that make me, me.
          </p>
        </div>
      </section>

      {/* Writing & Poetry */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Creative Writing</p>
          <h2 className="section-title">Poetry & <em>Writing</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                I am a published poet and author. Writing has been my longest-running practice —
                a way to process the world, make sense of complexity, and find beauty in language.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                I've co-authored over 30 poetry anthologies and compiled two original collections.
                My writing spans introspective verse, narrative poetry, and occasional prose —
                often exploring themes of identity, love, and the human condition.
              </p>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem' }}>
                <div className="stat-box">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Co-authored Anthologies</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Original Collections</div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>

      {/* Debating */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Competitive Debate</p>
          <h2 className="section-title">Debating & <em>Rhetoric</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="card" style={{ borderTop: '3px solid var(--gold)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎙️</div>
              <h3 className="card-title">British Parliamentary Debate</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                Represented Mahindra University at the IIT Madras British Parliamentary Debate 2025,
                finishing in the Top 20 among 300+ participants nationwide.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                BP debate demands rapid synthesis of complex arguments, logical structure under pressure,
                and the ability to anticipate and rebut opposing positions — skills that translate
                directly into research and software architecture.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                Skills Developed
              </h3>
              <ul className="bullet-list">
                <li>Rapid argument construction and logical structuring.</li>
                <li>Cross-examination and rebuttal under time pressure.</li>
                <li>Policy analysis across economics, law, science, and ethics.</li>
                <li>Public speaking and persuasive communication.</li>
                <li>Active listening and real-time synthesis.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Intellectual Interest</p>
          <h2 className="section-title">Psychology & <em>Behavior</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                My interest in psychology and behavioral sciences is both personal and academic.
                It informs how I approach research, design software, and understand the people
                who use the things I build.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                My published research on cognitive load in food delivery apps is a direct product
                of this curiosity — applying psychological theory to understand real user behavior
                in the Indian tech context.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                I'm particularly interested in the intersection of technology and human cognition:
                how interfaces shape thought, how algorithms affect decision-making, and how
                we design systems that respect human agency.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>Areas of Interest</h3>
              {[
                {label: 'Cognitive Psychology', desc: 'Memory, attention, cognitive load, and decision-making heuristics.' },
                {label: 'Behavioral Economics', desc: 'How humans make (ir)rational choices and what nudges behavior.' },
                {label: 'Human-Computer Interaction', desc: 'The psychology of interfaces, usability, and user experience.' },
                {label: 'Philosophy of Mind', desc: 'Consciousness, identity, and what it means to be a thinking being.' },
              ].map(a => (
                <div key={a.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--navy)', marginBottom: '0.15rem' }}>{a.label}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The whole person */}
      <section style={{ background: 'var(--navy)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
            The <em style={{ color: 'var(--gold-light)' }}>whole</em> person
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9 }}>
            I think the best engineers are deeply, unapologetically human. They read poetry and argue about ideas.
            They care about the people who use their software. They build things that matter because they've
            spent time thinking about what matters.
          </p>
        </div>
      </section>
    </main>
  );
}
