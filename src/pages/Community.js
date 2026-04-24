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
            Here's how I've tried to give back to the communities around me, with all that I am.
          </p>
        </div>
      </section>

      {/* Be Your Eyes Foundation */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '2rem' }}>
            <div className="card" style={{ borderTop: '3px solid var(--gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge">Active Member</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Present</span>
              </div>
              <h3 className="card-title">Be Your Eyes Foundation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
                Assisting visually impaired individuals in their daily lives through real-time video calls.
                Helping with tasks like reading labels, navigating surroundings, identifying objects,
                and accessing written content to promote independent living.
              </p>
            </div>

            {/* Krushi Home - EWS Children */}
            <div className="card" style={{ borderTop: '3px solid var(--gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge">Volunteer Teacher</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>1 Year</span>
              </div>
              <h3 className="card-title">Krushi Home (EWS Boarding School)</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
                Taught academic subjects and life skills to children from Economically Weaker Sections (EWS)
                at their boarding school. Focused on building foundational knowledge, confidence, and
                essential life skills for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NTR Trust & Arya Consultancies Runs */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Health & Social Causes</p>
          <h2 className="section-title">Runs & <em>Blood Camps</em></h2>
          <hr className="section-rule" />
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏃‍♀️</div>
              <div className="card-title">Arya Consultancies Run</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                10km run supporting individuals with heart problems. Participated in multiple charity runs 
                to raise awareness and funds for cardiac health.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🩸</div>
              <div className="card-title">NTR Trust</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Volunteered for blood donation camps organized by NTR Trust, assisting in donor registration,
                coordination, and camp management.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📢</div>
              <div className="card-title">UNICEF U-Report</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Active member of UNICEF's U-Report platform, participating in polls and discussions on
                youth issues, mental health, education, and social development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Club - Mahindra University */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="section-eyebrow">Campus Leadership</p>
              <h2 className="section-title">Outreach <em>Club</em></h2>
              <hr className="section-rule" />
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">Content Team Member</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Mahindra University</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
                  Active member of Outreach — the social community club at Mahindra University.
                  Participated in and worked on multiple community-driven events. As part of the content team,
                  contributed to event documentation, social media outreach, and volunteer coordination.
                </p>
              </div>
            </div>

            {/* Marpu Foundation */}
            <div>
              <p className="section-eyebrow">NGO Blogging</p>
              <h2 className="section-title">Marpu <em>Foundation</em></h2>
              <hr className="section-rule" />
              <div className="card" style={{ borderTop: '3px solid var(--gold)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">Blogging Intern</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2023</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
                  Authored research-driven content for Marpu Foundation, an NGO working on social and
                  developmental issues across India. Covered topics including rural education, women's
                  empowerment, sustainability, and youth development.
                </p>
                <div className="stat-box" style={{ marginTop: '1rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div>
                    <div className="stat-number" style={{ fontSize: '2rem' }}>20+</div>
                    <div className="stat-label">Blog Posts Authored</div>
                  </div>
                </div>
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
                  4-week bootcamp for students from rural communities and women from underserved backgrounds.
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
                { label: 'English Language Education', desc: 'Building communication confidence in rural learners.' },
                { label: 'Women\'s Empowerment', desc: 'Life-skills training for women in underserved communities.' },
                { label: 'International Outreach', desc: 'Part of a globally connected NGO network.' },
              ].map(a => (
                <div key={a.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--gold)', minWidth: '24px' }}>✦</span>
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

      {/* Summary / Values */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p className="section-eyebrow">My Philosophy</p>
          <h2 className="section-title">Why it <em>matters</em></h2>
          <hr className="section-rule" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1rem' }}>
            I believe that access to education, healthcare, and basic assistance is a right, not a privilege.
            I want to encourage everything to contribute whatever they can, because every small effort compounds into meaningful change.
          </p>
        </div>
      </section>
    </main>
  );
}
