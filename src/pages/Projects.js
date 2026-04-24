import React from 'react';

const projects = [
  {
    title: 'Password Security Analyzer & Attack Simulator',
    date: 'Feb 2026',
    tags: ['Python', 'Cryptography', 'Security Analysis'],
    category: 'Cybersecurity',
    github: 'https://github.com/manognachalasani/passanalyzer-attacksim',
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
    category: 'Cloud',
    github: 'https://github.com/manognachalasani/ai-image-service',
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
    github: 'https://github.com/manognachalasani/HR-Attrition-and-Salary-Forecasting',
    bullets: [
      'Developed Logistic Regression, SVM, and Random Forest models to predict employee attrition risk.',
      'Forecasted salary trends using Ridge Regression and introduced an Expected Salary Loss metric.',
      'Analyzed HR datasets to identify patterns affecting employee retention and compensation outcomes.',
    ],
  },
    {
    title: 'Point-Based Lending & Loaning System',
    date: 'Mar 2026',
    tags: ['React', 'Express.js', 'PostgreSQL', 'JWT', 'bcrypt', 'AI Risk Model'],
    category: 'Full Stack',
    github: 'https://github.com/manognachalasani/lending-system',
    bullets: [
      'Built secure authentication system using JWT tokens, bcrypt password hashing, and Mahindra University email verification.',
      'Designed credit scoring algorithm (0-1000 scale) that updates based on repayment behavior, lending reliability, and default history.',
      'Implemented gamification features including badges (Trusted Lender, On-time Repayer), leaderboards, and repayment streak tracking.',
      'Created RESTful APIs for point wallet management, loan requests (pending/approved/rejected/overdue states), and automated point transfers.',
      'Integrated fraud detection system flagging suspicious borrowing patterns with admin alerts and account freezing capabilities.',
    ],
  },
    {
      title: 'Insider Threat Detection System',
      date: 'Apr 2026',
      tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Isolation Forest', 'Autoencoders', 'React', 'WebSockets'],
      category: 'Cybersecurity',
      github: 'https://github.com/manognachalasani/insider-threat-detection',
      bullets: [
        'Developed unsupervised anomaly detection pipeline using Isolation Forest for outlier detection and Autoencoders for reconstructing user behavior patterns.',
        'Implemented weighted risk scoring formula combining 4 anomaly scores with role deviation (+25%) and behavioral deviation (+10%) factors.',
        'Created interactive React dashboard with real-time risk gauges, user behavior timelines, and SOC alert management interface.',
        'Engineered features from login timestamps, file access volumes, cross-role resource requests, and external network transfers.',
        'Built context-aware risk logic with role-based access expectations (HR vs Developer vs Finance) to reduce false positives.',
      ],
  },
    {
      title: 'Project Chronos: The AI Archeologist',
      date: 'Oct 2025',
      tags: ['Python', 'Google Gemini', 'Prompt Engineering', 'Web Scraping', 'REST APIs'],
      category: 'AI/ML',
      github: 'https://github.com/yashikagupta-ai/Projrct-Chronos',
      bullets: [
        'Engineered few-shot prompt templates for Google Gemini to reconstruct fragmented text, internet slang, and meme references with historical context.',
        'Implemented automated web search pipeline to fetch real-time explanations and source attribution for reconstructed cultural references.',
        'Built CLI tool supporting batch processing with .env configuration for Gemini API, Google Search API, and Search Engine ID.',
        'Developed reconstruction accuracy heuristics for ambiguous fragments using contextual clues and web search validation.',
        'Designed extensible Python framework for adding new reconstruction domains (acronyms, memes, historical text fragments).',
      ],
  },
    {
      title: 'Hotel Management System',
      date: 'Nov 2025',
      tags: ['Express.js', 'TypeScript', 'JWT', 'PostgreSQL', 'Nodemailer', 'REST API'],
      category: 'Full Stack',
      github: 'https://github.com/manognachalasani/hotelmgmt-wtw',
      bullets: [
        'Built secure hotel booking system with JWT authentication, bcrypt password hashing, and role-based access control (User/Admin).',
        'Implemented real-time room availability checking using native JavaScript Date objects for check-in/out validation and conflict detection.',
        'Integrated Nodemailer for automated booking confirmations, cancellation receipts, and payment reminder emails with UUID tracking.',
        'Designed TypeScript interfaces and enums for User, Room, Booking entities ensuring type safety across the Express.js backend.',
        'Secured API with Helmet.js, CORS, and Morgan logging; added rate limiting and input validation for booking endpoints.',
      ],
  },
  {
    title: 'Fake News Diffusion Simulator',
    date: '2024',
    tags: ['Python', 'FastAPI', 'Simulation', 'Data Analysis'],
    category: 'Full Stack',
    github: 'https://github.com/manognachalasani/fakenewsspreadsimulator',
    bullets: [
      'Simulated real vs fake news propagation with configurable intervention strategies.',
      'Analyzed metrics such as fake reach, peak spread, and diffusion timeline.',
      'Built a FastAPI backend to expose simulation parameters and results.',
    ],
  },
];

const categoryColor = {
  'Cybersecurity': '#E74C3C',
  'Cloud': '#2980B9',
  'AI/ML': '#27AE60',
  'Full Stack': '#8E44AD',
  'Machine Learning': '#32CD32'
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

    {/* Work Experience */}
          <section style={{ background: 'var(--cream-dark)', padding: '4rem 0' }}>
            <div className="container">
              <p className="section-eyebrow">Work Experience</p>
              <h2 className="section-title">Internship <em>Experience</em></h2>
              <hr className="section-rule" />
              <div className="card" style={{ maxWidth: 720 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 className="card-title">Cloud Computing Intern</h3>
                    <div className="card-sub" style={{ marginBottom: 0 }}>SmartEd Innovations</div>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 500 }}>Jun 2025 – Sept 2025</span>
                </div>
                <ul className="bullet-list">
                  <li>Built an Azure-based image analysis platform using Azure Computer Vision APIs and virtual machines for scalable deployment.</li>
                  <li>Implemented secure API endpoints and integrated cloud storage for processing and managing image datasets.</li>
                  <li>Configured and deployed Azure Virtual Machines and monitored performance metrics for cloud infrastructure.</li>
                </ul>
                <div className="tags" style={{ marginTop: '1rem' }}>
                  {['Azure', 'Azure Computer Vision', 'Azure VMs', 'REST APIs', 'Cloud Storage'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
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
              { name: 'EY Techathon 6.0', result: 'Qualified Round 2'},
              { name: 'ET GenAI Hackathon 2026', result: 'Participant'},
              { name: 'VoyageHack 3.0', result: 'Participant'},
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
