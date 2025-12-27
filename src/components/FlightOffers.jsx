"use client";

export default function FlightOffers() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-black font-bold mb-2">Flight Offer Deals</h2>
            <p className="text-gray-500">Competitive fares for your route-specific searches.</p>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Flight Cards Grid - 2x2 Layout with Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80" },
            { image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" },
            { image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80" },
            { image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80" }
          ].map((deal, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm overflow-hidden flex h-60 w-110">
              {/* Image with Heart - Left Side */}
              <div className="relative w-50 shrink-0">
                <img src={deal.image} alt="Destination" className="w-full h-full object-cover" />
                <button className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Card Content - Right Side */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                {/* Flight Route */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>09 Jun 2024</span>
                    </div>
                    <p className="font-bold text-black text-sm">Denmark</p>
                    <p className="text-xs text-gray-600 mt-1">Business</p>
                  </div>
                  
                  <div className="mx-2 mt-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 text-right">
                    <div className="flex items-center justify-end gap-1 text-xs text-gray-500 mb-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>16 Jun 2024</span>
                    </div>
                    <p className="font-bold text-black text-sm">New York</p>
                    <p className="text-xs text-gray-600 mt-1">Business</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <p className="text-xl text-black font-bold">$288.15</p>
                  </div>
                  <div>
                    <p className="text-xl text-black font-bold">$288.15</p>
                  </div>
                </div>

                {/* Seats and Book Button */}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">18 Seats left</p>
                  <button className="px-3 py-2 text-black rounded-full text-xs font-semibold hover:bg-gray-300 transition-colors" style={{backgroundColor: '#E4E6E8'}}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}