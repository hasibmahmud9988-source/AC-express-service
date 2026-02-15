
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { FadeIn, ScaleIn } from './MotionWrapper';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#e0f2fe]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e0f2fe] via-[#e0f2fe]/60 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1920" 
          alt="AC Environment" 
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Animated Air Flow Lines */}
        <svg className="absolute top-1/4 right-0 w-full h-1/2 z-0 opacity-30 pointer-events-none" viewBox="0 0 800 400" fill="none">
          <motion.path
            d="M 800 100 Q 600 150 400 100 T 0 150"
            stroke="url(#gradient-blue)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0], x: [-100, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 800 150 Q 600 200 400 150 T 0 200"
            stroke="url(#gradient-blue)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0], x: [-150, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#001A33] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCE00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFCE00]"></span>
              </span>
              ঢাকার সবচেয়ে বিশ্বস্ত টেকনিক্যাল সার্ভিস
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight">
              ঠাণ্ডা থাকুন, <span className="text-blue-600">নিশ্চিন্ত</span> থাকুন ২৪/৭
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed font-medium">
              এসি সার্ভিসিং, ফ্রিজ রিপেয়ার এবং হোম ক্লিনিং-এ ঢাকার এক নম্বর প্রতিষ্ঠান। আমরা পৌঁছে যাবো আপনার দরজায়।
            </p>

            <div className="bg-white/90 backdrop-blur p-2 rounded-2xl shadow-2xl border border-white flex flex-col md:flex-row gap-2 max-w-2xl transform hover:scale-[1.02] transition-transform">
              <div className="flex-1 flex items-center px-4 gap-3 bg-gray-50 rounded-xl">
                <Search className="text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="কোন সার্ভিসটি খুঁজছেন?" 
                  className="w-full py-3 bg-transparent outline-none text-gray-700 font-bold"
                />
              </div>
              <div className="hidden md:flex items-center px-4 gap-2 border-l border-gray-200">
                <MapPin className="text-[#001A33]" size={18} />
                <span className="text-gray-600 font-bold whitespace-nowrap">ঢাকা সিটি</span>
              </div>
              <button className="bg-[#FFCE00] text-[#001A33] px-10 py-4 rounded-xl font-black hover:bg-[#e6ba00] transition-all shadow-lg shadow-yellow-100 uppercase tracking-wider">
                সার্ভিস খুঁজুন
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-xl" alt="User" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-700 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
                <span className="text-blue-600 font-black">৫,০০০+</span> সন্তুষ্ট গ্রাহক এই মাসে
              </p>
            </div>
          </div>
        </FadeIn>

        <ScaleIn delay={0.2}>
          <div className="relative group">
            <div className="relative z-10 bg-white/30 backdrop-blur-sm rounded-[4rem] p-3 shadow-2xl border border-white/40 overflow-hidden transform group-hover:rotate-1 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Happy Family Cooling" 
                className="rounded-[3.5rem] w-full shadow-lg"
              />
              
              <div className="absolute top-8 right-8 bg-[#001A33] text-white px-4 py-2 rounded-2xl font-black text-xs shadow-xl animate-pulse flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFCE00] rounded-full"></div>
                লাইভ সাপোর্ট
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[3rem] shadow-2xl border border-blue-50 flex items-center gap-5"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
                  <Wind size={32} />
                </div>
                <div>
                  <div className="font-black text-2xl text-gray-900">সকাল ৯টা</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">প্রতিদিন শুরু</div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

const Wind = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
  </svg>
);

export default Hero;
