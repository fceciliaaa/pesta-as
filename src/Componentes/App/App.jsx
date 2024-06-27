import { useState } from 'react'
import './App.css'
import Pestañas from '../Pestañas/Pestañas'


const App = () => {
  const elementos = [
    { numero: 'Pestaña 1 ', mensaje: 'Esta es la pestaña 1', funcionDePestaña: () => alert('Haz seleccionado la Pestaña 1') },
    { numero: 'Pestaña 2 ', mensaje: 'Esta es la pestaña 2' },
    { numero: 'Pestaña 3 ', mensaje: 'Esta es la pestaña 3' }
  ]

  return (
    <>
      <Pestañas elementos={elementos} />
    </>
  )
}

export default App
