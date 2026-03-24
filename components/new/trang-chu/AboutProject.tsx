const AboutProject = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề chính */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide border-b-2 border-gray-200 inline-block pb-1">
            VINHOMES CAO XÀ LÁ (VINHOMES GALAXY)
          </h2>
        </div>

        {/* Nội dung giới thiệu */}
        <div className="text-gray-700 text-sm md:text-base leading-relaxed text-justify mb-8">
          <p>
            Dự án <span className="font-semibold">Vinhomes Cao Xà Lá (Vinhomes Galaxy)</span> là tổ hợp đại đô thị đẳng cấp do Vingroup phát triển, tọa lạc trên khu đất vàng tại quận Thanh Xuân – tiếp giáp các tuyến đường lớn như Nguyễn Trãi, Giải Phóng và Vành đai 2. Dự án hứa hẹn kiến tạo một không gian sống hiện đại với đầy đủ tiện ích khép kín như trường học Vinschool, bệnh viện Vinmec, trung tâm thương mại, công viên cây xanh, hồ điều hòa... Từ Vinhomes Cao Xà Lá, cư dân dễ dàng kết nối đến trung tâm Hà Nội chỉ trong vài phút. Đây sẽ là điểm đến lý tưởng cho cuộc sống chất lượng, văn minh và bền vững.
          </p>
        </div>

        {/* Hình ảnh dự án */}
        <div className="relative w-full aspect-[16/9] shadow-lg rounded-sm overflow-hidden">
          <img 
            src="/hero-trang-chu.jpg" // Ảnh thật trong `public/`
            alt="Phối cảnh Vinhomes Cao Xà Lá"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Chú thích ảnh */}
        <p className="text-center text-xs italic text-gray-500 mt-2">
          Vinhomes Cao Xà Lá
        </p>
      </div>
    </section>
  );
};

export default AboutProject;