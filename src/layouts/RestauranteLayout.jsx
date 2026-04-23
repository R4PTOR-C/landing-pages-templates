import './RestauranteLayout.css'

const destaques = [
  { icon: '🥩', name: 'Picanha na Brasa', desc: 'Corte nobre grelhado no ponto certo, acompanhado de farofa artesanal e vinagrete.', price: 'R$ 98', tag: 'Chef indica' },
  { icon: '🦞', name: 'Risoto de Lagosta', desc: 'Arroz arbóreo cremoso com lagosta fresca, finalizado com manteiga trufada.', price: 'R$ 142', tag: 'Mais pedido' },
  { icon: '🐟', name: 'Peixe do Dia', desc: 'Seleção do chef conforme o frescor do mercado, preparado na hora.', price: 'R$ 76', tag: null },
  { icon: '🍮', name: 'Pudim de Brûlée', desc: 'Sobremesa da casa, receita exclusiva com caramelo artesanal e creme suave.', price: 'R$ 32', tag: 'Exclusivo' },
]

const depoimentos = [
  { text: 'Uma experiência gastronômica inesquecível. O ambiente, o serviço e a comida estão todos no mais alto nível.', name: 'Isabela Martins', role: 'Jantar de aniversário', initials: 'IM' },
  { text: 'Vim comemorar com a família e foi perfeito. A picanha é simplesmente a melhor que já comi na minha vida.', name: 'Paulo Henrique', role: 'Jantar em família', initials: 'PH' },
  { text: 'Voltarei sempre que puder. O atendimento é impecável e cada detalhe do cardápio surpreende positivamente.', name: 'Ana Carolina', role: 'Jantar romântico', initials: 'AC' },
]

export default function RestauranteLayout() {
  return (
    <div className="rst-root">

      {/* Nav */}
      <nav className="rst-nav">
        <div className="rst-container rst-nav-inner">
          <a href="#" className="rst-logo">
            <span className="rst-logo-icon">🍽️</span>
            <span>Casa<strong>Nobile</strong></span>
          </a>
          <ul className="rst-nav-links">
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#reserva">Reservas</a></li>
          </ul>
          <a href="#reserva" className="rst-btn rst-btn-primary">Reservar mesa</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="rst-hero">
        <div className="rst-hero-overlay" />
        <div className="rst-container rst-hero-content">
          <div className="rst-hero-tag">Aberto de terça a domingo, das 18h às 23h</div>
          <h1 className="rst-hero-title">
            Uma experiência<br />
            <span>gastronômica</span><br />
            única
          </h1>
          <p className="rst-hero-desc">
            Alta cozinha brasileira contemporânea, ingredientes selecionados e um ambiente que transforma cada refeição em memória afetiva.
          </p>
          <div className="rst-hero-actions">
            <a href="#reserva" className="rst-btn rst-btn-primary">Reservar mesa</a>
            <a href="#cardapio" className="rst-btn rst-btn-ghost">Ver cardápio</a>
          </div>
        </div>
      </section>

      {/* Destaque strip */}
      <div className="rst-strip">
        <div className="rst-container rst-strip-inner">
          <div className="rst-strip-item"><span>🏆</span> Melhor restaurante SP 2024</div>
          <div className="rst-strip-divider" />
          <div className="rst-strip-item"><span>👨‍🍳</span> Chef premiado internacionalmente</div>
          <div className="rst-strip-divider" />
          <div className="rst-strip-item"><span>🍷</span> Carta de vinhos com 200+ rótulos</div>
          <div className="rst-strip-divider" />
          <div className="rst-strip-item"><span>🌿</span> Ingredientes frescos e locais</div>
        </div>
      </div>

      {/* Cardápio */}
      <section className="rst-cardapio" id="cardapio">
        <div className="rst-container">
          <div className="rst-section-center">
            <div className="rst-section-label">Cardápio</div>
            <h2 className="rst-section-title">Destaques da casa</h2>
            <p className="rst-section-sub">
              Cada prato é uma composição cuidadosa entre técnica, sabor e memória.
            </p>
          </div>
          <div className="rst-cardapio-grid">
            {destaques.map((d) => (
              <div className="rst-prato-card" key={d.name}>
                <div className="rst-prato-img">
                  <span className="rst-prato-emoji">{d.icon}</span>
                  {d.tag && <span className="rst-prato-tag">{d.tag}</span>}
                </div>
                <div className="rst-prato-info">
                  <h3 className="rst-prato-name">{d.name}</h3>
                  <p className="rst-prato-desc">{d.desc}</p>
                  <div className="rst-prato-footer">
                    <span className="rst-prato-price">{d.price}</span>
                    <button className="rst-add-btn">Pedir</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rst-cardapio-cta">
            <a href="#" className="rst-btn rst-btn-outline">Ver cardápio completo →</a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="rst-sobre" id="sobre">
        <div className="rst-container rst-sobre-inner">
          <div className="rst-sobre-content">
            <div className="rst-section-label">Nossa história</div>
            <h2 className="rst-section-title">Cozinhamos com<br />alma desde 2009</h2>
            <p className="rst-sobre-text">
              O Casa Nobile nasceu do sonho do chef Eduardo Nobile de criar um espaço onde a gastronomia brasileira fosse celebrada em sua melhor forma.
              Com ingredientes locais e técnica refinada, cada prato conta uma história.
            </p>
            <p className="rst-sobre-text">
              Quinze anos depois, somos referência em alta cozinha em São Paulo, com um ambiente acolhedor, equipe apaixonada e uma cozinha que nunca para de evoluir.
            </p>
            <div className="rst-sobre-nums">
              <div><strong>15</strong><span>Anos de história</span></div>
              <div><strong>4.9★</strong><span>Avaliação média</span></div>
              <div><strong>40k+</strong><span>Clientes atendidos</span></div>
            </div>
          </div>
          <div className="rst-sobre-visual">
            <div className="rst-chef-card">
              <div className="rst-chef-icon">👨‍🍳</div>
              <div className="rst-chef-name">Chef Eduardo Nobile</div>
              <div className="rst-chef-sub">Fundador & Chef Executivo</div>
              <p className="rst-chef-bio">
                Formado pela Le Cordon Bleu Paris, com passagens por restaurantes estrelados na França e Itália. Desde 2009 à frente da cozinha do Casa Nobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="rst-depoimentos">
        <div className="rst-container">
          <div className="rst-section-center">
            <div className="rst-section-label">Experiências</div>
            <h2 className="rst-section-title">O que nossos clientes dizem</h2>
          </div>
          <div className="rst-depoimentos-grid">
            {depoimentos.map((d) => (
              <div className="rst-depoimento-card" key={d.name}>
                <div className="rst-stars">★★★★★</div>
                <p className="rst-depoimento-text">"{d.text}"</p>
                <div className="rst-depoimento-author">
                  <div className="rst-avatar">{d.initials}</div>
                  <div>
                    <div className="rst-author-name">{d.name}</div>
                    <div className="rst-author-role">{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserva */}
      <section className="rst-reserva" id="reserva">
        <div className="rst-container">
          <div className="rst-reserva-box">
            <div className="rst-reserva-content">
              <div className="rst-section-label">Reservas</div>
              <h2 className="rst-section-title">Reserve sua mesa</h2>
              <p className="rst-reserva-sub">
                Garanta seu lugar para uma noite especial. Reservas pelo WhatsApp ou telefone.
              </p>
              <div className="rst-reserva-actions">
                <a href="#" className="rst-btn rst-btn-primary">📱 WhatsApp</a>
                <a href="#" className="rst-btn rst-btn-ghost">📞 (11) 3333-4444</a>
              </div>
              <p className="rst-reserva-note">Funcionamos de terça a domingo • 18h às 23h</p>
            </div>
            <div className="rst-reserva-info">
              <div className="rst-info-item"><span>📍</span><div><strong>Endereço</strong><p>Rua Haddock Lobo, 1482 — Cerqueira César, São Paulo</p></div></div>
              <div className="rst-info-item"><span>🕐</span><div><strong>Horário</strong><p>Terça a domingo, das 18h às 23h</p></div></div>
              <div className="rst-info-item"><span>🚗</span><div><strong>Estacionamento</strong><p>Valet disponível a partir das 19h</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rst-footer">
        <div className="rst-container rst-footer-inner">
          <p className="rst-footer-copy">© 2026 Casa Nobile. Todos os direitos reservados.</p>
          <ul className="rst-footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Cardápio</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
