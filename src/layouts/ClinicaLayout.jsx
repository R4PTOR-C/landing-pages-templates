import './ClinicaLayout.css'

const especialidades = [
  { icon: '🫀', name: 'Cardiologia', desc: 'Prevenção e tratamento de doenças cardiovasculares com tecnologia de ponta.' },
  { icon: '🧠', name: 'Neurologia', desc: 'Diagnóstico e acompanhamento de distúrbios neurológicos e cognitivos.' },
  { icon: '🦴', name: 'Ortopedia', desc: 'Saúde do sistema musculoesquelético, cirurgias minimamente invasivas.' },
  { icon: '👁️', name: 'Oftalmologia', desc: 'Saúde ocular completa, consultas, exames e cirurgias a laser.' },
  { icon: '🌙', name: 'Psiquiatria', desc: 'Saúde mental com escuta qualificada, diagnóstico e tratamento integrado.' },
  { icon: '🔬', name: 'Oncologia', desc: 'Diagnóstico precoce e tratamento multidisciplinar de câncer.' },
]

const equipe = [
  { icon: '👩‍⚕️', name: 'Dra. Ana Beatriz Silva', esp: 'Cardiologista • CRM 12345', exp: '16 anos de experiência' },
  { icon: '👨‍⚕️', name: 'Dr. Carlos Eduardo Lima', esp: 'Neurologista • CRM 54321', exp: '20 anos de experiência' },
  { icon: '👩‍⚕️', name: 'Dra. Marina Oliveira', esp: 'Ortopedista • CRM 98765', exp: '12 anos de experiência' },
]

const passos = [
  { num: '01', title: 'Agende online', desc: 'Marque sua consulta pelo site ou telefone em menos de 2 minutos.' },
  { num: '02', title: 'Consulta & Exames', desc: 'Atendimento personalizado com os melhores profissionais da área.' },
  { num: '03', title: 'Acompanhamento', desc: 'Plano de tratamento e acompanhamento contínuo da sua saúde.' },
]

const depoimentos = [
  { text: 'O atendimento aqui é diferente. Os médicos realmente escutam e explicam tudo com paciência. Me sinto segura em cada consulta.', name: 'Sandra Melo', role: 'Paciente de Cardiologia', initials: 'SM' },
  { text: 'Excelente estrutura, equipe competente e resultado do exame rápido. Recomendo para toda a família.', name: 'Marcos Vieira', role: 'Paciente de Ortopedia', initials: 'MV' },
  { text: 'A Dra. Marina é uma profissional extraordinária. O cuidado e a atenção ao paciente são exemplares.', name: 'Lúcia Torres', role: 'Paciente de Ortopedia', initials: 'LT' },
]

export default function ClinicaLayout() {
  return (
    <div className="cl-root">

      {/* Nav */}
      <nav className="cl-nav">
        <div className="cl-container cl-nav-inner">
          <a href="#" className="cl-logo">
            <span className="cl-logo-icon">🏥</span>
            <span>Clínica<strong>Vida</strong></span>
          </a>
          <ul className="cl-nav-links">
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#convenios">Convênios</a></li>
          </ul>
          <a href="#agendar" className="cl-btn cl-btn-primary">Agendar consulta</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="cl-hero">
        <div className="cl-container cl-hero-inner">
          <div className="cl-hero-content">
            <div className="cl-hero-tag">Saúde de qualidade para toda a família</div>
            <h1 className="cl-hero-title">
              Sua saúde em<br />
              <span>primeiro lugar,</span><br />
              sempre
            </h1>
            <p className="cl-hero-desc">
              Especialistas dedicados, tecnologia avançada e atendimento humanizado. Cuidamos de você do diagnóstico ao tratamento.
            </p>
            <div className="cl-hero-actions">
              <a href="#agendar" className="cl-btn cl-btn-primary">Agendar consulta</a>
              <a href="#especialidades" className="cl-btn cl-btn-ghost">Ver especialidades</a>
            </div>
            <div className="cl-hero-trust">
              <div className="cl-trust-item"><span>✓</span> Aceita mais de 30 convênios</div>
              <div className="cl-trust-item"><span>✓</span> Resultados online em 24h</div>
              <div className="cl-trust-item"><span>✓</span> Atendimento de urgência</div>
            </div>
          </div>
          <div className="cl-hero-visual">
            <div className="cl-stats-card">
              <div className="cl-stats-header">Indicadores de qualidade</div>
              {[
                { label: 'Satisfação dos pacientes', val: '98%', width: '98%' },
                { label: 'Consultas realizadas', val: '50k+', width: '85%' },
                { label: 'Médicos especialistas', val: '32', width: '70%' },
              ].map((s) => (
                <div className="cl-stat-row" key={s.label}>
                  <div className="cl-stat-meta">
                    <span>{s.label}</span><span>{s.val}</span>
                  </div>
                  <div className="cl-stat-bar"><div className="cl-stat-fill" style={{ width: s.width }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <div className="cl-numbers">
        <div className="cl-container cl-numbers-grid">
          {[
            { val: '14+', label: 'Anos de atividade' },
            { val: '32', label: 'Especialistas' },
            { val: '50k+', label: 'Pacientes atendidos' },
            { val: '30+', label: 'Convênios aceitos' },
          ].map((n) => (
            <div className="cl-number-item" key={n.label}>
              <span className="cl-number-val">{n.val}</span>
              <span className="cl-number-label">{n.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Especialidades */}
      <section className="cl-especialidades" id="especialidades">
        <div className="cl-container">
          <div className="cl-section-center">
            <div className="cl-section-label">Especialidades</div>
            <h2 className="cl-section-title">Cuidado integral com a sua saúde</h2>
            <p className="cl-section-sub">
              Nossa equipe multidisciplinar está preparada para oferecer o melhor cuidado em todas as áreas.
            </p>
          </div>
          <div className="cl-esp-grid">
            {especialidades.map((e) => (
              <div className="cl-esp-card" key={e.name}>
                <div className="cl-esp-icon">{e.icon}</div>
                <h3>{e.name}</h3>
                <p>{e.desc}</p>
                <a href="#agendar" className="cl-esp-link">Agendar →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="cl-processo">
        <div className="cl-container">
          <div className="cl-section-center">
            <div className="cl-section-label">Como funciona</div>
            <h2 className="cl-section-title">Simples, rápido e seguro</h2>
          </div>
          <div className="cl-passos-grid">
            {passos.map((p, i) => (
              <div className="cl-passo" key={p.num}>
                <div className="cl-passo-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < passos.length - 1 && <div className="cl-passo-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="cl-equipe" id="equipe">
        <div className="cl-container">
          <div className="cl-section-center">
            <div className="cl-section-label">Nossa equipe</div>
            <h2 className="cl-section-title">Especialistas comprometidos com você</h2>
          </div>
          <div className="cl-equipe-grid">
            {equipe.map((m) => (
              <div className="cl-medico-card" key={m.name}>
                <div className="cl-medico-avatar">{m.icon}</div>
                <div className="cl-medico-name">{m.name}</div>
                <div className="cl-medico-esp">{m.esp}</div>
                <div className="cl-medico-exp">{m.exp}</div>
                <a href="#agendar" className="cl-btn cl-btn-outline" style={{ marginTop: '16px', fontSize: '0.82rem', padding: '9px 18px' }}>
                  Agendar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="cl-depoimentos">
        <div className="cl-container">
          <div className="cl-section-center">
            <div className="cl-section-label">Depoimentos</div>
            <h2 className="cl-section-title">A saúde de quem confia em nós</h2>
          </div>
          <div className="cl-depoimentos-grid">
            {depoimentos.map((d) => (
              <div className="cl-depoimento-card" key={d.name}>
                <div className="cl-depoimento-stars">★★★★★</div>
                <p className="cl-depoimento-text">"{d.text}"</p>
                <div className="cl-depoimento-author">
                  <div className="cl-avatar">{d.initials}</div>
                  <div>
                    <div className="cl-author-name">{d.name}</div>
                    <div className="cl-author-role">{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento */}
      <section className="cl-agendar" id="agendar">
        <div className="cl-container">
          <div className="cl-agendar-box">
            <div className="cl-agendar-icon">🏥</div>
            <div className="cl-section-label">Agendamento</div>
            <h2 className="cl-section-title">Cuide da sua saúde hoje</h2>
            <p className="cl-agendar-sub">
              Agende sua consulta em minutos. Aceitamos mais de 30 convênios e atendemos também particulares.
            </p>
            <div className="cl-agendar-actions">
              <a href="#" className="cl-btn cl-btn-primary">Agendar online</a>
              <a href="#" className="cl-btn cl-btn-ghost">📞 (11) 5555-7777</a>
            </div>
            <div className="cl-convenios-strip">
              {['Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Notre Dame', '+25'].map((c) => (
                <span className="cl-convenio-chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cl-footer">
        <div className="cl-container cl-footer-inner">
          <p className="cl-footer-copy">© 2026 Clínica Vida. Todos os direitos reservados.</p>
          <ul className="cl-footer-links">
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
