import "./globals.css";

const PHONE_DISPLAY = "(809) 788-6848";
const PHONE_TEL = "tel:+18097886848";
const WHATSAPP = "https://wa.me/18097886848";
const EMAIL = "dmiriansalon@gmail.com";
const ADDRESS = "Carretera Mella No. 3, Km. 5 1/2, La Milagrosa, Santo Domingo, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=D%27%20Mirian%20Sal%C3%B3n%2C%20Carretera%20Mella%20No.%203%2C%20Km.%205%201/2%2C%20La%20Milagrosa%2C%20Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana&output=embed";

const HERO_IMG = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "✂️",
    title: "Corte de cabello",
    text: "Cortes para damas en todos los largos y estilos, con el acabado que buscas.",
  },
  {
    icon: "🎨",
    title: "Color y mechas",
    text: "Tintes, mechas y retoques con productos que protegen tu cabello.",
  },
  {
    icon: "💇‍♀️",
    title: "Peinados",
    text: "Peinados para el día a día y para ocasiones especiales: fiestas, bodas y eventos.",
  },
  {
    icon: "✨",
    title: "Tratamientos capilares",
    text: "Hidratación, keratina y reparadores para devolverle vida a tu pelo.",
  },
  {
    icon: "💅",
    title: "Manicure y pedicure",
    text: "Cuidado completo de manos y pies con acabado profesional.",
  },
  {
    icon: "👰",
    title: "Paquetes para eventos",
    text: "Arreglos completos para novias, quinceañeras y graduaciones.",
  }
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">💇‍♀️</span>
            <span className="brand-name">
              D' Mirian Salón
              <small>Salón de belleza</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Agendar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">💇‍♀️ Salón de belleza en Carretera Mella</span>
              <h1>
                Tu estilo, cuidado <span>por profesionales</span>
              </h1>
              <p className="lead">Peluquería y belleza en la Carretera Mella, Santo Domingo. Corte, color, peinados y más: un servicio de calidad cerca de ti, pensado para que salgas feliz con el resultado.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Agendar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 (809) 788-6848
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Km. 5 1/2</strong>
                  Santo Domingo, D.N.
                </div>
                <div>
                  <strong>🕘 Agenda tu cita por WhatsApp</strong>
                  Escríbenos para reservar
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Lista para tu cambio de look?</h2>
              <p>Escríbenos por WhatsApp y agenda tu cita: te atendemos con gusto y sin compromiso.</p>
              <ul className="hours-list">
                              <li>
                <span>Horario</span>
                <span>Consúltalo por WhatsApp</span>
              </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Agendar mi cita
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Todo para tu belleza</h2>
              <p>Servicios de salón completos para el cuidado de tu cabello y tu imagen.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Belleza de calidad en La Milagrosa</h2>
              <p>D' Mirian Salón es un salón de belleza ubicado en la Carretera Mella, Km. 5 1/2, sector La Milagrosa, Santo Domingo, especializado en el cuidado del cabello y la imagen de sus clientas.</p>
              <p>Nuestro compromiso es simple: que cada clienta salga del salón sintiéndose más hermosa y segura, con un servicio amable y precios justos.</p>
              <ul className="about-points">
                              <li>
                <span className="tick">✓</span>
                <span><strong>Cerca de ti:</strong> ubicados en la Carretera Mella, fácil de llegar.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Precios justos:</strong> calidad de salón sin pagar de más.</span>
              </li>
                              <li>
                <span className="tick">✓</span>
                <span><strong>Cita por WhatsApp:</strong> agenda en minutos, sin vueltas.</span>
              </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Salón de belleza D' Mirian Salón" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="D' Mirian Salón — galería" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>Consúltalo por WhatsApp — agenda tu cita por WhatsApp al (809) 788-6848.</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en Carretera Mella No. 3, Km. 5 1/2, La Milagrosa. Abre el mapa para ver la ruta
                    desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — D' Mirian Salón"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Agenda hoy mismo</h2>
              <p>
                Escríbenos por WhatsApp, llámanos o envíanos un correo: te
                atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">(809) 788-6848</div>
                <div className="hint">Agenda tu cita aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">(809) 788-6848</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <div className="label">Correo</div>
                <div className="value" style={{ fontSize: "0.95rem", wordBreak: "break-all" }}>{EMAIL}</div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>D' Mirian Salón</strong>
              {ADDRESS}
              <br />
              Tel. (809) 788-6848
            </div>
            <div>
              <strong>Horario</strong>
              Consúltalo por WhatsApp
              <br />
              <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>{EMAIL}</a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los servicios mostrados son categorías generales y pueden ajustarse
            a la oferta real del negocio.
          </p>
        </div>
      </footer>
    </>
  );
}
