import { Target, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            हमारे बारे में
          </h2>
          <div className="w-24 h-1 bg-[#6F4E37] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-6">
              संस्कार शिक्षण संस्थान, सोमपुर
            </h3>
            <p className="text-lg text-[#6F4E37] leading-relaxed mb-6">
              हमारा विद्यालय शिक्षा के साथ-साथ संस्कारों के विकास में विश्वास रखता है।
              यहाँ हर बच्चे को एक सुरक्षित, प्रेरक और सकारात्मक वातावरण मिलता है जहाँ वे
              अपनी प्रतिभा को निखार सकें।
            </p>
            <p className="text-lg text-[#6F4E37] leading-relaxed mb-6">
              हमारा उद्देश्य केवल पुस्तकीय ज्ञान देना नहीं, बल्कि बच्चों को जीवन के लिए
              तैयार करना है। हम उन्हें नैतिक मूल्यों, अनुशासन और सामाजिक उत्तरदायित्व
              की शिक्षा देते हैं।
            </p>
            <p className="text-lg text-[#6F4E37] leading-relaxed">
              हमारे अनुभवी शिक्षक और आधुनिक शिक्षण विधियाँ प्रत्येक विद्यार्थी के
              सर्वांगीण विकास को सुनिश्चित करती हैं।
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F5EFE6] to-white p-8 rounded-2xl shadow-lg border-l-4 border-[#4E342E]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#4E342E] rounded-full flex-shrink-0">
                  <Target size={28} className="text-[#F5EFE6]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">हमारा लक्ष्य</h4>
                  <p className="text-[#6F4E37] leading-relaxed">
                    प्रत्येक बच्चे में शैक्षणिक उत्कृष्टता और मानवीय मूल्यों का विकास
                    करना
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
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">हमारे मूल्य</h4>
                  <div className="space-y-2">
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">शिक्षा:</span> गुणवत्तापूर्ण शिक्षा
                      का प्रावधान
                    </p>
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">सेवा:</span> समाज और राष्ट्र के प्रति
                      समर्पण
                    </p>
                    <p className="text-[#6F4E37] leading-relaxed">
                      <span className="font-semibold">संस्कार:</span> नैतिक और सांस्कृतिक
                      मूल्यों का विकास
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
                  <h4 className="text-xl font-bold text-[#4E342E] mb-3">हमारी दृष्टि</h4>
                  <p className="text-[#6F4E37] leading-relaxed">
                    एक ऐसा शैक्षणिक संस्थान बनना जो बच्चों के उज्ज्वल भविष्य की नींव रखे
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
