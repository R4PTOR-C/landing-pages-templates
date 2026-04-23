import './LayoutSwitcher.css'

const layouts = [
  { id: 'ecommerce',  label: 'Loja',        icon: '🛒' },
  { id: 'advocacia',  label: 'Advocacia',   icon: '⚖️' },
  { id: 'restaurante',label: 'Restaurante', icon: '🍽️' },
  { id: 'clinica',    label: 'Clínica',     icon: '🏥' },
]

export default function LayoutSwitcher({ current, onChange }) {
  return (
    <div className="ls-panel">
      <span className="ls-heading">Layouts</span>
      {layouts.map((l) => (
        <button
          key={l.id}
          className={`ls-btn${current === l.id ? ' ls-active' : ''}`}
          onClick={() => onChange(l.id)}
          title={l.label}
        >
          <span className="ls-icon">{l.icon}</span>
          <span className="ls-label">{l.label}</span>
        </button>
      ))}
    </div>
  )
}
