import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#4E342E] text-[#F5EFE6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/logo.png"
              alt={t('hero.title')}
              className="h-24 w-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{t('hero.title')}</h3>
            <p className="text-[#D7C7A1] mb-2">{t('hero.location')}</p>
            <p className="text-sm text-[#D7C7A1] leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-2 text-[#D7C7A1]">
              <p>{t('footer.contact.location')}</p>
              <p>{t('footer.contact.phone1')}</p>
              <p>{t('footer.contact.phone2')}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.values.title')}</h4>
            <ul className="space-y-2 text-[#D7C7A1]">
              <li>{t('footer.values.education')}</li>
              <li>{t('footer.values.service')}</li>
              <li>{t('footer.values.sanskar')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#6F4E37] text-center">
          <p className="text-[#D7C7A1] text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
