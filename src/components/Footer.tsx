export default function Footer() {
  return (
    <footer className="bg-[#4E342E] text-[#F5EFE6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="संस्कार शिक्षण संस्थान लोगो"
              className="h-24 w-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">संस्कार शिक्षण संस्थान</h3>
            <p className="text-[#D7C7A1] mb-2">सोमपुर</p>
            <p className="text-sm text-[#D7C7A1] leading-relaxed">
              ज्ञान से उज्ज्वल भविष्य की ओर
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">संपर्क जानकारी</h4>
            <div className="space-y-2 text-[#D7C7A1]">
              <p>सोमपुर, जिला - उदाहरण</p>
              <p>दूरभाष: 98765 43210</p>
              <p>दूरभाष: 98765 43211</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">हमारे मूल्य</h4>
            <ul className="space-y-2 text-[#D7C7A1]">
              <li>• शिक्षा</li>
              <li>• सेवा</li>
              <li>• संस्कार</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#6F4E37] text-center">
          <p className="text-[#D7C7A1] text-sm">
            © 2026 संस्कार शिक्षण संस्थान, सोमपुर - सर्वाधिकार सुरक्षित
          </p>
        </div>
      </div>
    </footer>
  );
}
