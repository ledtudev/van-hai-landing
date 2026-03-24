import React from 'react';

const ProjectMap = () => {
  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Bản đồ Google Maps */}
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200 mb-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.814679397666!2d105.81062231540203!3d20.99999999413398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac90c642fc09%3A0x6a3d176e1d9c5b2!2zMjM1IMSQLiBOZ3V54buFbiBUcsOjaSwgVGjGsOG7o25nIMSQw6xuaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1647850000000!5m2!1sen!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vị trí Vinhomes Cao Xà Lá"
          ></iframe>
        </div>

        {/* Nội dung mô tả */}
        <div className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
          <p>
            <span className="font-bold">Vị trí Vinhomes Cao Xà Lá</span> hội tụ đầy đủ những yếu tố “vàng” mà bất kỳ khách hàng nào cũng mong muốn: trung tâm – kết nối – tiện ích – sinh lời. Không chỉ thuận tiện di chuyển và sinh sống, vị trí này còn là “đòn bẩy” mạnh mẽ cho giá trị đầu tư lâu dài. Trong bối cảnh quỹ đất nội đô Hà Nội ngày càng khan hiếm, việc sở hữu một căn hộ tại Vinhomes Cao Xà Lá sẽ là lựa chọn chiến lược cho cả an cư lẫn đầu tư.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectMap;