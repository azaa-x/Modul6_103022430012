import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const element1 = <h1>Kantin Nasywa</h1>;
  //const element2 = <p>{time < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>;
  const element2 = <p>Selamat Pagi</p>;
  const element3 = <p>Saldo awal kartu kantin: Rp12.000</p>;

  return (
    <>
      <div classname="App">
        {element1}
        {element2}
        {element3}
        <button disabled={true}>Bayar</button>
      </div>

      <div>
        <KartuMenu menu ="Nasi Goreng" nama="Ani" harga="10000" kategori="Makanan" />
        <KartuMenu menu ="Ayam Geprek" nama="Budi" harga="15000" kategori="Makanan" />
      </div>
    </>
  );
}

export default App;
