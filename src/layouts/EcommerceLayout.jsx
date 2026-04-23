import './EcommerceLayout.css'

const categories = ['Todos', 'Roupas', 'Eletrônicos', 'Casa & Deco', 'Esportes', 'Beleza']

const products = [
  { icon: '👟', name: 'Tênis Urban Pro', sub: 'Moda', price: 'R$ 289', old: 'R$ 399', disc: '28%' },
  { icon: '🎧', name: 'Fone Bluetooth X1', sub: 'Eletrônicos', price: 'R$ 179', old: 'R$ 249', disc: '28%' },
  { icon: '🧥', name: 'Jaqueta Oversize', sub: 'Roupas', price: 'R$ 219', old: null, disc: null },
  { icon: '⌚', name: 'Smartwatch S5', sub: 'Eletrônicos', price: 'R$ 449', old: 'R$ 599', disc: '25%' },
]

const testimonials = [
  { text: 'Comprei o fone e chegou em 2 dias. Qualidade incrível pelo preço, não esperava tanto.', name: 'Lucas Ferreira', role: 'Cliente verificado', initials: 'LF' },
  { text: 'Minha segunda compra aqui. Sempre entrega no prazo e a qualidade dos produtos é excelente.', name: 'Camila Souza', role: 'Cliente VIP', initials: 'CS' },
  { text: 'O tênis chegou perfeito, material top. Com certeza vou indicar para todo mundo.', name: 'Rafael Lima', role: 'Cliente verificado', initials: 'RL' },
]

export default function EcommerceLayout() {
  return (
    <div className="ec-root">

      {/* Nav */}
      <nav className="ec-nav">
        <div className="ec-container ec-nav-inner">
          <a href="#" className="ec-logo">shop<span>.</span>now</a>
          <ul className="ec-nav-links">
            <li><a href="#">Novidades</a></li>
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Marcas</a></li>
          </ul>
          <div className="ec-nav-actions">
            <a href="#" className="ec-icon-btn" title="Buscar">🔍</a>
            <a href="#" className="ec-cart-btn">🛒 <span>Carrinho (0)</span></a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="ec-hero">
        <div className="ec-container ec-hero-inner">
          <div className="ec-hero-content">
            <div className="ec-badge">🔥 Nova Coleção</div>
            <h1 className="ec-hero-title">
              Estilo que<br /><span>encaixa na sua</span><br />vida
            </h1>
            <p className="ec-hero-desc">
              Os melhores produtos, das melhores marcas. Frete grátis acima de R$ 199 e devolução sem burocracia.
            </p>
            <div className="ec-hero-actions">
              <a href="#products" className="ec-btn ec-btn-primary">Ver coleção</a>
              <a href="#" className="ec-btn ec-btn-outline">Ver promoções</a>
            </div>
            <div className="ec-hero-stats">
              <div><strong>+12k</strong><span>Produtos</span></div>
              <div className="ec-stat-divider" />
              <div><strong>98%</strong><span>Satisfação</span></div>
              <div className="ec-stat-divider" />
              <div><strong>24h</strong><span>Entrega</span></div>
            </div>
          </div>
          <div className="ec-hero-visual">
            {products.map((p) => (
              <div className="ec-product-thumb" key={p.name}>
                {p.disc && <span className="ec-disc-badge">-{p.disc}</span>}
                <span className="ec-thumb-icon">{p.icon}</span>
                <span className="ec-thumb-label">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="ec-categories">
        <div className="ec-container">
          <div className="ec-cat-strip">
            {categories.map((c, i) => (
              <button key={c} className={`ec-cat-chip${i === 0 ? ' ec-cat-active' : ''}`}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="ec-products" id="products">
        <div className="ec-container">
          <div className="ec-section-header">
            <div>
              <div className="ec-section-label">Em destaque</div>
              <h2 className="ec-section-title">Mais vendidos</h2>
            </div>
            <a href="#" className="ec-see-all">Ver todos →</a>
          </div>
          <div className="ec-products-grid">
            {products.map((p) => (
              <div className="ec-product-card" key={p.name}>
                <div className="ec-product-img">{p.icon}</div>
                <div className="ec-product-info">
                  <div className="ec-product-name">{p.name}</div>
                  <div className="ec-product-sub">{p.sub}</div>
                  <div className="ec-product-pricing">
                    <span>
                      <span className="ec-price">{p.price}</span>
                      {p.old && <span className="ec-old-price">{p.old}</span>}
                    </span>
                    <button className="ec-add-btn">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="ec-container">
        <div className="ec-promo-banner">
          <div>
            <div className="ec-promo-tag">Oferta limitada</div>
            <h2 className="ec-promo-title">Semana de<br />liquidação total</h2>
            <p className="ec-promo-sub">Produtos selecionados com até 60% de desconto. Só até domingo.</p>
            <a href="#" className="ec-btn ec-btn-primary" style={{ marginTop: '24px' }}>Aproveitar agora</a>
          </div>
          <div className="ec-promo-num">60%</div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="ec-testimonials">
        <div className="ec-container">
          <div className="ec-section-center">
            <div className="ec-section-label">Avaliações</div>
            <h2 className="ec-section-title">Quem comprou, aprovou</h2>
          </div>
          <div className="ec-testimonials-grid">
            {testimonials.map((t) => (
              <div className="ec-testimonial-card" key={t.name}>
                <div className="ec-stars">★★★★★</div>
                <p className="ec-testimonial-text">"{t.text}"</p>
                <div className="ec-testimonial-author">
                  <div className="ec-avatar">{t.initials}</div>
                  <div>
                    <div className="ec-author-name">{t.name}</div>
                    <div className="ec-author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ec-footer">
        <div className="ec-container ec-footer-inner">
          <p className="ec-footer-copy">© 2026 shop.now — Todos os direitos reservados.</p>
          <ul className="ec-footer-links">
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
