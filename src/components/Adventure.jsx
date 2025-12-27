"use client";

export default function Adventure() {
  return (
    <div className="bg-white py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Banner 1 */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop" 
              alt="Camping" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-10 left-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Waking up in a far away place</h3>
              <button className="text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition" style={{backgroundColor: '#FEFA17'}}>
                View More →
              </button>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop" 
              alt="Beach" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-10 right-5">
              <p className="text-sm mb-2 text-black font-medium">Explore the World</p>
              <h3 className="text-2xl font-bold mb-6 text-black leading-tight">
                The adventure<br />starts today
              </h3>
              <button className="text-black px-3 py-6 rounded-full text-base font-semibold hover:bg-yellow-300 transition inline-flex items-start justify-start gap-2" style={{backgroundColor: '#FEFA17', paddingTop: '12px', paddingBottom: '32px'}}>
                View More <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" 
              alt="Nature" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-10 right-5">
              <p className="text-sm mb-2 text-white font-medium">Dream Vacations</p>
              <h3 className="text-2xl font-bold mb-6 text-white leading-tight">
                Start your<br />journey Now
              </h3>
              <button className="text-black px-3 py-6 rounded-full text-base font-semibold hover:bg-yellow-300 transition inline-flex items-start justify-start gap-2" style={{backgroundColor: '#FEFA17', paddingTop: '12px', paddingBottom: '32px'}}>
                View More <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Banner 4 */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" 
              alt="Mountain" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-10 left-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Waking up in a far away place</h3>
              <button className="text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition" style={{backgroundColor: '#FEFA17'}}>
                View More 🡢
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}