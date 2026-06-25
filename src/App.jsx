import { useEffect, useState } from "react";
import profileImg from "./assets/profile.jpeg";
import "./index.css";

const WORDS = ["React Specialist", "Node.js Developer", "Fullstack Dev", "Tu próximo colaborador"];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIndex];
    const speed = deleting ? 55 : 85;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);
  return text;
}

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const PROJECTS = [
  {
    emoji: "🏦", bg: "#1a1035", url: "manosalaobracoop.com.do",
    href: "https://manosalaobracoop.com.do", name: "COOPEMAO v2",
    tags: ["React", "Node.js", "PostgreSQL", "Railway"],
    desc: "Plataforma cooperativa con wizard de afiliación en 6 pasos, módulos de préstamos y SAN, panel admin con flujos de aprobación y vistas de impresión.",
  },
  {
    emoji: "🏫", bg: "#0a2540", url: "elprivilegio.edu.do",
    href: "https://elprivilegio.edu.do", name: "Centro Educativo El Privilegio",
    tags: ["React", "Tailwind CSS", "EmailJS"],
    desc: "Sitio institucional multi-página con formulario de prematrícula, galería, Google Maps y dominio .edu.do. Comunicación directa vía EmailJS.",
  },
  {
    emoji: "✈️", bg: "#0a3022", url: "bella-terra-travels.vercel.app",
    href: "https://bella-terra-travels.vercel.app", name: "Bella Terra Travels Tours",
    tags: ["React", "Tailwind v4", "Supabase"],
    desc: "Web de agencia de viajes con catálogo de destinos y panel admin con Supabase auth, PostgreSQL y storage. Diseño visual premium para turismo.",
  },
];

const SKILLS = [
  { name: "React / Vite", pct: 92 },
  { name: "Node.js / Express", pct: 85 },
  { name: "PostgreSQL", pct: 80 },
  { name: "Tailwind CSS", pct: 90 },
  { name: "Supabase", pct: 72 },
  { name: "Vercel / Railway", pct: 85 },
];

const TECH = ["⚛️ React", "⚡ Vite", "🟢 Node.js", "🚂 Express", "🐘 PostgreSQL", "⚡ Supabase", "▲ Vercel", "🚃 Railway", "🐙 Git", "✉️ EmailJS"];

export default function App() {
  const tw = useTypewriter(WORDS);
  useFadeUp();

  return (
    <div className="pf-root">

      <nav className="pf-nav">
        <span className="pf-mono pf-logo">alam.rosario</span>
        <ul className="pf-nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact" className="nav-cta">Contrátame</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero-section">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="hero-content">
          <div className="hero-eyebrow pf-mono">
            <span className="dot-live" /> Disponible para proyectos
          </div>
          <div className="hero-inner">
            <img src={profileImg} alt="Alam Rosario" className="hero-avatar" />
            <div>
              <h1 className="hero-name">
                Alam <span className="gradient-text">Rosario</span>
              </h1>
              <div className="hero-typewriter pf-mono">
                Fullstack Developer · <span className="tw-text">{tw}</span>
                <span className="cursor" />
              </div>
              <p className="hero-sub">
                Construyo aplicaciones web completas — del diseño al servidor.
                Proyectos reales en producción para cooperativas, colegios y agencias de viajes.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">Ver proyectos →</a>
                <a href="#contact" className="btn btn-secondary">Hablemos</a>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">3<span>+</span></div><div className="stat-lbl">Proyectos en producción</div></div>
            <div className="stat"><div className="stat-num">3<span>+</span></div><div className="stat-lbl">Años en tecnología</div></div>
            <div className="stat"><div className="stat-num">100<span>%</span></div><div className="stat-lbl">Clientes satisfechos</div></div>
          </div>
        </div>
      </section>

      <section id="projects" className="pf-section">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-eyebrow pf-mono">// proyectos destacados</div>
            <h2 className="section-title">Trabajo real, en producción</h2>
            <p className="section-desc">Cada proyecto es un producto funcional que resuelve un problema real.</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div className="project-card fade-up" key={p.name}>
                <div className="proj-thumb" style={{ background: p.bg }}>
                  <span className="proj-emoji">{p.emoji}</span>
                  <span className="proj-url pf-mono">{p.url}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="proj-name">{p.name}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-footer">
                    <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-sm">↗ Ver sitio</a>
                    <span className="live-badge"><span className="dot-live" /> En producción</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="pf-section pf-section-alt">
        <div className="section-inner">
          <div className="about-grid">
            <div className="fade-up">
              <div className="section-eyebrow pf-mono">// sobre mí</div>
              <h2 className="section-title">Dev fullstack con proyectos reales en producción</h2>
              <p className="about-p">Soy desarrollador fullstack con sede en <strong>Santo Domingo, República Dominicana</strong>, casi graduado de Ingeniería en Sistemas en UNAPEC y en formación técnica en <strong>Talendig</strong>.</p>
              <p className="about-p">No solo escribo código — entrego soluciones. He desarrollado plataformas web completas para cooperativas, instituciones educativas y agencias de viajes, con backend en Railway, bases de datos reales y paneles de administración a medida.</p>
              <div className="about-links">
                <a href="https://github.com/AlamRosario" target="_blank" rel="noreferrer" className="link-pill pf-mono">⚙ GitHub</a>
                <a href="mailto:alamsanchez05@gmail.com" className="link-pill pf-mono">✉ Email</a>
                <a href="https://linkedin.com/in/alam-rosario-dev" target="_blank" rel="noreferrer" className="link-pill pf-mono">in LinkedIn</a>
              </div>
            </div>
            <div className="fade-up">
              {SKILLS.map((s) => (
                <div className="skill-row" key={s.name}>
                  <span className="skill-name pf-mono">{s.name}</span>
                  <div className="skill-bar"><div className="skill-fill" style={{ width: s.pct + "%" }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="pf-section">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-eyebrow pf-mono">// tecnologías</div>
            <h2 className="section-title">Stack que domino</h2>
          </div>
          <div className="tech-grid fade-up">
            {TECH.map((t) => <span className="tech-pill pf-mono" key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="pf-section pf-section-alt">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="fade-up">
              <div className="section-eyebrow pf-mono">// contacto</div>
              <h2 className="section-title">¿Tienes un proyecto? Hablemos.</h2>
              <p className="about-p">Disponible para proyectos freelance y contratos. Respondo en menos de 24 horas.</p>
              <div className="contact-items">
                <a href="mailto:alamsanchez05@gmail.com" className="contact-item">
                  <div className="ci-icon">✉️</div> alamsanchez05@gmail.com
                </a>
                <a href="https://wa.me/18299273441" target="_blank" rel="noreferrer" className="contact-item">
                  <div className="ci-icon">💬</div> +1 (829) 927-3441
                </a>
                <a href="https://github.com/AlamRosario" target="_blank" rel="noreferrer" className="contact-item">
                  <div className="ci-icon">⚙</div> github.com/AlamRosario
                </a>
                <a href="https://linkedin.com/in/alam-rosario-dev" target="_blank" rel="noreferrer" className="contact-item">
                  <div className="ci-icon">in</div> linkedin.com/in/alam-rosario-dev
                </a>
                <div className="contact-item">
                  <div className="ci-icon">📍</div> Santo Domingo, República Dominicana
                </div>
              </div>
            </div>
            <div className="contact-form fade-up">
              <div className="form-group"><label>Nombre</label><input type="text" placeholder="Tu nombre" /></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="tu@email.com" /></div>
              <div className="form-group"><label>Mensaje</label><textarea placeholder="Cuéntame sobre tu proyecto..." /></div>
              <button className="btn btn-primary btn-send">Enviar mensaje →</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="pf-footer pf-mono">
        Diseñado y construido por <span className="pf-accent">Alam Rosario</span> · React + Vite · © 2025
      </footer>

    </div>
  );
}
