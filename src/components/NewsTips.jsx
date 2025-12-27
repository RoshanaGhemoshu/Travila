"use client";
import { Heart } from 'lucide-react';
import './globals.css';

export default function NewsTips() {
  return (
    <div className="bg-white py-15" style={{paddingLeft: '380px'}}>
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12" style={{paddingLeft: '120px'}}>
          <div>
            <h2 className="text-6xl text-black font-bold mb-2">News, Tips & Guides</h2>
            <p className="text-gray-400">Favorite destinations based on customer reviews</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition flex items-center gap-2" style={{marginRight: '420px'}}>
            <span>View More</span>
            <span>🡢</span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8" style={{paddingLeft: '120px', marginRight: '400px'}}>
          {[
            {
              category: 'Cultural',
              date: '18 Sep 2024',
              readTime: '6 mins',
              comments: '38 comments',
              title: 'Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey',
              author: 'Jimmy Dave',
              type: 'Keep Reading',
              image: '/images/culture.jpeg'
            },
            {
              category: 'Travel',
              date: '18 Sep 2024',
              readTime: '6 mins',
              comments: '38 comments',
              title: 'Top 10 Travel Hacks for Budget-Conscious Adventurers',
              author: 'Jimmy Dave',
              type: 'Keep Reading',
              image: '/images/travel.jpeg'
            },
            {
              category: 'Discovery',
              date: '18 Sep 2024',
              readTime: '6 mins',
              comments: '38 comments',
              title: 'Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips',
              author: 'Jimmy Dave',
              type: 'Keep Reading',
              image: '/images/discover.jpeg'
            }
          ].map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition group">
              {/* Image */}
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.category}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                />
                
                {/* Category Badge - Top Left */}
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs font-semibold text-black">{post.category}</span>
                </div>
                
                {/* Heart Icon - Top Right */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition">
                  <Heart className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Meta Info */}
                <div className="flex items-center space-x-1.5 mb-3 text-xs text-black">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                  <span className="text-gray-300">•</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                  <span className="text-gray-300">•</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span>{post.comments}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-4 leading-tight line-clamp-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between mt-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-gray-300 rounded-full overflow-hidden">
                      <img
                        src="/images/client4.jpeg"
                        alt={post.author}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-sm font-semibold text-black">{post.author}</span>
                  </div>
                  <button className="text-sm font-semibold text-black hover:text-blue-600 transition px-4 py-2 rounded-full" style={{backgroundColor: '#E4E6E8'}}>
                    {post.type}
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
