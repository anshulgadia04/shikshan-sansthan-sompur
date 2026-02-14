import { useState } from 'react';
import { BookOpen, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Library() {
  const { t } = useLanguage();
  const [studentName, setStudentName] = useState('');
  const [bookName, setBookName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Library Book Request - Sanskar Shikshan Sansthan*%0A%0A*Name:* ${studentName}%0A*Book Name:* ${bookName}%0A*Message:* ${message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/919602021473?text=${whatsappMessage}`;
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
              className="w-full bg-gradient-to-r from-[#4E342E] to-[#6F4E37] text-[#F5EFE6] py-4 rounded-lg font-bold text-lg hover:from-[#6F4E37] hover:to-[#4E342E] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Send size={24} />
              {t('library.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
