
import React from 'react';
import { FadeIn } from './MotionWrapper';

const ClientLogos: React.FC = () => {
  const logos = [
    { name: "Samsung", url: "https://picsum.photos/id/1/200/100" },
    { name: "LG Electronics", url: "https://picsum.photos/id/2/200/100" },
    { name: "Walton", url: "https://picsum.photos/id/3/200/100" },
    { name: "Singer", url: "https://picsum.photos/id/4/200/100" },
    { name: "Vision", url: "https://picsum.photos/id/5/200/100" },
    { name: "General", url: "https://picsum.photos/id/6/200/100" }
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Trusted By Organizations Across Dhaka</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-10 md:h-14 w-auto object-contain cursor-pointer hover:scale-110 transition-transform"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
