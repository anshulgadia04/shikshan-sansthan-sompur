import { Target, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-6">
              {t('about.heading')}
            </h3>
            <p className="text-lg text-[#6F4E37] leading-relaxed mb-6">
              {t('about.para1')}
            </p>
            <p className="text-lg text-[#6F4E37] leading-relaxed mb-6">
              {t('about.para2')}
            </p>
            <p className="text-lg text-[#6F4E37] leading-relaxed">
              {t('about.para3')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#4E342E]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4E342E] rounded-full flex-shrink-0">
                  <Target size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">{t('about.goal.title')}</h4>
                  <p className="text-[#6F4E37] leading-relaxed">
                    {t('about.goal.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#6F4E37]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6F4E37] rounded-full flex-shrink-0">
                  <Heart size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">{t('about.values.title')}</h4>
                  <div className="space-y-2">
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">{t('about.values.education')}</span> {t('about.values.education.desc')}
                    </p>
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">{t('about.values.service')}</span> {t('about.values.service.desc')}
                    </p>
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">{t('about.values.sanskar')}</span> {t('about.values.sanskar.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#D7C7A1]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D7C7A1] rounded-full flex-shrink-0">
                  <Star size={28} className="text-[#4E342E]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">{t('about.vision.title')}</h4>
                  <p className="text-[#6F4E37] leading-relaxed">
                    {t('about.vision.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
