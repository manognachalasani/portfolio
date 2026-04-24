import React from 'react';

const coursework = [
  'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks',
  'Database Management Systems', 'Machine Learning', 'Artificial Intelligence',
  'Software Engineering', 'Deep Neural Networks', 'Object-Oriented Programming',
  'Information Security & Risk Assessment',
];

const certs = [
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', status: 'Completed'},
  { name: 'SOC Analyst', issuer: 'U.S. Council', status: 'Completed'},
  { name: 'Cybersecurity Professional (Ethical Hacker)', issuer: 'U.S. Council', status: 'Completed'},
  { name: 'Java Programming I', issuer: 'University of Helsinki', status: 'Completed'},
  { name: 'Cloud Computing with Azure & AWS', issuer: 'Online', status: 'Completed'},
  { name: 'Research Paper Presentation', issuer: 'International Scientific Research Congress, Istanbul', status: 'Completed'},
];

export default function Research() {
  return (
    <main className="page">
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Academic & Research</p>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Academics & <em style={{ color: 'var(--gold-light)' }}>Research</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560 }}>
            From published research papers to ongoing certifications — a record of intellectual
            curiosity and experiences across computer science, behavioral sciences, and beyond.
          </p>
        </div>
      </section>

      {/* Publication */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Publication</p>
          <h2 className="section-title">Research <em>Paper</em></h2>
          <hr className="section-rule" />
          <div className="card" style={{ borderLeft: '4px solid var(--gold)', maxWidth: 720 }}>
            <span className="badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Published · 2024</span>
            <h3 className="card-title" style={{ fontSize: '1.1rem', lineHeight: 1.45 }}>
              Exploring Cognitive Load and Behavioral Intention in Online Food Delivery Services:
              Insights from the Indian Market
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.75rem 0' }}>
              Presented at the <strong>International Scientific Research Congress 2024, Istanbul</strong>.
              This paper investigates how cognitive load affects user behavior and purchasing intention
              on food delivery platforms in India, drawing on technology acceptance models and
              behavioral science frameworks.
            </p>
            <div className="tags">
              <span className="tag gold">Cognitive Load Theory</span>
              <span className="tag gold">Behavioral Science</span>
              <span className="tag gold">HCI</span>
              <span className="tag gold">Indian Tech Market</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <hr className="section-rule" />
          <div className="grid-2">
            {certs.map(c => (
              <div className="card" key={c.name} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div className="card-title" style={{ fontSize: '1rem' }}>{c.name}</div>
                  <div className="card-sub">{c.issuer}</div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    background: c.status === 'Completed' ? 'rgba(39,174,96,0.12)' : 'rgba(201,168,76,0.15)',
                    color: c.status === 'Completed' ? '#1A6B3A' : '#7A5C10',
                  }}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Academics</p>
          <h2 className="section-title">Relevant <em>Coursework</em></h2>
          <hr className="section-rule" />
          <div className="tags">
            {coursework.map(c => <span className="tag" key={c} style={{ fontSize: '0.88rem', padding: '0.4rem 1rem' }}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title">Academic <em>Highlights</em></h2>
          <hr className="section-rule" />
          <div className="grid-2">
            {[
              { title: 'Award of Merit Scholarship', detail: 'Awarded three consecutive years: 2023–24, 2024–25, 2025–26 at Mahindra University for academic excellence.' },
              { title: 'CGPA 8.5 / 10', detail: 'Consistent academic performance throughout the B.S. Computer Science program.' },
              { title: 'International Research Congress', detail: 'Presented research at the International Scientific Research Congress 2024 in Istanbul, Turkey.' },
              { title: 'IIT Madras Debate — Top 20', detail: 'Ranked in the Top 20 among 300+ participants at the IIT Madras British Parliamentary Debate 2025.' },
            ].map(a => (
              <div className="card" key={a.title}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{a.icon}</div>
                <div className="card-title">{a.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
