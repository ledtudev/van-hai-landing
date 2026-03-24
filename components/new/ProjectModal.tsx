"use client";
import React, { useState, useEffect } from 'react';
import { X, Download, Mail, Phone, CheckSquare, Square } from 'lucide-react';

interface ProjectModalProps {
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 18 });

  // Giả lập countdown đơn giản
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev.secs > 0 ? { ...prev, secs: prev.secs - 1 } : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const files = [
    { name: "Bảng giá đợt 1 năm 2025.xls", size: "1.3MB", checked: true },
    { name: "Mặt bằng thiết kế căn hộ.pdf", size: "3.6MB", checked: false },
    { name: "Tiến_độ_thanh_toán_từng đợt.pdf", size: "1.4MB", checked: false },
    { name: "Chính sách bán hàng và vay NH.pdf", size: "1.0MB", checked: false },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-start md:items-center justify-center p-4 md:p-6 z-50">
      <div className="relative w-full max-w-5xl sm:max-w-3xl md:max-w-5xl flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-2xl border border-white/60 font-sans max-h-[calc(100vh-2rem)] overflow-y-auto">
        
        {/* Nút đóng */}
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 md:right-4 md:top-4 text-white z-10 bg-black/30 hover:bg-black/40 hover:scale-110 transition-all rounded-full p-2 backdrop-blur-sm scale-90 md:scale-100"
        >
          <X size={28} />
        </button>

        {/* PHẦN BÊN TRÁI: Ảnh & Countdown */}
        <div className="relative w-full md:w-1/2 h-[220px] md:min-h-[400px] md:h-auto">
          <img 
            src="/map2.jpg" // Ảnh thật trong `public/`
            alt="Project" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute top-3 md:top-8 left-0 right-0 px-3 md:px-4 text-center">
            <h3 className="bg-[#0056b3] text-white text-lg md:text-xl font-bold py-1.5 md:py-2 inline-block px-3 md:px-4 uppercase leading-tight shadow-sm">
              Bảng quỹ căn sản phẩm <br /> đợt 1 của chủ đầu tư
            </h3>
          </div>

          {/* Countdown Timer */}
          <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-[#0d9488]/90 py-2 md:py-4 flex justify-around text-white rounded shadow-sm">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="text-center">
                <div className="text-xl md:text-3xl font-bold">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase opacity-80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHẦN BÊN PHẢI: Form đăng ký */}
        <div className="w-full md:w-1/2 bg-[#2f2f2f] p-5 md:p-8 text-white flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-[#0056b3] text-xl md:text-2xl font-bold uppercase leading-tight">
              Tải tài liệu dự án <br /> và bảng giá mở bán đợt 1.2025
            </h2>
            <p className="mt-2 text-gray-300 text-xs md:text-sm">Cập nhật mới nhất hàng ngày</p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4 mb-6">
            <input 
              type="email" 
              placeholder="Nhập email" 
              className="w-full p-3 rounded text-gray-900 placeholder-gray-500 outline-none font-medium bg-white/10 border border-white/15 focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]/40"
            />
            <input 
              type="text" 
              placeholder="Nhập số Zalo/Số điện thoại" 
              className="w-full p-3 rounded text-gray-900 placeholder-gray-500 outline-none font-medium bg-white/10 border border-white/15 focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]/40"
            />
          </div>

          {/* Danh sách file */}
          <div className="space-y-2 mb-8 text-xs md:text-sm">
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center gap-3 cursor-pointer group">
                {file.checked ? <CheckSquare size={18} className="text-blue-400 fill-blue-400 text-white" /> : <Square size={18} />}
                <span className={`group-hover:text-blue-400 ${file.checked ? 'text-blue-400 underline' : ''}`}>
                  {file.name} ({file.size})
                </span>
              </div>
            ))}
          </div>

          {/* Nút tải xuống */}
          <button className="w-full bg-[#0056b3] hover:bg-[#004a9a] transition-colors py-3 md:py-4 rounded-md flex items-center justify-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tighter shadow-lg shadow-[#0056b3]/20">
            <Download size={28} strokeWidth={3} />
            Tải xuống ngay
          </button>

          <p className="text-center mt-6 text-xs text-gray-400 uppercase leading-relaxed">
            Bảng giá sẽ tự động gửi về <br /> email và zalo của anh chị
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;