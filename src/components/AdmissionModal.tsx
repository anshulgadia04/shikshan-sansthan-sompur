import { useState, useEffect } from 'react';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdmissionModalProps {
  onEnquireNow: () => void;
}

export default function AdmissionModal({ onEnquireNow }: AdmissionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { language } = useLanguage();

  // Calculate academic year automatically
  const getAcademicYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-11 (0 = January)
    
    // If current month is April (3) or later, show current year to next year
    // Otherwise show previous year to current year
    if (currentMonth >= 3) { // April onwards
      return `${currentYear}-${currentYear + 1}`;
    } else {
      return `${currentYear - 1}-${currentYear}`;
    }
  };

  useEffect(() => {
    // Show modal after 7 seconds, only once per session
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEnquire = () => {
    setIsOpen(false);
    onEnquireNow();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-[#4E342E]" />
        </button>

        {/* Header with Image */}
        <div className="relative h-48 sm:h-64 bg-gradient-to-br from-[#6F4E37] via-[#8B6F47] to-[#A0826D] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/gallery-1.webp')] bg-cover bg-center opacity-40"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
            {/* <div className="bg-white/20 backdrop-blur-md rounded-full p-4 mb-4 animate-bounce">
              <GraduationCap className="w-12 h-12" />
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 drop-shadow-lg">
              {language === 'en' ? 'Admissions Open!' : 'प्रवेश खुले हैं!'}
            </h2>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Calendar className="w-5 h-5" />
              <span>{language === 'en' ? 'Academic Year' : 'शैक्षणिक वर्ष'} {getAcademicYear()}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#4E342E] mb-3 text-center">
              {language === 'en' 
                ? 'Join Sanskar Shikshan Sansthan' 
                : 'संस्कार शिक्षण संस्थान में शामिल हों'
              }
            </h3>
            <p className="text-[#6F4E37] text-center text-lg leading-relaxed">
              {language === 'en'
                ? 'Give your child the gift of quality education. Limited seats available for the upcoming academic year!'
                : 'अपने बच्चे को गुणवत्तापूर्ण शिक्षा का उपहार दें। आगामी शैक्षणिक वर्ष के लिए सीमित सीटें उपलब्ध हैं!'
              }
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleEnquire}
              className="flex-1 bg-gradient-to-r from-[#6F4E37] to-[#8B6F47] hover:from-[#5D3E2E] hover:to-[#6F4E37] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span className="text-lg">
                {language === 'en' ? 'Enquire Now' : 'अभी पूछताछ करें'}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleClose}
              className="sm:w-auto px-6 py-4 border-2 border-[#6F4E37] text-[#6F4E37] font-semibold rounded-xl hover:bg-[#F5EFE6] transition-all duration-300"
            >
              {language === 'en' ? 'Maybe Later' : 'बाद में'}
            </button>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-2 bg-gradient-to-r from-[#6F4E37] via-[#8B6F47] to-[#A0826D]"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
