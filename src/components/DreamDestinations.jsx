"use client";

export default function DreamDestinations() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop" 
              alt="Travel" 
              className="rounded-2xl w-70 h-96 object-cover"
            />
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1530053969600-caed2596d242?w=600&h=400&fit=crop" 
                alt="Swimming" 
                className="rounded-2xl w-40 h-44 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop" 
                alt="Beach" 
                className="rounded-2xl w-40 h-48 object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold text-black mb-3 inline-block px-4 py-2" style={{backgroundColor: '#F2F4F6', borderRadius: '50px'}}>Easy payment</p>
            <h2 className="text-black font-bold mb-6 leading-tight" style={{fontSize: '52px'}}>
              Discover Dream Destinations with Ease
            </h2>
            <p className="text-lg mb-8" style={{color: '#737373'}}>
              Discover how you can offset your adventure&apos;s carbon emissions and support the sustainable initiatives practised by our operators worldwide.
            </p>
            <div className="flex items-center justify-center gap-2 pr-7">
              {/* PayPal */}
              <div className="border border-gray-200 rounded-sm px-3 py-3 bg-white">
                <img src="/images/paypal.png" alt="PayPal" className="h-8 w-20 object-contain" />
              </div>
              
              {/* Stripe */}
              <div className="border border-gray-200 rounded-sm px-3 py-3 bg-white flex items-center justify-center">
                <img src="/images/stripe.png" alt="Stripe" className="h-8 w-auto object-contain" />
              </div>
              
              {/* Mastercard */}
              <div className="border border-gray-200 rounded-sm px-3 py-3 bg-white flex items-center justify-center">
                <img src="/images/orange.png" alt="Mastercard" className="h-8 w-20 object-contain" />
              </div>
              
              {/* Skrill */}
              <div className="border border-gray-200 rounded-sm px-3 py-3 bg-white">
                <img src="/images/skrill.png" alt="Skrill" className="h-8 w-20 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}