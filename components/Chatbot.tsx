
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User as UserIcon } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'স্বাগতম! এসি এক্সপ্রেস সার্ভিসে যোগাযোগ করার জন্য ধন্যবাদ। আমাদের মাস্টার সার্ভিসিং ১০০০ টাকা এবং জেট ওয়াশ মাত্র ৬০০ টাকা। আমি আপনাকে কীভাবে সাহায্য করতে পারি?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getChatResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#001A33] p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFCE00] text-[#001A33] rounded-full flex items-center justify-center font-bold">
                AC
              </div>
              <div>
                <div className="font-bold text-sm">সার্ভিস অ্যাসিস্ট্যান্ট</div>
                <div className="text-[10px] opacity-80 font-bold">সকাল ৯টা - রাত ১১টা</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] md:text-[14px] leading-relaxed font-medium whitespace-pre-wrap ${
                  m.role === 'user' 
                  ? 'bg-blue-50 text-[#001A33] rounded-tr-none border border-blue-100' 
                  : 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-[#FFCE00] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#FFCE00] rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[#FFCE00] rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200 focus-within:border-[#FFCE00] transition-all focus-within:bg-white">
              <input 
                type="text" 
                placeholder="আপনার প্রশ্নটি এখানে লিখুন..." 
                className="flex-1 bg-transparent outline-none text-sm py-2 font-medium"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-[#001A33] disabled:text-gray-300 p-2 hover:text-blue-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#001A33] text-[#FFCE00] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#001224] transition-all hover:scale-105 active:scale-95 group relative border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCE00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FFCE00] border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
