import React from 'react';

const Highlights = () => {
  const highlightItems = [
    {
      title: "Vị trí trung tâm đắc địa",
      content:
        "Vinhomes Cao Xà Lá tọa lạc tại khu đất vàng trải dài qua ba quận Thanh Xuân – Đống Đa – Hai Bà Trưng, nằm sát trục đường Nguyễn Trãi – Giải Phóng. Đây là vị trí chiến lược hiếm hoi còn sót lại ở nội đô, mang lại khả năng kết nối nhanh chóng tới trung tâm hành chính, giáo dục, y tế, thương mại của Hà Nội.",
    },
    {
      title: "Quy hoạch đại đô thị đồng bộ, hiện đại",
      content:
        "Dự án được quy hoạch theo mô hình đại đô thị kiểu mẫu với hệ sinh thái sống đầy đủ: căn hộ, shophouse, trung tâm thương mại, trường học, bệnh viện, công viên cây xanh… giúp cư dân tận hưởng cuộc sống khép kín tiện nghi ngay giữa lòng Thủ đô.",
    },
    {
      title: "Chủ đầu tư uy tín – Vingroup",
      content:
        "Vingroup là “bảo chứng vàng” cho chất lượng công trình, tiến độ thi công và hệ sinh thái dịch vụ vượt trội. Những dự án trước như Vinhomes Times City, Vinhomes Royal City, Vinhomes Ocean Park… đều chứng minh năng lực và uy tín hàng đầu của Vingroup trên thị trường bất động sản.",
    },
    {
      title: "Tiềm năng tăng giá lớn",
      content:
        "Nhờ vị trí trung tâm khan hiếm quỹ đất, kết nối hạ tầng ngày càng hoàn thiện (như tuyến Metro số 2A Cát Linh – Hà Đông, Metro số 1 Yên Viên – Ngọc Hồi), Vinhomes Cao Xà Lá hứa hẹn sẽ mang lại lợi nhuận hấp dẫn cho nhà đầu tư trong tương lai.",
    },
    {
      title: "Hệ thống tiện ích đẳng cấp",
      content:
        "Dự án được trang bị đầy đủ các tiện ích nội khu như: hồ bơi, khu thể thao ngoài trời, trung tâm thương mại Vincom, trường học Vinschool, bệnh viện Vinmec… đáp ứng mọi nhu cầu sinh hoạt, giải trí và chăm sóc sức khỏe cho cư dân mọi lứa tuổi.",
    },
    {
      title: "Thiết kế căn hộ thông minh, đa dạng diện tích",
      content:
        "Các căn hộ tại Vinhomes Cao Xà Lá được thiết kế tối ưu công năng sử dụng, đón sáng tự nhiên và không khí thoáng mát. Diện tích đa dạng từ 1 đến 4 phòng ngủ, phù hợp với nhiều nhu cầu ở và đầu tư cho thuê.",
    }
  ];

  return (
    <section className="bg-[#f0e9e4] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wider">
            ĐIỂM NỔI BẬT CỦA VINHOMES CAO XÀ LÁ (VINHOMES GALAXY)
          </h2>
        </div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center mb-10 max-w-5xl mx-auto">
          Dự án Vinhomes Cao Xà Lá nổi bật với 6 điểm đáng chú ý. Thứ nhất, vị trí đắc địa tại quận Thanh Xuân, kết nối dễ dàng với các tuyến giao thông huyết mạch. Thứ hai, thiết kế hiện đại, tối ưu không gian sống với các căn hộ sang trọng, tinh tế. Thứ ba, hệ thống tiện ích đa dạng như bể bơi, phòng gym, khu vui chơi trẻ em, mang đến cuộc sống tiện nghi. Thứ tư, không gian sống xanh với các công viên cây xanh. Thứ năm, an ninh 24/7, đảm bảo sự yên tâm cho cư dân. Cuối cùng, khả năng sinh lời cao nhờ tiềm năng phát triển của khu vực.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {highlightItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;