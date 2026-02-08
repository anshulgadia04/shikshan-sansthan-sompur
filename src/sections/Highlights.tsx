import { Users, Award, Bus, Shield, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Highlights() {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<number | null>(null);
  
  const highlights = [
    {
      icon: Users,
      title: t('highlights.nursery.title'),
      description: t('highlights.nursery.desc'),
    },
    {
      icon: Award,
      title: t('highlights.teachers.title'),
      description: t('highlights.teachers.desc'),
    },
    {
      icon: Bus,
      title: t('highlights.bus.title'),
      description: t('highlights.bus.desc'),
    },
    {
      icon: Shield,
      title: t('highlights.cctv.title'),
      description: t('highlights.cctv.desc'),
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-28 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E]">
            {t('highlights.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="relative h-full animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setOpenModal(index)}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl pt-12 pb-8 px-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border-2 border-[#D8C08C] hover:shadow-[0_16px_40px_rgba(111,78,55,0.15)] hover:border-[#B8A87C] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out h-full min-h-[180px] flex flex-col cursor-pointer">
                {/* Top badge (overlapping circle) */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#6F4E37] to-[#3E2A22] shadow-[0_6px_16px_rgba(0,0,0,0.25)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-[#4E342E] ring-4 ring-[#D8C08C] group-hover:ring-[#B8A87C] flex items-center justify-center transition-all duration-500">
                      <item.icon size={26} className="text-[#F5EFE6] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#3E2A22] text-center transition-colors duration-300 group-hover:text-[#6F4E37]">
                  {item.title}
                </h3>
                <p className="mt-2 text-center text-[#6F4E37] transition-opacity duration-300 group-hover:opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openModal !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setOpenModal(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full p-8 relative animate-fade-in shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenModal(null)}
                className="absolute top-4 right-4 text-[#4E342E] hover:text-[#6F4E37] transition-colors"
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#6F4E37] to-[#3E2A22] shadow-lg flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#4E342E] ring-4 ring-[#D8C08C] flex items-center justify-center">
                    {(() => {
                      const Icon = highlights[openModal].icon;
                      return <Icon size={32} className="text-[#F5EFE6]" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-4 text-center">
                  {highlights[openModal].title}
                </h3>
                <p className="text-[#6F4E37] text-center text-base sm:text-lg leading-relaxed">
                  {highlights[openModal].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
