import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'होम' },
    { id: 'about', label: 'हमारे बारे में' },
    { id: 'classes', label: 'कक्षाएँ' },
    { id: 'library', label: 'पुस्तकालय कॉर्नर' },
    { id: 'features', label: 'विद्यालय की विशेषताएँ' },
    { id: 'gallery', label: 'गैलरी' },
    { id: 'contact', label: 'संपर्क करें' },
  ];

  const handleClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-[#E5E0D8] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            className="flex items-center group"
            onClick={() => handleClick('home')}
            aria-label="होम"
          >
            <img
              src="/logo.png"
              alt="संस्कार शिक्षण संस्थान लोगो"
              className="h-20 w-auto mr-3"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-[#4E342E] group-hover:opacity-90 transition-opacity">
              संस्कार शिक्षण संस्थान
            </h1>
          </button>

          <div className="hidden md:flex space-x-1">
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
          </div>

          <div className="md:hidden">
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
