"use client";
import { Heart, Star } from 'lucide-react';

export default function TopRatedHotels() {
  return (
    <div 
      className="py-20" 
      style={{
        backgroundColor: '#FFF0EC',
        backgroundImage: 'url("/images/white.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        paddingLeft: '60px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-5xl text-black font-bold mb-3">Top Rated Hotels</h2>
            <p className="text-gray-400 text-lg">Quality as judged by customers. Book at the ideal price!</p>
          </div>
          <div>
            <button className="mt-8 bg-black text-white px-8 py-3 text-sm transition flex items-center space-x-2" style={{borderRadius: '50px', transform: 'translateX(-300px)'}}>
              <span>View More</span>
              <span>🡢</span>
            </button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{width: '110%', minHeight: '400px'}}>
          {[
            {
              title: 'California Sunset/Twilight Boat Cruise',
              image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
              location: 'Manchester, England',
              rating: 4.96,
              reviews: 672,
              price: 48.25,
              stars: 5
            },
            {
              title: 'NYC: Food Tastings and Culture Tour',
              image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
              location: 'Manchester, England',
              rating: 4.96,
              reviews: 672,
              price: 17.32,
              stars: 5
            },
            {
              title: 'Grand Canyon Horseshoe Bend 2 days',
              image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
              location: 'Manchester, England',
              rating: 4.96,
              reviews: 672,
              price: 15.63,
              stars: 5
            },
            {
              title: 'California Sunset/Twilight Boat Cruise',
              image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
              location: 'Manchester, England',
              rating: 4.96,
              reviews: 672,
              price: 48.25,
              stars: 5
            }
          ].map((hotel, idx) => (
            <div key={idx} className="bg-white overflow-hidden border border-gray-100 shadow-lg transition-all duration-300 group" style={{borderRadius: '24px'}}>
              {/* Image */}
              <div className="relative h-64" style={{
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px'
              }}>
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition z-20">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Curved white overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{
                  borderTopLeftRadius: '32px',
                  borderTopRightRadius: '32px'
                }}></div>
                
                {/* Reviews on the right side at separation line */}
                <div className="absolute bottom-0 right-4 pb-2 z-20">
                  <div className="bg-white px-4 py-2 rounded-full flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-black">{hotel.rating}</span>
                    <span className="text-xs text-gray-500">({hotel.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                <h3 className="font-bold text-lg mb-2 line-clamp-2" style={{color: idx === 1 ? '#CFD8E2' : '#000000'}}>{hotel.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 fill-gray-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="ml-1">{hotel.location}</span>
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-8">
                  <div>
                    <span className="text-2xl font-bold">${hotel.price}</span>
                    <span className="text-gray-500 text-sm"> / person</span>
                  </div>
                  <button className="px-5 py-2.5 text-black text-sm font-semibold transition" style={{backgroundColor: '#E4E6E8', borderRadius: '12px'}}>
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