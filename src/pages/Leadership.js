import React from 'react';

export default function Leadership() {
  return (
    <main className="page">
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Leadership & Activities</p>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Building <em style={{ color: 'var(--gold-light)' }}>Communities</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560 }}>
            From founding a university club to representing Mahindra University on national stages —
            leadership is central to how I engage with the world.
          </p>
        </div>
      </section>

      {/* Cognitia */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">University Club</p>
          <h2 className="section-title">Cognitia <em>Club</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="card" style={{ borderTop: '3px solid var(--gold)', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">Founder & Vice President</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2024 – Present</span>
                </div>
                <h3 className="card-title">Mahindra University</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                  Cognitia is an interdisciplinary technology and research club I founded at Mahindra University.
                  It bridges computer science, cognitive science, and the social sciences through workshops,
                  research discussions, and cross-disciplinary events.
                </p>
              </div>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <div className="stat-box">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Students Reached</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">2024</div>
                  <div className="stat-label">Year Founded</div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>Key Initiatives</h3>
              <ul className="bullet-list">
                <li>Led technical workshops on emerging technologies including AI/ML and cloud computing.</li>
                <li>Organized interdisciplinary research panels connecting CS with psychology and philosophy.</li>
                <li>Mentored junior members through hands-on project guidance and hackathon preparation.</li>
                <li>Coordinated cross-departmental events bringing together 500+ students across disciplines.</li>
                <li>Established a culture of collaborative research and peer-driven knowledge sharing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visionari */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">International NGO</p>
          <h2 className="section-title">Visionari <em>Board</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="badge">Board of Directors</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2024 – Present</span>
                </div>
                <h3 className="card-title">International NGO</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                  Visionari is an international NGO focused on English education and life-skills training
                  for rural communities and women. As a Board of Directors member, I contribute to strategic
                  decisions and program design.
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem' }}>Previous Role</h3>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span className="badge">English Tutor</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>2024 – 2025</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  Mentored students during a structured 4-week learning bootcamp, developing English
                  communication skills and confidence for underserved communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debate */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Competition</p>
          <h2 className="section-title">Debate & <em>Oratory</em></h2>
          <hr className="section-rule" />
          <div className="card" style={{ borderLeft: '4px solid var(--gold)', maxWidth: 680 }}>
            <div className="pull-quote" style={{ margin: '0 0 1rem', fontStyle: 'italic' }}>
              "Top 20 among 300+ participants nationwide."
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">April 2025</div>
                <div className="timeline-title">IIT Madras British Parliamentary Debate</div>
                <div className="timeline-org">Represented Mahindra University</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  Competed in the British Parliamentary (BP) format against 300+ participants from universities
                  across India. Secured a position in the Top 20, demonstrating advanced argumentation,
                  cross-examination, and impromptu speaking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
