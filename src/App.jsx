import { useState, useEffect } from "react";

const SKILLS = {
  Frontend: ["React", "Vite", "Tailwind CSS", "JavaScript ES6+", "HTML5 / CSS3"],
  "Backend & BD": ["Node.js", "Express", "PostgreSQL", "MySQL"],
  DevOps: ["Vercel", "Railway", "Git / GitHub", "Gestión de Dominios", "CORS"],
  Seguridad: ["Ciberseguridad Intermedio", "Autenticación & Autorización", "Seguridad en Redes"],
};

const CERTS = [
  { year: "2026", name: "Ciberseguridad – Nivel Intermedio", org: "INDOTEL / BID / Cymetria", hours: "80 horas" },
  { year: "2025", name: "Programación Front-End (Web)", org: "Talendig", hours: "" },
  { year: "2024", name: "Planificación Estratégica y Gestión de Costos", org: "Idecoop / Infotep", hours: "" },
  { year: "2023", name: "Aspectos Básicos de Asistencia Técnica", org: "Google", hours: "" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("Inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("color-scheme", dark ? "dark" : "light");
  }, [dark]);

  const theme = {
    bg: dark ? "#0f0f13" : "#f7f6f2",
    bgCard: dark ? "#18181f" : "#ffffff",
    bgCardAlt: dark ? "#1e1e28" : "#f0efe9",
    border: dark ? "#2a2a38" : "#e0ddd6",
    text: dark ? "#e8e6df" : "#1a1916",
    textMuted: dark ? "#7a7870" : "#7a7568",
    accent: "#2563eb",
    accentSoft: dark ? "#1d3461" : "#dbeafe",
    accentText: dark ? "#93c5fd" : "#1d4ed8",
    navBg: dark ? "rgba(15,15,19,0.92)" : "rgba(247,246,242,0.92)",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
  };

  return (
    <div style={{ background: theme.bg, color: theme.text, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", transition: "all 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=Syne:wght@600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #2563eb33; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2563eb55; border-radius: 3px; }

        .nav-link { cursor: pointer; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.02em; padding: 0.4rem 0; position: relative; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1.5px; background: #2563eb; transition: width 0.25s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .skill-tag { display: inline-flex; align-items: center; padding: 0.3rem 0.75rem; border-radius: 999px; font-size: 0.8rem; font-weight: 500; transition: transform 0.15s, box-shadow 0.15s; cursor: default; }
        .skill-tag:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37,99,235,0.25); }

        .card { border-radius: 16px; transition: transform 0.2s, box-shadow 0.2s; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }

        .hero-name { font-family: 'Syne', sans-serif; font-weight: 800; line-height: 1.05; letter-spacing: -0.03em; }

        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; background: #2563eb; color: white; border: none; border-radius: 10px; padding: 0.75rem 1.5rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; font-family: inherit; }
        .btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }

        .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; border: 1.5px solid #2563eb; color: #2563eb; border-radius: 10px; padding: 0.75rem 1.5rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .btn-outline:hover { background: #2563eb; color: white; transform: translateY(-2px); }

        .input-field { width: 100%; padding: 0.75rem 1rem; border-radius: 10px; font-family: inherit; font-size: 0.9rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .input-field:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.15); }

        .toggle-btn { width: 48px; height: 26px; border-radius: 999px; border: none; cursor: pointer; position: relative; transition: background 0.3s; }
        .toggle-thumb { position: absolute; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: white; transition: left 0.3s; box-shadow: 0 1px 4px rgba(0,0,0,0.2); }

        .section-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 0.5rem; }
        .section-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: clamp(1.75rem, 4vw, 2.5rem); line-height: 1.15; letter-spacing: -0.02em; }

        .dot-grid { position: absolute; inset: 0; background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 28px 28px; opacity: 0.045; pointer-events: none; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }

        @media (max-width: 768px) {
          .mobile-menu { position: fixed; top: 64px; left: 0; right: 0; padding: 1.5rem; z-index: 99; display: flex; flex-direction: column; gap: 1rem; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-desktop { display: flex !important; }
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: theme.navBg, backdropFilter: "blur(12px)", borderBottom: `1px solid ${theme.border}`, transition: "all 0.3s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: theme.accent }}>
            AR<span style={{ color: theme.text }}>.</span>
          </span>
          <div className="show-desktop" style={{ display: "none", gap: "2rem", alignItems: "center" }}>
            {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map(link => (
              <span key={link} className={`nav-link${active === link ? " active" : ""}`} style={{ color: active === link ? theme.accent : theme.textMuted }} onClick={() => scrollTo(link)}>
                {link}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="toggle-btn" onClick={() => setDark(!dark)} style={{ background: dark ? "#2563eb" : "#d1d5db" }} title="Cambiar tema">
              <div className="toggle-thumb" style={{ left: dark ? "25px" : "3px" }} />
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.text, fontSize: "1.4rem" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ background: theme.navBg, borderBottom: `1px solid ${theme.border}` }}>
            {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map(link => (
              <span key={link} onClick={() => scrollTo(link)} style={{ color: active === link ? theme.accent : theme.text, fontWeight: 500, fontSize: "1rem", cursor: "pointer", padding: "0.5rem 0" }}>
                {link}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
        <div className="dot-grid" style={{ color: theme.text }} />
        <div style={{ position: "absolute", top: "15%", right: "-5%", width: "45vw", height: "45vw", maxWidth: 600, maxHeight: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          <p className="fade-up fade-up-1 section-label">Fullstack Developer · Santo Domingo, RD</p>
          <h1 className="fade-up fade-up-2 hero-name" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: theme.text, marginBottom: "1.25rem", maxWidth: 800 }}>
            Alam<br />
            <span style={{ color: theme.accent }}>Rosario</span><span style={{ color: theme.textMuted }}>.</span>
          </h1>
          <p className="fade-up fade-up-3" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: theme.textMuted, maxWidth: 560, lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Ingeniero en Sistemas especializado en aplicaciones web fullstack. Diseño, desarrollo y despliego soluciones reales — de la arquitectura al servidor de producción.
          </p>
          <div className="fade-up fade-up-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Proyectos")}>Ver proyectos →</button>
            <button className="btn-outline" onClick={() => scrollTo("Contacto")}>Contáctame</button>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
            {[["3+", "años de experiencia"], ["1", "proyecto en producción"], ["10", "meses Talendig '26"]].map(([n, l]) => (
              <div key={n}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", color: theme.accent }}>{n}</div>
                <div style={{ fontSize: "0.8rem", color: theme.textMuted, marginTop: "0.15rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="Sobre mí" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p className="section-label">Quién soy</p>
            <h2 className="section-title" style={{ color: theme.text, marginBottom: "1.5rem" }}>Desarrollador con visión de producto</h2>
            <p style={{ color: theme.textMuted, lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Ingeniero en Sistemas de Computación (UNAPEC, 2026) con enfoque en el ciclo completo de desarrollo — desde el diseño de arquitectura hasta el despliegue en producción. Trabajo como freelancer construyendo soluciones reales para clientes reales.
            </p>
            <p style={{ color: theme.textMuted, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Actualmente cursando la Carrera Técnica en Desarrollo de Software (Talendig) para profundizar en infraestructura cloud, Docker y DevOps. Meta: expandirme al mercado internacional.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="https://github.com/AlamRosario" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary">GitHub ↗</button>
              </a>
              <a href="mailto:alamsanchez05@gmail.com" style={{ textDecoration: "none" }}>
                <button className="btn-outline">Email</button>
              </a>
            </div>
          </div>
          <div>
            <div style={{ width: "100%", aspectRatio: "1", maxWidth: 360, margin: "0 auto", borderRadius: 20, background: theme.bgCardAlt, border: `2px dashed ${theme.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
              <div style={{ fontSize: "3rem", opacity: 0.3 }}>👤</div>
              <p style={{ color: theme.textMuted, fontSize: "0.85rem" }}>Foto de perfil</p>
            </div>
            <div style={{ marginTop: "1.5rem", background: theme.bgCard, borderRadius: 14, padding: "1.25rem 1.5rem", border: `1px solid ${theme.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9rem", color: theme.text }}>Ingeniería en Sistemas de Computación</p>
                  <p style={{ color: theme.textMuted, fontSize: "0.82rem", marginTop: "0.2rem" }}>Universidad APEC (UNAPEC)</p>
                </div>
                <span style={{ background: theme.accentSoft, color: theme.accentText, fontSize: "0.75rem", fontWeight: 600, padding: "0.25rem 0.6rem", borderRadius: 6 }}>2026</span>
              </div>
              <p style={{ color: theme.textMuted, fontSize: "0.8rem", marginTop: "0.6rem" }}>Índice 3.01 / 4.0 · 157 créditos aprobados</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="Proyectos" style={{ padding: "7rem 1.5rem", background: dark ? "#0c0c10" : "#eeecea" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label">Lo que he construido</p>
          <h2 className="section-title" style={{ color: theme.text, marginBottom: "3rem" }}>Proyectos destacados</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div className="card" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: theme.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🏦</div>
                <span style={{ background: "#dcfce7", color: "#166534", fontSize: "0.72rem", fontWeight: 600, padding: "0.2rem 0.6rem", borderRadius: 6 }}>En Producción</span>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: theme.text, marginBottom: "0.75rem" }}>COOPEMAO v2</h3>
              <p style={{ color: theme.textMuted, fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Plataforma fullstack que digitalizó la gestión de una cooperativa real. Módulos de préstamos, ahorros SAN, panel administrativo con autenticación y monitoreo en tiempo real.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {["React", "Node.js", "PostgreSQL", "Vercel", "Railway"].map(t => (
                  <span key={t} className="skill-tag" style={{ background: theme.accentSoft, color: theme.accentText }}>{t}</span>
                ))}
              </div>
              <a href="https://manosalaobracoop.com.do" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Ver sitio en vivo ↗</button>
              </a>
            </div>
            <div className="card" style={{ background: theme.bgCard, border: `2px dashed ${theme.border}`, padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 320, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem", opacity: 0.4 }}>🚀</div>
              <p style={{ color: theme.textMuted, fontSize: "0.9rem", fontWeight: 500 }}>Próximo proyecto</p>
              <p style={{ color: theme.textMuted, fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.7 }}>En desarrollo…</p>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="Habilidades" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label">Stack técnico</p>
          <h2 className="section-title" style={{ color: theme.text, marginBottom: "3rem" }}>Habilidades</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
            {Object.entries(SKILLS).map(([cat, skills]) => (
              <div key={cat} style={{ background: theme.bgCard, borderRadius: 16, padding: "1.5rem", border: `1px solid ${theme.border}` }}>
                <p style={{ fontWeight: 700, fontSize: "0.85rem", color: theme.accent, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {skills.map(s => (
                    <span key={s} className="skill-tag" style={{ background: theme.bgCardAlt, color: theme.text, border: `1px solid ${theme.border}` }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="section-label">Formación continua</p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: theme.text, marginBottom: "1.5rem" }}>Certificaciones</h3>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {CERTS.map((c, i) => (
              <div key={i} style={{ background: theme.bgCard, borderRadius: 12, padding: "1rem 1.5rem", border: `1px solid ${theme.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9rem", color: theme.text }}>{c.name}</p>
                  <p style={{ color: theme.textMuted, fontSize: "0.8rem", marginTop: "0.15rem" }}>{c.org}{c.hours ? ` · ${c.hours}` : ""}</p>
                </div>
                <span style={{ background: theme.accentSoft, color: theme.accentText, fontSize: "0.75rem", fontWeight: 600, padding: "0.25rem 0.65rem", borderRadius: 6, whiteSpace: "nowrap" }}>{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="Contacto" style={{ padding: "7rem 1.5rem", background: dark ? "#0c0c10" : "#eeecea" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Hablemos</p>
          <h2 className="section-title" style={{ color: theme.text, marginBottom: "1rem" }}>¿Tienes un proyecto?</h2>
          <p style={{ color: theme.textMuted, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "3rem" }}>
            Estoy disponible para proyectos freelance. Escríbeme y hablamos.
          </p>
          {!sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input className="input-field" placeholder="Tu nombre" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}`, color: theme.text }} />
                <input className="input-field" placeholder="Tu email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}`, color: theme.text }} />
              </div>
              <textarea className="input-field" placeholder="Cuéntame sobre tu proyecto…" rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}`, color: theme.text, resize: "vertical" }} />
              <button className="btn-primary" onClick={handleSubmit} style={{ alignSelf: "flex-end" }}>Enviar mensaje →</button>
            </div>
          ) : (
            <div style={{ background: theme.bgCard, borderRadius: 16, padding: "3rem", border: `1px solid ${theme.border}` }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
              <p style={{ fontWeight: 600, color: theme.text, fontSize: "1.1rem" }}>¡Mensaje recibido!</p>
              <p style={{ color: theme.textMuted, marginTop: "0.5rem", fontSize: "0.9rem" }}>Me pondré en contacto contigo pronto.</p>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
            {[["📧", "alamsanchez05@gmail.com", "mailto:alamsanchez05@gmail.com"], ["📱", "829-927-3441", "tel:+18299273441"], ["🐙", "github.com/AlamRosario", "https://github.com/AlamRosario"]].map(([icon, label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", color: theme.textMuted, fontSize: "0.85rem", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = theme.accent} onMouseOut={e => e.currentTarget.style.color = theme.textMuted}>
                <span>{icon}</span><span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: theme.textMuted, fontSize: "0.82rem" }}>
          © 2026 Alam Rosario · Diseñado y desarrollado con React
        </p>
      </footer>
    </div>
  );
}
