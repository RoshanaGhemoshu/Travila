"use client";
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="bg-blue-50 py-20 relative overflow-hidden" style={{paddingLeft: '380px'}}>
      {/* Decorative Dashed Line at Top */}
      <div className="absolute top-0 left-1/4 w-96 h-32" style={{paddingLeft: '150px'}}>
        <svg className="w-full h-full" viewBox="0 0 400 150">
          <path 
            d="M 50,100 Q 100,50 150,80 Q 200,110 250,70 Q 300,30 350,60" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="8,8"
          />
        </svg>
      </div>

      {/* Decorative Dashed Line (Original) */}
      <div className="absolute top-10 right-1/3 w-64 h-24">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <path 
            d="M 0,50 Q 50,10 100,50 T 200,50 Q 250,70 300,40" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="6,6"
          />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">
          {/* Left Column - Text Content (Takes 2 columns) */}
          <div className="lg:col-span-2" style={{paddingLeft: '95px'}}>
            {/* Client Avatars */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-white shadow-sm overflow-hidden">
                  <img
                    src="/images/client1.jpeg"
                    alt="Client 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-white shadow-sm -ml-2 overflow-hidden">
                  <img
                    src="/images/client2.jpeg"
                    alt="Client 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-white shadow-sm -ml-2 overflow-hidden">
                  <img
                    src="/images/client3.jpeg"
                    alt="Client 3"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold text-black">+100 testimonials</span>
            </div>

            <h2 className="text-5xl text-black font-bold mb-4 leading-tight">
              What our clients are saying about us?
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{color: '#737373'}}>
              Discover how you can offset your adventure&apos;s carbon emissions and support the sustainable initiatives practised by our operators worldwide.
            </p>
          </div>

          {/* Right Column - Testimonial Cards Side by Side (Takes 3 columns) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" style={{paddingLeft: '120px'}}>
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-10 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shrink-0">
                    <img
                      src="/images/client2.jpeg"
                      alt="Sara Mohamed"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base">Sara Mohamed</h4>
                    <p className="text-xs text-gray-500">Jakarta</p>
                  </div>
                  <div className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{color: '#737373'}}>
                  I&apos;ve been using the hotel booking system for several years now, and it&apos;s become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shrink-0">
                    <img
                      src="/images/client1.jpeg"
                      alt="Atend John"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black text-base">Atend John</h4>
                    <p className="text-xs text-gray-500">California</p>
                  </div>
                  <div className="flex items-center space-x-0.5">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{color: '#737373'}}>
                  I had a last-minute business trip, and the hotel booking system came in the rescue. I was able to find a high-quality hotel in no time and even got a great deal on the room. The confirmation process was straightforward, and I received all the necessary information promptly.
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center space-x-3 mt-20" style={{paddingRight: '800px'}}>
              <button className="w-10 h-10 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
                <span className="text-lg text-gray-700">🡠</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
                <span className="text-lg text-gray-700">🡢</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}