import React from 'react';

export function CoolcationBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen min-h-[500px] overflow-hidden bg-[#e6f0f9]">
      
      {/* Lớp phủ gradient màu đen mờ ở cạnh trên.
        Mục đích: Nếu bạn đặt Navbar đè lên section này (như trong ảnh), 
        lớp gradient này sẽ giúp chữ của menu màu trắng nổi bật, không bị chìm vào nền trời xanh.
      */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />

      {/* Background Image Responsive */}
      <img
        src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay.jpg"
        srcSet={`
          https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay-300x200.jpg 300w,
          https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay-768x512.jpg 768w,
          https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay-1024x683.jpg 1024w,
          https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay-1536x1024.jpg 1536w,
          https://vinhomeshaivanland.com/wp-content/uploads/2026/03/Vinhomes-Hai-Van-Bay.jpg 2048w
        `}
        // Khai báo sizes để trình duyệt biết cách chọn ảnh từ srcSet
        sizes="100vw"
        alt="Xu hướng nghỉ dưỡng Coolcation Vinhomes Hải Vân Bay"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="lazy" // Thêm lazy load nếu section này không nằm ở ngay đầu trang (tránh block render)
      />

    </section>
  );
}
