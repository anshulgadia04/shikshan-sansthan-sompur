import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Features() {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<number | null>(null);
  
  const features = [
    {
      icon: '/feature-icon-1.png',
      title: t('features.teachers.title'),
      description: t('features.teachers.desc'),
    },  
    {
      icon: '/feature-icon-2.png',
      title: t('features.smart.title'),
      description: t('features.smart.desc'),
    },
    {
      icon: '/feature-icon-3.png',
      title: t('features.sports.title'),
      description: t('features.sports.desc'),
    },
    {
      icon: '/feature-icon-4.png',
      title: t('features.safety.title'),
      description: t('features.safety.desc'),
    },
    {
      icon: '/feature-icon-5.png',
      title: t('features.sanskar.title'),
      description: t('features.sanskar.desc'),
    },
    {
      icon: '/feature-icon-6.png',
      title: t('features.library.title'),
      description: t('features.library.desc'),
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#6F4E37] max-w-4xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setOpenModal(index)}
              className="bg-white  p-6 sm:p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border-2 border-[#4E342E] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4E342E] mb-3 text-center leading-snug">
                {feature.title}
              </h3>
              <p className="text-[#6F4E37] text-center text-sm leading-relaxed">
                {feature.description}
              </p>
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
                <div className="w-24 h-24 flex items-center justify-center mb-6">
                  <img
                    src={features[openModal].icon}
                    alt={features[openModal].title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-4 text-center">
                  {features[openModal].title}
                </h3>
                <p className="text-[#6F4E37] text-center text-base sm:text-lg leading-relaxed">
                  {features[openModal].description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-[#3E2A22] p-8 sm:p-12 rounded-2xl shadow-xl animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-white">
            {t('features.additional.title')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">100%</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">{t('features.additional.safe')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">24/7</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">{t('features.additional.cctv')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">15+</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">{t('features.additional.teachers')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">200+</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">{t('features.additional.students')}</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}
