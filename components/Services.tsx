
import React from 'react';
import { Wind, Truck, Thermometer, Home, Droplets, Zap, Refrigerator, Camera, Hammer, Pipette as Pipe, Paintbrush, Monitor, Clock, Zap as Bolt, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './MotionWrapper';

const servicesList = [
  { title: "এসি সার্ভিসিং", icon: <Wind size={24} /> },
  { title: "এসি শিফটিং", icon: <Truck size={24} /> },
  { title: "এসি রিপেয়ার", icon: <Thermometer size={24} /> },
  { title: "হোম ক্লিনিং", icon: <Home size={24} /> },
  { title: "ট্যাংক ক্লিনিং", icon: <Droplets size={24} /> },
  { title: "ইলেকট্রিক্যাল", icon: <Zap size={24} /> },
  { title: "হোম অ্যাপ্লায়েন্স", icon: <Refrigerator size={24} /> },
  { title: "সিসিটিভি সার্ভিস", icon: <Camera size={24} /> },
  { title: "কার্পেন্টার", icon: <Hammer size={24} /> },
  { title: "প্লাম্বিং", icon: <Pipe size={24} /> },
  { title: "পেইন্টার", icon: <Paintbrush size={24} /> },
  { title: "আইটি সাপোর্ট", icon: <Monitor size={24} /> },
];

const promoPackages = [
  {
    name: "এসি প্রিমিয়াম মাস্টার সার্ভিসিং",
    badge: "পপুলার",
    price: "১০০০",
    tagline: "ফোম ওয়াশিং সহ সেরা সার্ভিস",
    features: [
      "কম্প্রেসার এবং ক্যাপাসিটর চেক-আপ",
      "ক্যাবিল কানেকশন চেক-আপ",
      "গ্যাস লেভেল চেক",
      "ড্রেন লাইন ক্লিন",
      "ইনডোর ও আউটডোর ক্লিনিং"
    ],
    color: "bg-[#001A33]",
    textColor: "text-white"
  },
  {
    name: "এসি জেট ওয়াশ",
    badge: "বাজেট ফ্রেন্ডলি",
    price: "৬০০",
    tagline: "সাশ্রয়ী মূল্যে গভীর পরিষ্কার",
    features: [
      "গ্যাস লেভেল চেকআপ",
      "কম্প্রেশার হেলথ চেক আপ",
      "মাইনর প্রব্লেম ফিক্সিং",
      "পুরো এসি চেক আপ"
    ],
    color: "bg-white",
    textColor: "text-[#001A33]"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-gray-100/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Special Offers Section */}
        <div id="offers" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#001A33]">আমাদের বিশেষ প্যাকেজসমূহ</h2>
            <p className="text-gray-500 mt-4 font-bold">সেরা মানের কাজ, সাশ্রয়ী মূল্যে</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {promoPackages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`${pkg.color} ${pkg.textColor} rounded-[40px] p-10 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col`}>
                  <div className="absolute top-0 right-0 bg-[#FFCE00] text-[#001A33] px-6 py-2 rounded-bl-3xl font-black text-xs uppercase">
                    {pkg.badge}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                  <p className="opacity-70 mb-6 font-bold">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-black text-[#FFCE00]">৳{pkg.price}</span>
                    <span className="text-sm opacity-60">/ প্রতি ইউনিট</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#FFCE00] shrink-0" />
                        <span className="text-sm md:text-base font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#FFCE00] text-[#001A33] py-4 rounded-2xl font-black hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-500/10">
                    এখনই বুক করুন
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#001A33] font-bold text-sm bg-yellow-50 inline-block px-6 py-2 rounded-full border border-yellow-200">
              * আউট ডোর বাহিরে থাকলে ঝুলে কাজ করতে হলে অতিরিক্ত ২০০ টাকা হ্যাংগিং চার্জ প্রযোজ্য (৪ তলা পর্যন্ত)।
            </p>
          </div>
        </div>

        {/* Regular Services Grid */}
        <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-16 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black text-[#001A33] pb-2">আমাদের অন্যান্য সার্ভিসসমূহ</h3>
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#FFCE00]"></div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#001A33] text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <Bolt size={14} className="text-[#FFCE00]" />
                এক্সপ্রেস ডেলিভারি
              </div>
              <div className="flex items-center gap-2 text-[#001A33] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <Clock size={16} className="text-[#FFCE00]" />
                সকাল ৯টা - রাত ১১টা
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
            {servicesList.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="group flex flex-col items-center cursor-pointer transition-all">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F4F7FA] rounded-2xl flex items-center justify-center text-[#001A33] mb-4 group-hover:bg-[#FFCE00] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-[11px] md:text-[12px] font-black text-[#001A33] text-center uppercase tracking-wider group-hover:text-blue-600">
                    {service.title}
                  </h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
