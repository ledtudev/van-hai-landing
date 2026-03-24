import React from 'react';
import { Facebook, Music2, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#0c1f38] pt-16 pb-8 overflow-hidden font-sans border-t border-white/5" id="lien-he">
      {/* Background Project Image (Dimmed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7592101920011_c0d183a8a46ba4b08e38d4488b4c3d56.jpg')" }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 max-w-[200px]">
            <img 
              src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/logo-vinhomes-hai-van-bay-2-1024x578.png" 
              alt="Logo Vinhomes Hải Vân Bay"
              className="w-full h-auto brightness-0 invert"
            />
          </div>

          <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">Vinhomes Hải Vân Bay</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-2xl">
            Liên hệ trực tiếp chủ đầu tư theo thông tin dưới đây.
          </p>

          <div className="text-gray-300 text-sm space-y-2 mb-8">
            <p>Địa chỉ: Vịnh Nam Chơn, chân đèo Hải Vân, liền kề biển Lăng Cô, Phường Hải Vân, Thành Phố Đà Nẵng</p>
            <p className="font-bold text-white">PKD CĐT: 0905 329 766 (Call/Zalo)</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-12">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#d4af37] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#d4af37] transition-colors">
              <Music2 className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#d4af37] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* QR and Staff Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl mb-12">
            {/* Zalo Card - Full Image with white border - Matches staff card height */}
            <div className="bg-white border-2 border-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center group cursor-pointer h-full">
              <img 
                src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/nhom-zalo-672x1024.jpg" 
                alt="Zalo QR Code"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Mr. Trương Tuấn */}
            <div className="bg-[#0c1f38] border-2 border-white rounded-lg p-2 md:p-3 shadow-lg flex flex-col items-center hover:border-[#d4af37] transition-all group">
              <div className="w-full aspect-square rounded-md overflow-hidden mb-2">
                <img 
                  src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/IMG_4513-768x512.jpg" 
                  alt="Mr. Trương Tuấn"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-white text-[10px] md:text-xs font-bold mb-1">Mr. Trương Tuấn</p>
              <p className="text-[#d4af37] text-[9px] md:text-[11px] font-bold tracking-tight">0949 999 943</p>
            </div>

            {/* Ms. Thu Quỳnh */}
            <div className="bg-[#0c1f38] border-2 border-white rounded-lg p-2 md:p-3 shadow-lg flex flex-col items-center hover:border-[#d4af37] transition-all group lg:col-span-1 md:col-span-1 col-span-2 max-w-[50%] md:max-w-full mx-auto md:mx-0">
              <div className="w-full aspect-square rounded-md overflow-hidden mb-2">
                <img 
                  src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/z7617717969085_75b6b1bba63a44ac134cb3dc3e4fcf0d-768x766.jpg" 
                  alt="Ms. Thu Quỳnh"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-white text-[10px] md:text-xs font-bold mb-1">Ms. Thu Quỳnh</p>
              <p className="text-[#d4af37] text-[9px] md:text-[11px] font-bold tracking-tight">0905 329 766</p>
            </div>
          </div>

          <p className="text-gray-500 text-[11px] border-t border-white/5 pt-8 w-full">
            Copyright @ 2026 Vinhomes Hải Vân Land
          </p>
        </div>
      </div>
    </footer>
  );
}
