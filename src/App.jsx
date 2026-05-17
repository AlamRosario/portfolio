import { useState, useEffect } from "react";
import profileImg from './assets/profile.png';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const t = {
    bg: dark ? "#0f0f13" : "#f7f6f2",
    bgCard: dark ? "#18181f" : "#ffffff",
    bgAlt: dark ? "#0c0c10" : "#eeecea",
    bgCardAlt: dark ? "#1e1e28" : "#f0efe9",
    border: dark ? "#2a2a38" : "#e0ddd6",
    text: dark ? "#e8e6df" : "#1a1916",
    muted: dark ? "#7a7870" : "#7a7568",
    accent: "#2563eb",
    accentSoft: dark ? "#1d3461" : "#dbeafe",
    accentText: dark ? "#93c5fd" : "#1d4ed8",
    nav: dark ? "rgba(15,15,19,0.95)" : "rgba(247,246,242,0.95)",
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    try {
      const response = await fetch("https://formspree.io/f/mojyawvy", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) setSent(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { overflow-x: hidden; width: 100%; }

        .syne { font-family: 'Syne', sans-serif; }

        .btn-p { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; background: #2563eb; color: #fff; border: none; border-radius: 10px; padding: .7rem 1.4rem; font-size: .9rem; font-weight: 600; cursor: pointer; transition: background .2s, transform .15s; font-family: inherit; }
        .btn-p:hover { background: #1d4ed8; transform: translateY(-2px); }
        .btn-o { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; background: transparent; border: 1.5px solid #2563eb; color: #2563eb; border-radius: 10px; padding: .7rem 1.4rem; font-size: .9rem; font-weight: 600; cursor: pointer; transition: all .2s; font-family: inherit; }
        .btn-o:hover { background: #2563eb; color: #fff; }

        .tag { display: inline-flex; align-items: center; padding: .28rem .7rem; border-radius: 999px; font-size: .78rem; font-weight: 500; }

        .card { border-radius: 16px; transition: transform .2s, box-shadow .2s; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,.1); }

        .input { width: 100%; padding: .75rem 1rem; border-radius: 10px; font-family: inherit; font-size: .9rem; outline: none; transition: border-color .2s, box-shadow .2s; }
        .input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.15); }

        .label { font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #2563eb; margin-bottom: .4rem; display: block; }

        /* NAV */
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 1.25rem; border-bottom-width: 1px; border-bottom-style: solid; backdrop-filter: blur(12px); transition: all .3s; }
        .nav-links { display: flex; gap: 1.75rem; align-items: center; }
        .nav-link { font-size: .85rem; font-weight: 500; cursor: pointer; transition: color .2s; }

        /* SECTIONS */
        section { width: 100%; overflow-x: hidden; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; width: 100%; }

        /* GRID RESPONSIVE */
        .grid-2 { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .grid-2 { grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; } }

        .grid-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 480px) { .grid-skills { grid-template-columns: 1fr; } }

        .grid-projects { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 600px) { .grid-projects { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); } }

        .form-row { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 500px) { .form-row { grid-template-columns: 1fr 1fr; } }

        /* HERO */
        .hero-name { font-family: 'Syne', sans-serif; font-weight: 800; line-height: 1.05; letter-spacing: -.03em; font-size: clamp(2.8rem, 12vw, 5.5rem); }

        /* MOBILE NAV */
        .hamburger { background: none; border: none; cursor: pointer; font-size: 1.4rem; display: none; }
        .mobile-nav { display: none; }
        @media (max-width: 767px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-nav.open { display: flex; flex-direction: column; gap: 1rem; position: fixed; top: 60px; left: 0; right: 0; padding: 1.5rem 1.25rem; z-index: 99; border-bottom-width: 1px; border-bottom-style: solid; backdrop-filter: blur(12px); }
        }

        /* STATS */
        .stats { display: flex; gap: 2rem; flex-wrap: wrap; margin-top: 2.5rem; }

        /* CONTACT LINKS */
        .contact-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 2.5rem; flex-wrap: wrap; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fu1 { animation: fadeUp .6s .1s ease both; }
        .fu2 { animation: fadeUp .6s .25s ease both; }
        .fu3 { animation: fadeUp .6s .4s ease both; }
        .fu4 { animation: fadeUp .6s .55s ease both; }
      `}</style>

      {/* NAV */}
      <nav style={{ background: t.nav, borderColor: t.border }}>
        <span className="syne" style={{ fontWeight: 800, fontSize: "1.1rem", color: t.accent, letterSpacing: "-.02em" }}>
          AR<span style={{ color: t.text }}>.</span>
        </span>
        <div className="nav-links">
          {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map(l => (
            <span key={l} className="nav-link" style={{ color: t.muted }} onClick={() => scrollTo(l)}
              onMouseOver={e => e.target.style.color = t.accent} onMouseOut={e => e.target.style.color = t.muted}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <button onClick={() => setDark(!dark)} style={{ width: 44, height: 24, borderRadius: 999, border: "none", cursor: "pointer", background: dark ? "#2563eb" : "#d1d5db", position: "relative", transition: "background .3s", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 2, left: dark ? 22 : 2, width: 20, height: 20, borderRadius: "50%", background: "white", transition: "left .3s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ color: t.text }}>{menuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`} style={{ background: t.nav, borderColor: t.border }}>
        {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map(l => (
          <span key={l} onClick={() => scrollTo(l)} style={{ color: t.text, fontWeight: 500, fontSize: "1rem", cursor: "pointer", padding: ".4rem 0" }}>{l}</span>
        ))}
      </div>

      {/* HERO */}
      <section id="Inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "-10%", width: "60vw", maxWidth: 500, aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ padding: "4rem 1.25rem" }}>
          <p className="label fu1">Fullstack Developer · Santo Domingo, RD</p>
          <h1 className="hero-name fu2" style={{ color: t.text, margin: ".5rem 0 1rem" }}>
            Alam<br /><span style={{ color: t.accent }}>Rosario</span><span style={{ color: t.muted }}>.</span>
          </h1>
          <p className="fu3" style={{ color: t.muted, fontSize: "clamp(.9rem, 2.5vw, 1.1rem)", lineHeight: 1.75, maxWidth: 520, marginBottom: "2rem" }}>
            Ingeniero en Sistemas especializado en aplicaciones web fullstack. Diseño, desarrollo y despliego soluciones reales — de la arquitectura al servidor de producción.
          </p>
          <div className="fu4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-p" onClick={() => scrollTo("Proyectos")}>Ver proyectos →</button>
            <button className="btn-o" onClick={() => scrollTo("Contacto")}>Contáctame</button>
          </div>
          <div className="stats">
            {[["3+", "años de experiencia"], ["1", "proyecto en producción"], ["10", "meses Talendig '26"]].map(([n, l]) => (
              <div key={n}>
                <div className="syne" style={{ fontWeight: 800, fontSize: "2rem", color: t.accent }}>{n}</div>
                <div style={{ fontSize: ".8rem", color: t.muted, marginTop: ".1rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="Sobre mí" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="label">Quién soy</span>
              <h2 className="syne" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: t.text, margin: ".4rem 0 1.25rem", lineHeight: 1.2 }}>Desarrollador con visión de producto</h2>
              <p style={{ color: t.muted, lineHeight: 1.8, marginBottom: "1rem", fontSize: ".93rem" }}>
                Ingeniero en Sistemas de Computación (UNAPEC, 2026) con enfoque en el ciclo completo de desarrollo — desde el diseño de arquitectura hasta el despliegue en producción. Trabajo como freelancer construyendo soluciones reales para clientes reales.
              </p>
              <p style={{ color: t.muted, lineHeight: 1.8, fontSize: ".93rem", marginBottom: "1.75rem" }}>
                Actualmente cursando la Carrera Técnica en Desarrollo de Software (Talendig) para profundizar en infraestructura cloud, Docker y DevOps. Meta: expandirme al mercado internacional.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://github.com/AlamRosario" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <button className="btn-p">GitHub ↗</button>
                </a>
                <a href="mailto:alamsanchez05@gmail.com" style={{ textDecoration: "none" }}>
                  <button className="btn-o">Email</button>
                </a>
              </div>
            </div>
            <div>
              <img src={profileImg} alt="Alam Rosario" style={{ width: "100%", maxWidth: 340, borderRadius: 20, display: "block", margin: "0 auto 1.5rem", objectFit: "cover" }} />
              <div style={{ background: t.bgCard, borderRadius: 14, padding: "1.25rem", border: `1px solid ${t.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: ".5rem" }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: ".88rem", color: t.text }}>Ingeniería en Sistemas de Computación</p>
                    <p style={{ color: t.muted, fontSize: ".8rem", marginTop: ".2rem" }}>Universidad APEC (UNAPEC)</p>
                  </div>
                  <span style={{ background: t.accentSoft, color: t.accentText, fontSize: ".72rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6 }}>2026</span>
                </div>
                <p style={{ color: t.muted, fontSize: ".78rem", marginTop: ".6rem" }}>Índice 3.01 / 4.0 · 157 créditos aprobados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="Proyectos" style={{ padding: "5rem 0", background: t.bgAlt }}>
        <div className="container">
          <span className="label">Lo que he construido</span>
          <h2 className="syne" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: t.text, margin: ".4rem 0 2.5rem", lineHeight: 1.2 }}>Proyectos destacados</h2>
          <div className="grid-projects">
            <div className="card" style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: ".5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🏦</div>
                <span style={{ background: "#dcfce7", color: "#166534", fontSize: ".72rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6 }}>En Producción</span>
              </div>
              <h3 className="syne" style={{ fontWeight: 700, fontSize: "1.15rem", color: t.text, marginBottom: ".65rem" }}>COOPEMAO v2</h3>
              <p style={{ color: t.muted, fontSize: ".87rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Plataforma fullstack que digitalizó la gestión de una cooperativa real. Módulos de préstamos, ahorros SAN, panel administrativo con autenticación y monitoreo en tiempo real.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.5rem" }}>
                {["React", "Node.js", "PostgreSQL", "Vercel", "Railway"].map(t2 => (
                  <span key={t2} className="tag" style={{ background: t.accentSoft, color: t.accentText }}>{t2}</span>
                ))}
              </div>
              <a href="https://manosalaobracoop.com.do" target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
                <button className="btn-p" style={{ width: "100%" }}>Ver sitio en vivo ↗</button>
              </a>
            </div>
            <div className="card" style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: ".5rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🏫</div>
                <span style={{ background: "#dcfce7", color: "#166534", fontSize: ".72rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6 }}>En Producción</span>
              </div>
              <h3 className="syne" style={{ fontWeight: 700, fontSize: "1.15rem", color: t.text, marginBottom: ".65rem" }}>Centro Educativo El Privilegio</h3>
              <p style={{ color: t.muted, fontSize: ".87rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Sitio web institucional para centro educativo en Santo Domingo Este. Diseño moderno, responsive y optimizado para presentar la oferta académica de nivel inicial y primario.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.5rem" }}>
                {["React", "EmailJS", "Google Maps", "Vercel"].map(t2 => (
                  <span key={t2} className="tag" style={{ background: t.accentSoft, color: t.accentText }}>{t2}</span>
                ))}
              </div>
              <a href="https://www.elprivilegio.edu.do/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
                <button className="btn-p" style={{ width: "100%" }}>Ver sitio en vivo ↗</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="Habilidades" style={{ padding: "5rem 0" }}>
        <div className="container">
          <span className="label">Stack técnico</span>
          <h2 className="syne" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: t.text, margin: ".4rem 0 2.5rem", lineHeight: 1.2 }}>Habilidades</h2>
          <div className="grid-skills" style={{ marginBottom: "3.5rem" }}>
            {Object.entries(SKILLS).map(([cat, skills]) => (
              <div key={cat} style={{ background: t.bgCard, borderRadius: 16, padding: "1.25rem", border: `1px solid ${t.border}` }}>
                <p style={{ fontWeight: 700, fontSize: ".78rem", color: t.accent, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".85rem" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                  {skills.map(s => (
                    <span key={s} className="tag" style={{ background: t.bgCardAlt, color: t.text, border: `1px solid ${t.border}` }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span className="label">Formación continua</span>
          <h3 className="syne" style={{ fontWeight: 700, fontSize: "1.4rem", color: t.text, margin: ".4rem 0 1.25rem" }}>Certificaciones</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: ".65rem" }}>
            {CERTS.map((c, i) => (
              <div key={i} style={{ background: t.bgCard, borderRadius: 12, padding: "1rem 1.25rem", border: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: ".5rem" }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: ".88rem", color: t.text }}>{c.name}</p>
                  <p style={{ color: t.muted, fontSize: ".78rem", marginTop: ".15rem" }}>{c.org}{c.hours ? ` · ${c.hours}` : ""}</p>
                </div>
                <span style={{ background: t.accentSoft, color: t.accentText, fontSize: ".72rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6, whiteSpace: "nowrap" }}>{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="Contacto" style={{ padding: "5rem 0", background: t.bgAlt }}>
        <div className="container">
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <span className="label">Hablemos</span>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: t.text, margin: ".4rem 0 .75rem", lineHeight: 1.2 }}>¿Tienes un proyecto?</h2>
            <p style={{ color: t.muted, fontSize: ".93rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>Estoy disponible para proyectos freelance. Escríbeme y hablamos.</p>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }}>
                <div className="form-row">
                  <input className="input" placeholder="Tu nombre" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ background: t.bgCard, border: `1.5px solid ${t.border}`, color: t.text }} />
                  <input className="input" placeholder="Tu email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ background: t.bgCard, border: `1.5px solid ${t.border}`, color: t.text }} />
                </div>
                <textarea className="input" placeholder="Cuéntame sobre tu proyecto…" rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ background: t.bgCard, border: `1.5px solid ${t.border}`, color: t.text, resize: "vertical" }} />
                <button className="btn-p" onClick={handleSubmit} style={{ alignSelf: "flex-end" }}>Enviar mensaje →</button>
              </div>
            ) : (
              <div style={{ background: t.bgCard, borderRadius: 16, padding: "3rem", border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                <p style={{ fontWeight: 600, color: t.text, fontSize: "1.05rem" }}>¡Mensaje recibido!</p>
                <p style={{ color: t.muted, marginTop: ".5rem", fontSize: ".88rem" }}>Me pondré en contacto contigo pronto.</p>
              </div>
            )}
            <div className="contact-links">
              {[["📧", "alamsanchez05@gmail.com", "mailto:alamsanchez05@gmail.com"], ["📱", "829-927-3441", "tel:+18299273441"], ["🐙", "github.com/AlamRosario", "https://github.com/AlamRosario"]].map(([icon, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".4rem", color: t.muted, fontSize: ".82rem", transition: "color .2s" }}
                  onMouseOver={e => e.currentTarget.style.color = t.accent}
                  onMouseOut={e => e.currentTarget.style.color = t.muted}>
                  <span>{icon}</span><span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${t.border}`, padding: "1.75rem 1.25rem", textAlign: "center" }}>
        <p style={{ color: t.muted, fontSize: ".8rem" }}>© 2026 Alam Rosario · Diseñado y desarrollado con React</p>
      </footer>
    </div>
  );
}
