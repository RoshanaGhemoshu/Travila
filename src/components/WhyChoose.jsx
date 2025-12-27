"use client";

export default function WhyChoose() {
  return (
    <div className="py-20" style={{backgroundColor: 'white'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div style={{marginTop: '-100px'}}>
            <p className="text-xs font-semibold text-black mb-3 inline-block px-4 py-2" style={{backgroundColor: '#F2F4F6', borderRadius: '50px'}}>Why Choose Us</p>
            <h2 className="text-5xl text-black font-bold mb-6 leading-tight">
              Dare to live the life you&apos;ve always wanted
            </h2>
            <p className="mb-8" style={{
              color: '#737373',
              fontFamily: 'Manrope',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '32px',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Discover how you can offset your adventure&apos;s carbon emissions and support the sustainable initiatives practised by our operators worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* 4500+ Destination - Yellow Box */}
            <div className="rounded-3xl p-6" style={{
              backgroundColor: '#FEFA17',
              maxWidth: '288px',
              height: '275px',
              borderRadius: '32px'
            }}>
              <img src="/images/grid.png" alt="4500+ Destination" className="w-full h-32 object-contain mb-4" />
              <h3 className="font-bold text-black text-xl mb-2">4500+ Destination</h3>
              <p className="text-sm" style={{color: '#B8860B'}}>Our expert team handpicked all destinations in this site.</p>
            </div>

            {/* Great 24/7 Support - White Box */}
            <div className="bg-white rounded-3xl p-6 -mt-10" style={{
              maxWidth: '288px',
              height: '275px',
              borderRadius: '32px',
              border: '1px solid #E5E7EB'
            }}>
              <img src="/images/girl.png" alt="Great 24/7 Support" className="w-full h-32 object-cover rounded-2xl mb-4" />
              <h3 className="font-bold text-black text-xl mb-2">Great 24/7 Support</h3>
              <p className="text-sm text-gray-400">We are here to help, before, during, and even after your trip.</p>
            </div>

            {/* Fast Booking - Gray Box */}
            <div className="rounded-3xl overflow-hidden" style={{
              backgroundColor: '#F3F4F6',
              maxWidth: '288px',
              height: '275px',
              borderRadius: '32px'
            }}>
              <img src="/images/booking.png" alt="Fast Booking" className="w-full h-full object-cover" />
            </div>

            {/* Best Price - Orange Box */}
            <div className="rounded-3xl overflow-hidden relative -mt-10" style={{
              backgroundColor: '#FF9500',
              maxWidth: '288px',
              height: '275px',
              borderRadius: '32px'
            }}>
              <img src="/images/pig.png" alt="Best Price" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}