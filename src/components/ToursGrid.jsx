"use client";
import { Heart, Star } from 'lucide-react';

export default function ToursGrid({ tours, countdown }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6">
        {tours.map((tour, index) => (
          <div 
            key={tour.id} 
            className={`bg-white shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden ${index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`} 
            style={{borderRadius: '24px'}}
          >
            <div className="relative h-64" style={{
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px'
            }}>
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition z-20">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Curved white overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-white" style={{
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px'
              }}></div>
              
              {/* Exceptional badge and Reviews on the separation line */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 pb-2 z-20">
                {tour.badge ? (
                  <div className="bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <span>⚡</span>
                    <span>{tour.badge}</span>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="bg-white px-4 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-black">{tour.rating}</span>
                  {tour.reviews > 0 && (
                    <span className="text-xs text-gray-500">({tour.reviews} reviews)</span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-5 bg-white pt-4">
              <h3 className="font-bold text-black text-lg mb-2 line-clamp-2 leading-snug">{tour.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{tour.duration}</span>
                <span className="mx-2">·</span>
                <span>{tour.groupSize}</span>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-2xl text-black font-bold">${tour.price}</span>
                  <span className="text-gray-500 text-sm">/ person</span>
                </div>
                
                {tour.promotion ? (
                  <div className="shrink-0">
                    <p className="text-xs text-gray-500 mb-1 text-left">Promotion will end in</p>
                    <div className="flex items-start gap-1.5">
                      <div className="text-center bg-gray-100 rounded-lg px-2 py-1.5 min-w-6">
                        <div className="text-base text-black font-bold leading-tight">{countdown.days}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">Days</div>
                      </div>
                      <div className="text-center bg-gray-100 rounded-lg px-2 py-1.5 min-w-6">
                        <div className="text-base text-black font-bold leading-tight">{countdown.hours}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">Hours</div>
                      </div>
                      <div className="text-center bg-gray-100 rounded-lg px-2 py-1.5 min-w-6">
                        <div className="text-base text-black font-bold leading-tight">{countdown.mins}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">Mins</div>
                      </div>
                      <div className="text-center bg-gray-100 rounded-lg px-2 py-1.5 min-w-6">
                        <div className="text-base text-black font-bold leading-tight">{countdown.secs}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">Secs</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button className="px-6 py-3 text-black text-sm font-semibold transition shrink-0" style={{backgroundColor: '#E4E6E8', borderRadius: '20px'}}>
                    Book Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}