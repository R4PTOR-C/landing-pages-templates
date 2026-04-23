import './AdvocaciaLayout.css'

const areas = [
  { icon: '💼', title: 'Direito Trabalhista', desc: 'Demissões, rescisões, horas extras, assédio moral e todas as relações trabalhistas.' },
  { icon: '🏛️', title: 'Direito Civil', desc: 'Contratos, responsabilidade civil, indenizações e questões patrimoniais.' },
  { icon: '👨‍👩‍👧', title: 'Direito de Família', desc: 'Divórcio, guarda, pensão alimentícia, inventário e herança.' },
  { icon: '🏢', title: 'Direito Empresarial', desc: 'Abertura de empresas, contratos societários, fusões e recuperação judicial.' },
  { icon: '⚖️', title: 'Direito Penal', desc: 'Defesa criminal, habeas corpus, recursos e acompanhamento processual.' },
  { icon: '📋', title: 'Direito Previdenciário', desc: 'Aposentadoria, benefícios por incapacidade, revisão de benefícios do INSS.' },
]

const diferenciais = [
  { num: '18+', label: 'Anos de experiência' },
  { num: '2.400+', label: 'Casos resolvidos' },
  { num: '97%', label: 'Taxa de êxito' },
  { num: '5.000+', label: 'Clientes atendidos' },
]

const testimonials = [
  { text: 'O escritório cuidou do meu processo trabalhista com total dedicação. Ganhei a causa e fui tratado com respeito do começo ao fim.', name: 'Roberto Alves', role: 'Processo Trabalhista', initials: 'RA' },
  { text: 'Precisei de orientação urgente sobre um contrato empresarial. Em menos de 24h já tinha uma análise completa e segura.', name: 'Fernanda Costa', role: 'Direito Empresarial', initials: 'FC' },
  { text: 'A resolução do inventário que parecia impossível foi conduzida com muita competência. Muito satisfeita com o resultado.', name: 'Maria Helena', role: 'Direito de Família', initials: 'MH' },
]

export default function AdvocaciaLayout() {
  return (
    <div className="adv-root">

      {/* Nav */}
      <nav className="adv-nav">
        <div className="adv-container adv-nav-inner">
          <a href="#" className="adv-logo">
            <span className="adv-logo-icon">⚖️</span>
            <span>Ferreira<strong>&amp; Associados</strong></span>
          </a>
          <ul className="adv-nav-links">
            <li><a href="#areas">Áreas de Atuação</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
          </ul>
          <a href="#cta" className="adv-btn adv-btn-primary">Consulta gratuita</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="adv-hero">
        <div className="adv-container">
          <div className="adv-hero-inner">
            <div className="adv-hero-content">
              <div className="adv-hero-tag">Advocacia especializada há 18 anos</div>
              <h1 className="adv-hero-title">
                Defendemos seus direitos<br />
                <span>com excelência</span><br />
                e dedicação
              </h1>
              <p className="adv-hero-desc">
                Atuamos em todas as instâncias com estratégia, ética e comprometimento absoluto com o resultado do seu caso.
              </p>
              <div className="adv-hero-actions">
                <a href="#cta" className="adv-btn adv-btn-primary">Consulta gratuita</a>
                <a href="#areas" className="adv-btn adv-btn-ghost">Nossas áreas</a>
              </div>
            </div>
            <div className="adv-hero-card">
              <div className="adv-hero-card-inner">
                <div className="adv-card-icon">⚖️</div>
                <h3>Seu caso merece atenção especializada</h3>
                <p>Agende uma consulta confidencial e gratuita com um de nossos advogados.</p>
                <div className="adv-card-item"><span>✓</span> Análise completa do seu caso</div>
                <div className="adv-card-item"><span>✓</span> Orientação sem compromisso</div>
                <div className="adv-card-item"><span>✓</span> Sigilo absoluto garantido</div>
                <a href="#cta" className="adv-btn adv-btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <div className="adv-numbers">
        <div className="adv-container adv-numbers-grid">
          {diferenciais.map((d) => (
            <div className="adv-number-item" key={d.label}>
              <span className="adv-number-val">{d.num}</span>
              <span className="adv-number-label">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Areas */}
      <section className="adv-areas" id="areas">
        <div className="adv-container">
          <div className="adv-section-center">
            <div className="adv-section-label">Atuação</div>
            <h2 className="adv-section-title">Áreas de Especialização</h2>
            <p className="adv-section-sub">Equipe multidisciplinar pronta para atender todas as suas demandas jurídicas.</p>
          </div>
          <div className="adv-areas-grid">
            {areas.map((a) => (
              <div className="adv-area-card" key={a.title}>
                <div className="adv-area-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="adv-sobre" id="sobre">
        <div className="adv-container adv-sobre-inner">
          <div className="adv-sobre-visual">
            <div className="adv-sobre-img-placeholder">
              <span>🏛️</span>
              <p>Escritório Ferreira &amp; Associados</p>
            </div>
          </div>
          <div className="adv-sobre-content">
            <div className="adv-section-label">Sobre o escritório</div>
            <h2 className="adv-section-title">Tradição, rigor técnico e resultados</h2>
            <p className="adv-sobre-text">
              Fundado em 2006, o escritório Ferreira &amp; Associados consolidou-se como referência em advocacia no estado,
              reunindo profissionais experientes, formados pelas melhores faculdades do país.
            </p>
            <p className="adv-sobre-text">
              Nossa metodologia combina profundo conhecimento técnico com uma abordagem humanizada,
              garantindo que cada cliente receba atenção personalizada e estratégias jurídicas sob medida.
            </p>
            <div className="adv-sobre-badges">
              <span className="adv-badge">OAB SP</span>
              <span className="adv-badge">ISO 9001</span>
              <span className="adv-badge">AASP</span>
              <span className="adv-badge">IBDFAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="adv-testimonials" id="testimonials">
        <div className="adv-container">
          <div className="adv-section-center">
            <div className="adv-section-label">Depoimentos</div>
            <h2 className="adv-section-title">O que dizem nossos clientes</h2>
          </div>
          <div className="adv-testimonials-grid">
            {testimonials.map((t) => (
              <div className="adv-testimonial-card" key={t.name}>
                <div className="adv-quote">"</div>
                <p className="adv-testimonial-text">{t.text}</p>
                <div className="adv-testimonial-author">
                  <div className="adv-avatar">{t.initials}</div>
                  <div>
                    <div className="adv-author-name">{t.name}</div>
                    <div className="adv-author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="adv-cta" id="cta">
        <div className="adv-container">
          <div className="adv-cta-box">
            <div className="adv-cta-icon">⚖️</div>
            <div className="adv-section-label">Consulta gratuita</div>
            <h2 className="adv-section-title">Seu problema jurídico<br />tem solução</h2>
            <p className="adv-cta-sub">
              Entre em contato agora. Nossa equipe está disponível para uma primeira análise sem custo.
            </p>
            <div className="adv-cta-actions">
              <a href="#" className="adv-btn adv-btn-primary">Agendar consulta</a>
              <a href="#" className="adv-btn adv-btn-ghost">📞 (11) 9999-0000</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="adv-footer">
        <div className="adv-container adv-footer-inner">
          <p className="adv-footer-copy">© 2026 Ferreira &amp; Associados Advocacia. Todos os direitos reservados.</p>
          <ul className="adv-footer-links">
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
