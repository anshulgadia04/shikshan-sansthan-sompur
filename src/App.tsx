import { useState, useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';

// Lazy load sections that are not immediately visible
const About = lazy(() => import('./sections/About'));
const Classes = lazy(() => import('./sections/Classes'));
const Library = lazy(() => import('./sections/Library'));
const Features = lazy(() => import('./sections/Features'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-[#4E342E] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const handleEnquireNow = () => {
    setActiveSection('contact');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F5EFE6]">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
        <AdmissionModal onEnquireNow={handleEnquireNow} />

        <main className="pt-20">
          <div id="home">
            <Hero onNavigate={setActiveSection} />
            <Highlights />
          </div>

          <Suspense fallback={<SectionLoader />}>
            <div id="about">
              <About />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div id="classes">
              <Classes />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div id="library">
              <Library />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div id="features">
              <Features />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div id="gallery">
              <Gallery />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div id="contact">
              <Contact />
            </div>
          </Suspense>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
