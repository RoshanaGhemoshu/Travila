"use client";
import React, { useState } from 'react';
import { ChevronDown, Globe, Sun, Grid, Menu, X, Search, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tours');
  
  const filterButtons = ['Tours', 'Hotels', 'Tickets', 'Rental', 'Activities'];

  return (
    <>
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
              <span className="text-black text-2xl font-bold">Travila</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 flex-1 justify-center pr-1" style={{paddingLeft: '20px'}}>
              {['Home', 'Tours', 'Destinations', 'Activities', 'Hotel', 'Rental', 'Tickets', 'Pages', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-xl text-black hover:text-black flex items-center gap-1"
                >
                  <span>{item}</span>
                  {item !== 'Contact' && <ChevronDown className="w-3 h-3 mt-0.5" />}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3 ml-auto pl-20">
              <div className="flex items-center -space-x-3">
                <button className="flex items-center text-black text-xl px-3 py-2 rounded-lg transition">
                  <Globe className="w-5 h-5" />
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center text-black text-xl px-3 py-2 rounded-lg transition">
                  <span>USD</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <button className="px-3 py-2 bg-gray-100 hover:bg-gray-100 text-black rounded-full border border-gray-300 hover:border-gray-400">
                <Sun className="w-5 h-5" />
              </button>
              <button className="text-xl font-semibold text-black hover:text-gray-700 border border-gray-300 px-6 py-2 rounded-full hover:border-gray-400">
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

            {/* Mobile Menu Button */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{paddingLeft: '5px'}}>
          {/* Search Bar with Integrated Buttons */}
          <div className="bg-white rounded-full border border-gray-300 flex items-stretch mb-3 overflow-hidden">
            {/* Search Input - Gray Background - Takes more space */}
            <div className="flex-2 flex items-center gap-2 px-4 mr-2" style={{backgroundColor: '#F2F4F6'}}>
              <Search className="w-3.5 h-4 text-black shrink-0" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 outline-none text-gray-900 text-sm bg-transparent py-2 placeholder:text-[#737373]"
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar flex-1">
              {['Categories', 'Duration', 'Review / Rating', 'Price range', 'Language'].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-2 rounded-full text-sm font-medium text-black flex items-center space-x-2 border border-gray-200 whitespace-nowrap shrink-0"
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
    </>
  );
}