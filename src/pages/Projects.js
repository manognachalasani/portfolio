import React from 'react';

const projects = [
  {
    title: 'Password Security Analyzer & Attack Simulator',
    date: 'Feb 2026',
    tags: ['Python', 'Cryptography', 'Security Analysis'],
    category: 'Cybersecurity',
    github: 'https://github.com/manognachalasani',
    bullets: [
      'Simulated credential stuffing and offline hash-cracking attacks to evaluate password compromise risk.',
      'Performed adversarial analysis of a secure password generator to evaluate entropy reduction risks.',
      'Analyzed password strength and modeled real-world attack feasibility across generation strategies.',
    ],
  },
  {
    title: 'Secure Serverless Image Analysis System',
    date: 'Sept 2025',
    tags: ['Azure Functions', 'React', 'JWT', 'SQL', 'Azure Blob', 'TypeScript', 'JavaScript'],
    category: 'Cloud / Full Stack',
    github: 'https://github.com/manognachalasani',
    bullets: [
      'Built a serverless web application using Azure Computer Vision for automated image analysis.',
      'Implemented JWT authentication, secure APIs, and scalable cloud storage architecture.',
      'Developed user history tracking and role-based access control for secure interaction with results.',
    ],
  },
  {
    title: 'Employee Attrition Prediction & Salary Forecasting',
    date: 'May 2025',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Ridge Regression', 'SVM'],
    category: 'Machine Learning',
    github: 'https://github.com/manognachalasani',
    bullets: [
      'Developed Logistic Regression, SVM, and Random Forest models to predict employee attrition risk.',
      'Forecasted salary trends using Ridge Regression and introduced an Expected Salary Loss metric.',
      'Analyzed HR datasets to identify patterns affecting employee retention and compensation outcomes.',
    ],
  },
  {
    title: 'Fake News Diffusion Simulator',
    date: '2024',
    tags: ['Python', 'FastAPI', 'Simulation', 'Data Analysis'],
    category: 'Research / ML',
    github: 'https://github.com/manognachalasani',
    bullets: [
      'Simulated real vs fake news propagation with configurable intervention strategies.',
      'Analyzed metrics such as fake reach, peak spread, and diffusion timeline.',
      'Built a FastAPI backend to expose simulation parameters and results.',
    ],
  },
];

const categoryColor = {
  'Cybersecurity': '#E74C3C',
  'Cloud / Full Stack': '#2980B9',
  'Machine Learning': '#27AE60',
  'Research / ML': '#8E44AD',
};

export default function Projects() {
  return (
    <main className="page">
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Portfolio</p>
          <h1 className="section-title" style={{ color: '#fff' }}>
            My <em style={{ color: 'var(--gold-light)' }}>Projects</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 540 }}>
            A collection of technical projects spanning cloud computing, cybersecurity,
            machine learning, and full-stack development.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.map((p) => (
              <div className="card" key={p.title} style={{ borderLeft: `4px solid ${categoryColor[p.category] || 'var(--gold)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: categoryColor[p.category] || 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{p.date}</span>
                </div>
                <h2 className="card-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{p.title}</h2>
                <ul className="bullet-list">
                  {p.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                  <div className="tags" style={{ margin: 0 }}>
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-navy" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
        <div className="container">
          <p className="section-eyebrow">Competitions</p>
          <h2 className="section-title">Hackathons</h2>
          <hr className="section-rule" />
          <div className="grid-3">
            {[
              { name: 'EY Techathon 6.0', result: 'Qualified Round 2', icon: '🏆' },
              { name: 'ET GenAI Hackathon 2026', result: 'Participant', icon: '🤖' },
              { name: 'VoyageHack 3.0', result: 'Participant', icon: '🚀' },
            ].map(h => (
              <div className="card" key={h.name} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{h.icon}</div>
                <div className="card-title" style={{ fontSize: '1rem' }}>{h.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--gold)', marginTop: '0.3rem', fontWeight: 500 }}>{h.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
