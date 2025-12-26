"use client";
import React, { useState, useEffect } from 'react'; 
import { Search, ChevronDown, Heart, Star, Globe, DollarSign, Sun, Grid, Sparkles, Menu, X } from 'lucide-react';
import Footer from "@/components/Footer";
import './globals.css';

export default function TravilaWebsite() {
  
  const [activeFilter, setActiveFilter] = useState('Tours');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ADD COUNTDOWN STATE AND EFFECT HERE
  const [countdown, setCountdown] = useState({ days: 228, hours: 9, mins: 50, secs: 44 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  const tours = [
    {
      id: 1,
      title: 'California Sunset/Twilight Boat Cruise',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      badge: 'Exceptional',
      rating: 5.00,
      reviews: 0,
      duration: '7 days 6 nights',
      groupSize: 'Small group',
      price: 35.62,
      countdown: { days: 228, hours: 9, mins: 50, secs: 44 },
      promotion: true
    },
    {
      id: 2,
      title: 'California Sunset/Twilight Boat Cruise',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '2 days 3 nights',
      groupSize: 'Family',
      price: 48.25
    },
    {
      id: 3,
      title: 'NYC: Food Tastings and Culture Tour',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '3 days 3 nights',
      groupSize: 'Company',
      price: 17.32
    },
    {
      id: 4,
      title: 'Grand Canyon Horseshoe Bend 2 days',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      rating: 4.96,
      reviews: 672,
      duration: '7 days 6 nights',
      groupSize: 'Small group',
      price: 15.63
    }
  ];

  const filterButtons = ['Tours', 'Hotels', 'Tickets', 'Rental', 'Activities'];
  
  return (
    <div className="min-h-screen bg-white">
{/* Top Banner */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-[14px] leading-[22px] tracking-[0%]" style={{fontFamily: 'Manrope'}}>
            Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences
          </span>
          <button className="ml-4 flex items-center space-x-1 text-[14px] font-normal leading-[24px] tracking-[0%]" style={{fontFamily: 'Manrope', color: '#F09814'}}>
            <span>Get This Now</span>
            <span className="text-white mt-0.5">🡢</span>
          </button>
        </div>
      </div>

{/* Header */}
        <header className="bg-white border-b sticky top-0 z-50 shadow-md">
          <div className="w-full px-4 sm:px-6 lg:px-4">
            <div className="flex items-center h-15">
            {/* Logo */}
<div className="flex items-center space-x-2">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
    <img 
      src="/images/tree.png" 
      alt="Travila Logo" 
      className="w-9 h-10 object-contain"
    />
  </div>
  <span className="text-black text-xl font-bold">Travila</span>
</div>
{/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-5 flex-1 justify-center  pr-1 " style={{paddingLeft: '20px'}}>
                {['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="text-xs text-black hover:text-black flex items-center gap-1"
                  >
                    <span>{item}</span>
                    {item !== 'Contact' && <ChevronDown className="w-3 h-3 mt-0.5" />}
                  </button>
                ))}
              </nav>
             <div className="hidden md:flex items-center space-x-3 ml-auto pl-20">
  <div className="flex items-center -space-x-3">
    <button className="flex items-center text-black text-xs px-3 py-2 rounded-lg transition">
      <Globe className="w-5 h-5" />
      <span>EN</span>
      <ChevronDown className="w-3 h-3" />
    </button>
    <button className="flex items-center text-black text-xs px-3 py-2 rounded-lg transition">
      <span>USD</span>
      <ChevronDown className="w-3 h-3" />
    </button>
  </div>
  <button className="px-3 py-2 bg-gray-100 hover:bg-gray-100 text-black rounded-full border border-gray-300 hover:border-gray-400">
    <Sun className="w-5 h-5" />
  </button>
  <button className="text-xs font-semibold text-black hover:text-gray-700 border border-gray-300 px-6 py-2 rounded-full hover:border-gray-400">
    Signin
  </button>
  <button className="bg-yellow-200 hover:bg-yellow-200 p-2.5 rounded-lg transition">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <rect x="2" y="2" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="8" y="2" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="14" y="2" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="2" y="8" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="8" y="8" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="14" y="8" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="2" y="14" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="8" y="14" width="3" height="3" rx="0.5" fill="black"/>
      <rect x="14" y="14" width="3" height="3" rx="0.5" fill="black"/>
    </svg>
  </button>
</div>
              {/* Mobile Menu Button*/}
              <button 
                className="md:hidden p-2 text-black ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t space-y-2">
                {['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </button>
                ))}
        
                {/* Mobile Actions */}
                <div className="border-t pt-4 px-4 space-y-3">
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                    <Globe className="w-4 h-4" />
                    <span>EN</span>
                  </button>
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                    <span>USD</span>
                  </button>
                  <button className="flex items-center text-black space-x-2 w-full py-2">
                    <Sun className="w-5 h-5" />
                    <span>Theme</span>
                  </button>
                  <button className="w-full text-left font-semibold text-black py-2">Signin</button>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 p-2.5 rounded-lg transition flex items-center justify-center">
                    <Grid className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>
{/* Search Section */}
<div className="bg-white py-4 border-b mt-5">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{paddingLeft: '5px'}}>
    {/* Search Bar with Integrated Buttons */}
    <div className="bg-white rounded-full border border-gray-300 flex items-stretch mb-3 overflow-hidden">
      {/* Search Input - Gray Background - Takes more space */}
      <div className="flex-2 flex items-center gap-2 px-4 mr-2" style={{backgroundColor: '#F2F4F6'}}>
        <Search className="w-3.5 h-4 text-black shrink-0" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-1 outline-none text-gray-900 text-xs bg-transparent py-2 placeholder:text-[#737373]"
        />
      </div>
      
      {/* Filter Buttons - White Background */}
      <div className="flex items-center gap-2 px-2 bg-white">
        {filterButtons.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-s font-medium transition whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-black text-white'
                : 'bg-transparent text-gray-700'
            }`}
          >
            {filter === 'Hotels' ? (
              <div className="flex flex-col items-center leading-tight">
                <span className="text-sm">Hot</span>
                <span className="text-sm">els</span>
              </div>
            ) : (
              <span>{filter}</span>
            )}
          </button>
        ))}
      </div>
    </div>

    {/* Filters Row */}
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar flex-1">
        {['Categories', 'Duration', 'Review / Rating', 'Price range', 'Language'].map((filter) => (
          <button
            key={filter}
            className="px-3 py-2 rounded-full text-xs font-medium text-black flex items-center space-x-2 border border-gray-200 whitespace-nowrap shrink-0"
            style={{backgroundColor: '#E4E6E8'}}
          >
            <span>{filter}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>
  <div className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 text-[14px] font-medium leading-[22px] tracking-[0%] whitespace-nowrap" style={{fontFamily: 'Manrope', color: '#000000'}}>
  <span>Sort from High to Low</span>
  <div className="flex items-center gap-0.5">
    <svg className="w-5 h-5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9V3M6 3L3 6M6 3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <svg className="w-5 h-5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3v6M6 9l3-3M6 9L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</div>
    </div>
  </div>
</div>
{/* Main Content */}
<div className="w-full px-4 sm:px-6 lg:px-8">
  {/* Hero Title */}
  <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start justify-between gap-4 mt-10">
  <div style={{paddingLeft: '220px'}} >
    <h1 className="text-3xl sm:text-5xl lg:text-6xl text-black font-bold mb-3 leading-tight">
      Your Journey, Your Way
    </h1>
    <p className="text-base sm:text-lg lg:text-xl" style={{color: '#8E8E8E'}}>
      Discover the World's Treasures with Travila
    </p>
  </div>
<div className="flex space-x-3 relative right-30 mt-16">
  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 hover:bg-gray-700 flex items-center justify-center transition border border-gray-200">
    <span className="text-lg sm:text-xl text-black">🡠</span>
  </button>
  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 hover:bg-gray-700 flex items-center justify-center transition border border-gray-200">
    <span className="text-lg sm:text-xl text-black">🡢</span>
  </button>
</div>
  </div>

{/* Tours Grid */}
<div className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6">
    {tours.map((tour, index) => (
      <div key={tour.id} className={`bg-white shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden ${index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`} style={{
        borderRadius: '24px'
      }}>
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
              <button className="px-6 py-3 text-black text-sm font-semibold transition flex-shrink-0" style={{backgroundColor: '#E4E6E8', borderRadius: '20px'}}>
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
       {/* Popular Destinations Section */}
      <div className="bg-white py-20 border-t ">
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
                    →
                  </button>
                </div>
              </div>
            ))}
            {/* CTA Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl mb-2" style={{color: '#737373'}}>Crafting Your<br /> Perfect Travel<br /> Experience</h3>
              <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition flex items-center space-x-3">
  <div className="flex flex-col items-start pr-3">
    <span>Browse </span>
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

      {/* Top Rated Hotels Section */}
      <div 
  className="py-20 pl-15" 
  style={{
    backgroundColor: '#FFF0EC',
    backgroundImage: 'url("/images/white.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center'
  }}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-5xl text-black font-bold mb-3">Top Rated Hotels</h2>
              <p className="text-gray-400 text-lg">Quality as judged by customers. Book at the ideal price!</p>
            </div>
            <div>
  <button className="mt-8 bg-black text-white px-8 py-3 text-s  transition flex items-center space-x-2" style={{borderRadius: '50px', transform: 'translateX(-300px)'}}>
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
      {/* Why Choose Us Section */}
      <div className="py-30 style={{backgroundcolor: '#E4E6E8'}}">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div style={{marginTop: '-100px'}}>
              <p className="text-xs font-semibold text-black mb-3 inline-block px-4 py-2" style={{backgroundColor: '#F2F4F6', borderRadius: '50px'}}>Why Choose Us</p>
              <h2 className="text-5xl text-black font-bold mb-6 leading-tight">
                Dare to live the lift you've always wanted
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
                Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
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
                <div className="absolute top-6 left-6 z-10">
                </div>
                <img src="/images/pig.png" alt="Best Price" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Flight Offer Deals Section */}
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
                <p className="text-xs text-gray-600 mt-15">Business</p>
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
                <p className="text-xs text-gray-600 mt-15">Business</p>
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

      {/* Adventure Banners Section */}
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
            View More 🡢
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
      View More <span className="text-xl">🡢</span>
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
      View More <span className="text-xl">🡢</span>
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
      {/* Discover Dream Destinations Section */}
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
              <p className="text-black text-lg mb-8" style={{color: '#737373'}}>
                Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
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

{/* Testimonials Section */}
<div className="bg-blue-50 py-20 relative overflow-hidden">
  {/* Decorative Dashed Line at Top */}
  <div className="absolute top-0 left-1/4 w-96 h-32">
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
        <p className=" text-base leading-relaxed max-w-lg" style={{color: '#737373'}}>
          Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practised by our operators worldwide.
        </p>
      </div>

      {/* Right Column - Testimonial Cards Side by Side (Takes 3 columns) */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" style={{paddingLeft: '30px'}}>
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-15 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
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
            <p className=" text-sm leading-relaxed" style={{color: '#737373'}}>
              I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/images/client1.jpeg"
                  alt="Atend John"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-black text-base">Atend John</h4>
                <p className="text-xs text-gray-500">Califonia</p>
              </div>
              <div className="flex items-center space-x-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className=" text-sm leading-relaxed" style={{color: '#737373'}}>
              I had a last-minute business trip, and the hotel booking system came in the rescue. I was able to find a high-quality hotel in no time and even got a great deal on the room. The confirmation process was straightforward, and I received all the necessary information promptly.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center space-x-3 mt-20" style={{paddingRight: '200px'}}>
  <button className="w-10 h-10 rounded-full bg-gray-200 shadow-md flex items-center justify-center ">
    <span className="text-lg text-gray-700">🡠</span>
  </button>
  <button className="w-10 h-10 rounded-full bg-gray-200 shadow-md flex items-center justify-center ">
    <span className="text-lg text-gray-700">🡢</span>
  </button>
</div>
      </div>
    </div>
  </div>
</div>
     {/* News, Tips & Guides Section */}
<div className="bg-white py-20" style={{paddingLeft: '60px'}}>
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-12" style={{paddingLeft: '30px'}}>
      <div>
        <h2 className="text-6xl text-black font-bold mb-2">News, Tips & Guides</h2>
        <p className="text-gray-400">Favorite destinations based on customer reviews</p>
      </div>
      <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition flex items-center gap-2" style={{marginRight: '105px'}}>
        <span>View More</span>
        <span>🡢</span>
      </button>
    </div>

{/* Blog Cards */}
<div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8" style={{paddingLeft: '30px', marginRight: '100px'}}>
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
        <div className="flex items-center space-x-1.5 mb-3 text-s text-black">
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
            <span className="text-s font-semibold text-black">{post.author}</span>
          </div>
          <button className="text-s font-semibold text-black hover:text-blue-600 transition px-4 py-2 rounded-full" style={{backgroundColor: '#E4E6E8'}}>
            {post.type}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
{/* Newsletter Section */}
<div className="bg-white py-20" style={{marginTop: '-15px'}}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-blue-100 h-110 rounded-4xl p-16">
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
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
    <img 
      src="/images/background.png" 
      alt="Landmarks Background" 
      className="w-full h-auto opacity-100"
    />
  </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
