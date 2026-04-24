import React from 'react';
import { Link } from 'react-router-dom';

const skills = {
  'Programming': ['Java', 'Python', 'C'],
  'Web / Full Stack': ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'FastAPI'],
  'Cloud & DevOps': ['Azure Functions', 'Azure Blob Storage', 'Azure VMs', 'AWS (Basics)', 'Docker'],
  'Cybersecurity': ['JWT Auth', 'Cryptography', 'SOC Fundamentals', 'Ethical Hacking', 'Wireshark'],
  'Databases': ['SQL', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'REST APIs', 'Linux', 'Postman', 'JIRA', 'draw.io'],
};

const stats = [
  { n: '8.5', label: 'CGPA / 10' },
  { n: '3×', label: 'Merit Scholarship' },
  { n: '500+', label: 'Students Impacted' },
  { n: '30+', label: 'Anthologies' },
];

export default function Home() {
  return (
    <main className="page">

      {/* ── Hero ── */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Left side - Text content */}
            <div style={{ flex: 2, minWidth: '280px' }}>
              <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Computer Science · Mahindra University</p>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1.15 }}>
                Manogna<br />
                <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Chalasani</em>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 560, fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.75 }}>
                CS undergraduate with a passion for cloud systems, cybersecurity, and full-stack development.
                Builder, researcher, poet, and club founder — seeking a Summer Internship in Full-Stack Java
                or Cybersecurity.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn btn-gold">View Projects ↗</Link>
                <a href="mailto:manognachalasani@gmail.com" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                  Get in Touch
                </a>
              </div>
            </div>
            
            {/* Right side - Photo */}
            <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
              <img 
                src={require('../assets/profile.jpg')} 
                alt="Manogna Chalasani"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  borderRadius: '50%',
                  border: '4px solid var(--gold-light)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  objectFit: 'cover',
                  aspectRatio: '1/1'
                }}
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: 'var(--cream-dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))' }}>
            {stats.map(s => (
              <div className="stat-box" key={s.label}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Who I <em>am</em></h2>
          <hr className="section-rule" />
          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                I'm a second-year B.S. Computer Science student at Mahindra University, Hyderabad,
                maintaining an 8.5 CGPA and holding the Award of Merit Scholarship for three consecutive years.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                My technical interests span cloud-native systems, cybersecurity, and machine learning —
                but I'm equally at home writing poetry, debating policy, and exploring behavioral psychology.
                I believe the best engineers are the ones who bring a humanistic lens to their work.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                I founded <strong>Cognitia</strong>, Mahindra University's interdisciplinary tech club,
                and have engaged 500+ students through workshops and research events.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  ['📍', 'Hyderabad, India'],
                  ['📧', 'manognachalasani@gmail.com'],
                  ['📧', 'se23ucse046@mahindrauniversity.edu.in'],
                  ['📞', '+91 9100982104'],
                  ['🔗', 'linkedin.com/in/manogna-ch'],
                  ['🐙', 'github.com/manognachalasani'],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span>{icon}</span><span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '1.25rem' }}>
                Education
              </h3>
              <div className="timeline">
                {[
                  { date: '2023 – 2027', title: 'B.S. Computer Science', org: 'Mahindra University, Hyderabad', note: 'CGPA: 8.5 / 10 · Merit Scholarship ×3' },
                  { date: '2021 – 2023', title: 'Intermediate — MPC', org: 'Saraswathi Educational Society', note: '96%' },
                  { date: '2020 – 2021', title: 'Secondary School Certificate', org: 'The Creek Planet School', note: '95%' },
                ].map(e => (
                  <div className="timeline-item" key={e.title}>
                    <div className="timeline-date">{e.date}</div>
                    <div className="timeline-title">{e.title}</div>
                    <div className="timeline-org">{e.org}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 500 }}>{e.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Research Interests</p>
          <h2 className="section-title">What I <em>explore</em></h2>
          <hr className="section-rule" />
          <div className="grid-3">
            {[
              { title: 'Cloud Security', desc: 'Serverless architectures, JWT auth, secure APIs, and Azure-native deployments.', icon: '☁️' },
              { title: 'Cybersecurity', desc: 'Password analysis, credential attacks, SOC fundamentals, ethical hacking, and cryptography.', icon: '🔐' },
              { title: 'Machine Learning', desc: 'Predictive modelling, regression, ensemble methods, and behavioral AI applications.', icon: '🧠' },
              { title: 'Behavioral Computing', desc: 'Cognitive load theory, human-computer interaction, and tech adoption psychology.', icon: '🧩' },
              { title: 'Information Diffusion', desc: 'Simulating misinformation propagation and designing intervention strategies.', icon: '📡' },
              { title: 'Full-Stack Systems', desc: 'End-to-end web platforms with React, FastAPI, and cloud-integrated backends.', icon: '⚙️' },
            ].map(r => (
              <div className="card" key={r.title}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{r.icon}</div>
                <div className="card-title">{r.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Technical Skills</p>
          <h2 className="section-title">My <em>toolkit</em></h2>
          <hr className="section-rule" />
          <div className="grid-2">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <p style={{ fontSize: '0.8rem', fontWeight: 500, letter_spacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '0.6rem' }}>{cat}</p>
                <div className="tags">
                  {items.map(s => <span className="tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section style={{ background: 'var(--navy)', padding: '3rem 0' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Languages</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
            {[
              { lang: 'English', level: 'Native' },
              { lang: 'Telugu', level: 'Native' },
              { lang: 'Hindi', level: 'Proficient' },
              { lang: 'French', level: 'Elementary' },
              { lang: 'Korean', level: 'Elementary' },
            ].map(l => (
              <div key={l.lang} style={{ color: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem' }}>{l.lang}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
