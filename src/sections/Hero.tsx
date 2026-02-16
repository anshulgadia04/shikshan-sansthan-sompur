import { BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[#4E342E]"
      style={{ backgroundImage: "url('/gallery-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark maroon overlay to match screenshot tint */}
      <div className="absolute inset-0 bg-[#4E342E]/50" />
      {/* Image-based gradient overlay with low opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/overlay.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4E342E]/70 via-[#4E342E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="mb-8 flex justify-center">
          <img 
            className='w-20' 
            src='./homeHandBg.webp'
            alt="School Logo"
            width="80"
            height="80"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
          {t('hero.title')}
        </h1>

        <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-[#D7C7A1]   font-extrabold tracking-widest">
          {t('hero.location')}
        </p>

        {/* First Batch Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B6F47]/90 to-[#6F4E37]/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-[#D7C7A1]/50 transform hover:scale-105 transition-all duration-300">
            <Award className="w-5 h-5 text-[#F5EFE6]" />
            <span className="text-sm sm:text-base md:text-lg font-bold text-[#F5EFE6] tracking-wide">
              {t('hero.firstBatch')}
            </span>
            <Award className="w-5 h-5 text-[#F5EFE6]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-1 w-16 bg-[#D7C7A1] rounded"></div>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-shadow">
            {t('hero.tagline')}
          </p>
          <div className="h-1 w-16 bg-[#D7C7A1] rounded"></div>
        </div>

        <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-[#F5EFE6]">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-[#F5EFE6] text-[#4E342E] rounded-full font-semibold text-lg hover:bg-[#D7C7A1] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <BookOpen size={24} />
            {t('hero.cta.contact')}
          </button>
        </div>
      </div>

      {/* Decorative diamond star bottom-right */}
      {/* <div className="absolute bottom-8 right-8 w-5 h-5 bg-[#D7C7A1] rotate-45 rounded-sm opacity-90" /> */}

      {/* Curved separator at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0,0 L0,80 Q300,120 600,80 T1200,80 L1200,0 Z" fill="#F5EFE6"></path>
        </svg>
      </div> */}
    </section>
  );
}
