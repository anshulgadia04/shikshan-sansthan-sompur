import { Users, Award, Bus, Shield } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Users,
      title: 'नर्सरी से आठवीं तक',
      description: 'सभी कक्षाओं के लिए संपूर्ण शिक्षा व्यवस्था',
    },
    {
      icon: Award,
      title: 'अनुभवी एवं प्रशिक्षित शिक्षक',
      description: 'योग्य और समर्पित शिक्षक मंडल',
    },
    {
      icon: Bus,
      title: 'बस सुविधा उपलब्ध',
      description: 'सुरक्षित परिवहन की व्यवस्था',
    },
    {
      icon: Shield,
      title: 'CCTV सुरक्षा व्यवस्था',
      description: 'पूर्ण निगरानी एवं सुरक्षा',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-28 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E]">
            हमारी मुख्य विशेषताएँ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="relative h-full animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl pt-12 pb-8 px-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border-2 border-[#D8C08C] hover:shadow-[0_16px_40px_rgba(111,78,55,0.15)] hover:border-[#B8A87C] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out h-full min-h-[180px] flex flex-col">
                {/* Top badge (overlapping circle) */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#6F4E37] to-[#3E2A22] shadow-[0_6px_16px_rgba(0,0,0,0.25)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-[#4E342E] ring-4 ring-[#D8C08C] group-hover:ring-[#B8A87C] flex items-center justify-center transition-all duration-500">
                      <item.icon size={26} className="text-[#F5EFE6] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#3E2A22] text-center transition-colors duration-300 group-hover:text-[#6F4E37]">
                  {item.title}
                </h3>
                <p className="mt-2 text-center text-[#6F4E37] transition-opacity duration-300 group-hover:opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
