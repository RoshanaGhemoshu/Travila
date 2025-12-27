"use client";

export default function NewsLetter() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-white py-20" style={{marginTop: '-60px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 rounded-3xl p-16">
            <div className="max-w-xl">
              <div className="inline-block bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold mb-6">
                Join our newsletter
              </div>
              <h2 className="text-3xl text-black font-bold mb-8 leading-snug">
                Subscribe to see secret deals prices drop the moment you sign up!
              </h2>
              <div className="flex items-center bg-white rounded-full pl-8 pr-2 py-2 mb-4 shadow-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 border-0 outline-none text-gray-400 bg-transparent text-base"
                />
                <button className="bg-black text-white px-16 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition whitespace-nowrap" style={{margin: '-8px -8px -8px 0'}}>
                  Subscribe
                </button>
              </div>
              <p className="text-xs" style={{color: '#737373'}}>No ads. No trails. No commitments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="w-full bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/images/background.png" 
            alt="Landmarks Background" 
            className="w-full h-auto opacity-100"
          />
        </div>
      </div>
    </>
  );
}