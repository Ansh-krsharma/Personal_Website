import { useEffect, useMemo, useState } from 'react';

const fallbackPortfolio = {
  name: 'Ansh Kumar Sharma',
  title: 'Full Stack Software Developer',
  subtitle: 'Java • Spring Boot • React • MySQL • AI/ML',
  tagline:
    'Passionate about building scalable web and mobile applications with JavaScript, React.js, Node.js, Spring Boot, and other modern tools.',
  about:
    'I am a Computer Science Engineering student at KIIT with a strong passion for full stack development and problem solving. I enjoy turning ideas into practical software products and continuously improving through real projects.',
  email: '2305114@kiit.ac.in',
  phone: '9431296703',
  location: 'Bhubaneswar, Odisha, India',
  linkedin: 'https://www.linkedin.com/in/anshkumarsharma-letsconnectasap',
  github: 'https://github.com/Ansh-krsharma',
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Spring Boot',
    'MySQL',
    'Git',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'REST APIs'
  ],
  projects: [
    {
      title: 'FitMart',
      description: 'Full stack fitness e-commerce platform built with React, Spring Boot, and MySQL.',
      techStack: ['React', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Moon Phase Calendar',
      description: '3D moon phase calendar with real-time visualization and date-based rendering.',
      techStack: ['JavaScript', 'Three.js', 'CSS']
    },
    {
      title: 'Hyperbolic Category Discovery',
      description: 'ML project for category discovery using hyperbolic embeddings and clustering.',
      techStack: ['Python', 'ML', 'Scikit-learn']
    },
    {
      title: 'EV Review ABSA',
      description: 'Aspect-based sentiment analysis pipeline for extracting insights from EV reviews.',
      techStack: ['Python', 'NLP', 'NLTK']
    }
  ],
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    institute: 'Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar',
    graduationYear: '2027',
    cgpa: '7.34'
  },
  careerObjective:
    'Seeking a software development internship to contribute to real products, strengthen full stack engineering skills, and grow into a product-focused developer.',
  experienceHighlights: [
    'Built full stack apps using React, Spring Boot, and MySQL.',
    'Practiced data structures, OOP, and backend fundamentals through hands-on Java projects.',
    'Explored AI/ML and NLP through research-driven academic projects.'
  ],
  stats: [
    { value: '2+', label: 'Years of Coding', icon: '</>' },
    { value: '5+', label: 'Projects Completed', icon: '▣' },
    { value: '5+', label: 'Technologies', icon: '◔' },
    { value: '50+', label: 'DSA Problems Solved', icon: '☕' }
  ]
};

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
const RESUME_LINK = import.meta.env.VITE_RESUME_URL || 'https://drive.google.com/file/d/1jbxE5EfGjSDXfuQegkkLU6DmSx13ZabC/view?usp=drivesdk';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const socials = [
  { label: 'GitHub', key: 'github', icon: 'GH' },
  { label: 'LinkedIn', key: 'linkedin', icon: 'in' },
  { label: 'Email', key: 'email', icon: '✉' }
];

const skillIcons = {
  Java: '☕',
  Python: '🐍',
  JavaScript: 'JS',
  'React.js': '⚛',
  'Node.js': '⬢',
  'Spring Boot': '❀',
  MySQL: '🗄',
  Git: '◆',
  HTML: 'H5',
  CSS: 'C3',
  'Tailwind CSS': '≈',
  'REST APIs': 'API'
};

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/portfolio`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load');
        return response.json();
      })
      .then((data) => setPortfolio({ ...fallbackPortfolio, ...data }))
      .catch(() => setPortfolio(fallbackPortfolio));
  }, []);

  const projectVisuals = useMemo(
    () => ({
      FitMart: { glyph: '🛒', tint: 'tint-react' },
      'Moon Phase Calendar': { glyph: '◑', tint: 'tint-moon' },
      'Hyperbolic Category Discovery': { glyph: '◈', tint: 'tint-ml' },
      'EV Review ABSA': { glyph: '▦', tint: 'tint-nlp' }
    }),
    [https://github.com/Ansh-krsharma/Fitcart]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Failed');

      setStatus('Message sent successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Unable to send right now. Please try again later.');
    }
  };

  if (!portfolio) {
    return <div className="loading">Loading portfolio...</div>;
  }

  const portfolioData = {
    ...fallbackPortfolio,
    ...portfolio,
    stats: portfolio.stats || fallbackPortfolio.stats,
    experienceHighlights: portfolio.experienceHighlights || fallbackPortfolio.experienceHighlights
  };

  return (
    <div className="page" id="home">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-overlay" />

      <header className="header-shell">
        <nav className="nav-bar">
          <a className="brand" href="#home">
            <span className="brand-sign">Ansh Sharma</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="resume-btn" href={RESUME_LINK} target={RESUME_LINK === '#contact' ? '_self' : '_blank'} rel="noreferrer">
            Download Resume
          </a>
        </nav>
      </header>

      <main className="container">
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Hi all, I&apos;m</p>
            <h1>
              {portfolioData.name} <span className="wave">👋</span>
            </h1>
            <h2>{portfolioData.title}</h2>
            <p className="hero-text">{portfolioData.tagline}</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Let&apos;s Connect
              </a>
              <a className="secondary-btn" href="#projects">
                View My Work
              </a>
            </div>

            <div className="social-row">
              {socials.map((social) => {
                const href = social.key === 'email' ? `mailto:${portfolioData.email}` : portfolioData[social.key];
                return (
                  <a key={social.label} className="social-chip" href={href} target="_blank" rel="noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="center-code">&lt;/&gt;</div>
            <div className="tech-node hero-badge">JS</div>
            <div className="tech-react hero-badge">⚛</div>
            <div className="tech-spring hero-badge">❀</div>
            <div className="tech-java hero-badge">☕</div>
            <span className="spark spark-a" />
            <span className="spark spark-b" />
            <span className="spark spark-c" />
            <span className="spark spark-d" />
          </div>
        </section>

        <section className="stats-grid">
          {portfolioData.stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-icon">{item.icon}</span>
              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid" id="about">
          <article className="panel about-card">
            <div className="panel-head">
              <span className="panel-dot">◎</span>
              <h3>About Me</h3>
            </div>
            <p>{portfolioData.about}</p>
            <div className="about-pattern" aria-hidden="true">
              {Array.from({ length: 48 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <a className="inline-btn" href="#education">
              More About Me
            </a>
          </article>

          <article className="panel skills-card" id="skills">
            <div className="panel-head">
              <span className="panel-dot">▦</span>
              <h3>Skills</h3>
            </div>
            <div className="skill-list">
              {portfolioData.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  <span className="skill-icon">{skillIcons[skill] || '•'}</span>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="section-header" id="projects">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h3>Featured Projects</h3>
          </div>
          <a href={portfolioData.github} target="_blank" rel="noreferrer">
            View All Projects →
          </a>
        </section>

        <section className="project-grid">
          {portfolioData.projects.map((project) => {
            const visual = projectVisuals[project.title] || { glyph: '◌', tint: 'tint-react' };
            return (
              <article className="project-card" key={project.title}>
                <div className={`project-art ${visual.tint}`}>
                  <span>{visual.glyph}</span>
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <h4>{project.title}</h4>
                    <span>↗</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.techStack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="bottom-grid" id="experience">
          <article className="panel experience-card">
            <div className="panel-head">
              <span className="panel-dot">▤</span>
              <h3>Experience</h3>
            </div>
            <ul className="timeline-list">
              {portfolioData.experienceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Comfortable working with Java, Spring Boot, REST APIs, MySQL, and Git-based workflows.</li>
            </ul>
          </article>

          <article className="panel education-card" id="education">
            <div className="panel-head">
              <span className="panel-dot">◫</span>
              <h3>Education</h3>
            </div>
            <div className="education-box">
              <strong>{portfolioData.education.degree}</strong>
              <p>{portfolioData.education.institute}</p>
              <div className="education-meta">
                <span>Graduation: {portfolioData.education.graduationYear}</span>
                <span>CGPA: {portfolioData.education.cgpa}</span>
              </div>
            </div>
            <div className="focus-box">
              <h4>Career Focus</h4>
              <p>{portfolioData.careerObjective}</p>
            </div>
          </article>
        </section>

        <section className="contact-grid" id="contact">
          <article className="panel contact-card">
            <p className="section-kicker">Contact</p>
            <h3>Let&apos;s build something meaningful.</h3>
            <p>
              I&apos;m open to internship roles, collaborative projects, and software opportunities where I can
              contribute across frontend, backend, and Java-based product development.
            </p>
            <div className="contact-points">
              <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
              <span>{portfolioData.location}</span>
            </div>
          </article>

          <form className="panel contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell me about your project or opportunity" required />
            </label>
            <button type="submit">Send Message</button>
            {status ? <p className="status">{status}</p> : null}
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
