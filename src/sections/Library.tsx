import { useState } from 'react';
import { BookOpen, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Library() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    bookName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate sending without a backend/database
      await new Promise((resolve) => setTimeout(resolve, 600));

      setShowSuccess(true);
      setFormData({
        studentName: '',
        className: '',
        bookName: '',
        message: '',
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-4 animate-fade-in">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-green-800 font-semibold text-lg">
                  {t('library.form.success.title')}
                </p>
                <p className="text-green-700 mt-1">
                  {t('library.form.success.desc')}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="studentName"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                {t('library.form.studentName')}
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
                placeholder={t('library.form.studentName.placeholder')}
              />
            </div>

            <div>
              <label
                htmlFor="className"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                {t('library.form.class')} *
              </label>
              <select
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
              >
                <option value="">{t('library.form.class.placeholder')}</option>
                <option value="नर्सरी">{t('classes.nursery')}</option>
                <option value="एल.के.जी.">{t('classes.lkg')}</option>
                <option value="यू.के.जी.">{t('classes.ukg')}</option>
                <option value="पहली">1st</option>
                <option value="दूसरी">2nd</option>
                <option value="तीसरी">3rd</option>
                <option value="चौथी">4th</option>
                <option value="पाँचवीं">5th</option>
                <option value="छठी">6th</option>
                <option value="सातवीं">7th</option>
                <option value="आठवीं">8th</option>
              </select>
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
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg resize-none"
                placeholder={t('library.form.message.placeholder')}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#4E342E] to-[#6F4E37] text-[#F5EFE6] py-4 rounded-lg font-bold text-lg hover:from-[#6F4E37] hover:to-[#4E342E] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                t('library.form.submitting')
              ) : (
                <>
                  <Send size={24} />
                  {t('library.form.submit')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
