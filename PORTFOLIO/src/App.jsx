import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
