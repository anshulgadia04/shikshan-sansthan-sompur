import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import About from './sections/About';
import Classes from './sections/Classes';
import Library from './sections/Library';
import Features from './sections/Features';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5EFE6]">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="pt-20">
          <div id="home">
            <Hero onNavigate={setActiveSection} />
            <Highlights />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="classes">
            <Classes />
          </div>

          <div id="library">
            <Library />
          </div>

          <div id="features">
            <Features />
          </div>

          <div id="gallery">
            <Gallery />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
