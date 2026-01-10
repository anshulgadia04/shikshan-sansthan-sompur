export default function Classes() {
  const classes = [
    {
      name: 'नर्सरी',
      description: 'खेल-खेल में सीखने का प्रारंभिक चरण',
      ageGroup: 'आयु वर्ग: 3-4 वर्ष',
      image1: '/class-nursery-1.png',
      image2: '/class-nursery-2.png',
    },
    {
      name: 'एल.के.जी.',
      description: 'बुनियादी ज्ञान और कौशल विकास',
      ageGroup: 'आयु वर्ग: 4-5 वर्ष',
      image1: '/class-lkg-1.png',
      image2: '/class-lkg-2.png',
    },
    {
      name: 'यू.के.जी.',
      description: 'प्राथमिक शिक्षा की तैयारी',
      ageGroup: 'आयु वर्ग: 5-6 वर्ष',
      image1: '/class-ukg-1.png',
      image2: '/class-ukg-2.png',
    },
    {
      name: 'पहली से पाँचवीं',
      description: 'प्राथमिक शिक्षा का मजबूत आधार',
      ageGroup: 'आयु वर्ग: 6-11 वर्ष',
      image1: '/class-primary-1.png',
      image2: '/class-primary-2.png',
    },
    {
      name: 'छठी से आठवीं',
      description: 'उच्च प्राथमिक शिक्षा और विषय ज्ञान',
      ageGroup: 'आयु वर्ग: 11-14 वर्ष',
      image1: '/class-secondary-1.png',
      image2: '/class-secondary-2.png',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-3">
            कक्षाएँ
          </h2>
          <div className="w-16 h-1 bg-[#4E342E] mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-[#6F4E37] max-w-2xl mx-auto">
            नर्सरी से आठवीं कक्षा तक संपूर्ण शिक्षा व्यवस्था
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border-2 border-[#D8C08C] hover:shadow-[0_16px_40px_rgba(111,78,55,0.15)] hover:border-[#B8A87C] hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col">
                {/* Image Container with Badge */}
                <div className="relative mb-6">
                  <div className="flex gap-3 items-center justify-center">
                    {/* Left Image */}
                    <div className="w-[45%] h-24 rounded-xl overflow-hidden bg-[#F5EFE6] shadow-md">
                      <img
                        src={cls.image1}
                        alt={`${cls.name} 1`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Right Image */}
                    <div className="w-[45%] h-24 rounded-xl overflow-hidden bg-[#F5EFE6] shadow-md">
                      <img
                        src={cls.image2}
                        alt={`${cls.name} 2`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#3E2A22] text-center mb-2 transition-colors duration-300 group-hover:text-[#6F4E37]">
                  {cls.name}
                </h3>
                <p className="text-center text-[#6F4E37] text-sm mb-3 transition-opacity duration-300 group-hover:opacity-90">
                  {cls.description}
                </p>
                <p className="text-center text-[#3E2A22] text-xs font-semibold mt-auto">
                  {cls.ageGroup}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F5EFE6] p-8 sm:p-12 rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] max-w-5xl mx-auto border-4 border-[#4E342E] animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#4E342E] mb-3 text-center">
            हमारी शिक्षण पद्धति
          </h3>
          <div className="w-16 h-1 bg-[#4E342E] mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/teaching-icon-1.png" 
                  alt="Individual Attention"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-[#4E342E] leading-relaxed text-base font-medium">
                प्रत्येक बच्चे पर व्यक्तिगत ध्यान
              </p>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/teaching-icon-2.png" 
                  alt="Modern Traditional Education"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-[#4E342E] leading-relaxed text-base font-medium">
                आधुनिक और पारंपरिक शिक्षा का समन्वय
              </p>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/teaching-icon-3.png" 
                  alt="Regular Assessment"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-[#4E342E] leading-relaxed text-base font-medium">
                नियमित मूल्यांकन और अभिभावक संवाद
              </p>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/teaching-icon-4.png" 
                  alt="Curricular Balance"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-[#4E342E] leading-relaxed text-base font-medium">
                पाठ्यक्रम और पाठ्येतर गतिविधियों का संतुलन
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
