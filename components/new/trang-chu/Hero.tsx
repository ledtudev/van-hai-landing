import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* 1. Ảnh nền (Background Image) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/hero-trang-chu.jpg')",
        }}
      >
        {/* Lớp overlay mờ nếu muốn ảnh tối xuống một chút để nổi chữ */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 2. Khung nội dung (Content Box) */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-start">
        <div className="w-full md:w-3/5 lg:w-1/2 bg-white/85 backdrop-blur-sm border-[3px] border-orange-500 p-6 md:p-10 shadow-2xl">
          
          {/* Tiêu đề */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-6 uppercase tracking-tight">
            Dự án Vinhomes Cao Xà Lá
          </h2>

          {/* Đoạn văn mô tả */}
          <div className="text-gray-800 text-sm md:text-base leading-relaxed text-justify space-y-4">
            <p>
              Dự án <span className="text-blue-700 font-semibold cursor-pointer hover:underline">Vinhomes Cao Xà Lá</span> hay 
              còn gọi là Vinhomes Galaxy là đại đô thị mới được Vingroup phát triển tại vị trí đắc địa thuộc ba phường: 
              Giáp Bát, Thịnh Liệt (quận Hoàng Mai) và Thanh Xuân Trung (quận Thanh Xuân), Hà Nội. 
            </p>
            <p>
              Nằm trên khu đất từng là nhà máy Cao Su, Xà Phòng và Thuốc Lá, dự án hứa hẹn thay đổi diện mạo khu Nam Thủ đô 
              với quy mô hiện đại, tích hợp đầy đủ hệ sinh thái tiện ích Vinhomes. Vinhomes Cao Xà Lá không chỉ mang đến 
              không gian sống đẳng cấp mà còn mở ra cơ hội đầu tư hấp dẫn nhờ vị trí trung tâm và tiềm năng tăng giá mạnh mẽ.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;