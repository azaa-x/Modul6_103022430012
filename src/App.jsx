import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const element1 = <h1>Kantin Nasywa</h1>;
  const element2 = <p>Selamat <Pagi></Pagi></p>;
  const element3 = <p>Saldo awal kartu kantin: Rp12.000</p>;

  return (
    <>
     <div classname="App">
      {element1}
      {element2}
      {element3}
      <button disabled={true}>Bayar</button>
     </div>
    </>
  )
}

export default App
