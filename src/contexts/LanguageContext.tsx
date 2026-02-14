import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.classes': 'Classes',
    'nav.library': 'Library Corner',
    'nav.features': 'School Features',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Sanskar Shikshan Sansthan',
    'hero.location': 'Sompur',
    'hero.firstBatch': 'Proudly Serving Since 2024-25',
    'hero.tagline': 'Education • Service • Values',
    'hero.description': 'Building bright futures through quality education and strong values. A safe and inspiring environment where every child can flourish.',
    'hero.cta.learn': 'Learn More',
    'hero.cta.contact': 'Contact Us',
    
    // Highlights
    'highlights.title': 'Our Key Features',
    'highlights.nursery.title': 'Nursery to 8th Grade',
    'highlights.nursery.desc': 'Complete education system for all grades',
    'highlights.teachers.title': 'Experienced & Trained Teachers',
    'highlights.teachers.desc': 'Qualified and dedicated teaching staff',
    'highlights.bus.title': 'Bus Facility Available',
    'highlights.bus.desc': 'Safe transportation arrangements',
    'highlights.cctv.title': 'CCTV Security System',
    'highlights.cctv.desc': 'Complete surveillance and security',
    
    // About
    'about.title': 'About Us',
    'about.heading': 'Sanskar Shikshan Sansthan, Sompur',
    'about.para1': 'Our school believes in developing values alongside education. Here, every child gets a safe, inspiring, and positive environment where they can develop their talents.',
    'about.para2': 'Our goal is not just to provide bookish knowledge but to prepare children for life. We teach them moral values, discipline, and social responsibility.',
    'about.para3': 'Our experienced teachers and modern teaching methods ensure the holistic development of each student.',
    'about.goal.title': 'Our Goal',
    'about.goal.desc': 'To develop academic excellence and human values in every child',
    'about.values.title': 'Our Values',
    'about.values.education': 'Education:',
    'about.values.education.desc': 'Provision of quality education',
    'about.values.service': 'Service:',
    'about.values.service.desc': 'Dedication to society and nation',
    'about.values.sanskar': 'Values:',
    'about.values.sanskar.desc': 'Development of moral and cultural values',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become an educational institution that lays the foundation for children\'s bright future',
    
    // Classes
    'classes.title': 'Classes',
    'classes.subtitle': 'Complete education system from Nursery to 8th Grade',
    'classes.nursery': 'Nursery',
    'classes.nursery.desc': 'Initial stage of learning through play',
    'classes.nursery.age': 'Age Group: 3-4 years',
    'classes.lkg': 'L.K.G.',
    'classes.lkg.desc': 'Basic knowledge and skill development',
    'classes.lkg.age': 'Age Group: 4-5 years',
    'classes.ukg': 'U.K.G.',
    'classes.ukg.desc': 'Preparation for primary education',
    'classes.ukg.age': 'Age Group: 5-6 years',
    'classes.primary': 'First to Fifth',
    'classes.primary.desc': 'Strong foundation of primary education',
    'classes.primary.age': 'Age Group: 6-11 years',
    'classes.secondary': 'Sixth to Eighth',
    'classes.secondary.desc': 'Higher primary education and subject knowledge',
    'classes.secondary.age': 'Age Group: 11-14 years',
    'classes.admission.title': 'Admissions Open',
    'classes.admission.desc': 'Admissions are open for all classes from Nursery to 8th grade. Complete your child\'s admission today and provide them with quality education.',
    'classes.admission.subjects': 'Subjects: Hindi, English, Mathematics, Science, Social Studies, Environmental Studies, Art & Craft, Physical Education',
    'classes.teaching.title': 'Our Teaching Methodology',
    'classes.teaching.individual': 'Individual attention to each child',
    'classes.teaching.blend': 'Blend of modern and traditional education',
    'classes.teaching.assessment': 'Regular assessment and parent communication',
    'classes.teaching.balance': 'Balance of curricular and co-curricular activities',
    
    // Library
    'library.title': 'Library Corner',
    'library.intro': 'Our library is a treasure trove of knowledge. Various subject books are available here that help in the holistic development of students. Reading habits brighten children\'s future.',
    'library.quote': '"Books are the greatest source of knowledge"',
    'library.form.title': 'Library Request / Send Message',
    'library.form.studentName': 'Name',
    'library.form.studentName.placeholder': 'Enter student name',
    'library.form.class': 'Class',
    'library.form.class.placeholder': 'Select class',
    'library.form.bookName': 'Book Name',
    'library.form.bookName.placeholder': 'Enter book name',
    'library.form.message': 'Message',
    'library.form.message.placeholder': 'Enter your message or request',
    'library.form.submit': 'Submit',
    'library.form.submitting': 'Submitting...',
    'library.form.success.title': 'Your message has been successfully sent to administration.',
    'library.form.success.desc': 'We will contact you soon.',
    
    // Features
    'features.title': 'School Features',
    'features.subtitle': 'Our school provides every necessary facility for your children\'s bright future',
    'features.teachers.title': 'Experienced Teachers',
    'features.teachers.desc': 'All our teachers are trained and experienced who focus on holistic development of children',
    'features.smart.title': 'Smart Education',
    'features.smart.desc': 'Beautiful blend of modern technology and traditional teaching methods',
    'features.sports.title': 'Sports & Cultural Activities',
    'features.sports.desc': 'Various sports and cultural programs for physical and mental development',
    'features.safety.title': 'Safe Environment',
    'features.safety.desc': 'CCTV surveillance, trained security personnel, and secure premises',
    'features.sanskar.title': 'Values-Centered Education',
    'features.sanskar.desc': 'Integration of modern education with moral values',
    'features.library.title': 'Rich Library',
    'features.library.desc': 'Modern library equipped with books on various subjects',
    'features.additional.title': 'Additional Facilities',
    'features.additional.safe': 'Safe Environment',
    'features.additional.cctv': 'CCTV Surveillance',
    'features.additional.teachers': 'Experienced Teachers',
    'features.additional.students': 'Satisfied Students',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Glimpses of our school',
    'gallery.building': 'School Building',
    'gallery.building.desc': 'Our beautiful and modern school campus',
    'gallery.classroom': 'Classrooms',
    'gallery.classroom.desc': 'Well-equipped and airy classrooms',
    'gallery.library': 'Library',
    'gallery.library.desc': 'Rich book collection',
    'gallery.playground': 'Playground',
    'gallery.playground.desc': 'Vast sports ground',
    'gallery.cultural': 'Cultural Programs',
    'gallery.cultural.desc': 'Annual festivals and competitions',
    'gallery.lab': 'Laboratory',
    'gallery.lab.desc': 'Science laboratory',
    'gallery.outdoor': 'Outdoor Activities',
    'gallery.outdoor.desc': 'Fun-filled outdoor activities and school transport',
    'gallery.trip': 'Educational Trip',
    'gallery.trip.desc': 'Learning beyond classroom - Educational excursions',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are always available for your service',
    'contact.address.title': 'Our Address',
    'contact.address.line1': 'Sanskar Shikshan Sansthan',
    'contact.address.line2': 'Sompur, Bari Sadri, District - Chittorgarh',
    'contact.address.line3': 'State - Rajasthan',
    'contact.address.line4': 'PIN Code - 312403',
    'contact.phone.title': 'Contact Number',
    'contact.phone.main': '+91 7742682383',
    'contact.email.title': 'Email Address',
    'contact.email.address': 'sanskar120524@gmail.com',
    'contact.timing.title': 'School Timing',
    'contact.timing.winter': 'Winter: 9:30 AM - 3:30 PM',
    'contact.timing.summer': 'Summer: 8:30 AM - 2:30 PM',
    'contact.timing.sunday': 'Sunday: Holiday',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Enter your name',
    'contact.form.phone': 'Phone Number',
    'contact.form.phone.placeholder': 'Enter phone number',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'Enter email',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.tagline': 'Towards a bright future through knowledge',
    'footer.contact.title': 'Contact Information',
    'footer.contact.location': 'Sompur, Bari Sadri, District - Chittorgarh, Rajasthan - 312403',
    'footer.contact.phone': 'Phone: +91 7742682383',
    'footer.contact.email': 'Email: sanskar120524@gmail.com',
    'footer.values.title': 'Our Values',
    'footer.values.education': '• Education',
    'footer.values.service': '• Service',
    'footer.values.sanskar': '• Values',
    'footer.social.title': 'Follow Us',
    'footer.social.instagram': 'Instagram',
    'footer.copyright': '© 2026 Sanskar Shikshan Sansthan, Sompur - All Rights Reserved',
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.classes': 'कक्षाएँ',
    'nav.library': 'पुस्तकालय कॉर्नर',
    'nav.features': 'विद्यालय की विशेषताएँ',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क करें',
    
    // Hero
    'hero.title': 'संस्कार शिक्षण संस्थान',
    'hero.location': 'सोमपुर',
    'hero.firstBatch': '2024-25 से गर्व से सेवारत',
    'hero.tagline': 'शिक्षा • सेवा • संस्कार',
    'hero.description': 'गुणवत्तापूर्ण शिक्षा और मजबूत संस्कारों के माध्यम से उज्ज्वल भविष्य का निर्माण। एक सुरक्षित और प्रेरक वातावरण जहाँ हर बच्चा फल-फूल सकता है।',
    'hero.cta.learn': 'अधिक जानें',
    'hero.cta.contact': 'संपर्क करें',
    
    // Highlights
    'highlights.title': 'हमारी मुख्य विशेषताएँ',
    'highlights.nursery.title': 'नर्सरी से आठवीं तक',
    'highlights.nursery.desc': 'सभी कक्षाओं के लिए संपूर्ण शिक्षा व्यवस्था',
    'highlights.teachers.title': 'अनुभवी एवं प्रशिक्षित शिक्षक',
    'highlights.teachers.desc': 'योग्य और समर्पित शिक्षक मंडल',
    'highlights.bus.title': 'बस सुविधा उपलब्ध',
    'highlights.bus.desc': 'सुरक्षित परिवहन की व्यवस्था',
    'highlights.cctv.title': 'CCTV सुरक्षा व्यवस्था',
    'highlights.cctv.desc': 'पूर्ण निगरानी एवं सुरक्षा',
    
    // About
    'about.title': 'हमारे बारे में',
    'about.heading': 'संस्कार शिक्षण संस्थान, सोमपुर',
    'about.para1': 'हमारा विद्यालय शिक्षा के साथ-साथ संस्कारों के विकास में विश्वास रखता है। यहाँ हर बच्चे को एक सुरक्षित, प्रेरक और सकारात्मक वातावरण मिलता है जहाँ वे अपनी प्रतिभा को निखार सकें।',
    'about.para2': 'हमारा उद्देश्य केवल पुस्तकीय ज्ञान देना नहीं, बल्कि बच्चों को जीवन के लिए तैयार करना है। हम उन्हें नैतिक मूल्यों, अनुशासन और सामाजिक उत्तरदायित्व की शिक्षा देते हैं।',
    'about.para3': 'हमारे अनुभवी शिक्षक और आधुनिक शिक्षण विधियाँ प्रत्येक विद्यार्थी के सर्वांगीण विकास को सुनिश्चित करती हैं।',
    'about.goal.title': 'हमारा लक्ष्य',
    'about.goal.desc': 'प्रत्येक बच्चे में शैक्षणिक उत्कृष्टता और मानवीय मूल्यों का विकास करना',
    'about.values.title': 'हमारे मूल्य',
    'about.values.education': 'शिक्षा:',
    'about.values.education.desc': 'गुणवत्तापूर्ण शिक्षा का प्रावधान',
    'about.values.service': 'सेवा:',
    'about.values.service.desc': 'समाज और राष्ट्र के प्रति समर्पण',
    'about.values.sanskar': 'संस्कार:',
    'about.values.sanskar.desc': 'नैतिक और सांस्कृतिक मूल्यों का विकास',
    'about.vision.title': 'हमारी दृष्टि',
    'about.vision.desc': 'एक ऐसा शैक्षणिक संस्थान बनना जो बच्चों के उज्ज्वल भविष्य की नींव रखे',
    
    // Classes
    'classes.title': 'कक्षाएँ',
    'classes.subtitle': 'नर्सरी से आठवीं कक्षा तक संपूर्ण शिक्षा व्यवस्था',
    'classes.nursery': 'नर्सरी',
    'classes.nursery.desc': 'खेल-खेल में सीखने का प्रारंभिक चरण',
    'classes.nursery.age': 'आयु वर्ग: 3-4 वर्ष',
    'classes.lkg': 'एल.के.जी.',
    'classes.lkg.desc': 'बुनियादी ज्ञान और कौशल विकास',
    'classes.lkg.age': 'आयु वर्ग: 4-5 वर्ष',
    'classes.ukg': 'यू.के.जी.',
    'classes.ukg.desc': 'प्राथमिक शिक्षा की तैयारी',
    'classes.ukg.age': 'आयु वर्ग: 5-6 वर्ष',
    'classes.primary': 'पहली से पाँचवीं',
    'classes.primary.desc': 'प्राथमिक शिक्षा का मजबूत आधार',
    'classes.primary.age': 'आयु वर्ग: 6-11 वर्ष',
    'classes.secondary': 'छठी से आठवीं',
    'classes.secondary.desc': 'उच्च प्राथमिक शिक्षा और विषय ज्ञान',
    'classes.secondary.age': 'आयु वर्ग: 11-14 वर्ष',
    'classes.admission.title': 'प्रवेश खुले हैं',
    'classes.admission.desc': 'नर्सरी से आठवीं तक सभी कक्षाओं के लिए प्रवेश खुले हैं। अपने बच्चे का प्रवेश आज ही पूर्ण करें और उन्हें गुणवत्तापूर्ण शिक्षा प्रदान करें।',
    'classes.admission.subjects': 'विषय: हिंदी, अंग्रेजी, गणित, विज्ञान, सामाजिक विज्ञान, पर्यावरण अध्ययन, कला एवं शिल्प, शारीरिक शिक्षा',
    'classes.teaching.title': 'हमारी शिक्षण पद्धति',
    'classes.teaching.individual': 'प्रत्येक बच्चे पर व्यक्तिगत ध्यान',
    'classes.teaching.blend': 'आधुनिक और पारंपरिक शिक्षा का समन्वय',
    'classes.teaching.assessment': 'नियमित मूल्यांकन और अभिभावक संवाद',
    'classes.teaching.balance': 'पाठ्यक्रम और पाठ्येतर गतिविधियों का संतुलन',
    
    // Library
    'library.title': 'पुस्तकालय कॉर्नर',
    'library.intro': 'हमारा पुस्तकालय ज्ञान का भंडार है। यहाँ विभिन्न विषयों पर पुस्तकें उपलब्ध हैं जो विद्यार्थियों के सर्वांगीण विकास में सहायक हैं। पढ़ने की आदत बच्चों के भविष्य को उज्ज्वल बनाती है।',
    'library.quote': '"पुस्तकें ज्ञान का सबसे बड़ा स्रोत हैं"',
    'library.form.title': 'पुस्तकालय हेतु अनुरोध / संदेश भेजें',
    'library.form.studentName': 'नाम',
    'library.form.studentName.placeholder': 'विद्यार्थी का नाम दर्ज करें',
    'library.form.class': 'कक्षा',
    'library.form.class.placeholder': 'कक्षा चुनें',
    'library.form.bookName': 'पुस्तक का नाम',
    'library.form.bookName.placeholder': 'पुस्तक का नाम दर्ज करें',
    'library.form.message': 'संदेश',
    'library.form.message.placeholder': 'अपना संदेश या अनुरोध लिखें',
    'library.form.submit': 'भेजें',
    'library.form.submitting': 'भेज रहे हैं...',
    'library.form.success.title': 'आपका संदेश सफलतापूर्वक प्रशासन को भेज दिया गया है।',
    'library.form.success.desc': 'हम जल्द ही आपसे संपर्क करेंगे।',
    
    // Features
    'features.title': 'विद्यालय की विशेषताएँ',
    'features.subtitle': 'हमारा विद्यालय आपके बच्चों के उज्ज्वल भविष्य के लिए हर आवश्यक सुविधा प्रदान करता है',
    'features.teachers.title': 'अनुभवी शिक्षक',
    'features.teachers.desc': 'हमारे सभी शिक्षक प्रशिक्षित और अनुभवी हैं जो बच्चों के सर्वांगीण विकास पर ध्यान देते हैं',
    'features.smart.title': 'स्मार्ट शिक्षण',
    'features.smart.desc': 'आधुनिक तकनीक और पारंपरिक शिक्षण विधियों का सुंदर समन्वय',
    'features.sports.title': 'खेलकूद एवं सांस्कृतिक गतिविधियाँ',
    'features.sports.desc': 'शारीरिक और मानसिक विकास के लिए विभिन्न खेल और सांस्कृतिक कार्यक्रम',
    'features.safety.title': 'सुरक्षित वातावरण',
    'features.safety.desc': 'CCTV निगरानी, प्रशिक्षित सुरक्षा कर्मी और सुरक्षित परिसर',
    'features.sanskar.title': 'संस्कार केंद्रित शिक्षा',
    'features.sanskar.desc': 'नैतिक मूल्यों और संस्कारों के साथ आधुनिक शिक्षा का समावेश',
    'features.library.title': 'समृद्ध पुस्तकालय',
    'features.library.desc': 'विभिन्न विषयों की पुस्तकों से सुसज्जित आधुनिक पुस्तकालय',
    'features.additional.title': 'अतिरिक्त सुविधाएँ',
    'features.additional.safe': 'सुरक्षित वातावरण',
    'features.additional.cctv': 'CCTV निगरानी',
    'features.additional.teachers': 'अनुभवी शिक्षक',
    'features.additional.students': 'संतुष्ट विद्यार्थी',
    
    // Gallery
    'gallery.title': 'गैलरी',
    'gallery.subtitle': 'हमारे विद्यालय की झलकियाँ',
    'gallery.building': 'विद्यालय भवन',
    'gallery.building.desc': 'हमारा सुंदर और आधुनिक विद्यालय परिसर',
    'gallery.classroom': 'कक्षा कक्ष',
    'gallery.classroom.desc': 'सुसज्जित और हवादार कक्षाएँ',
    'gallery.library': 'पुस्तकालय',
    'gallery.library.desc': 'समृद्ध पुस्तक संग्रह',
    'gallery.playground': 'खेल का मैदान',
    'gallery.playground.desc': 'विशाल खेल मैदान',
    'gallery.cultural': 'सांस्कृतिक कार्यक्रम',
    'gallery.cultural.desc': 'वार्षिक उत्सव और प्रतियोगिताएँ',
    'gallery.lab': 'प्रयोगशाला',
    'gallery.lab.desc': 'विज्ञान प्रयोगशाला',
    'gallery.outdoor': 'बाहरी गतिविधियाँ',
    'gallery.outdoor.desc': 'मज़ेदार बाहरी गतिविधियाँ और स्कूल परिवहन',
    'gallery.trip': 'शैक्षिक भ्रमण',
    'gallery.trip.desc': 'कक्षा से परे सीखना - शैक्षिक यात्राएँ',
    
    // Contact
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'हम आपकी सेवा के लिए सदैव उपलब्ध हैं',
    'contact.address.title': 'हमारा पता',
    'contact.address.line1': 'संस्कार शिक्षण संस्थान',
    'contact.address.line2': 'सोमपुर, बड़ी सादड़ी, जिला - चित्तौड़गढ़ ',
    'contact.address.line3': 'राज्य - राजस्थान',
    'contact.address.line4': 'पिन कोड - 312403',
    'contact.phone.title': 'संपर्क नंबर',
    'contact.phone.main': '+91 7742682383',
    'contact.email.title': 'ईमेल पता',
    'contact.email.address': 'sanskar120524@gmail.com',
    'contact.timing.title': 'विद्यालय का समय',
    'contact.timing.winter': 'शीतकाल: सुबह 9:30 - दोपहर 3:30',
    'contact.timing.summer': 'ग्रीष्मकाल: सुबह 8:30 - दोपहर 2:30',
    'contact.timing.sunday': 'रविवार: अवकाश',
    'contact.form.title': 'संदेश भेजें',
    'contact.form.name': 'नाम',
    'contact.form.name.placeholder': 'अपना नाम लिखें',
    'contact.form.phone': 'दूरभाष संख्या',
    'contact.form.phone.placeholder': 'दूरभाष संख्या दर्ज करें',
    'contact.form.email': 'ईमेल',
    'contact.form.email.placeholder': 'ईमेल दर्ज करें',
    'contact.form.message': 'संदेश',
    'contact.form.message.placeholder': 'अपना संदेश लिखें',
    'contact.form.submit': 'संदेश भेजें',
    
    // Footer
    'footer.tagline': 'ज्ञान से उज्ज्वल भविष्य की ओर',
    'footer.contact.title': 'संपर्क जानकारी',
    'footer.contact.location': 'सोमपुर, जिला - उदाहरण',
    'footer.contact.phone': 'दूरभाष: +91 7742682383',
    'footer.contact.email': 'ईमेल: sanskar120524@gmail.com',
    'footer.values.title': 'हमारे मूल्य',
    'footer.values.education': '• शिक्षा',
    'footer.values.service': '• सेवा',
    'footer.values.sanskar': '• संस्कार',
    'footer.social.title': 'हमें फॉलो करें',
    'footer.social.instagram': 'इंस्टाग्राम',
    'footer.copyright': '© 2026 संस्कार शिक्षण संस्थान, सोमपुर - सर्वाधिकार सुरक्षित',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Set English as default
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
