
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-[#FFCE00] rounded-lg flex items-center justify-center text-[#001A33] font-bold text-xl">
                  AC
               </div>
               <span className="font-bold text-2xl tracking-tight">AC EXPRESS SERVICE</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              ঢাকার অন্যতম টেকনিক্যাল সার্ভিস প্রোভাইডার। এসি, ফ্রিজ, ওয়াশিং মেশিন এবং হোম ক্লিনিং-এ আমরা বিশেষজ্ঞ।
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="text-[#FFCE00] shrink-0 mt-1" />
                <span className="font-medium">
                  ১৫/৫, ৬৭/১,পল্টন, চায়না টাউনের<br />
                  পশ্চিম পাশে, নয়া পল্টন
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-[#FFCE00]" />
                <span className="font-medium">+8801601980359</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-[#FFCE00]" />
                <span className="font-medium">acexpressservice24@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">লিঙ্কসমূহ</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-[#FFCE00] transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">সকল সার্ভিস</a></li>
              <li><a href="#offers" className="hover:text-[#FFCE00] transition-colors">অফারসমূহ</a></li>
              <li><a href="#" className="hover:text-[#FFCE00] transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-[#FFCE00] transition-colors">শর্তাবলী</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">আমাদের সেবাসমূহ</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">এসি সার্ভিসিং</a></li>
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">ফ্রিজ রিপেয়ার</a></li>
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">ওয়াশিং মেশিন</a></li>
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">কিচেন হুড ক্লিন</a></li>
              <li><a href="#services" className="hover:text-[#FFCE00] transition-colors">বাসা পরিষ্কার</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">নিউজলেটার</h4>
            <p className="text-gray-400 font-medium">লেটেস্ট অফার পেতে সাবস্ক্রাইব করুন।</p>
            <div className="flex flex-col gap-3">
              <div className="flex bg-white/10 rounded-xl overflow-hidden p-1 border border-white/10 focus-within:border-[#FFCE00] transition-all">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল" 
                  className="bg-transparent flex-1 px-4 py-3 outline-none text-sm text-white font-medium"
                />
                <button className="bg-[#FFCE00] text-[#001A33] px-4 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-bold">
            © {new Date().getFullYear()} AC Express Service. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
