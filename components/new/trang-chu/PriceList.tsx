import React from 'react';

const PriceList = () => {
  const priceData = [
    { type: "Căn hộ 1PN", size: "47m2 – 53 m2", price: "9,x tỷ – 10,x tỷ" },
    { type: "Căn hộ 2PN", size: "65m2 – 73m2 – 81,3m2", price: "từ 12,x tỷ – 13,x tỷ – 15,x tỷ" },
    { type: "Căn hộ 3PN", size: "99m2 – 103m2-115m2", price: "từ 15,x tỷ – 16,x tỷ – 17,x tỷ" },
    { type: "Căn hộ 4PN", size: "141m2 – 155m2", price: "từ 28,x tỷ – 30,x tỷ" },
    { type: "Căn hộ Penhouse", size: "200m2 – 315m2", price: "từ 35,x tỷ – 48,x tỷ" },
  ];

  return (
    <section className="bg-[#f2f2f2] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Tiêu đề với đường kẻ ngang mảnh (Giống mẫu image_971f00.png) */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <h2 className="px-6 text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight text-center">
            GIÁ BÁN CĂN HỘ VINHOMES CAO XÀ LÁ (VINHOMES GALAXY)
          </h2>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        {/* Nội dung phân tích giá */}
        <div className="space-y-5 text-gray-800 leading-relaxed text-justify mb-10 text-sm md:text-base">
          <p>
            Dự án Vinhomes Cao Xà Lá, tọa lạc tại vị trí vàng quận Thanh Xuân – Hà Nội, đang thu hút sự quan tâm lớn từ thị trường nhờ sở hữu hệ tiện ích toàn diện và quy hoạch đồng bộ theo chuẩn “thành phố trong lòng thành phố”. Trong bối cảnh quỹ đất nội đô ngày càng khan hiếm, <span className="text-blue-700 font-medium">giá bán Vinhomes Cao Xà Lá</span> cho các căn hộ tại đây được đánh giá là tương xứng với giá trị sống vượt trội mà cư dân sẽ được tận hưởng.
          </p>
          <p>
            Theo thông tin tổng hợp từ các nguồn tham khảo, một số phân tích thị trường cũng cho biết mức giá bán Vinhomes Cao Xà Lá có thể đạt từ <span className="font-bold">1xx-2xx triệu đồng/m² trở lên</span>, đặc biệt với những căn hộ sở hữu tầm nhìn thoáng rộng, gần công viên hoặc hồ cảnh quan.
          </p>
          <p>
            Ngoài các căn hộ tiêu chuẩn, dự án còn có những dòng sản phẩm cao cấp hơn như <span className="font-bold">penthouse, duplex và sky-villa</span>, dự kiến sẽ có mức giá cao hơn đáng kể do thiết kế sang trọng, diện tích lớn và không gian riêng biệt.
          </p>
          <p>
            Giá bán của Vinhomes Cao Xà Lá có thể thay đổi tùy từng đợt mở bán, thời điểm ra hàng và các chính sách ưu đãi đi kèm. Vingroup thường áp dụng chương trình <span className="font-bold">hỗ trợ tài chính hấp dẫn như vay ngân hàng lãi suất 0%</span>, thanh toán linh hoạt theo tiến độ, cùng nhiều ưu đãi quà tặng giá trị khi ký hợp đồng sớm.
          </p>
        </div>

        {/* Bảng giá chi tiết */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3 font-bold uppercase text-sm md:text-base w-1/3">LOẠI HÌNH</th>
                <th className="py-3 font-bold uppercase text-sm md:text-base w-1/3">DIỆN TÍCH</th>
                <th className="py-3 font-bold uppercase text-sm md:text-base w-1/3">GIÁ BÁN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {priceData.map((item, index) => (
                <tr key={index} className="hover:bg-white/50 transition-colors">
                  <td className="py-4 text-gray-700 font-medium">{item.type}</td>
                  <td className="py-4 text-gray-600">{item.size}</td>
                  <td className="py-4 text-gray-800 font-semibold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-gray-700 italic text-sm text-justify">
          Với sự đầu tư bài bản từ chủ đầu tư uy tín Vingroup, mức giá của Vinhomes Cao Xà Lá được đánh giá là phù hợp với những khách hàng đang tìm kiếm một nơi an cư lý tưởng ngay giữa lòng thủ đô, đồng thời mở ra tiềm năng sinh lời hấp dẫn cho các nhà đầu tư.
        </p>
      </div>
    </section>
  );
};

export default PriceList;