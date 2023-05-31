import React from 'react';

// import components
import Header from "./components/Header"
import Hero from "./components/Hero"
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SobreMi />
      <Habilidades />
      <Portfolio />
      <Contacto />
      <Footer />
    </div>

  );
};

export default App;
