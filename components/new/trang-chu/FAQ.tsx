"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Mặc định mở câu đầu tiên

  const faqs = [
    {
      question: "Dự án có mấy tầng hầm?",
      answer: "Dự án có 5 tòa và 3 tầng hầm thông đế nhau."
    },
    {
      question: "Phí quản lý dịch vụ là bao nhiêu?",
      answer: "Thông tin về phí quản lý sẽ được chủ đầu tư công bố chính thức tại thời điểm bàn giao căn hộ."
    },
    {
      question: "Có đủ chỗ để xe ô tô không?",
      answer: "Với 3 tầng hầm thông nhau trên toàn bộ diện tích đất, dự án đảm bảo đáp ứng đầy đủ nhu cầu đỗ xe của cư dân."
    },
    {
      question: "Dự án sở hữu 50 năm hay lâu dài",
      answer: "Các căn hộ chung cư tại dự án có hình thức sở hữu sổ hồng lâu dài đối với người Việt Nam."
    },
    {
      question: "Có miễn phí bể bơi ngoài trời và phòng tập gym không?",
      answer: "Sẽ được thông báo chung trong thời gian nhận nhà."
    },
    {
      question: "Dự án có hỗ trợ gói vay lãi suất 0% không?",
      answer: "Chủ đầu tư thường xuyên có các chính sách hỗ trợ lãi suất 0% trong 12-24 tháng tùy từng đợt mở bán."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Tiêu đề với đường kẻ ngang mảnh */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-grow h-[1px] bg-gray-200"></div>
          <h2 className="px-6 text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight text-center">
            CÁC CÂU HỎI VỀ VINHOMES CAO XÀ LÁ
          </h2>
          <div className="flex-grow h-[1px] bg-gray-200"></div>
        </div>

        {/* Danh sách FAQ chia 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-12 items-start">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 md:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center py-4 px-4 text-left transition-all ${
                  openIndex === index ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-800 font-medium'
                }`}
              >
                <div className="flex items-center gap-2">
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  <span className="text-sm md:text-base">{faq.question}</span>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-10 py-4 text-gray-700 text-sm md:text-base leading-relaxed bg-white border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phần lưu ý màu xanh phía dưới */}
        <div className="bg-[#7fb4b4] p-6 rounded-sm text-gray-900 leading-relaxed text-sm md:text-base text-justify">
          <p>
            <span className="font-bold underline">Lưu ý:</span> Trên đây là thông tin chưa chính thức về <span className="font-bold">Vinhomes Cao Xà Lá</span>. Thông tin sẽ được cập nhật liên tục về giá bán cũng như tiến độ xây dựng lên trang website này. Để được tư vấn chuyên sâu về thông tin dự án, giá bán và chính sách bán hàng, quý khách hàng hãy vui lòng liên hệ với Phòng Kinh doanh theo Hotline trên website hoặc tải thông tin theo đường link dưới đây để nhận tài liệu cập nhật thông tin mới nhất chính thức từ Chủ đầu tư.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;