import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            संपर्क करें
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded mb-6"></div>
          <p className="text-lg sm:text-xl text-[#6F4E37] max-w-3xl mx-auto leading-relaxed">
            हम आपकी सेवा के लिए सदैव उपलब्ध हैं
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
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">हमारा पता</h3>
                  <p className="text-[#6F4E37] leading-relaxed">
                    संस्कार शिक्षण संस्थान
                    <br />
                    सोमपुर, जिला - उदाहरण
                    <br />
                    राज्य - उदाहरण राज्य
                    <br />
                    पिन कोड - 123456
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
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">संपर्क नंबर</h3>
                  <p className="text-[#6F4E37] leading-relaxed mb-2">
                    मुख्य कार्यालय: 98765 43210
                  </p>
                  <p className="text-[#6F4E37] leading-relaxed">
                    वैकल्पिक नंबर: 98765 43211
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#D7C7A1]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D7C7A1] rounded-full flex-shrink-0">
                  <Clock size={28} className="text-[#4E342E]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-3">समय</h3>
                  <p className="text-[#6F4E37] leading-relaxed mb-2">
                    सोमवार - शनिवार: सुबह 8:00 - दोपहर 2:00
                  </p>
                  <p className="text-[#6F4E37] leading-relaxed">रविवार: अवकाश</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 sm:p-12 rounded-2xl shadow-2xl border-t-4 border-[#6F4E37]">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-8 text-center">
                संदेश भेजें
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    नाम
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder="अपना नाम लिखें"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    दूरभाष संख्या
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder="अपना मोबाइल नंबर लिखें"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-semibold text-[#4E342E] mb-2"
                  >
                    विषय
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E]"
                    placeholder="संदेश का विषय"
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
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-[#D7C7A1] rounded-lg focus:outline-none focus:border-[#6F4E37] transition-colors text-[#4E342E] resize-none"
                    placeholder="अपना संदेश लिखें"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4E342E] to-[#6F4E37] text-[#F5EFE6] py-4 rounded-lg font-bold text-lg hover:from-[#6F4E37] hover:to-[#4E342E] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Mail size={24} />
                  संदेश भेजें
                </button>
              </form>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#4E342E] to-[#6F4E37] p-8 rounded-2xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-[#F5EFE6] bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#F5EFE6] mx-auto mb-3 opacity-75" />
                  <p className="text-[#F5EFE6] text-lg font-semibold">मानचित्र स्थान</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
