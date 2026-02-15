
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientLogos from './components/Clients';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientLogos />

        {/* Info Grid Section - Subtle Process Section */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black text-[#001A33]">Simple Working Process</h2>
                 <p className="text-gray-500 mt-2 font-medium">How we deliver excellence to your doorstep</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="text-center space-y-4 group">
                    <div className="w-16 h-16 bg-[#F4F7FA] text-[#001A33] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFCE00] transition-colors">
                       <span className="font-black text-2xl">01</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#001A33]">Schedule Online</h4>
                    <p className="text-gray-500 font-medium">Book your service through our web app or call directly.</p>
                 </div>
                 <div className="text-center space-y-4 group">
                    <div className="w-16 h-16 bg-[#F4F7FA] text-[#001A33] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFCE00] transition-colors">
                       <span className="font-black text-2xl">02</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#001A33]">Technician Arrives</h4>
                    <p className="text-gray-500 font-medium">Expert arrives with necessary tools and original parts.</p>
                 </div>
                 <div className="text-center space-y-4 group">
                    <div className="w-16 h-16 bg-[#F4F7FA] text-[#001A33] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFCE00] transition-colors">
                       <span className="font-black text-2xl">03</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#001A33]">Fix & Relax</h4>
                    <p className="text-gray-500 font-medium">Enjoy quality service and a cool environment again.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
