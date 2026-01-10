export default function Gallery() {
  const images = [
    {
      title: 'विद्यालय भवन',
      description: 'हमारा सुंदर और आधुनिक विद्यालय परिसर',
      image: '/homeBG.png',
    },
    {
      title: 'कक्षा कक्ष',
      description: 'सुसज्जित और हवादार कक्षाएँ',
      image: '/gallery-2.png',
    },
    {
      title: 'पुस्तकालय',
      description: 'समृद्ध पुस्तक संग्रह',
      image: '/gallery-3.png',
    },
    {
      title: 'खेल का मैदान',
      description: 'विशाल खेल मैदान',
      image: '/gallery-4.png',
    },
    {
      title: 'सांस्कृतिक कार्यक्रम',
      description: 'वार्षिक उत्सव और प्रतियोगिताएँ',
      image: '/gallery-5.png',
    },
    {
      title: 'प्रयोगशाला',
      description: 'विज्ञान प्रयोगशाला',
      image: '/gallery-6.png',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E342E] mb-3">
            गैलरी
          </h2>
          <div className="w-16 h-1 bg-[#4E342E] mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-[#6F4E37]">
            हमारे विद्यालय की झलकियाँ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] bg-[#E5DCC8] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                    <h3 className="text-lg font-bold text-[#4E342E] text-center mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6F4E37] text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
