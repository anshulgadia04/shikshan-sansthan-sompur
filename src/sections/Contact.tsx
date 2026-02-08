import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded mb-6"></div>
          <p className="text-lg sm:text-xl text-[#6F4E37] max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#4E342E]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4E342E] rounded-full flex-shrink-0">
                  <MapPin size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">{t('contact.address.title')}</h3>
                  <p className="text-[#6F4E37] leading-relaxed">
                    {t('contact.address.line1')}
                    <br />
                    {t('contact.address.line2')}
                    <br />
                    {t('contact.address.line3')}
                    <br />
                    {t('contact.address.line4')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#6F4E37]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6F4E37] rounded-full flex-shrink-0">
                  <Phone size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">{t('contact.phone.title')}</h3>
                  <a href="tel:+917742682383" className="text-[#6F4E37] leading-relaxed hover:text-[#4E342E] transition-colors">
                    {t('contact.phone.main')}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#8D6E63]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#8D6E63] rounded-full flex-shrink-0">
                  <Mail size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">{t('contact.email.title')}</h3>
                  <a href="mailto:shivmenaria77@gmail.com" className="text-[#6F4E37] leading-relaxed hover:text-[#4E342E] transition-colors break-all">
                    {t('contact.email.address')}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#D7C7A1]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D7C7A1] rounded-full flex-shrink-0">
                  <Clock size={28} className="text-[#4E342E]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">{t('contact.timing.title')}</h3>
                  <p className="text-[#6F4E37] leading-relaxed mb-2">
                    {t('contact.timing.winter')}
                  </p>
                  <p className="text-[#6F4E37] leading-relaxed mb-2">
                    {t('contact.timing.summer')}
                  </p>
                  <p className="text-[#6F4E37] leading-relaxed">{t('contact.timing.sunday')}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 sm:p-12 rounded-2xl shadow-2xl border-t-4 border-[#6F4E37]">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-8 text-center">
                {t('contact.form.title')}
              </h3>

              <form action="https://formsubmit.co/anshulgadia04@gmail.com" method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Contact Form - Sanskar Shikshan Sansthan" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4E342E] to-[#6F4E37] text-[#F5EFE6] py-4 rounded-lg font-bold text-lg hover:from-[#6F4E37] hover:to-[#4E342E] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Mail size={24} />
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#4E342E] to-[#6F4E37] p-4 rounded-2xl shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.645230986407!2d74.43039487535826!3d24.463090978190753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966470078335759%3A0xbfb55789a21a4912!2sSanskar%20shikshan%20Sansthan!5e0!3m2!1sen!2sin!4v1770561222768!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{border: 0, borderRadius: '0.5rem'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanskar Shikshan Sansthan Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
