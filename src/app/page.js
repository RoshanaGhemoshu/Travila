"use client";
import React, { useState, useEffect } from 'react'; 
import { Search, ChevronDown, Heart, Star, Globe, DollarSign, Sun, Grid, Sparkles, Menu, X, MapPin } from 'lucide-react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Adventure from "@/components/Adventure";
import DreamDestinations from "@/components/DreamDestinations";
import FlightOffers from "@/components/FlightOffers";
import NewsLetter from "@/components/NewsLetter";
import NewsTips from "@/components/NewsTips";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import TopRatedHotels from "@/components/TopRatedHotels";
import ToursGrid from "@/components/ToursGrid";
import WhyChoose from "@/components/WhyChoose";
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
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start justify-between gap-4 mt-10" style={{paddingLeft: '600px'}}>
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-black font-bold mb-3 leading-tight">
              Your Journey, Your Way
            </h1>
            <p className="text-base sm:text-lg lg:text-xl" style={{color: '#8E8E8E'}}>
              Discover the World's Treasures with Travila
            </p>
          </div>
          <div className="flex space-x-3 mt-16" style={{paddingRight: '620px'}}>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 hover:bg-gray-700 flex items-center justify-center transition border border-gray-200">
              <span className="text-lg sm:text-xl text-black">🡠</span>
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 hover:bg-gray-700 flex items-center justify-center transition border border-gray-200">
              <span className="text-lg sm:text-xl text-black">🡢</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Tours Grid Component */}
      <ToursGrid tours={tours} countdown={countdown} />

      {/* Popular Destinations Component */}
      <PopularDestinations />

      {/* Top Rated Hotels Component */}
      <TopRatedHotels />

      {/* Why Choose Us Component */}
      <WhyChoose />

      {/* Flight Offers Component */}
      <FlightOffers />

      {/* Adventure Component */}
      <Adventure />

      {/* Dream Destinations Component */}
      <DreamDestinations />

      {/* Testimonials Component */}
      <Testimonials />

      {/* News Tips Component */}
      <NewsTips />

      {/* Newsletter Component */}
      <NewsLetter />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
