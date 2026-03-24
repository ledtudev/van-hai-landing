"use client";

import React, { useEffect, useState } from 'react';
import { Phone, ChevronUp } from 'lucide-react';

export function FloatingHotline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-3 md:gap-5">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0899967999"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center"
      >
        {/* Multi-layered Ripples */}
        <div className="absolute inset-0 animate-[ping_2s_linear_infinite] rounded-full bg-[#3b8edb] opacity-40"></div>
        <div className="absolute inset-0 animate-[ping_3s_linear_infinite] rounded-full bg-[#3b8edb] opacity-20 delay-700"></div>
        
        {/* Button Core */}
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#3b8edb] border-2 border-white shadow-[0_8px_30px_rgba(59,142,219,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(59,142,219,0.6)] overflow-hidden">
          <img
            src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/zalo.png"
            alt="Zalo"
            className="h-7 w-7 md:h-10 md:w-10 object-contain brightness-0 invert"
          />
        </div>
      </a>

      {/* Phone Button */}
      <a
        href="tel:0899967999"
        className="group relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center"
      >
        {/* Multi-layered Ripples */}
        <div className="absolute inset-0 animate-[ping_2s_linear_infinite] rounded-full bg-red-500 opacity-40"></div>
        <div className="absolute inset-0 animate-[ping_3s_linear_infinite] rounded-full bg-red-500 opacity-20 delay-1000"></div>

        {/* Button Core */}
        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-red-600 border-2 border-white text-white shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(220,38,38,0.6)]">
          <Phone className="h-6 w-6 md:h-8 md:w-8 fill-current" />
        </div>
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#0c1f38] text-white shadow-xl transition-all duration-300 hover:bg-[#d4af37] hover:scale-110 active:scale-95 border border-white/10"
        >
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}
    </div>
  );
}
