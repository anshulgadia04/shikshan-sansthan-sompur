import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Library() {
  const { t } = useLanguage();
  const [studentName, setStudentName] = useState('');
  const [bookName, setBookName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Library Book Request - Sanskar Shikshan Sansthan*%0A%0A*Name:* ${studentName}%0A*Book Name:* ${bookName}%0A*Message:* ${message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917742682383?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5EFE6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-[#4E342E] to-[#6F4E37] rounded-full">
              <BookOpen size={48} className="text-[#F5EFE6]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            {t('library.title')}
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded mb-8"></div>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-[#6F4E37] leading-relaxed mb-6">
              {t('library.intro')}
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#6F4E37]">
              <p className="text-xl sm:text-2xl font-semibold text-[#4E342E] italic">
                {t('library.quote')}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border-t-4 border-[#6F4E37]">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-8 text-center">
            {t('library.form.title')}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="studentName"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                {t('library.form.studentName')} *
              </label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
                placeholder={t('library.form.studentName.placeholder')}
              />
            </div>

            <div>
              <label
                htmlFor="bookName"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                {t('library.form.bookName')} *
              </label>
              <input
                type="text"
                id="bookName"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
                placeholder={t('library.form.bookName.placeholder')}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                {t('library.form.message')}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg resize-none"
                placeholder={t('library.form.message.placeholder')}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 rounded-lg font-bold text-lg hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('library.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
