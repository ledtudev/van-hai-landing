/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// Dữ liệu 4 phân khu
const zonesData = [
  {
    title: 'PHÂN KHU 1 - BẠCH VÂN',
    subtitle: 'HỒNG KÔNG - CHÂU Á',
    total: '2.524 căn',
    products: [
      '1.696 Liền Kề từ 63 - 65 - 70m²',
      '828 Biệt thự Song lập & Đơn lập',
      '15 tòa cao tầng'
    ],
    amenities: 'Tổ hợp vui chơi giải trí Lifestyle, sân tập golf, rạp chiếu phim, công viên Peninsula Park...'
  },
  {
    title: 'PHÂN KHU 2 - VỊNH MÂY',
    subtitle: 'PHONG CÁCH MALIBU',
    total: '690 căn',
    products: [
      '261 Liền Kề',
      '429 Biệt thự sườn đồi'
    ],
    amenities: 'Nhà hàng Panorama Oceania Clubhouse, Ga Tàu Railway Station, công viên vui chơi gia đình Palm Garden, Malibu Wellness...'
  },
  {
    title: 'PHÂN KHU 3 - ĐẢO NGỌC',
    subtitle: 'PHONG CÁCH COSTA SMERALDA Ý',
    total: '2.376 căn',
    products: [
      'Liền kế: 1.349 căn',
      'Biệt thự: 1.027 căn'
    ],
    amenities: 'Quần thể công viên thế giới Bách Thảo, Công viên đảo ngọc, VinWonders Hải Vân 24,8 ha, Resort luxury 5 sao...'
  },
  {
    title: 'PHÂN KHU 4 - TINH VÂN',
    subtitle: 'PHONG CÁCH NHẬT BẢN',
    total: '205 căn',
    products: [
      'Biệt Thự ở có khoáng nóng dẫn về từng căn & 404 Biệt thự nghỉ dưỡng 50 năm'
    ],
    amenities: 'Khu khoáng nóng Onsen, vườn sức khỏe, vườn thư giãn...'
  }
];

// Component Card hiển thị thông tin từng phân khu
const ZoneCard = ({ zone }: { zone: typeof zonesData[0] }) => (
  <div className="bg-[#0c1f38] rounded-xl p-6 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-[#d4af37]">
    {/* Tiêu đề */}
    <div className="mb-4">
      <h3 className="font-bold text-[15px] leading-snug">{zone.title}</h3>
      <h4 className="font-bold text-[15px] leading-snug">{zone.subtitle}</h4>
    </div>
    
    {/* Tổng sản phẩm */}
    <p className="font-bold text-sm mb-4">
      Tổng sản phẩm: <span className="font-normal">{zone.total}</span>
    </p>

    {/* Danh sách sản phẩm chi tiết */}
    <ul className="space-y-3 mb-4">
      {zone.products.map((item, idx) => (
        <li key={idx} className="flex gap-2 items-start text-sm text-gray-200">
          <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* Tiện ích */}
    <p className="text-sm text-gray-300 leading-relaxed mt-4 pt-4 border-t border-white/10">
      <strong className="text-white">Tiện ích:</strong> {zone.amenities}
    </p>
  </div>
);

export function MasterplanSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden font-sans" id="mat-bang">
      
      {/* Lớp nền pattern (các đường vân) - Đồng bộ với các phần khác */}
      <div 
        className="absolute bottom-0 inset-x-0 h-[60%] bg-center bg-no-repeat bg-cover opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')" }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* =======================
            TIÊU ĐỀ & MÔ TẢ 1
        ======================= */}
        <h2 className="text-[#0c1f38] text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 uppercase">
          <span className="font-light text-[#0c1f38]">|</span> MẶT BẰNG DỰ ÁN VINHOMES HẢI VÂN BAY
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          Mặt bằng tổng thể của <strong className="text-[#0c1f38]">Vinhomes Hải Vân Bay</strong> được quy hoạch trên diện tích khoảng <strong className="text-[#0c1f38]">512 ha</strong>, với mật độ xây dựng thấp chỉ khoảng <strong className="text-[#0c1f38]">19,8%</strong>, phần lớn diện tích dành cho cảnh quan xanh, hồ nước và tiện ích công cộng. Dự án được thiết kế theo triết lý "tựa sơn hướng thủy", tận dụng địa hình tự nhiên dưới chân <strong className="text-[#0c1f38]">Đèo Hải Vân</strong>, mang đến không gian sống hài hòa giữa thiên nhiên núi – biển và hệ thống tiện ích hiện đại.
        </p>

        {/* =======================
            ẢNH BẢN ĐỒ TỔNG THỂ
        ======================= */}
        <div className="w-full rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-200 bg-gray-50">
          <img 
            src="https://vinhomeshaivanland.com/wp-content/uploads/2026/03/mat-bang-tien-ich-1024x725.jpg" 
            alt="Mặt bằng tổng thể dự án Vinhomes Hải Vân Bay"
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
          />
        </div>

        {/* =======================
            MÔ TẢ 2
        ======================= */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
          Theo quy hoạch, dự án được chia thành <strong className="text-[#0c1f38]">4 phân khu chính</strong> với phong cách kiến trúc và chức năng riêng biệt như khu đô thị ở, biệt thự nghỉ dưỡng, khu thương mại dịch vụ và khu khách sạn – resort cao cấp. Các phân khu tiêu biểu gồm <strong className="text-[#0c1f38]">Bạch Vân, Vịnh Mây, Đảo Ngọc và Tinh Vân</strong>, bố trí dọc theo vịnh biển và các trục cảnh quan trung tâm, giúp tối ưu tầm nhìn biển, núi và không gian sinh thái. Quy hoạch này tạo nên một "thành phố nghỉ dưỡng" khép kín, nơi cư dân có thể sống, nghỉ dưỡng và đầu tư ngay trong lòng thiên nhiên của <strong className="text-[#0c1f38]">Đà Nẵng</strong>.
        </p>

        {/* =======================
            GRID 4 PHÂN KHU (CARDS)
        ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonesData.map((zone, index) => (
            <ZoneCard key={index} zone={zone} />
          ))}
        </div>

      </div>
    </section>
  );
}
