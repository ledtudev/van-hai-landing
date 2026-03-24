'use client'

import { motion } from 'framer-motion'

const POLICY_CARDS = [
  {
    title: 'Hỗ trợ lãi suất (HTLS) siêu linh hoạt',
    desc: 'Chủ đầu tư Vinhomes mang đến chính sách hỗ trợ tài chính giúp khách hàng giảm áp lực vốn ban đầu:',
    details: [
      'Gói vay 70%: Tùy chọn thời gian HTLS từ 18 tháng đến 36 tháng.',
      'Gói vay 80% (Dành riêng cho các căn biệt thự): Hỗ trợ tài chính tối đa với thời gian từ 18 tháng đến 36 tháng.',
    ],
    note: 'Chính sách này giúp khách hàng dễ dàng sở hữu bất động sản giá trị cao mà vẫn đảm bảo kế hoạch tài chính ổn định.',
  },
  {
    title: 'Ưu đãi thanh toán - Tối ưu dòng tiền',
    desc: 'Để phù hợp với nhiều đối tượng khách hàng, chủ đầu tư đưa ra nhiều hình thức thanh toán:',
    details: [
      'Thanh toán sớm: Chiết khấu ngay 7,5% vào giá bán.',
      'Thanh toán giãn: Linh hoạt lựa chọn, tiến độ giãn lên đến 36 tháng.',
    ],
    note: 'Nhờ đó, khách hàng có thể lựa chọn phương án phù hợp nhất với kế hoạch tài chính của mình.',
  },
  {
    title: 'Thời hạn sở hữu rõ ràng',
    desc: 'Dự án Vinhomes Làng Vân mang đến lợi thế lớn khi 92% sản phẩm được sở hữu lâu dài, bao gồm liền kề, shophouse, biệt thự, căn hộ cao cấp.',
    details: [
      'Riêng phân khu Tinh Vân – định hướng phát triển thành khu nghỉ dưỡng du lịch cao cấp – có thời hạn sở hữu 50 năm theo đúng quy định pháp luật.',
    ],
    note: 'Điều này vừa tạo sự khác biệt trong quy hoạch tổng thể, vừa mở ra tiềm năng kinh doanh dịch vụ du lịch hấp dẫn cho các nhà đầu tư.',
  },
  {
    title: 'Quà tặng định danh - Đặc quyền chủ nhân',
    desc: 'Vinhomes không chỉ bán nhà mà còn trao tặng cả một phong cách sống đẳng cấp:',
    details: [
      'Tặng Voucher Vinmec trị giá 100 triệu đồng/căn.',
      'Miễn phí Quản lý vận hành (QLVH) trong 2 năm đầu tiên.',
      'Đặc quyền VinClub với ưu đãi lên tới 0,9% tùy hạng thành viên.',
      'Cơ hội bốc thăm trúng thưởng Ô tô VinFast VF 9 ECO đẳng cấp.',
    ],
    note: 'Với phương thức thanh toán đa dạng và các gói hỗ trợ lãi suất cực tốt, Bạch Vân không chỉ là nơi an cư lý tưởng mà còn là bài toán đầu tư an toàn, đón đầu chu kỳ tăng trưởng mới của Tây Bắc Đà Nẵng.',
  },
]

const PRICING_ROWS = [
  { type: 'Căn hộ & Condotel', area: '35m² - 120m² (1PN - 3PN)', price: 'Từ 2,5 - 10 tỷ/căn', fit: 'Đầu tư nhàn rỗi, thu dòng tiền cho thuê tự động.' },
  { type: 'Nhà phố liền kề', area: '60m² - 100m²', price: 'Từ 6 - 20 tỷ/căn', fit: 'An cư gia đình, kinh doanh Homestay/Airbnb.' },
  { type: 'Shophouse thương mại', area: '80m² - 160m²', price: 'Từ 10 - 40 tỷ/căn', fit: 'Kinh doanh F&B, nhà hàng, dịch vụ đón khách 24/7.' },
  { type: 'Biệt thự Song lập', area: '140m² - 200m²', price: 'Từ 14 - 35 tỷ/căn', fit: 'Không gian sống nghỉ dưỡng cao cấp, tích sản truyền đời.' },
  { type: 'Biệt thự Đơn lập / Đồi', area: '200m² - 450m²', price: 'Từ 25 - 60 tỷ/căn', fit: 'Khẳng định vị thế thượng lưu, "Resort cá nhân" siêu VIP.' },
]

export function DetailedPolicySection() {
  return (
    <section
      className="relative bg-[#fff9f0] py-16 md:py-20 overflow-hidden font-sans border-t border-gray-100"
      id="bang-gia"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('https://vinhomeshaivanland.com/wp-content/uploads/2026/03/song.png')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Policy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {POLICY_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#4a3b32] text-white p-6 rounded-xl shadow-lg border border-white/5"
            >
              <h3 className="text-base font-bold mb-3 text-[#d4af37]">{card.title}</h3>
              <p className="text-xs text-gray-200 mb-4 leading-relaxed">{card.desc}</p>
              <ul className="space-y-2 mb-4">
                {card.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-400 italic leading-relaxed border-t border-white/10 pt-3">
                {card.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-[#5a4638] text-lg md:text-xl font-bold uppercase mb-2">
            Dưới đây là bảng giá tham khảo dự kiến cho các dòng sản phẩm:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto rounded-xl border border-gray-200 shadow-xl bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 text-[11px] font-bold uppercase text-gray-600 border-b border-gray-200">
                <th className="px-6 py-4">Loại hình sản phẩm</th>
                <th className="px-6 py-4">Diện tích điển hình</th>
                <th className="px-6 py-4">Mức giá dự kiến (F0)</th>
                <th className="px-6 py-4">Phù hợp nhu cầu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {PRICING_ROWS.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-[#0c1f38]">{row.type}</td>
                  <td className="px-6 py-4 text-gray-700">{row.area}</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">{row.price}</td>
                  <td className="px-6 py-4 text-gray-600">{row.fit}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-[11px] text-gray-500 italic mb-4">
            Lưu ý quan trọng: Bảng giá trên là mức giá Rumor dự báo từ các chuyên gia thị trường dựa
            trên định vị phân khu. Giá bán chính thức sẽ biến động tùy thuộc vào mã căn, vị thế lô
            góc, mặt đường lớn 35m hay hướng view trực diện ra biển/Suối Lương.
          </p>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">
            Với chính sách tài chính ưu việt, hỗ trợ lãi suất dài hạn, phương thức thanh toán linh
            hoạt và quyền sở hữu lâu dài cho phần lớn sản phẩm, Vinhomes Hải Vân Bay trở thành lựa
            chọn hấp dẫn cho cả khách hàng an cư và nhà đầu tư tại thị trường bất động sản biển Đà
            Nẵng.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
