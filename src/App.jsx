import { useState } from 'react'
import LayoutSwitcher from './components/LayoutSwitcher'
import EcommerceLayout from './layouts/EcommerceLayout'
import AdvocaciaLayout from './layouts/AdvocaciaLayout'
import RestauranteLayout from './layouts/RestauranteLayout'
import ClinicaLayout from './layouts/ClinicaLayout'

const layouts = {
  ecommerce: EcommerceLayout,
  advocacia: AdvocaciaLayout,
  restaurante: RestauranteLayout,
  clinica: ClinicaLayout,
}

export default function App() {
  const [current, setCurrent] = useState('ecommerce')
  const Layout = layouts[current]

  return (
    <>
      <Layout />
      <LayoutSwitcher current={current} onChange={setCurrent} />
    </>
  )
}
