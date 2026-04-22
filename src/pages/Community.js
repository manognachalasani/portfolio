import React from 'react';

export default function Community() {
  return (
    <main className="page">
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Giving Back</p>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Community <em style={{ color: 'var(--gold-light)' }}>Service</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560 }}>
            Technology and privilege come with a responsibility to contribute. Here's how I've
            tried to give back to the communities around me.
          </p>
        </div>
      </section>

      {/* Marpu Foundation */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">NGO Blogging</p>
          <h2 className="section-title">Marpu <em>Foundation</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="card" style={{ borderTop: '3px solid var(--gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge">Blogging Intern</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2023</span>
              </div>
              <h3 className="card-title">Marpu Foundation (NGO)</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
                Marpu Foundation is a non-governmental organization working on social and developmental
                issues across India. As a Blogging Intern, I authored research-driven long-form content
                that communicated complex social issues to a general audience.
              </p>
              <div className="stat-box" style={{ marginTop: '1rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div>
                  <div className="stat-number" style={{ fontSize: '2rem' }}>20+</div>
                  <div className="stat-label">Blog Posts Authored</div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>Topics Covered</h3>
              <ul className="bullet-list" style={{ marginBottom: '1.5rem' }}>
                <li>Rural education access and policy reform.</li>
                <li>Women's empowerment and gender equity in India.</li>
                <li>Sustainable development and environmental policy.</li>
                <li>Technology access for marginalized communities.</li>
                <li>Mental health awareness and stigma reduction.</li>
                <li>Youth development and skill-building initiatives.</li>
              </ul>
              <div className="pull-quote">
                Writing is a form of service — every article is a bridge between policy and people.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visionari */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Education Equity</p>
          <h2 className="section-title">Visionari <em>NGO</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">English Tutor</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2024 – 2025</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                  Conducted English language and communication skills training during a structured
                  4-week bootcamp. Students included individuals from rural communities and women
                  from underserved backgrounds.
                </p>
              </div>
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">Board of Directors</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2024 – Present</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                  Elevated to the Board of Directors, contributing to strategic planning,
                  curriculum design, and partnership development for the NGO's international programs.
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>Impact Areas</h3>
              {[
                { icon: '📚', label: 'English Language Education', desc: 'Building communication confidence in rural learners.' },
                { icon: '👩', label: 'Women\'s Empowerment', desc: 'Life-skills training for women in underserved communities.' },
                { icon: '🌐', label: 'International Outreach', desc: 'Part of a globally connected NGO network.' },
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

      {/* Philosophy */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p className="section-eyebrow">Values</p>
          <h2 className="section-title">Why it <em>matters</em></h2>
          <hr className="section-rule" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1rem' }}>
            I believe that access to education, language, and technology is a right — not a privilege.
            My community work isn't separate from my technical ambitions; they're two sides of the same coin.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Whether I'm writing a blog post for Marpu Foundation or tutoring English through Visionari,
            the goal is the same: use the skills I have to create opportunity for others who don't yet
            have the same access.
          </p>
        </div>
      </section>
    </main>
  );
}
