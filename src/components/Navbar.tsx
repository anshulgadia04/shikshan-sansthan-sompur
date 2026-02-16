import { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'classes', label: t('nav.classes') },
    { id: 'library', label: t('nav.library') },
    { id: 'features', label: t('nav.features') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-[#E5E0D8] z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            className="flex items-center text-left group "
            onClick={() => handleClick('home')}
            aria-label={t('nav.home')}
          >
            <img
              src="/logo.webp"
              alt={t('hero.title')}
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              className="h-20 w-auto mr-3"
            />
            <h1 className="text-sm md:text-xl font-bold text-[#4E342E] group-hover:opacity-90 transition-opacity">
              {t('hero.title')}
            </h1>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#4E342E] text-[#F5EFE6]'
                    : 'text-[#4E342E] hover:bg-[#D7C7A1]'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-4 py-2 rounded-lg text-sm lg:text-base font-medium bg-[#6F4E37] text-[#F5EFE6] hover:bg-[#4E342E] transition-all duration-300 flex items-center gap-2"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Languages size={18} />
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-[#6F4E37] text-[#F5EFE6] hover:bg-[#4E342E] transition-colors"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Languages size={20} />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#4E342E] hover:bg-[#F5EFE6] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E0D8]">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-[#4E342E] text-[#F5EFE6]'
                    : 'text-[#4E342E] hover:bg-[#D7C7A1]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
