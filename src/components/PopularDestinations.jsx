"use client";
import { ChevronDown } from 'lucide-react';

export default function PopularDestinations() {
  return (
    <div className="bg-white py-20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl text-black font-bold mb-3">Popular Destinations</h2>
            <p className="text-lg" style={{color: '#737373'}}>Favorite destinations based on customer reviews</p>
          </div>
          <div className="flex items-center space-x-3" style={{marginBottom: '4px', marginLeft: '40px'}}>
            {['Categories', 'Duration', 'Review / Rating', 'Price range'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 font-medium text-black hover:bg-gray-200 transition inline-flex items-center gap-1"
                style={{backgroundColor: '#E4E6E8', borderRadius: '50px', fontSize: '14px'}}
              >
                <span>{filter}</span>
                <ChevronDown className="w-3 h-3" style={{marginTop: '1px'}} />
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { name: 'Venice', tours: 356, activities: 248, image: '/images/venice.jpeg' },
            { name: 'Amsterdam', tours: 555, activities: 248, image: '/images/amsterdam.jpeg' },
            { name: 'Budapest', tours: 150, activities: 248, image: '/images/bupaset.jpeg' },
            { name: 'Lisbon', tours: 159, activities: 248, image: '/images/lisbon.jpeg' }
          ].map((dest, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group cursor-pointer">
              <div className="h-32 bg-gray-100 rounded-xl mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{dest.tours} Tours, {dest.activities} Activities</p>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                  🡢
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'London', tours: 356, activities: 248, image: '/images/london.jpeg' },
            { name: 'Ottawa', tours: 555, activities: 248, image: '/images/ottawa.jpeg' },
            { name: 'Paris', tours: 150, activities: 248, image: '/images/paris.jpeg' }
          ].map((dest, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group cursor-pointer">
              <div className="h-32 bg-gray-100 rounded-xl mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{dest.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{dest.tours} Tours, {dest.activities} Activities</p>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                  🡢
                </button>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-center items-start">
            <h3 className="font-bold text-xl mb-2" style={{color: '#737373'}}>
              Crafting Your<br /> Perfect Travel<br /> Experience
            </h3>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition flex items-center space-x-3">
              <div className="flex flex-col items-start pr-3">
                <span>Browse</span>
                <span>All destinations</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center">
                <span className="text-black">🡢</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

