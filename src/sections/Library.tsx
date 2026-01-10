import { useState } from 'react';
import { BookOpen, Send, CheckCircle } from 'lucide-react';

export default function Library() {
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
            पुस्तकालय कॉर्नर
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded mb-8"></div>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-[#6F4E37] leading-relaxed mb-6">
              हमारा पुस्तकालय ज्ञान का भंडार है। यहाँ विभिन्न विषयों पर पुस्तकें उपलब्ध हैं
              जो विद्यार्थियों के सर्वांगीण विकास में सहायक हैं। पढ़ने की आदत बच्चों के
              भविष्य को उज्ज्वल बनाती है।
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#6F4E37]">
              <p className="text-xl sm:text-2xl font-semibold text-[#4E342E] italic">
                "पुस्तकें ज्ञान का सबसे बड़ा स्रोत हैं"
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border-t-4 border-[#6F4E37]">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-8 text-center">
            पुस्तकालय हेतु अनुरोध / संदेश भेजें
          </h3>

          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-4 animate-fade-in">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-green-800 font-semibold text-lg">
                  आपका संदेश सफलतापूर्वक प्रशासन को भेज दिया गया है।
                </p>
                <p className="text-green-700 mt-1">
                  हम जल्द ही आपसे संपर्क करेंगे।
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
                विद्यार्थी का नाम *
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
                placeholder="विद्यार्थी का पूरा नाम लिखें"
              />
            </div>

            <div>
              <label
                htmlFor="className"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                कक्षा *
              </label>
              <select
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
              >
                <option value="">कक्षा चुनें</option>
                <option value="नर्सरी">नर्सरी</option>
                <option value="एल.के.जी.">एल.के.जी.</option>
                <option value="यू.के.जी.">यू.के.जी.</option>
                <option value="पहली">पहली</option>
                <option value="दूसरी">दूसरी</option>
                <option value="तीसरी">तीसरी</option>
                <option value="चौथी">चौथी</option>
                <option value="पाँचवीं">पाँचवीं</option>
                <option value="छठी">छठी</option>
                <option value="सातवीं">सातवीं</option>
                <option value="आठवीं">आठवीं</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="bookName"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                पुस्तक का नाम / विषय *
              </label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg"
                placeholder="पुस्तक का नाम या विषय बताएं"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-[#4E342E] mb-2"
              >
                संदेश
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] text-lg resize-none"
                placeholder="कोई अतिरिक्त जानकारी या संदेश (वैकल्पिक)"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#4E342E] to-[#6F4E37] text-[#F5EFE6] py-4 rounded-lg font-bold text-lg hover:from-[#6F4E37] hover:to-[#4E342E] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                'भेजा जा रहा है...'
              ) : (
                <>
                  <Send size={24} />
                  प्रशासन को भेजें
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
