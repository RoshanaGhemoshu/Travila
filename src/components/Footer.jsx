"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-16 pb-12 border-b border-gray-800 pl-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/images/tree.png" 
                alt="Travila Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-2xl font-bold">Travila</span>
          </div>
          
          <div className="flex items-center space-x-2 mr-60">
            <span className="text-gray-400 text-sm">📞 Need help? Call us</span>
            <a href="tel:1-800-222-8888" className="text-yellow-400 text-2xl font-bold hover:text-yellow-500">
              1-800-222-8888
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-5 gap-6 mb-12">
    {/* Contact Info */}
    <div>
      <h4 className="font-semibold text-white text-base mb-6">Contact Us</h4>
      <div className="space-y-4 text-gray-400 text-s">
        <div className="flex items-start space-x-2">
          <span className="text-gray-500">📍</span>
          <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-gray-500">🕐</span>
          <span>Hours: 8:00 - 17:00, Mon - Sat</span>
        </div>
        <div className="flex items-start space-x-2">
          <span className="text-gray-500">✉️</span>
          <span>support@travila.com</span>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-white text-base font-semibold mb-4">Follow us</p>
        <div className="flex items-center space-x-3">
          <button className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition border border-gray-800">
            <span className="text-white text-sm">📷</span>
          </button>
          <button className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition border border-gray-800">
            <span className="text-white text-sm">f</span>
          </button>
          <button className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition border border-gray-800">
            <span className="text-white text-sm">𝕏</span>
          </button>
          <button className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition border border-gray-800">
            <span className="text-white text-sm">▶️</span>
          </button>
        </div>
      </div>
    </div>

    {/* Support */}
    <div>
      <h4 className="font-semibold text-white text-base mb-6">Support</h4>
      <ul className="space-y-4 text-gray-400 text-s">
        <li><a href="#" className="hover:text-white transition">Forum support</a></li>
        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
        <li><a href="#" className="hover:text-white transition">Live chat</a></li>
        <li><a href="#" className="hover:text-white transition">How it works</a></li>
        <li><a href="#" className="hover:text-white transition">Security</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy</a></li>
        <li><a href="#" className="hover:text-white transition">Charges logo</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold text-white text-base mb-6">Company</h4>
      <ul className="space-y-4 text-gray-400 text-s">
        <li><a href="#" className="hover:text-white transition">About Us</a></li>
        <li><a href="#" className="hover:text-white transition">Community Blog</a></li>
        <li><a href="#" className="hover:text-white transition">Jobs and Careers</a></li>
        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
        <li><a href="#" className="hover:text-white transition">Our Awards</a></li>
        <li><a href="#" className="hover:text-white transition">Agencies</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-semibold text-white text-base mb-6">Services</h4>
      <ul className="space-y-4 text-gray-400 text-s">
        <li><a href="#" className="hover:text-white transition">Tour Guide</a></li>
        <li><a href="#" className="hover:text-white transition">Tour Booking</a></li>
        <li><a href="#" className="hover:text-white transition">Hotel Booking</a></li>
        <li><a href="#" className="hover:text-white transition">Ticket Booking</a></li>
        <li><a href="#" className="hover:text-white transition">Rental Services</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h4 className="font-semibold text-white text-base mb-6">Legal</h4>
      <ul className="space-y-4 text-gray-400 text-s">
        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white transition">Cookies Policy</a></li>
        <li><a href="#" className="hover:text-white transition">Data Processing</a></li>
        <li><a href="#" className="hover:text-white transition">Data Policy</a></li>
        <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
    <p className="text-gray-400 text-s">© 2024 Travila Inc. All rights reserved.</p>
    <div className="flex items-center space-x-8 text-s text-gray-400">
      <a href="#" className="hover:text-white transition">Terms</a>
      <a href="#" className="hover:text-white transition">Privacy policy</a>
      <a href="#" className="hover:text-white transition">Legal notice</a>
      <a href="#" className="hover:text-white transition">Accessibility</a>
    </div>
    <button className="w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition">
      <span className="text-white text-lg">↑</span>
    </button>
  </div>
</div>
      </div>
    </footer>
  );
}
