import { Users, Laptop, Trophy, Shield, Heart, BookOpen } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: '/feature-icon-1.png',
      title: 'अनुभवी शिक्षक',
      description: 'हमारे सभी शिक्षक प्रशिक्षित और अनुभवी हैं जो बच्चों के सर्वांगीण विकास पर ध्यान देते हैं',
    },
    {
      icon: '/feature-icon-2.png',
      title: 'स्मार्ट शिक्षण',
      description: 'आधुनिक तकनीक और पारंपरिक शिक्षण विधियों का सुंदर समन्वय',
    },
    {
      icon: '/feature-icon-3.png',
      title: 'खेलकूद एवं सांस्कृतिक गतिविधियाँ',
      description: 'शारीरिक और मानसिक विकास के लिए विभिन्न खेल और सांस्कृतिक कार्यक्रम',
    },
    {
      icon: '/feature-icon-4.png',
      title: 'सुरक्षित वातावरण',
      description: 'CCTV निगरानी, प्रशिक्षित सुरक्षा कर्मी और सुरक्षित परिसर',
    },
    {
      icon: '/feature-icon-5.png',
      title: 'संस्कार केंद्रित शिक्षा',
      description: 'नैतिक मूल्यों और संस्कारों के साथ आधुनिक शिक्षा का समावेश',
    },
    {
      icon: '/feature-icon-6.png',
      title: 'समृद्ध पुस्तकालय',
      description: 'विभिन्न विषयों की पुस्तकों से सुसज्जित आधुनिक पुस्तकालय',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            विद्यालय की विशेषताएँ
          </h2>
          <p className="text-base sm:text-lg text-[#6F4E37] max-w-4xl mx-auto leading-relaxed">
            हमारा विद्यालय आपके बच्चों के उज्ज्वल भविष्य के लिए हर आवश्यक सुविधा प्रदान करता है [cite: 16]
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border-2 border-[#4E342E] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={feature.icon}
                    alt={feature.title}
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

        <div className="bg-[#3E2A22] p-8 sm:p-12 rounded-2xl shadow-xl animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-white">
            अतिरिक्त सुविधाएँ
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">100%</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">सुरक्षित वातावरण</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">24/7</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">CCTV निगरानी</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">15+</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">अनुभवी शिक्षक</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2 text-white">500+</div>
              <p className="text-[#F5EFE6] text-sm sm:text-base">संतुष्ट विद्यार्थी</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
