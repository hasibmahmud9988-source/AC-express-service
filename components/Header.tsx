
import React from 'react';
import { Phone, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-[#001A33] text-white py-2 px-4 flex justify-end items-center text-xs font-medium">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-[#FFCE00]" />
          <span>কল করুন: +8801601980359</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
             <div className="w-8 h-8 bg-[#001A33] rounded flex items-center justify-center">
                <span className="text-[#FFCE00] font-bold text-xs">AC</span>
             </div>
             <span className="font-bold text-lg text-[#001A33] tracking-tight">
                AC EXPRESS SERVICE
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-[#001A33] text-[14px] font-bold">
              <li className="hover:text-blue-600 transition-colors cursor-pointer"><a href="#home">হোম</a></li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer"><a href="#services">সার্ভিসসমূহ</a></li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer"><a href="#offers">অফার</a></li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer"><a href="#about">আমাদের সম্পর্কে</a></li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer"><a href="#contact">যোগাযোগ</a></li>
            </ul>
            
            <div className="flex items-center gap-6 ml-4">
              <button className="bg-[#FFCE00] text-[#001A33] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e6ba00] transition-all shadow-md active:scale-95">
                কোটেশন নিন
              </button>
              
              <button className="flex items-center gap-2 text-[#001A33] hover:text-blue-600 font-bold text-sm">
                <User size={18} className="text-[#FFCE00]" />
                <span>লগ-ইন</span>
              </button>

              <button className="relative p-1">
                <ShoppingCart size={22} className="text-[#001A33]" />
                <span className="absolute -top-1 -right-1 bg-[#FFCE00] text-[#001A33] text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold border border-white">0</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-[#001A33]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
            <ul className="space-y-4 text-base font-bold text-[#001A33]">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>হোম</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>সার্ভিসসমূহ</a></li>
              <li><a href="#offers" onClick={() => setIsMenuOpen(false)}>অফার</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>আমাদের সম্পর্কে</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>যোগাযোগ</a></li>
            </ul>
            <div className="pt-4 border-t flex flex-col gap-3">
              <button className="bg-[#FFCE00] text-[#001A33] py-3 rounded-xl font-bold">
                কোটেশন নিন
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
